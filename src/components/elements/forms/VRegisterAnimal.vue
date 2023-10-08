<script setup lang="ts">
import { ref, onMounted, watch, reactive } from 'vue';
import { VInput, VSelect, VTextArea } from '@elements';
import { useForm } from 'vee-validate';
import { TRegisterAnimalPayload, vetappApi } from '@/services';
import type { TRegisterAnimal } from './types';
import * as yup from 'yup';

const values: TRegisterAnimalPayload = reactive({
    name: '',
    birth_date: '',
    color: '',
    description: '',
    gender: '',
    height: '',
    weight: '',
    race: '',
    specie: '',
});

const validationSchema = yup.object({
    name: yup.string().required('Por favor ingrese un nombre').min(3, 'El nombre debe tener al menos 3 caracteres'),
    specie: yup.string().required('Por favor seleccione una especie'),
    race: yup.string().required('Por favor seleecione una raza'),
    birthdate: yup.string().required('Por favor ingrese una fecha de nacimiento'),
    weight: yup.number().required('Por favor ingrese un peso'),
    height: yup.number().required('Por favor ingrese una altura'),
    color: yup.string().required('Por favor ingrese un color'),
    description: yup.string().required('Por favor ingrese una descripción'),
    gender: yup.string().required('Por favor seleccione un género'),
});

const { defineComponentBinds, errors, meta, handleSubmit } = useForm<TRegisterAnimal>({
    validationSchema,
});
let species = ref<{ text: string; value: string }[]>([]);
let races = ref<{ text: string; value: string }[]>([]);
let selectedSpeciesId = ref('');

const name = defineComponentBinds('name');
const specie = defineComponentBinds('specie');
const race = defineComponentBinds('race');
const gender = defineComponentBinds('gender');
const birthdate = defineComponentBinds('birthdate');
const weight = defineComponentBinds('weight');
const height = defineComponentBinds('height');
const color = defineComponentBinds('color');
const description = defineComponentBinds('description');

onMounted(async () => {
    try {
        species.value = await vetappApi.getSpecies();
        console.log(species);
    } catch (error) {
        console.error('Error al cargar los datos:', error);
    }
});
const loadRaces = async (specieId: string) => {
    try {
        // Utiliza speciesId para obtener las razas de esa especie
        console.log('entre a raza');
        races.value = await vetappApi.getRaces(specieId);
        console.log('id', specieId);
        console.log(races.value);
    } catch (error) {
        console.error('Error al cargar las razas:', error);
    }
};

watch(selectedSpeciesId, (newSpeciesId: string) => {
    if (newSpeciesId !== null) {
        console.log('estoy cargando id');
        loadRaces(newSpeciesId);
    } else {
        // Limpia la lista de razas si no hay una especie seleccionada
        races.value = [];
    }
});

const onSubmit = handleSubmit(async (registerValues: TRegisterAnimal) => {
    try {
        values.name = registerValues.name;
        values.birth_date = registerValues.birthdate;
        values.color = registerValues.color;
        values.description = registerValues.description;
        values.gender = registerValues.gender;
        values.height = registerValues.height;
        values.race = registerValues.race;
        values.specie = registerValues.specie;
        values.weight = registerValues.weight;

        await vetappApi.createAnimal(values);
        console.log(JSON.stringify(values, null, 2));
    } catch (error) {
        //  errorMessage.value = error.message;
    }
});
</script>

<template>
    <form class="flex flex-col gap-2 p-2" @submit="onSubmit">
        <div class="flex flex-col gap-2 lg:flex-row">
            <VInput
                v-bind="name"
                variant="farmer"
                label="Nombre"
                placeholder="Escribe su nombre"
                type="text"
                name="name"
                :error="errors.name"
            />
            <VSelect
                v-bind="specie"
                variant="farmer"
                custom-class="form-farmer"
                placeholder="Seleccione la especie"
                label="Especie"
                name="specie"
                :options="species"
                :error="errors.specie"
                @update:modelValue="loadRaces"
            />

            <VSelect
                v-bind="race"
                custom-class="form-farmer"
                variant="farmer"
                label="Raza"
                name="race"
                placeholder="Seleccione la raza"
                :options="races"
                :error="errors.race"
            />
        </div>
        <div class="flex flex-col gap-2 lg:flex-row">
            <span class="block text-lg font-medium text-emerald-800">Género</span>
            <VInput
                v-bind="gender"
                custom-class="w-min"
                variant="farmer"
                label="Macho"
                type="radio"
                name="gender"
                model-value="Macho"
                :error="errors.gender"
            />
            <VInput
                v-bind="gender"
                custom-class="w-min"
                variant="farmer"
                label="Hembra"
                type="radio"
                name="gender"
                model-value="Hembra"
                :error="errors.gender"
            />
            <VInput
                v-bind="birthdate"
                variant="farmer"
                label="Fecha de Nacimiento"
                placeholder="Escribe su nombre"
                type="date"
                name="birthdate"
                :error="errors.birthdate"
            />
            <VInput
                v-bind="weight"
                variant="farmer"
                label="Peso"
                placeholder="Ingresa su peso actual"
                type="text"
                name="weight"
                :error="errors.weight"
            />
            <VInput
                v-bind="height"
                variant="farmer"
                label="Altura"
                placeholder="Ingresa su altura"
                type="text"
                name="height"
                :error="errors.height"
            />
        </div>
        <div class="flex flex-col gap-2 lg:flex-row">
            <VTextArea
                v-bind="color"
                variant="farmer"
                label="Color"
                placeholder="Describe su aspecto fisico"
                name="color"
                :error="errors.color"
            />
            <VTextArea
                v-bind="description"
                variant="farmer"
                label="Descripción"
                placeholder="Describe alguna caracteristica importante"
                name="description"
                :error="errors.description"
            />
        </div>

        <div class="flex w-full justify-center gap-4">
            <button
                :disabled="!meta.valid"
                type="submit"
                :class="['btn form-button-farmer ', !meta.valid && 'pointer-events-none opacity-50']"
            >
                Guardar
            </button>
            <router-link :to="{ name: '' }" class="btn form-button-farmer">Cancelar</router-link>
        </div>
    </form>
</template>
