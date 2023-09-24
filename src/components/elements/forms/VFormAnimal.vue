<script setup lang="ts">
import { VButton, VInput, VSelect, VTextArea } from '@elements'; 
</script>
<template>
    <form class="flex flex-col bg-white gap-2 p-2">
        <div class="flex gap-2 lg:flex-row flex-col ">
            <VInput custom-class="form-farmer" label-color="text-emerald-800" label="Nombre" placeholder="Escribe su nombre"
                type="text" name="name" />
            <VSelect custom-class="form-farmer" label-color="text-emerald-800" label="Especie" name="specie" />

            <VSelect custom-class="form-farmer" label-color="text-emerald-800" label="Raza" name="race" />
        </div>
        <div class="flex gap-2 lg:flex-row flex-col">
            <span class="block text-lg font-medium text-emerald-800">Género</span>
            <VInput custom-class="form-farmer w-min" label-color="text-emerald-800" label="Macho" type="radio" name="gender"
                value="macho" />
            <VInput custom-class="form-farmer w-min" label-color="text-emerald-800" label="Hembra" type="radio"
                name="gender" value="hembra" />
            <VInput custom-class="form-farmer" label-color="text-emerald-800" label="Fecha de Nacimiento"
                placeholder="Escribe su nombre" type="date" name="date" />
            <VInput custom-class="form-farmer" label-color="text-emerald-800" label="Peso"
                placeholder="Ingresa su peso actual" type="text" name="weight" />

        </div>
        <div class="flex gap-2 lg:flex-row flex-col">
            <VTextArea custom-class="form-farmer" label-color="text-emerald-800" label="Color"
                placeholder="Describe su aspecto fisico" name="color"></VTextArea>
            <VTextArea custom-class="form-farmer" label-color="text-emerald-800" label="Descripción"
                placeholder="Describe alguna caracteristica importante" name="description" />
        </div>

        <div class="flex gap-4 w-full justify-center">
           <VButton @click="" :class="['btn form-button-farmer', disabled && 'btn-disabled']" type="submit"
                label="Registrar Animal" />

           <!--<router-link :to="{ name: '' }" class="btn form-button-farmer">Cancelar</router-link>--> 
        </div>
    </form>
</template>