<script setup lang="ts">
import { useUserStore } from '@/stores';
import VPopover from '../VPopover.vue';
import VItem from './VItem.vue';
import VDropdown from './VDropdown.vue';
import { ref } from 'vue';
import {
    ChatBubbleLeftEllipsisIcon,
    ArrowPathRoundedSquareIcon,
    StarIcon,
    ChevronUpIcon,
    UserGroupIcon,
} from '@heroicons/vue/24/solid';

const userStore = useUserStore();
const variantProfile = {
    farmer: 'btn-menu-farmer',
    vet: 'btn-menu-vet',
};
const variant = ref(userStore.isFarmer ? 'farmer' : 'vet');

const farmerSidebarItems = ref([
    { route: 'animals.index', label: 'Mis animales', icon: StarIcon },
    { route: 'vetsAvailables.index', label: 'Veterinarios', icon: UserGroupIcon },
    { route: 'chat', label: 'Consultas', icon: ChatBubbleLeftEllipsisIcon },
]);
const vetSidebarItems = ref([
    { route: 'patients.index', label: 'Mis Pacientes', icon: ChatBubbleLeftEllipsisIcon },
    { route: 'requests.show', label: 'Solicitudes', icon: ArrowPathRoundedSquareIcon },
    { route: 'chat', label: 'Consultas', icon: ChatBubbleLeftEllipsisIcon },

]);
</script>

<template>
    <div :class="['flex flex-col justify-between', userStore.isFarmer ? 'bg-emerald-600' : 'bg-sky-600']">
        <div class="p-4">
            <h1 class="text-center text-3xl font-semibold text-white">VetApp</h1>
        </div>

        <div class="px-4">
            <hr :class="['w-full', userStore.isFarmer ? 'border-emerald-200' : 'border-sky-200']" />
        </div>

        <div class="flex-1 py-4">
            <ul class="flex flex-col gap-2">
                <li v-if="variant === 'farmer'" v-for="farmerItem in farmerSidebarItems" :key="farmerItem.route">
                    <VItem
                        :route="farmerItem.route"
                        :custom-class="variantProfile.farmer"
                        :label="farmerItem.label"
                        :icon="farmerItem.icon"
                    />
                </li>
                <li v-else-if="variant === 'vet'" v-for="vetItem in vetSidebarItems" :key="vetItem.route">
                    <VItem
                        :route="vetItem.route"
                        :custom-class="variantProfile.vet"
                        :label="vetItem.label"
                        :icon="vetItem.icon"
                    />
                </li>
            </ul>
        </div>

        <div>
            <VPopover placement="top-end">
                <template #reference="{ toggle }">
                    <button
                        @click="toggle"
                        :class="[
                            'flex w-full items-center justify-between gap-4 p-4',
                            userStore.isFarmer
                                ? 'text-emerald-200 hover:bg-emerald-700'
                                : 'text-sky-200 hover:bg-sky-700',
                        ]"
                    >
                        <div class="flex items-center gap-4">
                            <img class="h-8 w-8 rounded-full" alt="name user" :src="userStore.getAvatar" />
                            <span class="flex font-semibold">{{ userStore.name }}</span>
                        </div>
                        <ChevronUpIcon class="h-6 w-6" />
                    </button>
                </template>

                <VDropdown />
            </VPopover>
        </div>
    </div>
</template>
