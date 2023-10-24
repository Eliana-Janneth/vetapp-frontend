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
}
</script>

<template>
    <div>
        <VButton custom-class="py-0 items-center" label="Regresar" type="submit" @click="$router.push({ name: 'animals.index' })" />
        <img class="h-20" :src="loader" v-if="animal === undefined" />
        <p v-else-if="animal === null">El animal no existe</p>
        <div v-else>
            <div class="m-4 border border-x-2 border-emerald-200/50 p-2">

                <!-- Input actualizable -->
                <VUpgradeableInput :value="animal.name" @update="(newValue) => updateValue('name', newValue)" />

                <VDetails class="border-t-0" label="Nombre" :description="animal.name" :update="true" />
                <VDetails label="Especie" :description="animal.specie_name" />
                <VDetails label="Raza" :description="animal.race_name" />
                <VDetails label="Color" :description="animal.color" :update="true" />
                <VDetails label="Género" :description="animal.gender" />
                <VDetails label="Fecha de Nacimiento" :description="animal.birth_date" :update="true" />
                <VDetails label="Peso" :description="animal.weight" :update="true" />
                <VDetails label="Altura" :description="animal.height" :update="true" />
                <VDetails class="border-b-0" label="Descripción" :description="animal.description" :update="true" />
            </div>

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
