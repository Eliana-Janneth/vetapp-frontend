<script setup lang="ts">
import { VText, VCard, VTitle, VLoader, VButton } from '@elements';
import { vetappApi } from '@/services';
import { SModal } from '@placetopay/spartan-vue';
import { ref } from 'vue';
import type { TAcademicInformationPayload, TWorkExperiencePayload } from '@/types';
import { UserCircleIcon,BuildingOfficeIcon, BuildingLibraryIcon} from '@heroicons/vue/24/solid';
import {
    PlusCircleIcon,
    EnvelopeIcon,
    PhoneIcon,
    MapPinIcon,
    IdentificationIcon,
    MapIcon,
    AcademicCapIcon,
    CalendarDaysIcon,
    BookOpenIcon,
    GlobeAmericasIcon,
    BriefcaseIcon,
    ListBulletIcon,
    
} from '@heroicons/vue/24/outline';
import { useUserStore } from '@/stores';

const user = useUserStore();

const userData = ref();
const academicInfo = ref<TAcademicInformationPayload[]>([]);
const workExperience = ref<TWorkExperiencePayload[]>([]);

const openAcademicForm = ref(false);

vetappApi.getUser().then((data) => {
    userData.value = data;
});

if (user.isVet) {
    vetappApi.getWorkExperience().then((response) => {
        workExperience.value = response;
    });

    vetappApi.getAcademicInformation().then((response) => {
        academicInfo.value = response;
    });
}
</script>

<template>
    <SModal class="z-50" :open="openAcademicForm" @close="openAcademicForm = false">
        <div class="flex items-center h-full">
            <div class="p-8 bg-white shadow rounded-lg">
                hola
            </div>
        </div>
    </SModal>
    <div class="container mx-auto flex flex-col items-center">



        <VTitle class="mb-2">Perfil</VTitle>

        <VCard class="w-full lg:w-fit mb-8" :loading="!userData">
            <template #header>
                <UserCircleIcon class="h-5 w-5" />
                <span>{{ userData?.first_name }}&nbsp;</span>
                <span>{{ userData?.last_name }}</span>
            </template>

            <VText :icon="EnvelopeIcon">
                <span class="font-bold">Correo:&nbsp;</span>
                <span>{{ userData?.email }}&nbsp;</span>
            </VText>

            <VText :icon="IdentificationIcon">
                <span class="font-bold">Documento:&nbsp;</span>
                <span>{{ userData?.document_number }}&nbsp;</span>
            </VText>

            <VText :icon="PhoneIcon">
                <span class="font-bold">Teléfono:&nbsp;</span>
                <span>{{ userData?.phone_number }}&nbsp;</span>
            </VText>

            <VText :icon="MapIcon">
                <span class="font-bold">Ciudad:&nbsp;</span>
                <span>{{ userData?.city }}&nbsp;</span>
            </VText>

            <VText :icon="MapPinIcon">
                <span class="font-bold">Dirección:&nbsp;</span>
                <span>{{ userData?.address }}&nbsp;</span>
            </VText>

            <template v-if="user.isVet">
                <VText :icon="IdentificationIcon">
                    <span class="font-bold">Licencia:&nbsp;</span>
                    <span>{{ userData?.license_number }}&nbsp;</span>
                </VText>

                <VText :icon="CalendarDaysIcon">
                    <span class="font-bold">Fecha de Expiración:&nbsp;</span>
                    <span>{{ userData?.license_expiry_date }}&nbsp;</span>
                </VText>
            </template>
        </VCard>

        <template v-if="user.isVet">
            <div class="flex items-center mb-2 gap-2">
                <VTitle>Información Académica</VTitle>
                <VButton class="w-fit p-1 flex items-center rounded-full" @click="openAcademicForm = true"><PlusCircleIcon class="w-7 h-7" /></VButton>
            </div>

            <VLoader v-if="!academicInfo.length"/>
            <div v-else class="flex flex-wrap gap-4 justify-center mb-8">
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
                        <span>{{ info?.academic_degree }}&nbsp;</span>
                    </VText>
                    <VText :icon="BookOpenIcon">
                        <span class="font-bold">Estudio:&nbsp;</span>
                        <span>{{ info?.currently }}&nbsp;</span>
                    </VText>
                </VCard>
            </div>

            <div class="flex items-center mb-2 gap-2">
                <VTitle>Experiencia Laboral</VTitle>
                <VButton class="w-fit p-1 flex items-center rounded-full" @click=""><PlusCircleIcon class="w-7 h-7" /></VButton>
            </div>

            <VLoader v-if="!workExperience.length"/>
            <div v-else class="flex flex-wrap gap-4 justify-center">
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
                        <span>{{ work?.start_date }}&nbsp;</span>
                    </VText>
                    <VText :icon="CalendarDaysIcon">
                        <span class="font-bold">Fecha Final:&nbsp;</span>
                        <span>{{ work?.end_date }}&nbsp;</span>
                    </VText>
                    <VText :icon="GlobeAmericasIcon">
                        <span class="font-bold">País:&nbsp;</span>
                        <span>{{ work?.country }}&nbsp;</span>
                    </VText>
                    <VText :icon="BriefcaseIcon">
                        <span class="font-bold">Trabajo:&nbsp;</span>
                        <span>{{ work?.currently }}&nbsp;</span>
                    </VText>
                </VCard>
            </div>
        </template>
    </div>
</template>
