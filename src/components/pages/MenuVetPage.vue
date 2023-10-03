<script setup lang="ts">
import { VSidebar, VSidebarButton } from '@elements/sidebar';
import { ref, watchEffect } from 'vue';
import { AnimalDiagnosis } from '@elements/forms';
import { vetappApi } from '@/services';
import { useRouter } from 'vue-router';
import {  ViewVet } from '@elements/forms/';


const router = useRouter();
const open = ref(true);
const showSidebarButton = ref(!open.value);
const isMediumScreen = ref(window.innerWidth <= 768);
const user = JSON.parse(localStorage.getItem('user') ?? '{}');
const showUserForm = ref(false);

const openFormUser = () => {
    showUserForm.value = true;
};

watchEffect(() => {
    isMediumScreen.value = window.innerWidth <= 768;
    if (isMediumScreen.value) {
        open.value = false;
        showSidebarButton.value = true;
    } else {
        open.value = true;
        showSidebarButton.value = false;
    }
});

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
    <div class="flex h-screen w-screen bg-sky-900 p-2">
        <VSidebar :open="open" @close="closeSidebar" @cerrarSesion="onLogout" @openUser="openFormUser" />

        <div class="container mx-auto flex flex-1 flex-col gap-4 p-4">
            <div class="flex gap-2">
                <VSidebarButton dark v-if="showSidebarButton" @click="openSidebar" />
            </div>
            <div classs=" flex-1 flex justify-center items-center">
                <div class="flex justify-end">
                    <p class="mr-2 text-xl font-medium text-white">Hola, {{ user.name }}</p>
                
                </div>
               <!-- <AnimalDiagnosis />-->
                <div class="flex flex-col gap-4 lg:flex-row justify-center">
                    <ViewVet v-if="showUserForm" />
                </div>
            </div>
        </div>
        <!--  <div class="flex w-7/12 flex-col rounded-xl md:w-full lg:w-5/12">
            <AnimalRegisterPage></AnimalRegisterPage>
        </div>

        <div class="flex  flex-col rounded-xl lg:w-full">
            <div class="flex items-center justify-end p-2">
                <p class="mr-2 text-xs font-medium text-white">Hola, ....</p>
                <img src="https://picsum.photos/200/300" alt="" class="h-[50px] w-[50px] rounded-xl drop-shadow-xl" />
            </div>
            <div class="flex h-screen flex-col gap-1 p-2">
                <div class="flex h-2/5 flex-col gap-1 lg:flex-row">
                    <div class="rounded-xl bg-white lg:w-3/4">1</div>
                    <div class="rounded-xl bg-white lg:w-1/4">2</div>
                </div>
                <div class="flex h-3/5 rounded-xl bg-white">3</div>
            </div>
        </div>-->
    </div>
</template>
