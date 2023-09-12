<script setup lang="ts">
import { HomeIcon, ChatBubbleLeftEllipsisIcon, ArrowPathRoundedSquareIcon } from '@heroicons/vue/24/solid';
import SideBarItem from '../elements/sidebar/SideBarItem.vue';

</script>

<template>
    <div class="bg-pink-900 flex p-2 w-screen h-screen gap-2">
        <div class="bg-white p-2 rounded-xl lg:w-2/12 w-5/12 h-full flex flex-col">
            <div class="flex flex-col items-center gap-4">
                <h1 class="text-pink-700 hover:text-pink-900 text-2xl font-semibold">VetApp</h1>

                <hr class=" border-1 border-pink-700 hover:border-pink-900 w-full">
                <div class="flex-1 mt-8 w-5/6">
                    <ul class="flex flex-col gap-4">
                        <SideBarItem label="Home" :icon=HomeIcon />
                        <SideBarItem label="Consultas" :icon=ChatBubbleLeftEllipsisIcon />
                        <SideBarItem label="Solicitudes" :icon=ArrowPathRoundedSquareIcon />
                    </ul>
                </div>
            </div>
        </div>
        <div class="flex flex-col  w-7/12 lg:w-full rounded-xl">
            <div class="flex p-2 justify-end items-center ">
                <p class="mr-2 text-xs text-white font-medium">Hola, ....</p>
                <img src="https://picsum.photos/200/300" alt="" class="w-[50px] h-[50px] rounded-xl drop-shadow-xl">

            </div>
            <div class="flex flex-col p-2 gap-1">
                <div class="flex flex-row gap-1">
                    <div class="bg-green-200">1</div>
                    <div class="bg-green-300">2</div>
                </div>
                <div class="bg-green-400">3</div>
            </div>
        </div>
    </div>
</template>