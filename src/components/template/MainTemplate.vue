<script setup lang="ts">
import { VSidebar, VSidebarButton } from '@elements'
import { ref } from 'vue'

const user = JSON.parse(localStorage.getItem('user') ?? '{}');

const props = withDefaults(defineProps<{
    role?: 'farmer' | 'vet';
}>(), {
    role: 'farmer',
});

const open = ref(true);

const showSidebarButton = ref(!open.value);

const openSidebar = () => {
    showSidebarButton.value = false;
    open.value = true;
};

const closeSidebar = () => {
    open.value = false;
    setTimeout(() => {
        showSidebarButton.value = true;
    }, 500);
};

const onLogout = () => {
    try {
        vetappApi.logout().then(() => {
            router.push({ name: 'welcome' });
        });
    } catch (error) {
        console.error('Error al cargar los datos:', error);
    }
};
</script>

<template>
    <div class="flex h-screen w-full">

        <VSidebar :opennn="true" variant="farmer"/>

        <div :class="{
            'bg-emerald-900': role === 'farmer',
            'bg-sky-900': role === 'vet',
            'flex-1 flex flex-col p-4':true
        }">
            <slot />
        </div>
    </div>
</template>
