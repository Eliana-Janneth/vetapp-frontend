<script setup lang="ts">
import { ref } from 'vue';
import { PencilSquareIcon, XCircleIcon, CheckCircleIcon } from '@heroicons/vue/24/solid';
import { useStyleStore, useUserStore } from '@/stores';

const emit = defineEmits(['update']);

const props = defineProps<{
    value: string;
    label?: string;
    edit?: boolean;
    customClass?: string;
}>();
const userStore = useUserStore();

const text = ref(props.value);
const styleStore = useStyleStore();

const editMode = ref(false);

const updateValue = () => {
    emit('update', text.value);
    editMode.value = false;
};

const cancel = () => {
    editMode.value = false;
    text.value = props.value;
};
</script>

<template>
    <div
        :class="[
            'mx-auto w-full border border-x-0 border-t-0 p-2',
            userStore.isVet ? 'border-sky-200/50' : 'border-emerald-200/50',
        ]"
    >
        <span :class="['text-lg font-medium', userStore.isFarmer ? 'text-emerald-600' : 'text-sky-600']">
            {{ label }}</span
        >
        <div v-if="!editMode" class="flex items-center gap-2">
            <span :class="['block font-medium', styleStore.getLabelStyle, customClass]">{{ value }}</span>
            <button v-if="edit" @click="editMode = true">
                <PencilSquareIcon :class="['h-6 w-6 font-bold text-orange-600']" />
            </button>
        </div>
        <div v-else>
            <textarea class="h-auto w-full resize-y rounded-md border p-2" type="text" v-model="text" />

            <div>
                <button @click="cancel">
                    <XCircleIcon class="h-8 w-8 text-red-700 hover:text-red-500" />
                </button>

                <button @click="updateValue">
                    <CheckCircleIcon class="h-8 w-8 text-green-700 hover:text-green-500" />
                </button>
            </div>
        </div>
    </div>
</template>
