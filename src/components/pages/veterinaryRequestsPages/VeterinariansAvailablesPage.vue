<script setup lang="ts">
import { ref, reactive } from 'vue';
import { vetappApi, TVetInformationPayload } from '@/services';
import { UserCircleIcon, UserPlusIcon, UserMinusIcon } from '@heroicons/vue/24/outline';

const TVetInformationPayload = reactive({
    id: '',
    first_name: '',
    last_name: '',
    city: '',
    license_number:'',
    license_expiry_date: ''

});
const personalInformation = ref<TVetInformationPayload[]>([]);

vetappApi
    .getVetAvailables()
    .then((response) => {
        personalInformation.value = response;
        console.log(response);
    })
    .catch((err) => {
        console.log(err);
    });

</script>
<template>
    <div class="flex justify-center bg-white">
        <div v-if="personalInformation" class="h-96 w-max overflow-y-scroll">
            <table class="min-w-full table-auto" summary="Availables Veterinarians">
                <thead
                    class="leading-4tracking-wider font-norma sticky top-0 bg-emerald-600 text-xs uppercase tracking-wider text-white"
                >
                    <tr>
                        <th class="px-6 py-3">Nombre</th>
                        <th class="px-6 py-3">Perfil</th>
                        <th class="px-6 py-3">Solicitar Consulta</th>
                        <th class="px-6 py-3">Descartar</th>
                    </tr>
                </thead>
                <tbody>
                    <tr
                        class="divide-x-2 divide-emerald-400 outline outline-2 -outline-offset-2 outline-emerald-400"
                        v-for="information in personalInformation"
                        :key="information.id"
                    >
                        <td class="table-item">{{ information.first_name + ' ' + information.last_name }}</td>
                        <td class="table-item">
                            <router-link
                                :to="{ name: 'requests.showVetInformation', params: { id: information.id } }"
                                class="flex items-center text-emerald-600 hover:text-emerald-500"
                                ><UserCircleIcon class="h-5 w-5" />
                                <span class="ml-2 font-medium"> Ver Perfil </span></router-link
                            >
                        </td>
                        <td class="table-item">
                            <router-link
                                :to="{ name: 'requests.request', params: { id: information.id } }"
                                class="flex items-center text-emerald-600 hover:text-emerald-500"
                                ><UserPlusIcon class="h-5 w-5" />
                                <span class="ml-2 font-medium"> Consultar </span></router-link
                            >
                        </td>
                        <td class="table-item">
                            <router-link
                                :to="{ name: 'animals.show', params: { id: information.id } }"
                                class="flex items-center text-emerald-600 hover:text-emerald-500"
                                ><UserMinusIcon class="h-5 w-5" />
                                <span class="ml-2 font-medium"> Descartar </span></router-link
                            >
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <router-view />
    </div>
</template>
