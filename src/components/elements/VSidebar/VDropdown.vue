<script setup lang="ts">
import { ref } from 'vue';
import { useUserStore } from '@/stores';
import { ArrowLeftOnRectangleIcon, UserCircleIcon } from '@heroicons/vue/24/solid';
import { vetappApi } from '@/services';
import { useRouter } from 'vue-router';

const userStore = useUserStore();
const router = useRouter();
const route = ref(userStore.isFarmer ? 'profileFarmer' : 'profileFarmer');
const variant = userStore.role;

const variantClass = {
    farmer: 'text-md flex w-full justify-center hover:bg-emerald-600 hover:text-emerald-200',
    veterinarian: 'text-md flex w-full justify-center hover:bg-sky-600 hover:text-sky-200',
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
    <div
        :class="[
            'flex w-48 flex-col items-center gap-2 rounded py-4 text-white/80 ',
            userStore.isFarmer ? 'bg-emerald-500' : 'bg-sky-500',
        ]"
    >
        <router-link :to="{ name: route }" :class="[variantClass[variant]]">
            <UserCircleIcon class="mr-2 h-6 w-6" />
            Mi Perfil
        </router-link>
        <button :class="[variantClass[variant]]" @click="onLogout">
            <ArrowLeftOnRectangleIcon class="mr-2 h-6 w-6" />
            Cerrar Sesión
        </button>
    </div>
</template>
