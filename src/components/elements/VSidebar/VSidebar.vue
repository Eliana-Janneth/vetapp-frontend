<script setup lang="ts">
import { useTransitionState } from 'vue';
import {
    HomeIcon,
    ChatBubbleLeftEllipsisIcon,
    ArrowPathRoundedSquareIcon,
    XMarkIcon,
    UserCircleIcon,
    ArrowLeftOnRectangleIcon,
    StarIcon
} from '@heroicons/vue/24/solid';
import VSidebarItem from './VSidebarItem.vue';
import VSidebarButton from './VSidebarButton.vue';
import { Bars3Icon } from '@heroicons/vue/24/solid';

import { ref } from 'vue';
defineProps<{
    opennn?: boolean;
    variant: 'farmer' | 'vet';
}>();
const variantProfile = {
    farmer: 'btn-menu-farmer',
    vet: 'btn-menu-vet',
};
const variantStyle = {
    farmer: 'text-emerald-700 hover:text-emerald-900 border-emerald-700',
    vet: 'text-sky-700 hover:text-sky-900 border-sky-700',
}
defineEmits(['close', 'openUser', 'cerrarSesion']);

const open = ref(false);
const setOpen = (value: boolean) => {
    open.value = value;
};
const farmerSidebarItems = ref([
    { route: "", label: "Home", icon: HomeIcon },
    { route: "", label: "Consultas", icon: ChatBubbleLeftEllipsisIcon },
    { route: "animals", label: "Mis animales", icon: StarIcon },
    { route: "profileFarmer", label: "Perfil", icon: UserCircleIcon },

]);
const vetSidebarItems = ref([
    { route: "animals", label: "Home", icon: HomeIcon },
    { route: "", label: "Consultas", icon: ChatBubbleLeftEllipsisIcon },
    { route: "", label: "Solicitudes", icon: ArrowPathRoundedSquareIcon },
    { route: "", label: "Perfil", icon: UserCircleIcon },

]);
</script>

<template>
    <div class="bg-white py-3 fixed top-0 left-0 right-0 shadow-md lg:hidden">
        <button class=" ml-4 focus-outline h-fit w-fit rounded-lg p-1 active:scale-95" @click="() => setOpen(true)">
            <Bars3Icon class="h-5 w-5" />
        </button>
    </div>
    <div :class="[!open && 'hidden', 'bg-gray-600/10 min-h-screen w-full fixed top-0 left-0 right-0 backdrop-blur-sm']"
        @click="() => setOpen(false)">

    </div>
    <div :class="[open ? 'w-80' : 'w-0', 'bg-white min-h-screen w-80 fixed top-0 left-0 transition-all duration-300']">
        <div :class="[!open && 'hidden', 'pt-3 text-black']">
            <button class="ml-4 mb-4" @click="() => setOpen(false)">
                <XMarkIcon class="h-5 w-5" />
            </button>
            <div class="flex justify-between p-2">
                <div :class="['flex flex-col text-3xl font-semibold', variantStyle[variant]]">
                    <h1>VetApp</h1>
                </div>
            </div>
            <hr :class="['border-1 w-full', variantStyle[variant]]" />
            <div class="mt-4 flex-1">
                <ul class="flex flex-col gap-2">
                    <li v-if="variant === 'farmer'" v-for="item in farmerSidebarItems" :key="item.route">
                        <VSidebarItem :route="item.route" :custom-class="variantProfile.farmer" :label="item.label"
                            :icon="item.icon" />
                    </li>
                    <li v-else-if="variant === 'vet'" v-for="item in vetSidebarItems" :key="item.route">
                        <VSidebarItem :route="item.route" :custom-class="variantProfile.vet" :label="item.label"
                            :icon="item.icon" />
                    </li>
                </ul>
            </div>
        </div>
    </div>
    
    

    <div class=" hidden md:block h-full w-56 flex-col bg-white p-4 ">

        <div class="flex justify-between p-2">
            <div :class="['flex flex-col text-3xl font-semibold', variantStyle[variant]]">
                <h1>VetApp</h1>
            </div>
        </div>
        <hr :class="['border-1 w-full', variantStyle[variant]]" />
        <div class="mt-4 flex-1">
            <ul class="flex flex-col gap-2">
                <li v-if="variant === 'farmer'" v-for="item in farmerSidebarItems" :key="item.route">
                    <VSidebarItem :route="item.route" :custom-class="variantProfile.farmer" :label="item.label"
                        :icon="item.icon" />
                </li>
                <li v-else-if="variant === 'vet'" v-for="item in vetSidebarItems" :key="item.route">
                    <VSidebarItem :route="item.route" :custom-class="variantProfile.vet" :label="item.label"
                        :icon="item.icon" />
                </li>
            </ul>
        </div>

        <div class="mt-auto ">
            <VSidebarItem route="" custom-class="btn-menu-vet bottom-4 left-4" label="Cerrar Sesión" :icon="ArrowLeftOnRectangleIcon"
                @click="$emit('cerrarSesion')" />
        </div>
    </div>
    
</template>


