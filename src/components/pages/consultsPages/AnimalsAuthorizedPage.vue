<script setup lang="ts">
import { ref } from 'vue';
import { vetappApi } from '@/services';
import { EyeIcon } from '@heroicons/vue/24/solid';
import loader from '@/assets/loader.svg';

const animals = ref();

vetappApi.getAnimalsAuthorized().then((response) => {
    animals.value = response;
});
</script>
<template>
    <img class="h-20" :src="loader" v-if="!animals" alt="Cargando información" />

    <div class="max-h-96 overflow-y-scroll">
        <table class="min-w-full table-auto" summary="Animals Authorized">
            <thead
                class="leading-4tracking-wider sticky top-0 bg-sky-600 text-xs font-normal uppercase tracking-wider text-white"
            >
                <tr class="[&>th]:px-6 [&>th]:py-3">
                    <th>Granjero</th>
                    <th>Nombre</th>
                    <th>Especie</th>
                    <th>Raza</th>
                    <th>Género</th>
                    <th>&nbsp;</th>
                </tr>
            </thead>
            <tbody>
                <tr
                    class="divide-x-2 divide-sky-400 outline outline-2 -outline-offset-2 outline-sky-400"
                    v-for="animal in animals"
                    :key="animal.id"
                >
                    <td class="border-b border-gray-200 px-6 py-2">{{ animal.farmer_name }}</td>
                    <td class="border-b border-gray-200 px-6 py-2">{{ animal.name }}</td>
                    <td class="border-b border-gray-200 px-6 py-2">{{ animal.specie_name }}</td>
                    <td class="border-b border-gray-200 px-6 py-2">{{ animal.race_name }}</td>
                    <td class="border-b border-gray-200 px-6 py-2">{{ animal.gender }}</td>
                    <td class="border-b border-gray-200 px-6 py-2">
                        <router-link
                            :to="{ name: 'medicalHistory', params: { id: animal.id } }"
                            class="flex items-center text-sky-600 hover:text-sky-500"
                            ><EyeIcon class="h-5 w-5" />
                        </router-link>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
