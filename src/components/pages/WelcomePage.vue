<script setup lang="ts">
import LanguageSwitch from '../elements/LanguageSwitch.vue';
</script>

<template>
    <div>
        <language-switch />
        <div class="bg-gradient-to-r from-indigo-500/50 via-indigo-600/50 to-indigo-800/70">
            <div class="container mx-auto">
                <header class="flex justify-between px-8 py-4">
                    <div>
                        <h1 class="text-3xl font-semibold text-indigo-700 hover:text-indigo-900 lg:text-4xl">VetApp</h1>
                    </div>
                    <div class="flex items-center gap-2">
                        <router-link :to="{ name: 'login' }" class="welcome-button">{{ $t("WelcomePage.login") }}</router-link>
                        <router-link :to="{ name: 'register' }" class="welcome-button">{{ $t("WelcomePage.register") }}</router-link>
                    </div>
                </header>

                <hr class="border-indigo-800" />
                <section class="flex flex-col lg:flex-row">
                    <div
                        class="flex w-full flex-col items-center justify-center gap-4 p-8 font-medium text-indigo-700 hover:text-indigo-900"
                    >
                        <h2 class="text-xl">{{ $t("WelcomePage.attention") }}</h2>
                        <h3 class="text-5xl">{{ $t("WelcomePage.vetfarm") }}</h3>
                        <h4 class="text-xl">{{ $t("WelcomePage.slogan") }}</h4>
                        <div>
                            <button class="welcome-button">{{ $t("WelcomePage.we") }}</button>
                        </div>
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

            <section class="flex w-full flex-col items-center gap-6 p-6">
                <div class="grid flex-col gap-6 lg:grid-cols-2 lg:flex-row">
                    <div class="flex flex-col items-center lg:p-20">
                        <h2 class="text-2xl font-medium text-indigo-800 hover:text-indigo-900">{{ $t("WelcomePage.mision") }}</h2>
                        <p class="rounded-3xl bg-white p-4 text-center text-sm lg:rounded-full lg:p-16">{{ $t("WelcomePage.pmision") }}</p>
                    </div>
                    <div class="flex w-full items-center justify-center">
                        <img
                            class="relative h-[300px] rounded-full lg:h-[300px]"
                            src="/src/assets/imageWelcome4.png"
                            alt="farmer"
                        />
                    </div>
                </div>
                <div class="grid flex-col gap-4 lg:grid-cols-2 lg:flex-row">
                    <div class="flex w-full items-center justify-center">
                        <img
                            class="relative h-[300px] rounded-full lg:h-[300px]"
                            src="/src/assets/imageWelcome3.png"
                            alt="farmer"
                        />
                    </div>
                    <div class="flex flex-col items-center lg:p-20">
                        <h2 class="text-2xl font-medium text-indigo-800 hover:text-indigo-900">{{ $t("WelcomePage.vision") }}</h2>
                        <p class="rounded-3xl bg-white p-4 text-center text-sm lg:rounded-full lg:p-16">{{ $t("WelcomePage.pvision") }}</p>
                    </div>
                </div>
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
