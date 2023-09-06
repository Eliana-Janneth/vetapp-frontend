<script setup lang="ts">
import { HomeIcon } from '@heroicons/vue/24/solid';
</script>

<template>
    <div>
        <div class="bg-green-900">
            <div class="container mx-auto">
                <header class="flex justify-between px-8 py-4">
                    <div>
                        <h1 class="text-white text-2xl font-medium">VetApp</h1>
                        <HomeIcon class="h-6 w-6 text-white" />
                    </div>
                    <div class="flex gap-2 items-center">
                        <button class="welcome-button">Iniciar sesión</button>
                        <button class="welcome-button">Registrarse</button>
                    </div>
                </header>
                <hr />
                <section class="flex flex-col lg:flex-row">
                    <div
                        class="w-full flex flex-col text-white gap-4 justify-center items-center p-8"
                    >
                        <h2 class="text-sm">Atención veterinaria</h2>
                        <h3 class="text-2xl">Granjeros y veterinarios</h3>
                        <h4 class="text-sm">
                            Tu Vínculo con la Salud de tus Animales ¡Ahora
                            Online!
                        </h4>
                        <div>
                            <button class="welcome-button">
                                Sobre nosotros
                            </button>
                        </div>
                    </div>
                    <div class="w-full flex justify-center">
                        <div
                            class="w-[150px] h-[166px] lg:w-[375px] lg:h-[407px] pt-4 lg:pt-8 relative"
                        >
                            <img
                                class="rounded-full h-[100px] lg:h-[250px] absolute left-[50px] top-[50px] lg:left-[125px] lg:top-[125px]"
                                src="/src/assets/imageWelcome2.png"
                                alt="doctor"
                            />
                            <img
                                class="rounded-full h-[100px] lg:h-[250px] relative"
                                src="/src/assets/imageWelcome1.png"
                                alt="farmer"
                            />
                        </div>
                    </div>
                </section>
            </div>
        </div>
        <div class="bg-blue-500">parte abajo</div>
    </div>
</template>
