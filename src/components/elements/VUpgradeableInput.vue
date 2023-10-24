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
}

const cancel = () => {
    editMode.value = false;
    text.value = props.value;
}
</script>

<template>
    <span :class="['block text-lg font-medium',styleStore.getLabelStyle ]">{{ label }}</span>
    <div v-if="!editMode" class="flex items-center gap-2">
        <span :class="['block  font-medium', styleStore.getLabelStyle]">{{ value }}</span>
        <button v-if="edit" @click="editMode = true">
            <PencilSquareIcon :class="['h-6 w-6 font-bold text-orange-600', ]" />
        </button>
    </div>
    <div v-else>
        <input class=" "
            type="text"
            v-model="text"
        />

        <div>
            <button @click="cancel">
                <XCircleIcon class="h-5 w-5 text-red-700" />
            </button>

            <button @click="updateValue">
                <CheckCircleIcon class="h-5 w-5 text-green-700" />
            </button>
        </div>
    </div>
</template>
