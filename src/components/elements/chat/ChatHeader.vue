<script setup lang="ts">
import { useAvatarStore } from '@/stores';

const avatar = useAvatarStore();

defineProps<{
    role: 'farmer' | 'vet';
    name: string | undefined;
}>();
</script>
<template>
    <div class="flex bg-white">
        <div class="flex flex-grow">
            <div class="relative m-2 mr-4 w-12">
                <img class="mr-4 h-10 w-10 rounded-full shadow" :src="avatar.getAvatar(name ?? '?', role)" alt="Avatar" />
            </div>
            <div class="flex flex-col justify-center">
                <p class="font-bold">{{ name }}</p>
            </div>
        </div>
        <!--
        <MagnifyingGlassIcon class="w-6 text-gray-500 lg:mr-2" />
        <EllipsisVerticalIcon class="w-6 text-gray-500" />-->
    </div>
</template>
