<script setup lang="ts">
import { VTitle, VetDiagnosisForm, VDetails, VUpgradeableTextarea, VButton } from '@elements';
import { useRoute } from 'vue-router';
import { vetappApi } from '@/services';
import loader from '@/assets/loader.svg';
import { ref, computed } from 'vue';
import { formatDate } from '@/helpers';
import { TAnimalAuthorized, TDiagnosis } from '@/types';
import { ArrowLeftCircleIcon } from '@heroicons/vue/24/outline';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

const route = useRoute();
const animal = ref<TAnimalAuthorized>();
const diagnosisAnimal = ref<TDiagnosis[] | undefined>();
const animalId = computed(() => String(route.params.id));

vetappApi.getAnimalAuthorized(route.params.id.toString()).then((res) => {
    animal.value = res;
});
vetappApi.getDiagnosisVet(animalId.value).then((res) => {
    diagnosisAnimal.value = res;
});

const onUpdateDiagnosis = (name: string, newValue: string, diagnosisId: string) => {
    vetappApi.updateDiagnosis(animalId.value, diagnosisId, { [name]: newValue }).then(() => {
        window.location.reload();
    });
};

</script>

<template>
    <div class="container w-full flex-col items-center">
        <div class="flex p-4">
            <VButton class="flex w-fit items-center rounded-full p-1" @click="$router.push({ name: 'patients.index' })"
                ><ArrowLeftCircleIcon class="h-7 w-7"
            /></VButton>

            <VTitle class="pl-4">{{ $t('VetPage.medform') }}</VTitle>
        </div>
        <VetDiagnosisForm />
        <div class="flex pl-16 pt-6">
            <img
                src="/src/assets/icons/medicalHistory.svg"
                class="hover:bluescale-0 mr-2 h-7 hover:scale-110 hover:text-sky-600"
                alt="medical history"
            />
            <VTitle>{{ $t('VetPage.hismed') }}</VTitle>
        </div>
        <img class="h-20" :src="loader" v-if="animal === undefined" alt="loader" />
        <p v-else-if="animal === null">{{  $t('FarmPage.animalnoexist') }}</p>
        <div v-else class="m-4 border border-x-2 border-sky-200/50 p-8">
            <VDetails custom-class="font-semibold text-lg" :label="t('VetPage.infanimal')" :description="animal.name" />
            <div class="flex flex-col lg:flex-row">
                <VDetails :label="t('VetPage.specie')" :description="animal.specie" />
                <VDetails :label="t('VetPage.breed')" :description="animal.race" />
            </div>
            <div class="flex flex-col lg:flex-row">
                <VDetails :label="t('FarmPage.bdate')" :description="animal.birthdate" />
                <VDetails :label="t('VetPage.gender')" :description="animal.gender" />
            </div>
            <div class="flex flex-col lg:flex-row">
                <VDetails :label="t('FarmPage.peso')" :description="animal.weight" />
                <VDetails :label="t('FarmPage.alt')" :description="animal.height" />
            </div>
            <div class="flex flex-col lg:flex-row">
                <VDetails class="border-b-0" label="Color" :description="animal.color" />
                <VDetails class="border-b-0" :label="t('FarmPage.description')" :description="animal.description" />
            </div>
        </div>

        <img class="h-20" :src="loader" v-if="animal === undefined" alt="loader" />
        <p v-else-if="diagnosisAnimal === null">{{ $t('FarmPage.noanimal') }}</p>
        <div v-else class="m-2 flex flex-col">
            <div class="" v-for="diagnosisA in diagnosisAnimal" :key="diagnosisA.id">
                <div class="mx-auto mb-2 ml-2 mr-2 flex flex-col rounded-lg bg-sky-100/70 p-2">
                    <div class="flex flex-col justify-start md:flex-row">
                        <VUpgradeableTextarea
                            custom-class="font-semibold"
                            :label="t('VetPage.date')"
                            :value="formatDate(diagnosisA.createDate)"
                            :edit="false"
                        />
                        <VUpgradeableTextarea
                            v-if="diagnosisA.updateDate != diagnosisA.createDate"
                            :label="t('VetPage.datemod')"
                            :value="formatDate(diagnosisA.updateDate)"
                            :edit="false"
                        />

                        <VUpgradeableTextarea
                            custom-class="font-semibold"
                            :label="t('FarmPage.vet')"
                            :value="diagnosisA.vet"
                            :edit="false"
                        />
                    </div>
                    <VUpgradeableTextarea
                        :label="t('VetPage.diag')"
                        :edit="diagnosisA.edit"
                        :value="diagnosisA.diagnosis"
                        @update="(newValue) => onUpdateDiagnosis('diagnosis', newValue, diagnosisA.id)"
                    />
                    <VUpgradeableTextarea
                        :label="t('VetPage.trat')"
                        :edit="diagnosisA.edit"
                        :value="diagnosisA.treatment"
                        @update="(newValue) => onUpdateDiagnosis('treatment', newValue, diagnosisA.id)"
                    />
                </div>
            </div>
        </div>
    </div>
</template>
