<template>
    <div class="bg-green-100 items-center p-10">
        <div class="lg:w-3/12 container mx-auto bg-green-700 rounded-3xl">
            <div class="flex justify-center p-6">
              <img src="/src/assets/imageWelcome3.png" alt="logo">
            </div>
            <div class="flex flex-col items-center p-4 gap-2">
                <h1 class="text-white text-2xl">Iniciar Sesión</h1>
                <div
                    class="flex bg-green-500/50 hover:bg-green-500 rounded-full justify-center container w-72 p-2"
                >
                    <img
                        class="rounded-full h-[25px]"
                        src="/src/assets/google.svg"
                        alt="google"
                    />
                    <button
                        class="px-2 py-1 rounded-md text-md text-white/80 hover:text-white"
                    >
                        Continúa con Google
                    </button>
                </div>
                <div
                    class="flex border-2 border-green-500 hover:bg-green-500 rounded-full justify-center container w-72 p-2"
                >
                    <button
                        class="px-2 py-1 rounded-md text-md text-green-500 hover:text-white"
                    >
                        Usar Correo
                    </button>
                </div>
                <div class="flex gap-1 pt-10">
                    <p class="text-white">¿Deseas crear una cuenta?</p>
                    <h2
                        class="underline underline-offset-2 text-green-500 hover:text-white"
                    >
                        Registrate aquí
                    </h2>
                </div>
            </div>
        </div>
    </div>
</template>
