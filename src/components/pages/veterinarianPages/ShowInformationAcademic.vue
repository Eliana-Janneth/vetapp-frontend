<script setup lang="ts">
import { VSpan } from '@elements';
import loader from '@/assets/loader.svg';
import { onMounted, ref } from 'vue';
import { vetappApi } from '@/services';
import {
    AcademicCapIcon,
    MapPinIcon,
    CalendarDaysIcon,
    BookOpenIcon,
    GlobeAmericasIcon,
} from '@heroicons/vue/24/outline';

const academicInformation = ref();
onMounted(async () => {
    try {
        const response = await vetappApi.getAcademicInformation();
        academicInformation.value = response;
    } catch (error) {
        console.error('Error al cargar los datos:', error);
    }
});
</script>
<template>
    <img class="h-20" :src="loader" v-if="academicInformation === undefined" alt="Cargando información"/>
    <p v-else-if="academicInformation === null">El animal no existe</p>
    <div v-else class="inline-block" v-for="information in academicInformation" :key="information.title">
        <form class="mx-auto mb-2 ml-2 mr-2 flex w-60 flex-col items-center gap-4 rounded-lg bg-sky-100/70 p-2">
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
