<script setup lang="ts">
import { TMessage } from '@/types';
import { formatDate, createAvatar } from '@/helpers';
import { computed } from 'vue';

const API_URL = import.meta.env.VITE_API_URL;

const props = defineProps<{
    message: TMessage;
    role: 'farmer' | 'vet';
}>();

const owner = computed(() => {
    return props.message.role == props.role;
    //return props.message.role.includes(props.role);
});
if (props.message.role == 'veterinarian') props.message.role = 'vet';

function openImageInNewTab() {
    const imageUrl = `${API_URL}${props.message.file}`;
    window.open(imageUrl, '_blank');
}
</script>

<template>
    <div :class="['mb-4 flex', owner && 'flex-row-reverse']">
        <img
            :src="createAvatar(message.sender ?? '?', role)"
            :class="['mb-4 w-8 self-end rounded-full', owner ? 'ml-4' : 'mr-4']"
            alt="avatar"
        />
        <div class="flex flex-col">
            <div
                :class="[
                    'flex w-full flex-col rounded-2xl p-2 shadow-sm',
                    owner ? 'rounded-br-none  bg-emerald-200' : 'rounded-bl-none  bg-sky-200',
                ]"
            >
                <span class="font-medium text-gray-900">{{ message.sender }}</span>
                <span class="pl-2 font-normal text-gray-900">{{ message.message }}</span>
                <img
                    v-if="message.hasFile"
                    class="h-60 w-60 cursor-pointer rounded-lg shadow-sm"
                    :src="`${API_URL}${message.file}`"
                    alt="image"
                    @click="openImageInNewTab"
                />
            </div>
            <small :class="['font-light text-white', owner ? 'self-end' : 'self-start']">
                {{ formatDate(message.date) }}
            </small>
        </div>
    </div>
</template>
