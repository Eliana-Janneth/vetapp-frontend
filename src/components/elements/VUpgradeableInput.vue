<script setup lang="ts">
import { ref } from 'vue';
import { PencilSquareIcon, XCircleIcon, CheckCircleIcon } from '@heroicons/vue/24/solid';

const emit = defineEmits(['update']);

const props = defineProps<{
    value: string;
}>();

const text = ref(props.value);

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
    <div v-if="!editMode" class="flex items-center gap-2">
        <span>{{ value }}</span>
        <button @click="editMode = true">
            <PencilSquareIcon class="h-5 w-5 text-blue-700" />
        </button>
    </div>
    <div v-else>
        <input
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
