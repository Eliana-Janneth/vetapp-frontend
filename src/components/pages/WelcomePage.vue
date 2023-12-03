<script setup lang="ts">
import LanguageSwitch from '../elements/LanguageSwitch.vue';
import { SModal } from '@placetopay/spartan-vue';
import { VCard, VButton } from '@elements';
import { ref } from 'vue';
import { XMarkIcon } from '@heroicons/vue/24/solid';

const openMision = ref(false);
const openVision = ref(false);
</script>

<template>
    <SModal :open="openMision" @close="openMision = false">
        <VCard class="w-fit bg-indigo-300" bodyClass="p-8 border-indigo-400">
            <div class="flex w-56 flex-col lg:w-96">
                <div class="flex justify-end">
                    <VButton class="flex w-fit items-center rounded-full p-1" @click="openMision = false"
                        ><XMarkIcon class="h-7 w-7"
                    /></VButton>
                </div>
                <div class="flex flex-col items-center">
                    <h2 class="text-2xl font-medium text-indigo-800 hover:text-indigo-900">
                        {{ $t('WelcomePage.mision') }}
                    </h2>
                    <p class="rounded-xl bg-indigo-100/80 p-4 text-center text-sm">
                        {{ $t('WelcomePage.pmision') }}
                    </p>
                </div>
            </div>
        </VCard>
    </SModal>
    <SModal :open="openVision" @close="openVision = false">
        <VCard class="w-fit bg-indigo-300" bodyClass="p-8 border-indigo-400">
            <div class="flex w-56 flex-col lg:w-96">
                <div class="flex justify-end">
                    <VButton class="flex w-fit items-center rounded-full p-1" @click="openVision = false"
                        ><XMarkIcon class="h-7 w-7"
                    /></VButton>
                </div>
                <h2 class="text-2xl font-medium text-indigo-800 hover:text-indigo-900">
                    {{ $t('WelcomePage.vision') }}
                </h2>
                <p class="rounded-xl bg-indigo-100/80 p-4 text-center text-sm">
                    {{ $t('WelcomePage.pvision') }}
                </p>
            </div>
        </VCard>
    </SModal>
    <div>
        <div class="bg-gradient-to-r from-indigo-500/50 via-indigo-600/50 to-indigo-800/70">
            <div class="container mx-auto">
                <header class="bg:flex-row bg:px-8 flex flex-col justify-between px-4 py-4">
                    <div class="mb-2 flex justify-between">
                        <h1 class="text-3xl font-semibold text-indigo-700 hover:text-indigo-900 lg:text-4xl">VetApp</h1>
                        <language-switch />
                    </div>

                    <div class="flex items-center justify-end gap-2">
                        <router-link :to="{ name: 'login' }" class="welcome-button">{{
                            $t('WelcomePage.login')
                        }}</router-link>
                        <router-link :to="{ name: 'register' }" class="welcome-button">{{
                            $t('WelcomePage.register')
                        }}</router-link>
                    </div>
                </header>

                <hr class="border-indigo-800" />
                <section class="flex flex-col lg:flex-row">
                    <div
                        class="flex w-full flex-col items-center justify-center gap-4 p-8 font-medium text-indigo-700 hover:text-indigo-900"
                    >
                        <h2 class="text-xl">{{ $t('WelcomePage.attention') }}</h2>
                        <h3 class="text-5xl">{{ $t('WelcomePage.vetfarm') }}</h3>
                        <h4 class="text-xl">{{ $t('WelcomePage.slogan') }}</h4>
                    </div>
                    <div class="flex w-full justify-center">
                        <div class="relative h-[166px] w-[150px] pt-4 lg:h-[407px] lg:w-[375px] lg:pt-8">
                            <img
                                class="absolute left-[50px] top-[50px] h-[100px] rounded-full lg:left-[125px] lg:top-[125px] lg:h-[250px]"
                                src="/src/assets/imageWelcome2.png"
                                alt="doctor"
                            />
                            <img
                                class="relative h-[100px] rounded-full lg:h-[250px]"
                                src="/src/assets/imageWelcome1.png"
                                alt="farmer"
                            />
                        </div>
                    </div>
                </section>
            </div>

            <section class="flex w-full justify-center gap-6 p-6">
                <button @click="openMision = true" class="welcome-button">
                    <span class="font-medium">{{ $t('WelcomePage.mision') }}</span>
                </button>
                <button @click="openVision = true" class="welcome-button">
                    <span class="font-medium"> {{ $t('WelcomePage.vision') }} </span>
                </button>
            </section>

            <hr class="border-1 container mx-auto border-indigo-800" />
            <footer class="flex justify-center p-4">
                <div class="flex flex-col items-center font-semibold text-indigo-700 hover:text-indigo-900">
                    <p>150 Solutions</p>
                    <p>2023</p>
                </div>
            </footer>
        </div>
    </div>
</template>
