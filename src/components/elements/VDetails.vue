<script setup lang="ts">
import { useUserStore } from '@/stores';
import Vinput from './VInput.vue';
import { useForm } from 'vee-validate';
import { vetappApi } from '@/services';
import { useRoute } from 'vue-router';
import { ref, computed } from 'vue';

defineProps<{
    customClass?: string;
    label: string;
    description: string;
    update?: boolean;
    saveChanges?: Function;
}>();

const route = useRoute();
const userStore = useUserStore();
const { handleSubmit } = useForm();
const isEditing = ref(false);
const editedDescription = ref('');
const animalId = computed(() => route.params.id.toString());

const startEditing = () => {
    isEditing.value = true;
};

const cancelEditing = () => {
    isEditing.value = false;
    editedDescription.value = description;
};

// const saveChanges = () => {
//     saveChanges(editedDescription.value);
//     isEditing.value = false;
// };
const onUpdate = handleSubmit(async () => {
    try {
        await vetappApi.updateAnimal( editedDescription.value, animalId.value);
        console.log(editedDescription.value)
        console.log('Animal actualizado');
    } catch (error) {
        console.error('Error al actualizar el animal:', error);
    }
});
</script>

<template>
    <div
        :class="[
            'mx-auto w-full lg:max-w-3xl border border-x-0 border-t-0',
            userStore.isVet ? 'border-sky-200/50' : 'border-emerald-200/50',
        ]"
    >
        <dl class="p-2">
            <div class="flex flex-col">
                <dt :class="['text-lg font-medium', userStore.isFarmer ? 'text-emerald-600' : 'text-sky-600']">
                    {{ label }}
                </dt>
                <dd class="ml-2 flex flex-col justify-between text-justify lg:flex-row">
                    <span
                        :class="[
                            'text-base font-normal',
                            userStore.isFarmer ? 'text-emerald-800' : 'text-sky-800',
                            customClass,
                        ]"
                        >{{ description }}</span
                    >
                    <Vinput v-if="isEditing" v-model="editedDescription" label="Nuevo" width="w-56"/>

                    <button
                        v-if="update && !isEditing"
                        class="font-medium text-emerald-500 hover:underline"
                        @click="startEditing"
                    >
                        Actualizar
                    </button>
                    <button
                        v-if="update && isEditing"
                        class="font-medium text-emerald-500 hover:underline"
                        @click="onUpdate"
                    >
                        Guardar
                    </button>
                    <button
                        v-if="isEditing"
                        class="font-medium text-emerald-500 hover:underline"
                        @click="cancelEditing"
                    >
                        Cancelar
                    </button>
                </dd>
            </div>
        </dl>
    </div>
</template>
