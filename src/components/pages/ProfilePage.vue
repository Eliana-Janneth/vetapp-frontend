<script setup lang="ts">
import { VText, VCard, VTitle, VLoader, VButton, VetAcademicForm,VetInfoForm, VetWorkForm, VCheckbox } from '@elements';
import { vetappApi } from '@/services';
import { SModal } from '@placetopay/spartan-vue';
import { ref } from 'vue';
import { TAcademicInformation, TWorkExperience } from '@/types';
import { UserCircleIcon, BuildingOfficeIcon, BuildingLibraryIcon } from '@heroicons/vue/24/solid';
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
    PowerIcon,
    DocumentCheckIcon
} from '@heroicons/vue/24/outline';
import { useUserStore } from '@/stores';

const user = useUserStore();

const userData = ref();
const academicInfo = ref<TAcademicInformation[]>([]);
const workExperience = ref<TWorkExperience[]>([]);

const openAcademicForm = ref(false);
const openWorkForm = ref(false);
const openVetForm = ref(false);

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

const changeAvailability = (value: boolean) => {
    vetappApi.updateAvailability({'available': value});
};

//TODO: Mostrar checked
</script>

<template>
    <SModal class="z-50" :open="openAcademicForm" @close="openAcademicForm = false">
        <VCard class="w-full sm:w-fit lg:ml-[224px]" bodyClass="p-8">
            <VetAcademicForm @end="openAcademicForm = false" />
        </VCard>
    </SModal>

    <SModal class="z-50" :open="openWorkForm" @close="openWorkForm = false">
        <VCard class="w-full sm:w-fit lg:ml-[224px]" bodyClass="p-8">
            <VetWorkForm @end="openWorkForm = false" />
        </VCard>
    </SModal>

    <SModal class="z-50" :open="openVetForm" @close="openVetForm = false">
        <VCard class="w-full sm:w-fit lg:ml-[224px]" bodyClass="p-8">
            <VetInfoForm @end="openVetForm = false" />
        </VCard>
    </SModal>
    
    <div class="container mx-auto flex flex-col items-center">
        <div class="mb-2 flex items-center gap-2">
                <VTitle>Perfil</VTitle>
                <VButton class="flex w-fit items-center rounded-full p-1" @click="openVetForm = true"
                    ><PlusCircleIcon class="h-7 w-7"
                /></VButton>
            </div>
        <VCard class="mb-8 w-full lg:w-fit" :loading="!userData">
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
                <VText :icon="PowerIcon">
                    <span class="font-bold">Disponibilidad:&nbsp;</span>
                    <VCheckbox name="availabe" :checked="userData.available" :value="userData.available"  @click="changeAvailability" />
                </VText>
            </template>
        </VCard>

        <template v-if="user.isVet">
            <div class="mb-2 flex items-center gap-2">
                <VTitle>Información Académica</VTitle>
                <VButton class="flex w-fit items-center rounded-full p-1" @click="openAcademicForm = true"
                    ><PlusCircleIcon class="h-7 w-7"
                /></VButton>
            </div>

            <VLoader v-if="!academicInfo.length" />
            <div v-else class="mb-8 flex flex-wrap justify-center gap-4">
                <VCard class="w-full lg:w-fit" v-for="info in academicInfo">
                    <template #header>
                        <DocumentCheckIcon class="h-5 w-5" />
                        <span>{{ info?.title }}&nbsp;</span>
                    </template>
                    <VText :icon="BuildingLibraryIcon">
                        <span class="font-bold">Universidad:&nbsp;</span>
                        <span>{{ info?.university }}&nbsp;</span>
                    </VText>
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
                <VButton class="flex w-fit items-center rounded-full p-1"  @click="openWorkForm = true"
                    ><PlusCircleIcon class="h-7 w-7"
                /></VButton>
            </div>

            <VLoader v-if="!workExperience.length" />
            <div v-else class="flex flex-wrap justify-center gap-4">
                <VCard class="w-full lg:w-fit" v-for="work in workExperience">
                    <template #header>
                        <BriefcaseIcon class="h-5 w-5" />
                        <span>{{ work?.position }}&nbsp;</span>
                    </template>
                    <VText :icon="BuildingOfficeIcon">
                        <span class="font-bold">Empresa:&nbsp;</span>
                        <span>{{ work?.company }}&nbsp;</span>
                    </VText>
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
        </template>
    </div>
</template>
