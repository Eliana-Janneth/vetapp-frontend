<script setup lang="ts">
import { ref, onMounted } from 'vue';
// Declara una propiedad ref para almacenar los datos

const users = ref<UserData[]>([]);

interface UserData {
    first_name: string;
    last_name: string;
    document_number: string;
}

// Hacer una solicitud GET y cargar los datos cuando el componente se monta
onMounted(async () => {
    try {
        const response = await fetch('http://localhost:9999/farmers/');
        if (!response.ok) {
            throw new Error('No se pudo cargar los datos');
        }
        // Parsea la respuesta como JSON y almacénala en la propiedad "users"
        users.value = await response.json();
    } catch (error) {
        console.error('Error al cargar los datos:', error);
    }
});


</script>
<template>
    <div class="bg-white ">
        <div class="max-h-96 overflow-y-scroll">
        <table class="table-auto min-w-full ">
            <thead class="bg-emerald-400 font-medium text-black text-xs uppercase  leading-4tracking-wider tracking-wider ">
                <tr>
                    <th class="px-6 py-3">Nombre</th>
                    <th class="px-6 py-3">Especie</th>
                    <th class="px-6 py-3">Raza</th>
                    <th class="px-6 py-3">Género</th>
                    <th class="px-6 py-3">Fecha de Nacimiento</th>
                    <th class="px-6 py-3">Color</th>
                    <th class="px-6 py-3">Peso</th>
                    <th class="px-6 py-3">Descripción</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="user in users" :key="user.document_number">
                    <td class="px-6 py-2 whitespace-no-wrap border-b border-gray-200">{{ user.first_name }}</td>
                    <td class="px-6 py-2 whitespace-no-wrap border-b border-gray-200">{{ user.last_name }}</td>
                    <td class="px-6 py-2 whitespace-no-wrap border-b border-gray-200">{{ user.document_number }}</td>
                </tr>
            </tbody>
        </table>
    </div></div>
</template>