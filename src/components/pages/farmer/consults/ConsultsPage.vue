<script setup lang="ts">
import { MagnifyingGlassIcon, EllipsisVerticalIcon, CameraIcon, ClipboardIcon } from '@heroicons/vue/24/outline';
</script>
<template>
    <section class="flex h-screen overflow-hidden">
        <div class="w-3/12 bg-white p-6">
            <h3 class="mb-8 text-2xl">Chat en línea</h3>
            <div class="mb-8 flex w-full overflow-auto">
                <!--Componente-->
                <div class="mr-4 self-center text-center">
                    <div class="relative mb-2 w-12">
                        <img src="https://i.pravatar.cc/300" class="h-full w-full rounded-full" alt="avatar" />
                        <div
                            class="absolute bottom-0 right-0 rounded-full border-2 border-gray-800 bg-green-300 p-1"
                        ></div>
                    </div>
                    <small class="font-light">Eliana</small>
                </div>
                
            </div>
            <div class="h-4/5 overflow-auto">
                <div class="mb-4 flex rounded bg-gray-100 p-4">
                    <img src="https://i.pravatar.cc/300" class="mr-4 w-12 rounded-full" alt="avatar" />
                    <div class="w-full overflow-hidden">
                        <div class="mb-1 flex">
                            <p class="flex-grow">Eliana</p>
                            <small class="font-light text-gray-500">10:00 am</small>
                        </div>
                        <small
                            class="block overflow-hidden overflow-ellipsis whitespace-nowrap font-light text-gray-500"
                            >Lorem ipsum bla bla bla</small
                        >
                    </div>
                </div>
            </div>
        </div>
        <div class="w-9/12 bg-gray-100">
            <div class="border-b px-20">
                <div class="flex">
                    <div class="flex flex-grow">
                        <div class="relative mb-2 mr-4 w-12">
                            <img src="https://i.pravatar.cc/300" class="h-full w-full rounded-full" alt="avatar" />
                            <div
                                class="absolute bottom-0 right-0 rounded-full border-2 border-gray-800 bg-green-300 p-1"
                            ></div>
                        </div>
                        <div>
                            <p class="font-medium">Eliana Puerta</p>
                            <small class="font-light text-gray-500">En línea</small>
                        </div>
                    </div>
                    <div class="flex">
                        <MagnifyingGlassIcon class="mr-4 w-6 text-gray-500" />
                        <EllipsisVerticalIcon class="w-6 text-gray-500" />
                    </div>
                </div>
            </div>

            <div class="h-3/4 overflow-auto px-20 py-6">
                <div class="mb-12 flex">
                    <img src="https://i.pravatar.cc/300" class="mr-4 w-12 self-end rounded-full" alt="avatar" />
                    <div class="flex flex-col">
                        <div class="mb-2 w-96 rounded-3xl rounded-bl-none bg-white p-6 shadow-sm">
                            <p class="mb-1">Eliana Puerta</p>
                            <small class="font-light text-gray-500"
                                >Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum</small
                            >
                        </div>
                        <small class="font-light text-gray-500"> 10:00 am</small>
                    </div>
                </div>
                <div class="mb-12 flex flex-row-reverse">
                    <img src="https://i.pravatar.cc/200" class="ml-4 w-12 self-end rounded-full" alt="avatar" />
                    <div class="flex flex-col">
                        <div class="mb-2 w-96 rounded-3xl rounded-br-none bg-white p-6 shadow-sm">
                            <p class="mb-1">Juan </p>
                            <small class="font-light text-gray-500"
                                >Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum</small
                            >
                        </div>
                        <small class="self-end font-light text-gray-500"> 10:00 am</small>
                    </div>
                </div>
            </div>

            <div class="flex border-t px-20 py-6">
                <input
                    type="text"
                    placeholder="Escribe tu mensaje ..."
                    class="w-full bg-gray-100 px-4 py-2 font-light focus:outline-none"
                />
                <CameraIcon class="mr-4 w-6 text-gray-500" />
                <ClipboardIcon class="mr-4 w-6 text-gray-500" />
                <a href class="rounded bg-blue-500 px-4 py-2 text-white"> Enviar</a>
            </div>
        </div>
    </section>
</template>
