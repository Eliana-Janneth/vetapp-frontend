<script setup lang="ts">
</script>

<template>
    <div>
        <div class="bg-gradient-to-r from-indigo-500/50 via-indigo-600/50 to-indigo-800/70">
            <div class="container mx-auto">
                <header class="flex justify-between px-8 py-4">
                    <div>
                        <h1 class="lg:text-4xl text-3xl font-semibold text-indigo-700 hover:text-indigo-900">VetApp</h1>
                    </div>
                    <div class="flex items-center gap-2">
                        <router-link :to="{ name: 'login' }" class="welcome-button">Iniciar Sesión</router-link>
                        <router-link :to="{ name: 'register' }" class="welcome-button">Registrarse</router-link>
                    </div>
                </header>
                
                <hr class="border-indigo-800" />    
                <section class="flex flex-col lg:flex-row">
                    <div
                        class="flex w-full flex-col items-center justify-center gap-4 p-8 font-medium text-indigo-700 hover:text-indigo-900"
                    >
                        <h2 class="text-xl">Atención veterinaria</h2>
                        <h3 class="text-5xl">Granjeros y Veterinarios</h3>
                        <h4 class="text-xl">Tu Vínculo con la Salud de tus Animales ¡Ahora Online!</h4>
                        <div>
                            <button class="welcome-button">Sobre nosotros</button>
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
                        <h2 class="text-2xl font-medium text-indigo-800 hover:text-indigo-900">Misión</h2>
                        <p class="rounded-3xl bg-white p-4 text-center text-sm lg:rounded-full lg:p-16">
                            Nuestra misión es facilitar y mejorar la atención de la salud animal en las áreas rurales,
                            proporcionando a granjeros y veterinarios una plataforma en línea de comunicación eficiente
                            y accesible. Nos comprometemos a reducir las barreras geográficas y a empoderar a los
                            profesionales agrícolas y veterinarios, brindando una herramienta efectiva para la
                            realización de chequeos rutinarios y la atención de emergencias, sin necesidad de
                            desplazamientos. Valoramos el bienestar de los animales y la tranquilidad de los granjeros,
                            y estamos dedicados a fortalecer la conexión vital entre ellos y los expertos en salud
                            animal.
                        </p>
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
                        <h2 class="text-2xl font-medium text-indigo-800 hover:text-indigo-900">Visión</h2>
                        <p class="rounded-3xl bg-white p-4 text-center text-sm lg:rounded-full lg:p-16">
                            Nuestra visión es convertirnos en el referente líder en soluciones de atención veterinaria
                            en línea para el sector agrícola. Visualizamos un futuro en el que todos los granjeros y
                            veterinarios rurales tengan acceso a una plataforma confiable y eficaz para la comunicación
                            y atención de animales, lo que permitirá una industria agrícola más saludable y sostenible.
                            Nos esforzamos por ser reconocidos por nuestro impacto positivo en la salud animal, la
                            eficiencia de los granjeros y la promoción del bienestar animal en comunidades rurales de
                            todo el mundo.
                        </p>
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
