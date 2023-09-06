<template>
    <div>
        <div class="bg-green-900">
            <div class="container mx-auto">
                <header class="flex justify-between px-8 py-4">
                    <div>
                        <h1 class="text-white text-2xl font-medium">VetApp</h1>
                    </div>
                    <div class="flex gap-2 items-center">
                        <button class="welcome-button">Iniciar Sesión</button>
                        <button class="welcome-button">Registrarse</button>
                    </div>
                </header>
                <hr />
                <section class="flex flex-col lg:flex-row">
                    <div
                        class="w-full flex justify-center flex-col text-white gap-4 items-center p-8"
                    >
                        <h2 class="text-sm">Atención veterinaria</h2>
                        <h3 class="text-2xl">Granjeros y Veterinarios</h3>
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
        <section class="bg-green-100 w-full flex flex-col items-center p-6">
            <div class="flex-col lg:flex-row grid lg:grid-cols-2">
                <div class="flex flex-col items-center p-20">
                    <h2 class="text-2xl font-semibold">Misión</h2>
                    <p class="text-sm p-16 rounded-full text-center bg-white">
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
                    <img
                        class="rounded-lg h-[200px] lg:h-[300px] relative"
                        src="/src/assets/imageWelcome4.png"
                        alt="farmer"
                    />
                </div>
            </div>
            <div class="flex-col lg:flex-row grid lg:grid-cols-2 pt-16 lg:p-0">
                <div class="w-full flex justify-center items-center">
                    <img
                        class="rounded-lg h-[200px] lg:h-[300px] relative"
                        src="/src/assets/imageWelcome3.png"
                        alt="farmer"
                    />
                </div>
                <div class="flex flex-col items-center p-20">
                    <h2 class="text-2xl font-semibold">Visión</h2>
                    <p class="text-sm p-16 rounded-full text-center bg-white">
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
    </div>
</template>
