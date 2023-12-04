<script setup lang="ts">
import { useUserStore } from '@/stores';
import { ArrowLeftOnRectangleIcon, UserCircleIcon, GlobeAltIcon } from '@heroicons/vue/24/solid';
import { vetappApi } from '@/services';
import { useRouter } from 'vue-router';
import LanguageSwitch from '../LanguageSwitch.vue';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

const userStore = useUserStore();
const router = useRouter();
const variant = userStore.role;

const variantClass = {
    farmer: 'text-md flex w-full justify-center hover:bg-emerald-600 hover:text-emerald-200',
    vet: 'text-md flex w-full justify-center hover:bg-sky-600 hover:text-sky-200',
};

const onLogout = async () => {
    try {
        await vetappApi.logout().then(() => {
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
        <router-link :to="{ name: 'profile' }" :class="[variantClass[variant]]">
            <UserCircleIcon class="mr-2 h-6 w-6" />
            {{ t('VetPage.myprofile') }}
        </router-link>
        <button :class="[variantClass[variant]]" @click="onLogout">
            <ArrowLeftOnRectangleIcon class="mr-2 h-6 w-6" />
            {{ t('VetPage.off') }}
        </button>
        <div class="flex"><GlobeAltIcon class="h-6 w-6" /><language-switch /></div>
    </div>
</template>
