<script setup lang="ts">
import { VTextArea, VButton, VSelect } from '@elements';
import { ref, onMounted } from 'vue';
import { TRegisterFarmerRequestPayload, vetappApi } from '@/services';
import type { TRegisterFarmerRequest } from '@/types';
import * as yup from 'yup';
import { useForm } from 'vee-validate';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

const props = defineProps<{
    idVet: string;
}>();

const validationSchema = yup.object({
    animal: yup.string().required(t('FarmPage.valconsulanimal')),
    message: yup.string().required(t('FarmPage.valwritesol2')),
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
            :label="t('FarmPage.writesol')"
            name="message"
            placeholder="Escribe el motivo por el cual quieres realizar una consulta con el veterinario"
        />
        <VSelect
            containerClass="sm:col-span-8"
            placeholder="Seleccione el animal"
            name="animal"
            :label="t('FarmPage.consulanimal')"
            :options="animals"
        />
        <VButton class="w-full sm:col-span-4" @click="$emit('end')" :label="t('VetPage.cancel')" variant="danger" />
        <VButton class="w-full sm:col-span-4" type="submit" variant="success">
            <div v-if="isSubmitting" class="flex items-center gap-2">
                <VLoader class="h-6" />
                <span>{{ $t("VetPage.send") }}</span>
            </div>
            <template v-else>{{ $t("FarmPage.sendsol") }}</template>
        </VButton>
    </form>
</template>
