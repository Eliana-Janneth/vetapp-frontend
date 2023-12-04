<script setup lang="ts">
import { ref, onMounted, watch } from 'vue';
import { VButton, VSelect, VTextArea, VTextField, VLoader } from '@elements';
import { useForm } from 'vee-validate';
import { TRegisterAnimalPayload, vetappApi } from '@/services';
import type { TRegisterAnimal } from './types';
import * as yup from 'yup';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

const validationSchema = yup.object({
    name: yup.string().required(t('FarmPage.valname2')).min(3, t('FarmPage.valminname')),
    specie: yup.string().required(t('FarmPage.valspecie')),
    race: yup.string().required(t('FarmPage.valbreed2')),
    birthdate: yup.string().required(t('FarmPage.valbdate')),
    weight: yup.number().required(t('FarmPage.valpeso2')),
    height: yup.number().required(t('FarmPage.valalt2')),
    color: yup.string().required(t('FarmPage.valcolor2')),
    gender: yup.string().required(t('FarmPage.valgender')),
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
        class="mx-auto grid max-w-3xl grid-cols-1 items-center gap-4 rounded-lg bg-emerald-100/70 p-4 sm:grid-cols-4"
        @submit="onSubmit"
    >
        <VTextField
            container-class="sm:col-span-2"
            :label="t('FarmPage.name')"
            :placeholder="t('FarmPage.valname')"
            type="text"
            name="name"
        />

        <VSelect
            placeholder="Seleccione la especie"
            :label="t('FarmPage.specie')"
            name="specie"
            :options="species"
            @update:modelValue="loadRaces"
        />

        <VSelect :label="t('FarmPage.breed')" name="race" :placeholder="t('FarmPage.valbreed')" :options="races" />

        <VTextField container-class="sm:col-span-2" :label="t('FarmPage.bdate')" type="date" name="birthdate" />

        <VTextField
            class="sm:w-min-xs sm:col-span-1"
            :label="t('FarmPage.peso')"
            :placeholder="t('FarmPage.valpeso1')"
            type="number"
            name="weight"
        />
        <VTextField
            class="sm:w-min-xs sm:col-span-1"
            :label="t('FarmPage.alt')"
            :placeholder="t('FarmPage.valalt')"
            type="number"
            name="height"
        />

        <VTextArea
            container-class="sm:col-span-2"
            :label="t('FarmPage.color')"
            :placeholder="t('FarmPage.valcolor')"
            name="color"
        />
        <VTextArea
            container-class="sm:col-span-2"
            :label="t('FarmPage.description')"
            :placeholder="t('FarmPage.valdescription')"
            name="description"
        />

        <div class="sm:col-span-2">
            <div class="flex w-fit gap-4">
                <VTextField
                    class="w-min sm:col-span-1"
                    :label="t('FarmPage.male')"
                    type="radio"
                    name="gender"
                    value="Macho"
                />
                <VTextField
                    class="w-min sm:col-span-1"
                    :label="t('FarmPage.female')"
                    type="radio"
                    name="gender"
                    value="Hembra"
                />
            </div>
        </div>

        <div class="flex gap-4 sm:col-span-2">
            <VButton
                class="w-max-lg"
                :label="t('VetPage.cancel')"
                variant="danger"
                @click="$router.push({ name: 'animals.index' })"
            />
            <VButton :label="t('VetPage.save')" class="w-max-lg" type="submit" variant="success">
                <div v-if="isSubmitting" class="flex items-center gap-2">
                    <VLoader class="h-6" />
                    <span>{{ $t('FarmPage.saving') }}</span>
                </div>
            </VButton>
        </div>
    </form>
</template>
