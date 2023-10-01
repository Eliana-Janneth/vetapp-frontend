<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { VButton, VInput, VSelect, VTextArea } from '@elements';
import { useForm } from 'vee-validate';
import { TRegisterAnimalPayload, vetappApi } from '@/services';
import * as yup from 'yup';
    
const validationSchema = yup.object({
    name: yup.string().required('Por favor ingrese un nombre').min(3, 'El nombre debe tener al menos 3 caracteres'),
    specie: yup.string().required('Por favor seleccione una especie'),
    race: yup.string().required('Por favor seleecione una raza'),
    birtdate: yup.string().required('Por favor ingrese una fecha de nacimiento'),
    weight: yup.number().required('Por favor ingrese un peso'),
    higth: yup.number().required('Por favor ingrese una altura'),
    color: yup.string().required('Por favor ingrese un color'),
    description: yup.string().required('Por favor ingrese una descripción del animal'),
});

const { defineComponentBinds, errors, meta } = useForm<TRegisterAnimalPayload>({
    validationSchema,
});
let species = ref<{ text: string; value: string }[]>([]);
let selectedSpecie =ref<string | number>('');

let races: { text: string; value: string }[] = [];
let selectedRace: null;

const name = defineComponentBinds('name');
const specie = defineComponentBinds('specie');
const race = defineComponentBinds('race');
const gender = defineComponentBinds('gender');
const birthdate = defineComponentBinds('birthdate');
const weight = defineComponentBinds('weight');
const higth = defineComponentBinds('heigth');
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
const loadRaces = async (value: string | number | null) => {
    if (value != null) {
        selectedRace.value = value;
    }
    const response = await vetappApi.getRaces(selectedRace);
    races = response;
    console.log(races);
};
</script>

<template>
    <form class="flex flex-col gap-2 p-2">
        <div class="flex flex-col gap-2 lg:flex-row">
            <VInput v-bind="name" variant="farmer" label="Nombre" placeholder="Escribe su nombre" type="text" name="name"
                :error="errors.name" />
            <VSelect v-bind="specie" variant="farmer" custom-class="form-farmer" placeholder="Seleccione la especie"
                label="Especie" name="specie" :options="species" :error="errors.specie" @update:modelValue="loadRaces" />

            <VSelect v-bind="race" custom-class="form-farmer" variant="farmer" label="Raza" name="race"
                placeholder="Seleccione la raza" :error="errors.race" />
        </div>
        <div class="flex flex-col gap-2 lg:flex-row">
            <span class="block text-lg font-medium text-emerald-800">Género</span>
            <VInput custom-class="form-farmer w-min" variant="farmer" label="Macho" type="radio" name="gender"
                value="male" />
            <VInput custom-class="form-farmer w-min" variant="farmer" label="Hembra" type="radio" name="gender"
                value="hembra" />
            <VInput v-bind="birthdate" custom-class="form-farmer" variant="farmer" label="Fecha de Nacimiento"
                placeholder="Escribe su nombre" type="date" name="birthdate" :error="errors.birthdate" />
            <VInput v-bind="weight" custom-class="form-farmer" variant="farmer" label="Peso"
                placeholder="Ingresa su peso actual" type="text" name="weight" :error="errors.weight" />
            <VInput v-bind="higth" custom-class="form-farmer" variant="farmer" label="Altura"
                placeholder="Ingresa su altura" type="text" name="higth" :error="errors.heigth" />
        </div>
        <div class="flex flex-col gap-2 lg:flex-row">
            <VTextArea v-bind="color" custom-class="form-farmer" variant="farmer" label="Color"
                placeholder="Describe su aspecto fisico" name="color" :error="errors.color"></VTextArea>
            <VTextArea v-bind="description" custom-class="form-farmer" variant="farmer" label="Descripción"
                placeholder="Describe alguna caracteristica importante" name="description" />
        </div>

        <div class="flex w-full justify-center gap-4">
            <button :disabled="!meta.valid" type="submit"
                :class="['btn form-button-farmer ', !meta.valid && 'pointer-events-none opacity-50']">
                Siguiente
            </button>
            <router-link :to="{ name: '' }" class="btn form-button-farmer">Cancelar</router-link>
        </div>
    </form>
</template>
