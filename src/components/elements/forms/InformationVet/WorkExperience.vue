<script setup lang="ts">
import VInput from '../../VInput.vue';
import VTextArea from '../../VTextArea.vue';
import VButton from '../../VButton.vue';
import { reactive } from 'vue';
import * as yup from 'yup';
import type { TWorkExperience } from './types';
import { useForm } from 'vee-validate';
import { vetappApi, TWorkExperiencePayload } from '@/services';
import ShowWorkExperience from './ShowWorkExperience.vue';

const values: TWorkExperiencePayload = reactive({
    title: '',
    company: '',
    functions: '',
    start_date: '',
    end_date: '',
    country: '',
    currently_working: false,
});

const validationSchema = yup.object({
    position: yup.string().required('Por favor ingrese un título'),
    company: yup.string().required('Por favor ingrese una empresa'),
    functions: yup.string().required('Por favor ingrese las funciones desempeñadas'),
    startDate: yup.string().required('Por favor ingrese una fecha de inicio'),
    endDate: yup.string().required('Por favor ingrese una fecha de finalización'),
    country: yup.string().required('Por favor ingrese un país'),
});

const { defineComponentBinds, errors, handleSubmit } = useForm<TWorkExperience>({
    validationSchema,
});

const position = defineComponentBinds('position');
const company = defineComponentBinds('company');
const functions = defineComponentBinds('functions');
const startDate = defineComponentBinds('startDate');
const endDate = defineComponentBinds('endDate');
const country = defineComponentBinds('country');
const currentlyWorking = defineComponentBinds('currentlyWorking');

const onSubmit = handleSubmit(async (workExperienceValues: TWorkExperience) => {
    console.log('hola');
    console.log(JSON.stringify(workExperienceValues));

    try {
        values.title = workExperienceValues.position;
        values.company = workExperienceValues.company;
        values.functions = workExperienceValues.functions;
        values.start_date = workExperienceValues.startDate;
        values.end_date = workExperienceValues.endDate;
        values.country = workExperienceValues.country;
        values.currently_working = workExperienceValues.currentlyWorking;

        await vetappApi.createWorkExperiencie(values);
    } catch (error) {}
    console.log(currentlyWorking.value);
});
</script>
<template>
    <ShowWorkExperience />
    <form class="mx-auto flex w-full flex-col items-center gap-4 rounded-lg bg-sky-100/70 p-10" @submit="onSubmit">
        <div class="flex w-full flex-col justify-between gap-4 lg:flex-row lg:gap-10">
            <VInput
                v-bind="position"
                label="Cargo"
                placeholder="Cargo que desempeñaste"
                name="position"
                :maxlength="60"
                :error="errors.position"
            />
            <VInput
                v-bind="company"
                label="Empresa"
                placeholder="Lugar donde trabajaste"
                name="company"
                :maxlength="60"
                :error="errors.company"
            />
        </div>
        <div class="flex w-full flex-col justify-between gap-4 lg:flex-row lg:gap-10">
            <VTextArea
                v-bind="functions"
                label="Funciones Desempeñadas"
                placeholder="Ingresa las funciones que realizaste en el cargo"
                name="functions"
                :maxlength="500"
                :error="errors.functions"
            />
        </div>
        <div class="flex w-full flex-col justify-between gap-4 lg:flex-row lg:gap-10">
            <VInput v-bind="startDate" label="Fecha de Inicio" name="startDate" type="date" :error="errors.startDate" />
            <VInput v-bind="endDate" label="Fecha de Finalización" name="endDate" type="date" :error="errors.endDate" />
            <VInput
                v-bind="country"
                label="País"
                placeholder="País en el que trabajaste"
                name="country"
                :maxlength="60"
                :error="errors.country"
            />
        </div>
        <div class="flex w-full flex-col justify-between gap-4 lg:flex-row lg:gap-10">
            <VInput
                v-bind="currentlyWorking"
                label="¿Estás trabajando actualmente?"
                name="currentlyWorking"
                type="checkbox"
                custom-class="w-min"
                model-value="true"
            />
        </div>
        <VButton label="Guardar" type="submit" class="mx-auto w-1/2" />
    </form>
</template>
