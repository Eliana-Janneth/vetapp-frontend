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

const route = useRoute();
const idVet = route.params.id.toString();

vetappApi.getVetInformation(idVet).then((data) => {
    userData.value = data;
});

vetappApi.getWorkExperienceVet(idVet).then((response) => {
    workExperience.value = response;
});

vetappApi.getAcademicInformationVet(idVet).then((response) => {
    academicInfo.value = response;
});
</script>

<template>
    <VButton class="flex w-fit items-center rounded-full p-1" @click="$router.push({ name: 'vetsAvailables.index' })"
        ><ArrowLeftCircleIcon class="h-7 w-7"
    /></VButton>

    <div class="container mx-auto flex flex-col items-center">
        <VTitle class="mb-2">Perfil</VTitle>

        <VCard class="mb-8 w-full lg:w-fit" :loading="!userData">
            <template #header>
                <UserCircleIcon class="h-5 w-5" />
                <span>{{ userData?.name }}&nbsp;</span>
                <span>{{ userData?.lastName }}</span>
            </template>

            <VText :icon="MapIcon">
                <span class="font-bold">Ciudad:&nbsp;</span>
                <span>{{ userData?.city }}&nbsp;</span>
            </VText>

            <VText :icon="IdentificationIcon">
                <span class="font-bold">Licencia:&nbsp;</span>
                <span>{{ userData?.license }}&nbsp;</span>
            </VText>

            <VText :icon="CalendarDaysIcon">
                <span class="font-bold">Fecha de Expiración:&nbsp;</span>
                <span>{{ userData?.licenseExpiryDate }}&nbsp;</span>
            </VText>
        </VCard>

        <div class="mb-2 flex items-center gap-2">
            <VTitle>Información Académica</VTitle>
        </div>

        <VLoader v-if="!academicInfo.length" />
        <div v-else class="mb-8 flex flex-wrap justify-center gap-4">
            <VCard class="w-full lg:w-fit" v-for="info in academicInfo">
                <template #header>
                    <BuildingLibraryIcon class="h-5 w-5" />
                    <span>{{ info?.university }}&nbsp;</span>
                </template>
                <VText :icon="CalendarDaysIcon">
                    <span class="font-bold">Año:&nbsp;</span>
                    <span>{{ info?.year }}&nbsp;</span>
                </VText>
                <VText :icon="GlobeAmericasIcon">
                    <span class="font-bold">País:&nbsp;</span>
                    <span>{{ info?.country }}&nbsp;</span>
                </VText>
                <VText :icon="AcademicCapIcon">
                    <span class="font-bold">Grado Académico:&nbsp;</span>
                    <span>{{ info?.academicDegree }}&nbsp;</span>
                </VText>
                <VText :icon="BookOpenIcon">
                    <span class="font-bold">Estudio:&nbsp;</span>
                    <span>{{ info?.currentlystudying }}&nbsp;</span>
                </VText>
            </VCard>
        </div>

        <div class="mb-2 flex items-center gap-2">
            <VTitle>Experiencia Laboral</VTitle>
        </div>

        <VLoader v-if="!workExperience.length" />
        <div v-else class="flex flex-wrap justify-center gap-4">
            <VCard class="w-full lg:w-fit" v-for="work in workExperience">
                <template #header>
                    <BuildingOfficeIcon class="h-5 w-5" />
                    <span>{{ work?.company }}&nbsp;</span>
                </template>
                <VText :icon="ListBulletIcon">
                    <span class="font-bold">Funciones:&nbsp;</span>
                    <span>{{ work?.functions }}&nbsp;</span>
                </VText>
                <VText :icon="CalendarDaysIcon">
                    <span class="font-bold">Fecha Inicio:&nbsp;</span>
                    <span>{{ work?.startDate }}&nbsp;</span>
                </VText>
                <VText :icon="CalendarDaysIcon">
                    <span class="font-bold">Fecha Final:&nbsp;</span>
                    <span>{{ work?.endDate }}&nbsp;</span>
                </VText>
                <VText :icon="GlobeAmericasIcon">
                    <span class="font-bold">País:&nbsp;</span>
                    <span>{{ work?.country }}&nbsp;</span>
                </VText>
                <VText :icon="BriefcaseIcon">
                    <span class="font-bold">Trabajo:&nbsp;</span>
                    <span>{{ work?.currentlyWorking }}&nbsp;</span>
                </VText>
            </VCard>
        </div>
    </div>
</template>
