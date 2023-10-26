<script setup lang="ts">
import { VSpan } from '@elements';
import { ref } from 'vue';
import { vetappApi } from '@/services';
import { useRoute } from 'vue-router';
import loader from '@/assets/loader.svg';
import {
    AcademicCapIcon,
    MapPinIcon,
    CalendarDaysIcon,
    BookOpenIcon,
    GlobeAmericasIcon,
} from '@heroicons/vue/24/outline';

const route = useRoute();

const academicInformation = ref();

vetappApi
    .getAcademicInformationVet(route.params.id.toString())
    .then((response) => {
        academicInformation.value = response;
    })
    .catch((err) => {
        console.log(err);
    });
</script>
<template>
     <img class="h-20" :src="loader" v-if="academicInformation === undefined" alt="Cargando información"/>
    <p v-else-if="academicInformation === null">El Veterinario no tiene información académica</p>
    <div v-else class="inline-block " v-for="information in academicInformation" :key="information.title">
        <form class="mx-auto mb-2 ml-2 mr-2 flex w-60 flex-col items-center gap-4 rounded-lg bg-emerald-100/70 p-2">
            <div class="flex flex-col gap-2">
                <VSpan variant="vet" custom-class="uppercase font-semibold text-lg" :label="information.title" />
            </div>
            <div class="flex flex-col gap-2">
                <VSpan
                    custom-class="font-semibold text-lg"
                    variant="vet"
                    :label="information.university"
                    :icon="MapPinIcon"
                />
                <VSpan variant="vet" :label="information.year" :icon="CalendarDaysIcon" />
                <VSpan variant="vet" :label="information.country" :icon="GlobeAmericasIcon" />
                <VSpan variant="vet" :label="information.academic_degree" :icon="AcademicCapIcon" />
                <VSpan variant="vet" :label="information.currently" :icon="BookOpenIcon" />
            </div>
        </form>
    </div>
</template>
