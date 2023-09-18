<script setup lang="ts">
import { HomeIcon, ChatBubbleLeftEllipsisIcon, ArrowPathRoundedSquareIcon } from '@heroicons/vue/24/solid';
import SideBarItem from '../elements/sidebar/SideBarItem.vue';
</script>

<template>
    <div class="flex h-screen w-screen gap-2 bg-pink-900 p-2">
        <div class="flex h-full w-5/12 flex-col rounded-xl bg-white p-2 lg:w-2/12">
            <div class="flex flex-col items-center gap-4">
                <h1 class="text-2xl font-semibold text-pink-700 hover:text-pink-900">VetApp</h1>

                <hr class="border-1 w-full border-pink-700 hover:border-pink-900" />
                <div class="mt-8 w-5/6 flex-1">
                    <ul class="flex flex-col gap-4">
                        <SideBarItem label="Home" :icon="HomeIcon" />
                        <SideBarItem label="Consultas" :icon="ChatBubbleLeftEllipsisIcon" />
                        <SideBarItem label="Solicitudes" :icon="ArrowPathRoundedSquareIcon" />
                    </ul>
                </div>
            </div>
        </div>
        <!--  <div class="flex w-7/12 flex-col rounded-xl md:w-full lg:w-5/12">
            <AnimalRegisterPage></AnimalRegisterPage>
        </div>-->

        <div class="flex w-7/12 flex-col rounded-xl lg:w-full">
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
        </div>
    </div>
</template>
