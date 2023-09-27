<script setup lang="ts">
import { RegisterForm } from '@elements/forms';
</script>

<template>
    <div class="flex h-screen">
        <div class="hidden w-full md:block">
            <img src="/src/assets/img/imgRegister2.jpg" alt="Registro" class="h-full w-full object-cover object-center" />
        </div>
        <div class="w-full flex flex-col justify-center max-w-lg mx-auto bg-white p-4">
            <h1 class="pb-6 text-center text-4xl font-medium text-indigo-800">Registrate</h1>
            <RegisterForm />
        </div>
    </div>
</template>
