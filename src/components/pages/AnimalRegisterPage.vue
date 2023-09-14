<script setup lang="ts">
import FormInput from "../elements/FormInput.vue";
import FormSelect from "../elements/FormSelect.vue";
import FormTextArea from "../elements/FormTextArea.vue";
</script>

<template>
    <!--form de registrar animales-->
    <div class="bg-white h-screen rounded-xl justify-center items-center">
        <div>
            <h1 class="text-center text-4xl font-bold text-fuchsia-700">
                Registrar Animal
            </h1>
        </div>
        <div class="  flex justify-center gap-4">
            <div class=" flex flex-col w-2/5 gap-3">
                <FormInput label="Nombre" placeholder="Escribe su nombre" type="text" name="name"></FormInput>
                <FormSelect label="Especie" placeholder="Selecciona su especie" name="specie"></FormSelect>
                <FormSelect label="Raza" placeholder="Selecciona su raza" name="race"></FormSelect>
                <FormTextArea label="Color" placeholder="Describe su aspecto fisico" name="color"></FormTextArea>


            </div>
            <div class=" flex flex-col w-2/5 gap-3">
                <label class="relative block drop-shadow-xl w-full pb-4">

                    <span class="block font-medium text-fuchsia-700 text-lg">Género</span>
                    <div class="flex items-center gap-1">
                        <input
                            class=" form-radio placeholder:text-fuchsia-400/50 block  bg-white hover:bg-fuchsia-50 focus:bg-fuchsia-100 border border-fuchsia-700 rounded-lg py-2 px-2 shadow-md focus:outline-none focus:border-fuchsia-500 focus:ring-fuchsia-500 focus:ring-1 text-md text-fuchsia-700"
                            type="radio" required>
                        <span class="flex font-medium text-fuchsia-700 text-lg">Macho</span>
                        <input
                            class=" form-radio placeholder:text-fuchsia-400/50 block  bg-white hover:bg-fuchsia-50 focus:bg-fuchsia-100 border border-fuchsia-700 rounded-lg py-2 px-2 shadow-md focus:outline-none focus:border-fuchsia-500 focus:ring-fuchsia-500 focus:ring-1 text-md text-fuchsia-700"
                            type="radio" required>
                        <span class="flex font-medium text-fuchsia-700 text-lg">Hembra</span>
                    </div>


                </label>
                <FormInput label="Fecha de Nacimiento" placeholder="Escribe su nombre" type="date" name="date"></FormInput>
                <FormInput label="Peso" placeholder="Ingresa su peso actual" type="text" name="color"></FormInput>
                <FormTextArea label="Descripción" placeholder="Describe alguna caracteristica importante"
                    name="description"></FormTextArea>

            </div>
        </div>
    </div>
</template>
