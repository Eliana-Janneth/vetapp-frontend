<script setup lang="ts">
import { VSpan } from '@elements';
import { ref } from 'vue';
import { vetappApi } from '@/services';
import { IdentificationIcon, MapIcon, CalendarDaysIcon } from '@heroicons/vue/24/outline';
import { useRoute } from 'vue-router';
import ShowInformationAcademic from './ShowInformationAcademic.vue';
import ShowWorkExperience from './ShowWorkExperience.vue';
import loader from '@/assets/loader.svg';

const route = useRoute();
const informationVet = ref();

vetappApi
    .getVetInformation(route.params.id.toString())
    .then((response) => {
        informationVet.value = response;
    })
    .catch((err) => {
        console.log(err);
    });
</script>
<template>
    <img class="h-20" :src="loader" v-if="informationVet === undefined" alt="Cargando información"/>
    <p v-else-if="informationVet === null">El Veterinario no existe</p>
    <div v-else class="m-4">
        <form class="mx-auto flex w-80 flex-col items-center gap-2 rounded-lg bg-emerald-100/70 p-2">
            <div class="flex flex-col gap-2 lg:flex-row">
                <VSpan
                    custom-class="uppercase font-semibold text-lg"
                    variant="vet"
                    :label="`${informationVet.first_name} ${informationVet.last_name}`"
                />
            </div>
            <div class="flex flex-col gap-2">
                <VSpan variant="vet" :label="informationVet.city" :icon="MapIcon" />
                <VSpan variant="vet" :label="informationVet.license_number" :icon="IdentificationIcon" />
                <VSpan variant="vet" :label="informationVet.license_expiry_date" :icon="CalendarDaysIcon" />
            </div>
        </form>
    </div>
    <p class="text-emerald-600 font-bold text-lg">Información Académica</p>
    <ShowInformationAcademic />
    <p class="text-emerald-600 font-bold text-lg">Experiencia Laboral</p>
    <ShowWorkExperience />
</template>
