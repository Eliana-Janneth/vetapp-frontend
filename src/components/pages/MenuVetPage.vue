<script setup lang="ts">
import { VSidebar, VSidebarButton } from '@elements/sidebar';
import { ref, watchEffect } from 'vue';
import {VFormFarmer} from '@elements/forms';

const open = ref(true);
const showSidebarButton = ref(!open.value);
const isMediumScreen = ref(window.innerWidth <= 768);

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
}

const closeSidebar = () => {
    open.value = false;
    setTimeout(() => {
        showSidebarButton.value = true;
    }, 500);
}

</script>

<template>
    <div class="flex h-screen w-screen bg-pink-900 p-2">

        <VSidebar :open="open" @close="closeSidebar" />

        <div class="flex-1 flex flex-col p-4 gap-4 container mx-auto">
            <div class="flex gap-2">
                <VSidebarButton dark v-if="showSidebarButton" @click="openSidebar" />
            </div>
            <div classs=" flex-1 flex justify-center items-center">
                <div class="flex justify-end ">
                    <p class="mr-2 text-xs font-medium text-white">Hola, ....</p>
                    <img src="https://picsum.photos/200/300" alt="" class="h-[50px] w-[50px] rounded-xl drop-shadow-xl" />
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
