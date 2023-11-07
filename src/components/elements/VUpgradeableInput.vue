<script setup lang="ts">
import { ref } from 'vue';
import { PencilSquareIcon, XCircleIcon, CheckCircleIcon } from '@heroicons/vue/24/solid';
import { useStyleStore } from '@/stores';

const emit = defineEmits(['update']);

const props = defineProps<{
    value: string;
    label?: string;
    edit?: boolean;
}>();

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
    <div class="m-2 rounded-xl bg-emerald-100/70 p-2">
        <span :class="['block text-lg font-semibold', styleStore.getLabelStyle]">{{ label }}</span>
        <div v-if="!editMode" class="flex items-center gap-2">
            <span :class="['block font-medium', styleStore.getLabelStyle]">{{ value }}</span>
            <button v-if="edit" @click="editMode = true">
                <PencilSquareIcon :class="['h-6 w-6 font-bold text-orange-600']" />
            </button>
        </div>
        <div v-else>
            <input
                class="rounded-md border w-full border-emerald-500 p-1 focus:border-emerald-400"
                type="text"
                v-model="text"
            />

            <div class="mt-2 justify-center flex">
                <button @click="cancel">
                    <XCircleIcon class="h-7 w-7 text-red-700 hover:text-red-500" />
                </button>

                <button @click="updateValue">
                    <CheckCircleIcon class="h-7 w-7 text-green-700 hover:text-green-500" />
                </button>
            </div>
        </div>
    </div>
</template>
