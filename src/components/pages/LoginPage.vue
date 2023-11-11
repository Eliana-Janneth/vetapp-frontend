<script setup lang="ts">
import { LoginForm } from '@elements';
</script>

<template>
    <div class="flex h-screen items-center bg-indigo-200 p-2">
        <div class="container mx-auto flex max-w-sm flex-col gap-6 rounded-xl bg-indigo-900 p-2">
            <img src="/src/assets/imageLogin.png" alt="logo" class="rounded-xl" />

            <LoginForm />

            <div class="flex justify-center gap-1">
                <span class="text-white">{{ $t("LoginPage.createaccount") }}</span>
                <router-link
                    :to="{ name: 'register' }"
                    class="font-medium text-indigo-500 underline underline-offset-2 hover:text-white"
                >
                  {{ $t("LoginPage.register") }}
                </router-link>
            </div>
        </div>
    </div>
</template>
