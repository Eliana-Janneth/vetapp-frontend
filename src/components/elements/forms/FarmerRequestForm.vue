<script setup lang="ts">
import { VTextArea, VButton, VSelect } from '@elements';
import { ref, onMounted, reactive } from 'vue';
import { TRegisterFarmerRequestPayload, vetappApi } from '@/services';
import type { TRegisterFarmerRequest } from '@/types';
import * as yup from 'yup';
import { useForm } from 'vee-validate';

const props = defineProps<{
    idVet: string;
}>();

const values: TRegisterFarmerRequestPayload = reactive({
    animal: '',
    message: '',
    veterinarian: '',
});

const validationSchema = yup.object({
    animal: yup.string().required('Por favor seleccione un animal'),
    message: yup.string().required('Por favor ingrese un mensaje'),
});

const { defineComponentBinds, errors, handleSubmit, isSubmitting } = useForm<TRegisterFarmerRequest>({
    validationSchema,
});

const animals = ref<{ text: string; value: string }[]>([]);

const animal = defineComponentBinds('animal');
const message = defineComponentBinds('message');

onMounted(async () => {
    try {
        const response = await vetappApi.getAnimalsRequest();
        animals.value = response;
        console.log(animals.value);
    } catch (error) {
        console.error('Error al cargar los datos:');
    }
});

const onSubmit = handleSubmit(async (registerValues: TRegisterFarmerRequest) => {
    try {
        values.animal = registerValues.animal;
        values.message = registerValues.message;
        values.veterinarian = props.idVet;
        await vetappApi.createFarmerRequest(values);
        
    } catch (error) {
        console.error('Error al enviar la solicitud:', error);
    }
    //TODO:colocar aqui
    //emit('end');
});
</script>

<template>
    <div class="flex justify-center p-6">
        <form class="flex w-96 flex-col items-center gap-4" @submit="onSubmit">
            <VTextArea
                v-bind="message"
                label="Escribir mensaje"
                placeholder="Escribe el motivo por el cual quieres realizar una consulta con el veterinario"
            />
            <VSelect
                v-bind="animal"
                placeholder="Seleccione el animal"
                label="Animal a consultar"
                :options="animals"
                :error="errors.animal"
            />
            <div class="flex justify-between gap-4">
                <VButton class="" @click="$emit('end')" label="Cancelar" variant="danger" />
                <VButton class="" type="submit" variant="success">
                    <div v-if="isSubmitting" class="flex items-center gap-2">
                        <VLoader class="h-6" />
                        <span>Enviando</span>
                    </div>
                    <template v-else> Enviar Solicitud </template>
                </VButton>
            </div>
        </form>
    </div>
</template>
