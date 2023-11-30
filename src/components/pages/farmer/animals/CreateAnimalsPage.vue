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
    <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M11.954 11c3.33 0 7.057 6.123 7.632 8.716.575 2.594-.996 4.729-3.484 4.112-1.092-.271-3.252-1.307-4.102-1.291-.925.016-2.379.836-3.587 1.252-2.657.916-4.717-1.283-4.01-4.073.774-3.051 4.48-8.716 7.551-8.716zm10.793-4.39c1.188.539 1.629 2.82.894 5.27-.704 2.341-2.33 3.806-4.556 2.796-1.931-.877-2.158-3.178-.894-5.27 1.274-2.107 3.367-3.336 4.556-2.796zm-21.968.706c-1.044.729-1.06 2.996.082 5.215 1.092 2.12 2.913 3.236 4.868 1.87 1.696-1.185 1.504-3.433-.082-5.215-1.596-1.793-3.824-2.599-4.868-1.87zm15.643-7.292c1.323.251 2.321 2.428 2.182 5.062-.134 2.517-1.405 4.382-3.882 3.912-2.149-.407-2.938-2.657-2.181-5.061.761-2.421 2.559-4.164 3.881-3.913zm-10.295.058c-1.268.451-1.92 2.756-1.377 5.337.519 2.467 2.062 4.114 4.437 3.269 2.06-.732 2.494-3.077 1.377-5.336-1.125-2.276-3.169-3.721-4.437-3.27z"/></svg>
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
            <div class="flex gap-4 w-fit">
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
