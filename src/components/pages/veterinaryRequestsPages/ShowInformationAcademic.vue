<script setup lang="ts">
import { VSpan } from '@elements';
import { useForm } from 'vee-validate';
import { reactive, onMounted, ref } from 'vue';
import type { TAcademicInformation } from './types';
import { TAcademicInformationPayload, vetappApi } from '@/services';
import {useRoute} from 'vue-router';
import {
    AcademicCapIcon,
    MapPinIcon,
    CalendarDaysIcon,
    BookOpenIcon,
    GlobeAmericasIcon,
} from '@heroicons/vue/24/outline';

const route = useRoute();
const TAcademicInformationPayload = reactive({
    title: '',
    university: '',
    year: '',
    country: '',
    academic_degree: '',
    currently: '',
});
const academicInformation = ref<TAcademicInformationPayload[]>([]);
onMounted(async () => {
    try {
        const response = await vetappApi.getAcademicInformationVet(route.params.id.toString());
        academicInformation.value = response;
    } catch (error) {
        console.error('Error al cargar los datos:', error);
    }
});

const { defineComponentBinds } = useForm<TAcademicInformation>({});

const title = defineComponentBinds('title');
const university = defineComponentBinds('university');
const year = defineComponentBinds('year');
const country = defineComponentBinds('country');
const academicDegree = defineComponentBinds('academicDegree');
const currentlystudying = defineComponentBinds('currentlystudying');
</script>
<template>
    <div class="inline-block" v-for="information in academicInformation" :key="information.title">
        <form class="mx-auto mb-2 ml-2 mr-2 flex w-60 flex-col items-center gap-4 rounded-lg bg-sky-100/70 p-2">
            <div class="flex flex-col gap-2">
                <VSpan
                    v-bind="title"
                    variant="vet"
                    custom-class="uppercase font-semibold text-lg"
                    :label="information.title"
                />
            </div>
            <div class="flex flex-col gap-2">
                <VSpan
                    v-bind="university"
                    custom-class="font-semibold text-lg"
                    variant="vet"
                    :label="information.university"
                    :icon="MapPinIcon"
                />
                <VSpan v-bind="year" variant="vet" :label="information.year" :icon="CalendarDaysIcon" />
                <VSpan
                    v-bind="country"
                    variant="vet"
                    :label="information.country"
                    name="email"
                    :icon="GlobeAmericasIcon"
                />
                <VSpan
                    v-bind="academicDegree"
                    variant="vet"
                    :label="information.academic_degree"
                    :icon="AcademicCapIcon"
                />
                <VSpan v-bind="currentlystudying" variant="vet" :label="information.currently" :icon="BookOpenIcon" />
            </div>
        </form>
    </div>
</template>
