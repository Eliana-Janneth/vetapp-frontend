<script setup lang="ts">
import { VSidebar, VTopbar, LeftContentModal } from '@elements';
import { ref } from 'vue';

const leftContentModal = ref();

</script>

<template>
    <div class="flex h-screen w-full flex-col lg:flex-row">
        <VTopbar class="lg:hidden" @open="leftContentModal?.open" />
        <LeftContentModal class="lg:hidden" ref="leftContentModal">
            <VSidebar class="w-56" />
        </LeftContentModal>

        <VSidebar class="hidden w-56 lg:flex" />
        <div
            :class="[
                'flex flex-1 flex-col p-4',
                // role === 'farmer' ? 'bg-emerald-900' : '',
                // role === 'vet' ? 'bg-sky-900' : '',
            ]"
        >
            <slot />
        </div>
    </div>
</template>
