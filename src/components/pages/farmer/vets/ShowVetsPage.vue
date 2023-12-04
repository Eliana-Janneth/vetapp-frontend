<script setup lang="ts">
import { VText, VCard, VTitle, VLoader, VButton } from '@elements';
import { vetappApi } from '@/services';
import { ref } from 'vue';
import { useRoute } from 'vue-router';
import type { TAcademicInformation, TWorkExperience, TVetInformation } from '@/types';
import { UserCircleIcon, BuildingOfficeIcon, BuildingLibraryIcon } from '@heroicons/vue/24/solid';
import {
    IdentificationIcon,
    MapIcon,
    AcademicCapIcon,
    CalendarDaysIcon,
    BookOpenIcon,
    GlobeAmericasIcon,
    BriefcaseIcon,
    ListBulletIcon,
    ArrowLeftCircleIcon,
} from '@heroicons/vue/24/outline';

const userData = ref<TVetInformation>();
const academicInfo = ref<TAcademicInformation[]>([]);
const workExperience = ref<TWorkExperience[]>([]);
const loading = ref<boolean>(true);

const route = useRoute();
const idVet = route.params.id.toString();

vetappApi.getVetInformation(idVet).then((data) => {
    userData.value = data;
});

vetappApi.getWorkExperienceVet(idVet).then((response) => {
    workExperience.value = response;
    loading.value = false;
});

vetappApi.getAcademicInformationVet(idVet).then((response) => {
    academicInfo.value = response;
    loading.value = false;
});
</script>

<template>
    <VButton class="flex w-fit items-center rounded-full p-1" @click="$router.push({ name: 'vetsAvailables.index' })"
        ><ArrowLeftCircleIcon class="h-7 w-7"
    /></VButton>

    <div class="container mx-auto flex flex-col items-center">
        <VTitle class="mb-2">{{ $t('VetPage.profile') }}</VTitle>

        <VCard class="mb-8 w-full lg:w-fit" :loading="!userData">
            <template #header>
                <UserCircleIcon class="h-5 w-5" />
                <span>{{ userData?.name }}&nbsp;</span>
                <span>{{ userData?.lastName }}</span>
            </template>

            <VText :icon="MapIcon">
                <span class="font-bold">{{ $t('VetPage.city') }}:&nbsp;</span>
                <span>{{ userData?.city }}&nbsp;</span>
            </VText>

            <VText :icon="IdentificationIcon">
                <span class="font-bold">{{ $t('VetPage.license') }}:&nbsp;</span>
                <span>{{ userData?.license }}&nbsp;</span>
            </VText>

            <VText :icon="CalendarDaysIcon">
                <span class="font-bold">{{ $t('VetPage.expdate') }}:&nbsp;</span>
                <span>{{ userData?.licenseExpiryDate }}&nbsp;</span>
            </VText>
        </VCard>

        <div class="mb-2 flex items-center gap-2">
            <VTitle>{{ $t('VetPage.infoacademic') }}</VTitle>
        </div>

        <VLoader v-if="loading" />
        <VTitle v-if="!academicInfo.length" class="mb-5 mt-5 text-xl">No hay información académica</VTitle>
        <div v-else class="mb-8 flex flex-wrap justify-center gap-4">
            <VCard class="w-full lg:w-fit" v-for="info in academicInfo">
                <template #header>
                    <BuildingLibraryIcon class="h-5 w-5" />
                    <span>{{ info?.university }}&nbsp;</span>
                </template>

                <VText :icon="CalendarDaysIcon">
                    <span class="font-bold">{{ $t('VetPage.year') }}:&nbsp;</span>
                    <span>{{ info?.year }}&nbsp;</span>
                </VText>

                <VText :icon="GlobeAmericasIcon">
                    <span class="font-bold">{{ $t('VetPage.country') }}:&nbsp;</span>
                    <span>{{ info?.country }}&nbsp;</span>
                </VText>

                <VText :icon="AcademicCapIcon">
                    <span class="font-bold">{{ $t('VetPage.academicg') }}:&nbsp;</span>
                    <span>{{ info?.academicDegree }}&nbsp;</span>
                </VText>

                <VText :icon="BookOpenIcon">
                    <span class="font-bold">{{ $t('VetPage.study') }}:&nbsp;</span>
                    <span>{{ info?.currentlyStudying ? 'Actualmente' : 'Terminado' }}&nbsp;</span>
                </VText>
            </VCard>
        </div>

        <div class="mb-2 flex items-center gap-2">
            <VTitle>{{ $t('VetPage.explab') }}</VTitle>
        </div>

        <VLoader v-if="loading" />
        <VTitle v-if="!workExperience.length" class="mt-5 text-xl">No hay experiencia laboral</VTitle>
        <div v-else class="flex flex-wrap justify-center gap-4">
            <VCard class="w-full lg:w-fit" v-for="work in workExperience">
                <template #header>
                    <BuildingOfficeIcon class="h-5 w-5" />
                    <span>{{ work?.company }}&nbsp;</span>
                </template>

                <VText :icon="ListBulletIcon">
                    <span class="font-bold">{{ $t('VetPage.features2') }}:&nbsp;</span>
                    <span>{{ work?.functions }}&nbsp;</span>
                </VText>

                <VText :icon="CalendarDaysIcon">
                    <span class="font-bold">{{ $t('VetPage.datei') }}:&nbsp;</span>
                    <span>{{ work?.startDate }}&nbsp;</span>
                </VText>

                <VText :icon="CalendarDaysIcon">
                    <span class="font-bold">{{ $t('VetPage.datef') }}:&nbsp;</span>
                    <span>{{ work?.endDate }}&nbsp;</span>
                </VText>

                <VText :icon="GlobeAmericasIcon">
                    <span class="font-bold">{{ $t('VetPage.country') }}:&nbsp;</span>
                    <span>{{ work?.country }}&nbsp;</span>
                </VText>

                <VText :icon="BriefcaseIcon">
                    <span class="font-bold">{{ $t('VetPage.work') }}:&nbsp;</span>
                    <span>{{ work?.currentlyWorking ? 'Actualmente' : 'Terminado' }}&nbsp;</span>
                </VText>
            </VCard>
        </div>
    </div>
</template>
