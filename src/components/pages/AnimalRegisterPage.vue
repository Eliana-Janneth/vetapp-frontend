<script setup lang="ts">
import { FormInput, FormSelect, FormTextArea } from '@elements';
</script>

<template>
    <!--form de registrar animales-->
    <div class="h-screen flex-col items-center justify-center rounded-xl bg-white p-2 md:flex-row">
        <div>
            <h1 class="text-center text-4xl font-bold text-fuchsia-700">Registrar Animal</h1>
        </div>
        <div class="flex flex-col justify-center gap-4 md:flex-row">
            <div class="flex flex-col gap-3 md:w-2/5">
                <FormInput label="Nombre" placeholder="Escribe su nombre" type="text" name="name"></FormInput>
                <FormSelect label="Especie" placeholder="Selecciona su especie" name="specie"></FormSelect>
                <FormSelect label="Raza" placeholder="Selecciona su raza" name="race"></FormSelect>
                <FormTextArea label="Color" placeholder="Describe su aspecto fisico" name="color"></FormTextArea>
            </div>
            <div class="flex flex-col gap-3 md:w-2/5">
                <label class="relative block w-full pb-4 drop-shadow-xl">
                    <span class="block text-lg font-medium text-fuchsia-700">Género</span>
                    <div class="flex items-center gap-1">
                        <input
                            class="text-md form-radio block rounded-lg border border-fuchsia-700 bg-white px-2 py-2 text-fuchsia-700 shadow-md placeholder:text-fuchsia-400/50 hover:bg-fuchsia-50 focus:border-fuchsia-500 focus:bg-fuchsia-100 focus:outline-none focus:ring-1 focus:ring-fuchsia-500"
                            type="radio"
                            name="gender"
                            value="macho"
                            required
                        />
                        <span class="flex text-lg font-medium text-fuchsia-700">Macho</span>
                        <input
                            class="text-md form-radio block rounded-lg border border-fuchsia-700 bg-white px-2 py-2 text-fuchsia-700 shadow-md placeholder:text-fuchsia-400/50 hover:bg-fuchsia-50 focus:border-fuchsia-500 focus:bg-fuchsia-100 focus:outline-none focus:ring-1 focus:ring-fuchsia-500"
                            type="radio"
                            name="gender"
                            value="hembra"
                            required
                        />
                        <span class="flex text-lg font-medium text-fuchsia-700">Hembra</span>
                    </div>
                </label>
                <FormInput
                    label="Fecha de Nacimiento"
                    placeholder="Escribe su nombre"
                    type="date"
                    name="date"
                ></FormInput>
                <FormInput label="Peso" placeholder="Ingresa su peso actual" type="text" name="color"></FormInput>
                <FormTextArea
                    label="Descripción"
                    placeholder="Describe alguna caracteristica importante"
                    name="description"
                ></FormTextArea>
            </div>
        </div>
        <div class="flex justify-center p-16">
            <button class="form-button-farmer">Registrar</button>
        </div>
    </div>
</template>
