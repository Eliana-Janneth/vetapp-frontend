<script setup lang="ts">
import { ref, onMounted, reactive } from 'vue';
import { vetappApi, TAnimalPayload } from '@/services';
import { PencilIcon } from '@heroicons/vue/24/outline';

//TODO: animal = models.ForeignKey(Animals, on_delete=models.CASCADE)
  //  diagnosis = models.CharField(max_length=2048)
   //    treatment = models.CharField(max_length=2048)
const TAnimalPayload = reactive({
    id: '',
    name: '',
    specie_name: '',
    race_name: '',
    color: '',
    gender: '',
    birth_date: '',
    description: '',
    weight: '',
    heigth: '',
});

const animals = ref<TAnimalPayload[]>([]);

onMounted(async () => {
    try {
        const response = await vetappApi.getAnimalAuthorized();
        animals.value = response;
    } catch (error) {
        console.error('Error al cargar los datos:');
    }
});
</script>
<template>
    <div class="bg-white">
        <div class="max-h-96 overflow-y-scroll">
            <table class="min-w-full table-auto">
                <thead
                    class="leading-4tracking-wider font-norma sticky top-0 bg-sky-600 text-xs uppercase tracking-wider text-white"
                >
                    <tr>
                        <th class="px-6 py-3">Diagnóstico</th>
                        <th class="px-6 py-3">Granjero</th>
                        <th class="px-6 py-3">Nombre</th>
                        <th class="px-6 py-3">Especie</th>
                        <th class="px-6 py-3">Raza</th>
                        <th class="px-6 py-3">Género</th>
                    </tr>
                </thead>
                <tbody>
                    <tr
                        class="divide-x-2 divide-sky-400 outline outline-2 -outline-offset-2 outline-sky-400"
                        v-for="animal in animals"
                        :key="animal.id"
                    >
                        <td class="table-item ">
                            <router-link :to="{ name: 'animals.show', params: { id: animal.id } }" class=" text-sky-600 hover:text-sky-500 flex items-center"
                                ><PencilIcon class="h-5 w-5"
                            /> <span class="ml-2 font-medium ">
                                Crear Diagnóstico
                            </span></router-link>
                        </td>
                        <td class="table-item">{{ animal.name }}</td>
                        <td class="table-item">{{ animal.name }}</td>
                        <td class="table-item">{{ animal.specie_name }}</td>
                        <td class="table-item">{{ animal.race_name }}</td>
                        <td class="table-item">{{ animal.gender }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    <router-view />
</template>