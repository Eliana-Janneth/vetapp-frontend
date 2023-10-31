<script setup lang="ts">
import { TChat } from '@/types';
import ChatHeader from './ChatHeader.vue';
import InputBottom from './InputBottom.vue';
import { useStyleStore } from '@/stores';


defineProps<{
    role: 'farmer' | 'vet';
    chat: TChat | null;
}>();


const style = useStyleStore();
</script>

<template>
    <section :class="[style.getBackgroundChat]">
        <ChatHeader :role="role" :name="chat?.userName" />
        <p>CHAT: {{ chat }}</p>
        <div class="mt-auto">
        <InputBottom />
    </div>
    </section>
</template>

<style scoped>
/* width */
.scroll-style::-webkit-scrollbar {
    width: 7px;
}

/* Track */
.scroll-style::-webkit-scrollbar-track {
    background: #fff;
}

/* Handle */
.scroll-style::-webkit-scrollbar-thumb {
    background: #c4c4c4;
    border-radius: 16px;
}
</style>
