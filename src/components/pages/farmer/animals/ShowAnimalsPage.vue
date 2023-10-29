<script setup lang="ts">
import { ref, computed } from 'vue';
import { VDetails, VButton, VUpgradeableInput } from '@elements';
import { useRoute } from 'vue-router';
import { vetappApi } from '@/services';
import { formatDate } from '@/helpers';
import loader from '@/assets/loader.svg';

const route = useRoute();
const animal = ref();

const animalId = computed(() => String(route.params.id));

vetappApi
    .getAnimal(animalId.value)
    .then((res) => {
        animal.value = res;
    })
    .catch((err) => {
        console.log(err);
        animal.value = null;
    });

const diagnosisAnimal = ref();

vetappApi
    .getDiagnosisFarmer(animalId.value)
    .then((res) => {
        diagnosisAnimal.value = res;
    })
    .catch((err) => {
        console.log(err);
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
        <VButton
            custom-class="py-0 items-center"
            label="Regresar"
            type="submit"
            @click="$router.push({ name: 'animals.index' })"
        />
        <img class="h-20" :src="loader" v-if="animal === undefined" />
        <p v-else-if="animal === null">El animal no existe</p>
        <div v-else>
            <div class="m-4 gap-2 border border-x-2 border-emerald-200/50 p-2">
                <VUpgradeableInput
                    label="Nombre"
                    :value="animal.name"
                    :edit="true"
                    @update="(newValue) => updateValue('name', newValue)"
                />
                <VUpgradeableInput label="Especie" :edit="false" :value="animal.specie_name" />
                <VUpgradeableInput label="Raza" :edit="false" :value="animal.race_name" />
                <VUpgradeableInput
                    label="Color"
                    :value="animal.color"
                    :edit="true"
                    @update="(newValue) => updateValue('color', newValue)"
                />
                <VUpgradeableInput label="Genero" :edit="false" :value="animal.gender" />
                <VUpgradeableInput
                    label="Fecha de Nacimiento"
                    :value="animal.birth_date"
                    :edit="true"
                    @update="(newValue) => updateValue('gender', newValue)"
                />
                <VUpgradeableInput
                    label="Peso"
                    :value="animal.weight"
                    :edit="true"
                    @update="(newValue) => updateValue('weight', newValue)"
                />
                <VUpgradeableInput
                    label="Altura"
                    :value="animal.height"
                    :edit="true"
                    @update="(newValue) => updateValue('height', newValue)"
                />
                <VUpgradeableInput
                    label="Descripción"
                    :value="animal.description"
                    :edit="true"
                    @update="(newValue) => updateValue('description', newValue)"
                />
            </div>
            <VButton
                custom-class="py-0 items-center"
                label="Descargar historial médico"
                @click="downloadFile()"
            />
            <div v-if="diagnosisAnimal" class="m-2 flex flex-col">
                <div class="" v-for="diagnosisA in diagnosisAnimal" :key="diagnosisA.id">
                    <div class="mx-auto mb-2 ml-2 mr-2 flex flex-col items-center rounded-lg bg-sky-100/70 p-2">
                        <VDetails
                            custom-class="font-semibold"
                            label="Fecha"
                            :description="formatDate(diagnosisA.create_date)"
                        />
                        <VDetails
                            v-if="diagnosisA.update_date != diagnosisA.create_date"
                            label="Fecha Modificación"
                            :description="formatDate(diagnosisA.update_date)"
                        />
                        <VDetails label="Diagnostico" :description="diagnosisA.diagnosis" />
                        <VDetails label="Tratamiento" :description="diagnosisA.treatment" />
                        <VDetails label="Veterinario" :description="diagnosisA.vet_name" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
