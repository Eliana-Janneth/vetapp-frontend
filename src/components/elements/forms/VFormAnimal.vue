<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { VButton, VInput, VSelect, VTextArea } from '@elements';
import { useForm } from 'vee-validate';

const selectedOption = ref('');
const selectOptions = ref([]);
const {  defineComponentBinds } = useForm({
});

const name = defineComponentBinds('name');
const specie = defineComponentBinds('specie');
const race = defineComponentBinds('race');
const male = defineComponentBinds('male');
const female = defineComponentBinds('female');
const date = defineComponentBinds('date');
const weight = defineComponentBinds('weight');
const higth = defineComponentBinds('higth');
const color = defineComponentBinds('color');
const description = defineComponentBinds('description');

onMounted(async () => {
    try {
        const response = await fetch('http://localhost:9999/farmers/');
        if (!response.ok) {
            throw new Error('No se pudo cargar los datos');
        }
        selectOptions.value = await response.json();
    } catch (error) {
        console.error('Error al cargar los datos:', error);
    }
});
</script>
<template>
    <form class="flex flex-col bg-white gap-2 p-2">
        <div class="flex gap-2 lg:flex-row flex-col ">
            <VInput v-bind="name" variant="farmer" label="Nombre" placeholder="Escribe su nombre" type="text" name="name" />
            <VSelect v-bind="specie" custom-class="form-farmer" label-color="text-emerald-800"
                label-option="Seleccione la especie" label="Especie" name="specie" />

            <VSelect v-bind="race" custom-class="form-farmer" label-color="text-emerald-800" label="Raza" name="race" />
        </div>
        <div class="flex gap-2 lg:flex-row flex-col">
            <span class="block text-lg font-medium text-emerald-800">Género</span>
            <VInput v-bind="male" custom-class="form-farmer w-min" label-color="text-emerald-800" label="Macho" type="radio"
                name="gender" value="male" />
            <VInput v-bind="female" custom-class="form-farmer w-min" label-color="text-emerald-800" label="Hembra"
                type="radio" name="gender" value="hembra" />
            <VInput v-bind="date" custom-class="form-farmer" label-color="text-emerald-800" label="Fecha de Nacimiento"
                placeholder="Escribe su nombre" type="date" name="date" />
            <VInput v-bind="weight" custom-class="form-farmer" label-color="text-emerald-800" label="Peso"
                placeholder="Ingresa su peso actual" type="text" name="weight" />
            <VInput v-bind="higth" custom-class="form-farmer" label-color="text-emerald-800" label="Altura"
                placeholder="Ingresa su altura" type="text" name="higth" />
        </div>
        <div class="flex gap-2 lg:flex-row flex-col">
            <VTextArea v-bind="color" custom-class="form-farmer" label-color="text-emerald-800" label="Color"
                placeholder="Describe su aspecto fisico" name="color"></VTextArea>
            <VTextArea v-bind="description" custom-class="form-farmer" label-color="text-emerald-800" label="Descripción"
                placeholder="Describe alguna caracteristica importante" name="description" />
        </div>

        <div class="flex gap-4 w-full justify-center">
            <VButton @click="" :class="['btn form-button-farmer', disabled && 'btn-disabled']" type="submit"
                label="Registrar Animal" />

            <!--<router-link :to="{ name: '' }" class="btn form-button-farmer">Cancelar</router-link>-->
        </div>
    </form>
</template>