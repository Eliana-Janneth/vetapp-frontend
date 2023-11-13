<script setup lang="ts">
import { VButton, VCheckbox, VLoader, VTextField } from '@elements';
import * as yup from 'yup';
import type { TAcademicInformation } from '@/types';
import { useForm } from 'vee-validate';
import { vetappApi, TAcademicInformationPayload } from '@/services';

const emit = defineEmits(['end']);

const validationSchema = yup.object({
    title: yup.string().required('Por favor ingrese un título'),
    university: yup.string().required('Por favor ingrese una universidad'),
    year: yup.string().required('Por favor ingrese un año'),
    country: yup.string().required('Por favor ingrese un país'),
    academicDegree: yup.string().required('Por favor ingrese un grado académico'),
});

const { handleSubmit, isSubmitting } = useForm<TAcademicInformation>({
    validationSchema,
});

const onSubmit = handleSubmit(async (values: TAcademicInformation) => {
    try {
        if (!values.currentlyStudying) values.currentlyStudying = false;
        const payload: TAcademicInformationPayload = {
            title: values.title,
            university: values.university,
            year: values.year,
            country: values.country,
            academic_degree: values.academicDegree,
            currently: values.currentlyStudying,
        };

        await vetappApi.createAcademicInformation(payload);
        emit('end');
        window.location.reload();
        
    } catch (error) {}
});
</script>
<template>
    <form @submit="onSubmit" class="grid grid-cols-1 gap-4 sm:grid-cols-6">
        <VTextField
            containerClass="sm:col-span-3"
            name="title"
            label="Titúlo Universitario"
            placeholder="Escribe tu titúlo universitario"
        />
        <VTextField
            containerClass="sm:col-span-3"
            name="university"
            label="Universidad"
            placeholder="Universidad en la que estudiaste"
        />

        <VTextField containerClass="sm:col-span-2" name="year" label="Fecha de inicio" type="date" :maxlength="4" />
        <VTextField
            containerClass="sm:col-span-2"
            name="country"
            label="País"
            placeholder="País en el que estudiaste"
            :maxlength="60"
        />
        <VTextField
            containerClass="sm:col-span-2"
            name="academicDegree"
            label="Grado académico"
            placeholder="Grado académico"
            :maxlength="60"
        />

        <VCheckbox class="w-2 sm:col-span-6" name="currentlyStudying" label="¿Estudiando actualmente?" />

        <VButton class="w-full sm:col-span-3" @click="$emit('end')" label="Cancelar" variant="danger" />
        <VButton class="w-full sm:col-span-3" type="submit" variant="success">
            <div v-if="isSubmitting" class="flex items-center gap-2">
                <VLoader class="h-6" />
                <span>Enviando</span>
            </div>
            <template v-else> Guardar </template>
        </VButton>
    </form>
</template>
