<script setup lang="ts">
import { TFarmerChat, TVetChat } from '@/types';

const props = defineProps<{
    role: 'farmer' | 'vet';
    chat: TFarmerChat | TVetChat;
}>();

const url = new URL('https://ui-avatars.com/api/');
url.searchParams.append('name', props.chat[props.role === 'farmer' ? 'vet' : 'farmer']);
url.searchParams.append('background', props.role === 'farmer' ? '#a7f3d0' : '#bae6fd');
url.searchParams.append('color', props.role === 'farmer' ? '#059669' : '#0284c7');
url.searchParams.append('bold', 'true');
url.searchParams.append('uppercase', 'true');
</script>

<template>
    <button class="flex items-center bg-gray-200 px-4 py-2 shadow rounded-lg shrink-0 select-none hover:scale-95 duration-150">
        <img class="mr-4 h-10 w-10 rounded-full shadow" :src="url.href" alt="Avatar" />
        <div class="text-sm">
            <p class="leading-none text-gray-900">{{ chat[props.role === 'farmer' ? 'vet' : 'farmer'] ?? 'nadie' }}</p>
            <p class="text-gray-600">
                <span class="font-semibold">Animal: </span>
                <span>{{ chat.animal }}</span>
            </p>
        </div>
    </button>
</template>
