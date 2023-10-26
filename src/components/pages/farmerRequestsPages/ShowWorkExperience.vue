<script setup lang="ts">
import { VSpan } from '@elements';
import { ref } from 'vue';
import { vetappApi } from '@/services';
import { useRoute } from 'vue-router';
import loader from '@/assets/loader.svg';

import {
    BriefcaseIcon,
    ListBulletIcon,
    CalendarDaysIcon,
    BuildingOfficeIcon,
    GlobeAmericasIcon,
} from '@heroicons/vue/24/outline';

const workExperience = ref();
const route = useRoute();
vetappApi
    .getWorkExperienceVet(route.params.id.toString())
    .then((response) => {
        workExperience.value = response;
    })
    .catch((err) => {
        console.log(err);
    });
</script>

<template>
    <img class="h-20" :src="loader" v-if="workExperience === undefined" />
    <p v-else-if="workExperience === null">El Veterinario no tiene experiencia laboral</p>
    <div v-else class="inline-block" v-for="work in workExperience" :key="work.title">
        <form class="mx-auto mb-2 ml-2 mr-2 flex w-60 flex-col items-center gap-4 rounded-lg bg-emerald-100/70 p-2">
            <div class="flex flex-col gap-2">
                <VSpan variant="vet" custom-class="uppercase font-semibold text-lg" :label="work.title" />
            </div>
            <div class="flex flex-col gap-2">
                <VSpan
                    custom-class="font-semibold text-lg"
                    variant="vet"
                    :label="work.company"
                    :icon="BuildingOfficeIcon"
                />
                <VSpan variant="vet" :label="work.functions" :icon="ListBulletIcon" />
                <VSpan variant="vet" :label="`${work.start_date}`" :icon="CalendarDaysIcon" />
                <VSpan variant="vet" :label="`${work.end_date}`" :icon="CalendarDaysIcon" />
                <VSpan variant="vet" :label="work.country" :icon="GlobeAmericasIcon" />
                <VSpan variant="vet" :label="work.currently" :icon="BriefcaseIcon" />
            </div>
        </form>
    </div>
</template>
