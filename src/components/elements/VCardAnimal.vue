<script setup lang="ts">
import { FunctionalComponent } from 'vue';
import VSpan from './VSpan.vue';
defineEmits(['update:modelValue', 'focus', 'blur','accept','reject']);

defineOptions({
    inheritAttrs: false,
});

defineProps<{
    customClass?: string;
    icon?: FunctionalComponent;
    farmer?: string;
    message?: string;
    race?: string;
    specie?: string;
    nameAnimal?: string;
}>();


</script>

<template>
    <div class="flex  justify-center bg-white ">
        <div class="w-64 overflow-hidden rounded shadow-lg bg-sky-100/70">
            <div class="px-6 py-4 items-center flex flex-col">
                <div class="mb-2 text-xl font-bold text-sky-700">{{ farmer }}</div>
                <p class="text-base text-sky-900">{{ message }}</p>
            </div>
            <div class="px-6 py-4">
                <VSpan name="Animal" :label="nameAnimal" />
                <VSpan name="Especie" :label="specie" />
                <VSpan name="Raza" :label="race" />
            </div>
            <div class="flex justify-between px-6 py-4">
                <button class="rounded bg-green-500 px-4 py-2 font-bold text-white hover:bg-green-700" @click="$emit('accept')">Aceptar</button>
                <button class="rounded bg-red-500 px-4 py-2 font-bold text-white hover:bg-red-700" @click="$emit('reject')">Rechazar</button>
            </div>
        </div>
    </div>
</template>
