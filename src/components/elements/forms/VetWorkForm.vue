<script setup lang="ts">
import {VButton, VTextField, VCheckbox,VLoader } from '@elements';
import * as yup from 'yup';
import type { TWorkExperience } from '@/types';
import { useForm } from 'vee-validate';
import { vetappApi, TWorkExperiencePayload } from '@/services';

const emit = defineEmits(['end']);

const validationSchema = yup.object({
    position: yup.string().required('Por favor ingrese un título'),
    company: yup.string().required('Por favor ingrese una empresa'),
    functions: yup.string().required('Por favor ingrese las funciones desempeñadas'),
    startDate: yup.string().required('Por favor ingrese una fecha de inicio'),
    endDate: yup.string().required('Por favor ingrese una fecha de finalización'),
    country: yup.string().required('Por favor ingrese un país'),
});

const { handleSubmit, isSubmitting} = useForm<TWorkExperience>({
    validationSchema,
});

const onSubmit = handleSubmit(async (values: TWorkExperience) => {
    try {
        const payload: TWorkExperiencePayload = {
            title: values.position,
            company: values.company,
            functions: values.functions,
            start_date: values.startDate,
            end_date: values.endDate,
            country: values.country,
            currently: values.currentlyWorking,
        };
        await vetappApi.createWorkExperiencie(payload);
        emit('end');
    } catch (error) {}
});
</script>
<template>
    <ShowWorkExperience />
    <form @submit="onSubmit" class="grid grid-cols-1 gap-4 sm:grid-cols-6">
        <VTextField containerClass="sm:col-span-3" name="position" label="Cargo" placeholder="Cargo que desempeñaste" />

        <VTextField
            containerClass="sm:col-span-3"
            name="company"
            label="Empresa"
            placeholder="Lugar donde trabajaste"
        />
        <VTextField
            containerClass="sm:col-span-2"
            name="startDate"
            label="Fecha de inicio"
            type="date"
            :maxlength="4"
        />
        <VTextField
            containerClass="sm:col-span-2"
            name="endDate"
            label="Fecha de finalización"
            type="date"
            :maxlength="4"
        />
        <VTextField
            containerClass="sm:col-span-2"
            name="country"
            label="País"
            placeholder="País en el que trabajaste"
            :maxlength="60"
        />
        <VTextField
            containerClass="sm:col-span-6"
            name="functions"
            label="Funciones Desempeñadas"
            placeholder="Ingresa las funciones que realizaste en el cargo"
            :maxlength="500"
        />
        <VCheckbox class="sm:col-span-6" name="currentlyWorking" label="¿Estás trabajando actualmente?" />
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
