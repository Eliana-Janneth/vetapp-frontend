<script setup lang="ts">
import { ref, computed } from 'vue';
import { VDetails, VButton, VUpgradeableInput } from '@elements';
import { useRoute } from 'vue-router';
import { vetappApi } from '@/services';
import { formatDate } from '@/helpers';
import loader from '@/assets/loader.svg';
import { TAnimal } from '@/types/animal';
import { TDiagnosis } from '@/types';
import { ArrowLeftCircleIcon } from '@heroicons/vue/24/outline';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

const route = useRoute();
const animal = ref<TAnimal>();
let isValid = true;
const animalId = computed(() => String(route.params.id));

vetappApi
    .getAnimal(animalId.value)
    .then((res) => {
        animal.value = res;
    })
    .catch(() => {
        isValid = false;
    });

const diagnosisAnimal = ref<TDiagnosis[]>();

vetappApi.getDiagnosisFarmer(animalId.value).then((res) => {
    diagnosisAnimal.value = res;
});

const updateValue = (name: string, newValue: string) => {
    vetappApi.updateAnimal(animalId.value, { [name]: newValue }).then((res) => {
        animal.value = res;
    });
};

const downloadFile = () => {
    vetappApi.downloadMedicalHistoryFarmer(animalId.value);
};
</script>

<template>
    <div>
        <VButton class="flex w-fit items-center rounded-full p-1" @click="$router.push({ name: 'animals.index' })"
            ><ArrowLeftCircleIcon class="h-7 w-7"
        /></VButton>
        <img v-if="!isValid" class="rounded-lg lg:h-[600px] lg:w-[700px]" src="@/assets/img/Error404.jpg" alt="404" />
        <img class="h-20" :src="loader" v-if="animal === undefined" alt="loader" />
        <p v-else-if="animal === null">{{  $t('FarmPage.animalnoexist') }}</p>
        <div v-else>
            <div class="m-2 grid grid-cols-1 rounded-xl sm:grid-cols-8 lg:gap-2">
                <VUpgradeableInput
                    class="sm:col-span-2"
                    :label="t('FarmPage.name')"
                    :value="animal.name"
                    :edit="true"
                    @update="(newValue) => updateValue('name', newValue)"
                />
                <VUpgradeableInput
                    class="sm:col-span-2"
                    :label="t('FarmPage.specie')"
                    :edit="false"
                    :value="animal.specie"
                />
                <VUpgradeableInput
                    class="sm:col-span-2"
                    :label="t('FarmPage.breed')"
                    :edit="false"
                    :value="animal.race"
                />
                <VUpgradeableInput
                    class="sm:col-span-2"
                    :label="t('FarmPage.gender')"
                    :edit="false"
                    :value="animal.gender"
                />

                <VUpgradeableInput
                    class="sm:col-span-4"
                    label="Color"
                    :value="animal.color"
                    :edit="true"
                    @update="(newValue) => updateValue('color', newValue)"
                />
                <VUpgradeableInput
                    class="sm:col-span-2"
                    :label="t('FarmPage.bdate')"
                    :value="animal.birthdate"
                    :edit="true"
                    @update="(newValue) => updateValue('birth_date', newValue)"
                />
                <VUpgradeableInput
                    class="sm:col-span-1"
                    :label="t('FarmPage.peso')"
                    :value="animal.weight"
                    :edit="true"
                    @update="(newValue) => updateValue('weight', newValue)"
                />
                <VUpgradeableInput
                    class="sm:col-span-1"
                    :label="t('FarmPage.alt')"
                    :value="animal.height"
                    :edit="true"
                    @update="(newValue) => updateValue('height', newValue)"
                />
                <VUpgradeableInput
                    class="sm:col-span-8"
                    :label="t('FarmPage.description')"
                    :value="animal.description"
                    :edit="true"
                    @update="(newValue) => updateValue('description', newValue)"
                />
                <VButton
                    class="mx-auto mt-2 flex w-fit px-6 sm:col-span-8"
                    :label="t('FarmPage.deshist')"
                    @click="downloadFile()"
                />
            </div>

            <div
                v-if="diagnosisAnimal"
                class="m-4 flex flex-col rounded-lg bg-emerald-100/70 p-2"
                v-for="diagnosisA in diagnosisAnimal"
                :key="diagnosisA.id"
            >
                <div class="flex flex-col justify-start md:flex-row">
                    <VDetails
                        custom-class="font-semibold"
                        label="Fecha"
                        :description="formatDate(diagnosisA.createDate)"
                    />
                    <VDetails
                        v-if="diagnosisA.updateDate != diagnosisA.createDate"
                        label="Fecha Modificación"
                        :description="formatDate(diagnosisA.updateDate)"
                    />
                    <VDetails label="Veterinario" :description="diagnosisA.vet" />
                </div>

                <VDetails label="Diagnostico" :description="diagnosisA.diagnosis" />
                <VDetails label="Tratamiento" :description="diagnosisA.treatment" />
            </div>
        </div>
    </div>
</template>
