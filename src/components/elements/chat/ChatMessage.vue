<script setup lang="ts">
import { TMessage } from '@/types';
import { formatDate, createAvatar } from '@/helpers';
import { computed } from 'vue';

const props = defineProps<{
    message: TMessage;
    role: 'farmer' | 'vet';
}>();

const owner = computed(() => {
    return props.role === props.message.role;
});
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
                    'flex w-full flex-col rounded-2xl bg-emerald-200 p-2 shadow-sm',
                    owner ? 'rounded-br-none' : 'rounded-bl-none',
                ]"
            >
                <span class="font-medium text-gray-900">{{ message.sender }}</span>
                <span class="pl-2 font-normal text-gray-900">{{ message.message }}</span>
            </div>
            <small :class="['font-light text-white', owner ? 'self-end' : 'self-start']">{{
                formatDate(message.date)
            }}</small>
        </div>
    </div>
</template>
