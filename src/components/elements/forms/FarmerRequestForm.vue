<script setup lang="ts">
import { VTextArea, VButton, VSelect } from '@elements';
import { ref, onMounted } from 'vue';
import { TRegisterFarmerRequestPayload, vetappApi } from '@/services';
import type { TRegisterFarmerRequest } from '@/types';
import * as yup from 'yup';
import { useForm } from 'vee-validate';

const props = defineProps<{
    idVet: string;
}>();

const validationSchema = yup.object({
    animal: yup.string().required('Por favor seleccione un animal'),
    message: yup.string().required('Por favor ingrese un mensaje'),
});

const { handleSubmit, isSubmitting } = useForm<TRegisterFarmerRequest>({
    validationSchema,
});

const animals = ref<{ text: string; value: string }[]>([]);

onMounted(async () => {
    const response = await vetappApi.getAnimalsRequest();
    animals.value = response;
});

const onSubmit = handleSubmit(async (values: TRegisterFarmerRequest) => {
    try {
        const payload: TRegisterFarmerRequestPayload = {
            animal: values.animal,
            message: values.message,
            veterinarian: props.idVet,
        };

        await vetappApi.createFarmerRequest(payload);
    } catch (error) {
        console.error('Error al enviar la solicitud:', error);
    }
    //TODO:colocar aqui
    //emit('end');
});
</script>

<template>
    <form class="grid grid-cols-1 gap-4 sm:grid-cols-8" @submit="onSubmit">
        <VTextArea
            containerClass="sm:col-span-8"
            label="Escribir mensaje"
            name="message"
            placeholder="Escribe el motivo por el cual quieres realizar una consulta con el veterinario"
        />
        <VSelect
            containerClass="sm:col-span-8"
            placeholder="Seleccione el animal"
            name="animal"
            label="Animal a consultar"
            :options="animals"
        />
        <VButton class="w-full sm:col-span-3" @click="$emit('end')" label="Cancelar" variant="danger" />
        <VButton class="w-full sm:col-span-3" type="submit" variant="success">
            <div v-if="isSubmitting" class="flex items-center gap-2">
                <VLoader class="h-6" />
                <span>Enviando</span>
            </div>
            <template v-else> Enviar Solicitud </template>
        </VButton>
    </form>
</template>
