<script setup lang="ts">
import {
    VText,
    VCard,
    VTitle,
    VLoader,
    VButton,
    VetAcademicForm,
    VetInfoForm,
    VetWorkForm,
    VCheckbox,
} from '@elements';
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
    DocumentCheckIcon,
} from '@heroicons/vue/24/outline';
import { useUserStore } from '@/stores';

const user = useUserStore();

const userData = ref();
const academicInfo = ref<TAcademicInformation[]>([]);
const workExperience = ref<TWorkExperience[]>([]);

const openAcademicForm = ref(false);
const openWorkForm = ref(false);
const openVetForm = ref(false);
const loading = ref<boolean>(true);

vetappApi.getUser().then((data) => {
    userData.value = data;
});

if (user.isVet) {
    loading.value = true;
    vetappApi.getWorkExperience().then((response) => {
        workExperience.value = response;
        loading.value = false;
    });

    vetappApi.getAcademicInformation().then((response) => {
        academicInfo.value = response;
        loading.value = false;
    });
}

const changeAvailability = (value: boolean) => {
    vetappApi.updateAvailability({ available: value });
};
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
            <VTitle>{{ $t('VetPage.profile') }}</VTitle>
            <VButton v-if="user.isVet" class="flex w-fit items-center rounded-full p-1" @click="openVetForm = true"
                ><PlusCircleIcon class="h-7 w-7"
            /></VButton>
        </div>
        <VCard class="mb-8 w-full lg:w-fit" :loading="!userData">
            <template #header>
                <UserCircleIcon class="h-5 w-5" />
                <span>{{ userData?.first_name }}</span>
                <span>{{ userData?.last_name }}</span>
            </template>

            <VText :icon="EnvelopeIcon">
                <span class="font-bold">{{ $t('VetPage.email') }}:&nbsp;</span>
                <span>{{ userData?.email }}&nbsp;</span>
            </VText>

            <VText :icon="IdentificationIcon">
                <span class="font-bold">{{ $t('VetPage.doc') }}:&nbsp;</span>
                <span>{{ userData?.document_number }}&nbsp;</span>
            </VText>

            <VText :icon="PhoneIcon">
                <span class="font-bold">{{ $t('VetPage.tel') }}:&nbsp;</span>
                <span>{{ userData?.phone_number }}&nbsp;</span>
            </VText>

            <VText :icon="MapIcon">
                <span class="font-bold">{{ $t('VetPage.city') }}:&nbsp;</span>
                <span>{{ userData?.city }}&nbsp;</span>
            </VText>

            <VText :icon="MapPinIcon">
                <span class="font-bold">{{ $t('VetPage.address') }}:&nbsp;</span>
                <span>{{ userData?.address }}&nbsp;</span>
            </VText>

            <template v-if="user.isVet">
                <VText :icon="IdentificationIcon">
                    <span class="font-bold">{{ $t('VetPage.license') }}:&nbsp;</span>
                    <span>{{ userData?.license_number }}&nbsp;</span>
                </VText>

                <VText :icon="CalendarDaysIcon">
                    <span class="font-bold">{{ $t('VetPage.expdate') }}:&nbsp;</span>
                    <span>{{ userData?.license_expiry_date }}&nbsp;</span>
                </VText>
                <VText :icon="PowerIcon">
                    <span class="font-bold">{{ $t('VetPage.disp') }}:&nbsp;</span>
                    <VCheckbox
                        name="available"
                        :checked="userData.available"
                        :value="userData.available"
                        @click="changeAvailability"
                    />
                </VText>
            </template>
        </VCard>

        <template v-if="user.isVet">
            <div class="mb-2 flex items-center gap-2">
                <VTitle>{{ $t('VetPage.infoacademic') }}</VTitle>
                <VButton class="flex w-fit items-center rounded-full p-1" @click="openAcademicForm = true"
                    ><PlusCircleIcon class="h-7 w-7"
                /></VButton>
            </div>

            <VLoader v-if="loading" />
            <VTitle v-if="!academicInfo.length" class="mb-5 mt-5 text-xl">{{  $t('VetPage.noinfacademic') }}</VTitle>

            <div v-else class="mb-8 flex flex-wrap justify-center gap-4">
                <VCard class="w-full lg:w-fit" v-for="info in academicInfo">
                    <template #header>
                        <DocumentCheckIcon class="h-5 w-5" />
                        <span>{{ info?.title }}&nbsp;</span>
                    </template>
                    <VText :icon="BuildingLibraryIcon">
                        <span class="font-bold">{{ $t('VetPage.u') }}:&nbsp;</span>
                        <span>{{ info?.university }}&nbsp;</span>
                    </VText>
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
                <VButton class="flex w-fit items-center rounded-full p-1" @click="openWorkForm = true"
                    ><PlusCircleIcon class="h-7 w-7"
                /></VButton>
            </div>
        
            <VLoader v-if="loading" />
            <VTitle v-if="!workExperience.length" class="mt5 text-xl">{{  $t('VetPage.noinflab') }}</VTitle>
            <div v-else class="flex flex-wrap justify-center gap-4">
                <VCard class="w-full lg:w-fit" v-for="work in workExperience">
                    <template #header>
                        <BriefcaseIcon class="h-5 w-5" />
                        <span>{{ work?.position }}&nbsp;</span>
                    </template>
                    <VText :icon="BuildingOfficeIcon">
                        <span class="font-bold">{{ $t('VetPage.comp') }}:&nbsp;</span>
                        <span>{{ work?.company }}&nbsp;</span>
                    </VText>
                    <VText :icon="ListBulletIcon">
                        <span class="font-bold">{{ $t('VetPage.features') }}:&nbsp;</span>
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
        </template>
    </div>
</template>
