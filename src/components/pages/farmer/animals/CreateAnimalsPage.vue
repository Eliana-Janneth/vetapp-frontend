<script setup lang="ts">
import { ref, onMounted, watch } from 'vue';
import { VButton, VSelect, VTextArea, VTextField, VLoader } from '@elements';
import { useForm } from 'vee-validate';
import { TRegisterAnimalPayload, vetappApi } from '@/services';
import type { TRegisterAnimal } from './types';
import * as yup from 'yup';

const validationSchema = yup.object({
    name: yup.string().required('Por favor ingrese un nombre').min(3, 'El nombre debe tener al menos 3 caracteres'),
    specie: yup.string().required('Por favor seleccione una especie'),
    race: yup.string().required('Por favor seleecione una raza'),
    birthdate: yup.string().required('Por favor ingrese una fecha de nacimiento'),
    weight: yup.number().required('Por favor ingrese un peso'),
    height: yup.number().required('Por favor ingrese una altura'),
    color: yup.string().required('Por favor ingrese un color'),
    gender: yup.string().required('Por favor seleccione un género'),
});

const { handleSubmit, isSubmitting, resetForm } = useForm<TRegisterAnimal>({
    validationSchema,
});

const species = ref<{ text: string; value: string }[]>([]);
const races = ref<{ text: string; value: string }[]>([]);
const selectedSpeciesId = ref('');

onMounted(async () => {
    try {
        species.value = await vetappApi.getSpecies();
        console.log(species);
    } catch (error) {
        console.error('Error al cargar los datos:', error);
    }
});
const loadRaces = async (specieId: string) => {
    try {
        races.value = await vetappApi.getRaces(specieId);
    } catch (error) {
        console.error('Error al cargar las razas:', error);
    }
};

watch(selectedSpeciesId, (newSpeciesId: string) => {
    if (newSpeciesId !== null) {
        loadRaces(newSpeciesId);
    } else {
        races.value = [];
    }
});

const onSubmit = handleSubmit(async (values: TRegisterAnimal) => {
    try {
        const payload: TRegisterAnimalPayload = {
            name: values.name,
            birth_date: values.birthdate,
            color: values.color,
            description: values.description,
            gender: values.gender,
            height: values.height,
            race: values.race,
            specie: values.specie,
            weight: values.weight,
        };
        await vetappApi.createAnimal(payload);
        console.log(JSON.stringify(values, null, 2));
        resetForm();
    } catch (error) {}
});
</script>

<template>
    <form
        class="grid grid-cols-1 items-center gap-4 rounded-lg bg-emerald-100/70 p-4 sm:grid-cols-6"
        @submit="onSubmit"
    >
        <VTextField
            container-class="sm:col-span-2"
            label="Nombre"
            placeholder="Escribe su nombre"
            type="text"
            name="name"
        />
        <VSelect
            container-class="sm:col-span-2"
            placeholder="Seleccione la especie"
            label="Especie"
            name="specie"
            :options="species"
            @update:modelValue="loadRaces"
        />

        <VSelect
            container-class="sm:col-span-2"
            label="Raza"
            name="race"
            placeholder="Seleccione la raza"
            :options="races"
        />

        <VTextField class="w-min sm:col-span-1" label="Macho" type="radio" name="gender" value="Macho" />
        <VTextField class="w-min sm:col-span-1" label="Hembra" type="radio" name="gender" value="Hembra" />

        <VTextField
            class="sm:w-min-xs sm:col-span-1"
            label="Peso (Kg)"
            placeholder="Ingresa su peso"
            type="number"
            name="weight"
        />
        <VTextField
            class="sm:w-min-xs sm:col-span-1"
            label="Altura (Cm)"
            placeholder="Ingresa su altura"
            type="number"
            name="height"
        />

        <VTextField container-class="sm:col-span-2" label="Fecha de Nacimiento" type="date" name="birthdate" />

        <VTextArea
            container-class="sm:col-span-3"
            label="Color"
            placeholder="Describe su aspecto fisico"
            name="color"
        />
        <VTextArea
            container-class="sm:col-span-3"
            label="Descripción"
            placeholder="Describe alguna caracteristica importante"
            name="description"
        />
        <div class="flex w-full justify-center gap-2 sm:col-span-6">
            <VButton
                class="w-max-lg"
                label="Cancelar"
                variant="danger"
                @click="$router.push({ name: 'animals.index' })"
            />
            <VButton label="Guardar" class="w-max-lg" type="submit" variant="success">
                <div v-if="isSubmitting" class="flex items-center gap-2">
                    <VLoader class="h-6" />
                    <span>Guardando</span>
                </div>
            </VButton>
        </div>
        <!-- <VButton
            label="Guardar"
            class="w-full sm:col-span-2"
            type="submit"
            variant="success"
            :disabled="!meta.valid"
            :class="['form-button-farmer ', !meta.valid && 'pointer-events-none opacity-50']"
        >
            <div v-if="isSubmitting" class="flex items-center gap-2">
                <VLoader class="h-6" />
                <span>Enviando</span>
            </div>
        </VButton> -->
    </form>
</template>
