<script setup lang="ts">
import { useUserStore } from '@/stores';
import Vinput from './VInput.vue';
import { ref } from 'vue';
import VTextArea from './VTextArea.vue';
import VButton from './VButton.vue';

defineProps<{
    customClass?: string;
    label: string;
    description: string;
    update?: boolean;
    type?: 'input' | 'textArea';
    functionUpdate?: Function | any;
}>();

const userStore = useUserStore();
const isEditing = ref(false);

const startEditing = () => {
    isEditing.value = true;
};

const cancelEditing = () => {
    isEditing.value = false;
};

const saveChanges = (newDescription: string) => {
    isEditing.value = false;
    functionUpdate(newDescription);
};
</script>

<template>
    <div
        :class="[
            'mx-auto w-full border border-x-0 border-t-0 lg:max-w-3xl',
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
                        v-if="!isEditing"
                        :class="[
                            'text-base font-normal',
                            userStore.isFarmer ? 'text-emerald-800' : 'text-sky-800',
                            customClass,
                        ]"
                        >{{ description }}</span
                    >
                    <Vinput v-if="isEditing && type == 'input'" width="w-56" />
                    <VTextArea v-if="isEditing && type == 'textArea'" :model-value="description" width="w-56" />

                    <div class="flex lg:flex-col gap-1 p-2">
                        <VButton
                            v-if="update && !isEditing"
                            label="Actualizar"
                            customClass=" w-28 py-1 hover:underline"
                            @click="startEditing"
                        />
                        <VButton
                            v-if="update && isEditing"
                            label="Guardar"
                            custom-class="w-28 py-1 hover:underline"
                            @click="functionUpdate(description)"
                        />
                        <VButton
                            v-if="isEditing"
                            label="Cancelar"
                            class="w-28 py-1 hover:underline"
                            @click="cancelEditing"
                        />
                    </div>
                </dd>
            </div>
        </dl>
    </div>
</template>
