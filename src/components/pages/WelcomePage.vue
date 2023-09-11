<template>
    <div>
        <div class="bg-gradient-to-r from-indigo-500/50 via-indigo-600/50 to-indigo-800/70">
            <div class="container mx-auto">
                <header class="flex justify-between px-8 py-4">
                    <div>
                        <h1 class="text-indigo-700 hover:text-indigo-900 text-2xl font-semibold">VetApp</h1>
                    </div>
                    <div class="flex gap-2 items-center">
                        <router-link to="/login" class="welcome-button">Iniciar Sesión</router-link>
                        <router-link to="/register" class="welcome-button">Registrarse</router-link>
                    </div>
                </header>
                <hr class=" border-indigo-800"/>
                <section class="flex flex-col lg:flex-row">
                    <div class="w-full flex justify-center flex-col font-medium text-indigo-700 hover:text-indigo-900 gap-4 items-center p-8">
                        <h2 class="text-md ">Atención veterinaria</h2>
                        <h3 class="text-3xl ">Granjeros y Veterinarios</h3>
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
                        <div class="w-[150px] h-[166px] lg:w-[375px] lg:h-[407px] pt-4 lg:pt-8 relative">
                            <img class="rounded-full h-[100px] lg:h-[250px] absolute left-[50px] top-[50px] lg:left-[125px] lg:top-[125px]"
                                src="/src/assets/imageWelcome2.png" alt="doctor" />
                            <img class="rounded-full h-[100px] lg:h-[250px] relative" src="/src/assets/imageWelcome1.png"
                                alt="farmer" />
                        </div>
                    </div>
                </section>
            </div>
        
        <section class=" w-full flex flex-col items-center p-6 gap-6">
            <div class="flex-col grid lg:flex-row lg:grid-cols-2 gap-6">
                <div class="flex flex-col items-center lg:p-20 ">
                    <h2 class="text-2xl text-indigo-800 hover:text-indigo-900  font-medium">Misión</h2>
                    <p class="text-sm p-4 rounded-3xl lg:p-16 lg:rounded-full text-center bg-white">
                        Nuestra misión es facilitar y mejorar la atención de la
                        salud animal en las áreas rurales, proporcionando a
                        granjeros y veterinarios una plataforma en línea de
                        comunicación eficiente y accesible. Nos comprometemos a
                        reducir las barreras geográficas y a empoderar a los
                        profesionales agrícolas y veterinarios, brindando una
                        herramienta efectiva para la realización de chequeos
                        rutinarios y la atención de emergencias, sin necesidad
                        de desplazamientos. Valoramos el bienestar de los
                        animales y la tranquilidad de los granjeros, y estamos
                        dedicados a fortalecer la conexión vital entre ellos y
                        los expertos en salud animal.
                    </p>
                </div>
                <div class="w-full flex justify-center items-center">
                    <img class="rounded-full h-[300px] lg:h-[300px] relative" src="/src/assets/imageWelcome4.png"
                        alt="farmer" />
                </div>
            </div>
            <div class="flex-col lg:flex-row grid lg:grid-cols-2 gap-4">
                <div class="w-full flex justify-center items-center">
                    <img class="rounded-full h-[300px] lg:h-[300px] relative" src="/src/assets/imageWelcome3.png"
                        alt="farmer" />
                </div>
                <div class="flex flex-col items-center lg:p-20">
                    <h2 class="text-2xl  text-indigo-800 hover:text-indigo-900  font-medium">Visión</h2>
                    <p class="text-sm rounded-3xl p-4 lg:p-16 lg:rounded-full text-center bg-white">
                        Nuestra visión es convertirnos en el referente líder en
                        soluciones de atención veterinaria en línea para el
                        sector agrícola. Visualizamos un futuro en el que todos
                        los granjeros y veterinarios rurales tengan acceso a una
                        plataforma confiable y eficaz para la comunicación y
                        atención de animales, lo que permitirá una industria
                        agrícola más saludable y sostenible. Nos esforzamos por
                        ser reconocidos por nuestro impacto positivo en la salud
                        animal, la eficiencia de los granjeros y la promoción
                        del bienestar animal en comunidades rurales de todo el
                        mundo.
                    </p>
                </div>
            </div>
        </section>
  
        <hr class="container mx-auto border-1 border-indigo-800" />
        <footer class="flex justify-center p-4">
            <div class="flex flex-col items-center text-indigo-700 hover:text-indigo-900  font-semibold">
                <p>150 Solutions</p>
                <p>2023</p>
            </div>
        </footer>
    </div>
</div>
</template>
