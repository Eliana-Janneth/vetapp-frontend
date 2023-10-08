<script setup lang="ts">
import { useUserStore } from '@/stores';
import {
    HomeIcon,
    ChatBubbleLeftEllipsisIcon,
    ArrowPathRoundedSquareIcon,
    UserCircleIcon,
    StarIcon,
} from '@heroicons/vue/24/solid';
import VSidebarItem from './VSidebarItem.vue';
import { ref } from 'vue';

const userStore = useUserStore();
const variantProfile = {
    farmer: 'btn-menu-farmer',
    vet: 'btn-menu-vet',
};
const variantStyle = {
    farmer: 'text-emerald-700 hover:text-emerald-900 border-emerald-700',
    vet: 'text-sky-700 hover:text-sky-900 border-sky-700',
};
const variant =ref(userStore.isFarmer ? 'farmer' : 'vet');

const farmerSidebarItems = ref([
    { route: '', label: 'Home', icon: HomeIcon },
    { route: '', label: 'Consultas', icon: ChatBubbleLeftEllipsisIcon },
    { route: 'animals', label: 'Mis animales', icon: StarIcon },
    { route: 'profileFarmer', label: 'Perfil', icon: UserCircleIcon },
]);
const vetSidebarItems = ref([
    { route: 'animals', label: 'Home', icon: HomeIcon },
    { route: '', label: 'Consultas', icon: ChatBubbleLeftEllipsisIcon },
    { route: '', label: 'Solicitudes', icon: ArrowPathRoundedSquareIcon },
    { route: '', label: 'Perfil', icon: UserCircleIcon },
]);
</script>

<template>
    <div :class="['flex flex-col justify-between', userStore.isFarmer ? 'bg-emerald-600' : 'bg-sky-600']">
        <div class="p-4">
            <h1 class="text-white font-semibold text-3xl text-center">VetApp</h1>
         <hr :class="['border-1 w-full', variantStyle[variant]]" /> 
        </div>
        <div class="mt-4 flex-1">
                <ul class="flex flex-col gap-2">
                    <li v-if="variant === 'farmer'" v-for="item in farmerSidebarItems" :key="item.route">
                        <VSidebarItem
                            :route="item.route"
                            :custom-class="variantProfile.farmer"
                            :label="item.label"
                            :icon="item.icon"
                        />
                    </li>
                    <li v-else-if="variant === 'vet'" v-for="item in vetSidebarItems" :key="item.route">
                        <VSidebarItem
                            :route="item.route"
                            :custom-class="variantProfile.vet"
                            :label="item.label"
                            :icon="item.icon"
                        />
                    </li>
                </ul>
            </div>
        <div>
            <button :class="['flex items-center gap-4 w-full p-4', userStore.isFarmer ? 'hover:bg-emerald-700' : 'hover:bg-sky-700']">
                <img class="h-8 w-8 rounded-full" :src="userStore.getAvatar" />
                <span :class="['font-semibold', userStore.isFarmer ? 'text-emerald-200' : 'text-sky-200']">{{ userStore.name }}</span>
            </button>
        </div>
    </div>


<!---
    <div class="hidden h-full w-56 flex-col bg-white p-4 lg:block">
        <div class="flex justify-between p-2">
            <div :class="['flex flex-col text-3xl font-semibold', variantStyle[variant]]">
                <h1>VetApp</h1>
            </div>
        </div>
        <hr :class="['border-1 w-full', variantStyle[variant]]" />
        <div class="mt-4 flex-1">
            <ul class="flex flex-col gap-2">
                <li v-if="variant === 'farmer'" v-for="item in farmerSidebarItems" :key="item.route">
                    <VSidebarItem
                        :route="item.route"
                        :custom-class="variantProfile.farmer"
                        :label="item.label"
                        :icon="item.icon"
                    />
                </li>
                <li v-else-if="variant === 'vet'" v-for="item in vetSidebarItems" :key="item.route">
                    <VSidebarItem
                        :route="item.route"
                        :custom-class="variantProfile.vet"
                        :label="item.label"
                        :icon="item.icon"
                    />
                </li>
            </ul>
        </div>

        <div class="mt-auto">
            <VSidebarItem
                route=""
                custom-class="btn-menu-vet bottom-4 left-4"
                label="Cerrar Sesión"
                :icon="ArrowLeftOnRectangleIcon"
                @click="$emit('cerrarSesion')"
            />
        </div>
    </div> -->
</template>
