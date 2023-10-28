<script setup lang="ts">
import {VButton, VInput} from '@elements';
import { reactive } from 'vue';
import * as yup from 'yup';
import type { TAcademicInformation } from './types';
import { useForm } from 'vee-validate';
import { vetappApi, TAcademicInformationPayload } from '@/services';
import ShowInformationAcademic from './ShowInformationAcademic.vue';

const values: TAcademicInformationPayload = reactive({
    title: '',
    university: '',
    year: '',
    country: '',
    academic_degree: '',
    currently_studying: false,
    currently: '',
});

const validationSchema = yup.object({
    title: yup.string().required('Por favor ingrese un título'),
    university: yup.string().required('Por favor ingrese una universidad'),
    year: yup.string().required('Por favor ingrese un año'),
    country: yup.string().required('Por favor ingrese un país'),
    academicDegree: yup.string().required('Por favor ingrese un grado académico'),
});

const { defineComponentBinds, errors, handleSubmit } = useForm<TAcademicInformation>({
    validationSchema,
});

const title = defineComponentBinds('title');
const university = defineComponentBinds('university');
const year = defineComponentBinds('year');
const country = defineComponentBinds('country');
const academicDegree = defineComponentBinds('academicDegree');
const currentlystudying = defineComponentBinds('currentlystudying');

const onSubmit = handleSubmit(async (academicValues: TAcademicInformation) => {
    console.log(JSON.stringify(academicValues));
    try {
        values.title = academicValues.title;
        values.university = academicValues.university;
        values.year = academicValues.year;
        values.country = academicValues.country;
        values.academic_degree = academicValues.academicDegree;
        values.currently_studying = academicValues.currentlystudying;

        await vetappApi.createAcademicInformation(values);
    } catch (error) {}
});
</script>
<template>
    <ShowInformationAcademic />
    <form class="mx-auto flex w-full flex-col items-center gap-4 rounded-lg bg-sky-100/70 p-10" @submit="onSubmit">
        <div class="flex w-full flex-col justify-between gap-4 lg:flex-row lg:gap-10">
            <VInput
                v-bind="title"
                label="Titúlo Universitario"
                placeholder="Escribe tu titúlo universitario"
                name="title"
                :maxlength="60"
                :error="errors.title"
            />
            <VInput
                v-bind="university"
                label="Universidad"
                placeholder="Universidad en la que estudiaste"
                name="university"
                :maxlength="60"
                :error="errors.university"
            />
        </div>
        <div class="flex w-full flex-col justify-between gap-4 lg:flex-row lg:gap-10">
            <VInput v-bind="year" label="Fecha de inicio" type="date" :maxlength="4" :error="errors.year" />
            <VInput
                v-bind="country"
                label="País"
                placeholder="País en el que estudiaste"
                name="country"
                :maxlength="60"
                :error="errors.country"
            />
            <VInput
                v-bind="academicDegree"
                label="Grado académico"
                placeholder="Grado académico"
                name="academic_degree"
                :maxlength="60"
                :error="errors.academicDegree"
            />
        </div>
        <div class="flex w-full flex-col justify-between gap-4 lg:flex-row lg:gap-10">
            <VInput
                v-bind="currentlystudying"
                label="¿Estás estudiando actualmente?"
                name="currently_studying"
                type="checkbox"
                custom-class=" w-min"
                model-value="true"
            />
        </div>
        <VButton label="Guardar" type="submit" variant="vet" class="mx-auto w-1/2" />
    </form>
</template>
