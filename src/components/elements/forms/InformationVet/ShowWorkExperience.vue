<script setup lang="ts">
import { VSpan } from '@elements';
import { useForm } from 'vee-validate';
import { reactive, onMounted, ref } from 'vue';
import type { TWorkExperience } from './types';
import { TWorkExperiencePayload, vetappApi } from '@/services';
import {
    BriefcaseIcon,
    ListBulletIcon,
    CalendarDaysIcon,
    BuildingOfficeIcon,
    GlobeAmericasIcon,
} from '@heroicons/vue/24/outline';

const TWorkExperiencePayload = reactive({
    title: '',
    company: '',
    functions: '',
    start_date: '',
    end_date: '',
    country: '',
    currently_working: false,
});
const workExperience = ref<TWorkExperiencePayload[]>([]);

onMounted(async () => {
    try {
        const response = await vetappApi.getWorkExperience();
        workExperience.value = response;
    } catch (error) {
        console.error('Error al cargar los datos:', error);
    }
});

const { defineComponentBinds } = useForm<TWorkExperience>({});

const position = defineComponentBinds('position');
const company = defineComponentBinds('company');
const functions = defineComponentBinds('functions');
const startDate = defineComponentBinds('startDate');
const country = defineComponentBinds('country');
const currentlyWorking = defineComponentBinds('currentlyWorking');
</script>

<template>
    <div class="inline-block" v-for="work in workExperience" :key="work.title">
        <form class="mx-auto mb-2 ml-2 mr-2 flex w-60 flex-col items-center gap-4 rounded-lg bg-sky-100/70 p-2">
            <div class="flex flex-col gap-2">
                <VSpan
                    v-bind="position"
                    variant="vet"
                    custom-class="uppercase font-semibold text-lg"
                    :label="work.title"
                />
            </div>
            <div class="flex flex-col gap-2">
                <VSpan
                    v-bind="company"
                    custom-class="font-semibold text-lg"
                    variant="vet"
                    :label="work.company"
                    :icon="BuildingOfficeIcon"
                />
                <VSpan v-bind="functions" variant="vet" :label="work.functions" :icon="ListBulletIcon" />
                <VSpan
                    v-bind="startDate"
                    variant="vet"
                    :label="`${work.start_date} / ${work.end_date}`"
                    name="email"
                    :icon="CalendarDaysIcon"
                />
                <VSpan v-bind="country" variant="vet" :label="work.country" :icon="GlobeAmericasIcon" />
                <VSpan v-bind="currentlyWorking" variant="vet" :label="work.currently_working" :icon="BriefcaseIcon" />
            </div>
        </form>
    </div>
</template>
