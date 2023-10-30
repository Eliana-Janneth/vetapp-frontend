<script setup lang="ts">
import { MagnifyingGlassIcon, EllipsisVerticalIcon } from '@heroicons/vue/24/outline';
import { useAvatarStore } from '@/stores';
import { TFarmerChat, TVetChat } from '@/types';

const avatar  = useAvatarStore();
const props = defineProps<{
    role: 'farmer' | 'vet';
    chat: TFarmerChat | TVetChat;
}>();

</script>
<template>
    <div class="flex bg-white">
        <div class="flex flex-grow">
            <div class="relative m-2 mr-4 w-12">
                <img class="mr-4 h-10 w-10 rounded-full shadow" :src="avatar.getAvatar(props.role, props.role)" alt="Avatar" />

                <div class="absolute bottom-0 right-0 rounded-full border-2 border-gray-800 bg-green-300 p-1"></div>
            </div>
            <div class="flex flex-col justify-center">
                <p class="font-bold">{{ role }}</p>
                <small class="font-light text-gray-500" >En línea</small>
            </div>
        </div>

        <MagnifyingGlassIcon class="lg:mr-2 w-6 text-gray-500" />
        <EllipsisVerticalIcon class="w-6 text-gray-500" />
    </div>
</template>
