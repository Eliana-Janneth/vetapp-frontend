<script setup lang="ts">
import { ref } from 'vue';
import { VButton } from '@elements';
import { VRegisterAnimal, VListAnimal } from '@elements/forms';

const openRegister = ref(false);
const openList = ref(true);

const toggleRegister = () => {
    openRegister.value = true;
    openList.value = false;
};

const toggleList = () => {
    openRegister.value = false;
    openList.value = true;
};
</script>

<template>
    <div class="flex flex-col gap-4 bg-white p-2">
        <div class="flex justify-center gap-4 p-2 lg:gap-6">
            <VButton variant="farmer" label="Registrar" @open="toggleRegister" />
            <VButton variant="farmer" label="Listar" @open="toggleList" />
            <VButton variant="farmer" label="Actualizar" />
        </div>
        <hr class="border-1 w-full border-emerald-700 hover:border-emerald-900" />

        <div class="">
            <VRegisterAnimal v-if="openRegister" />
            <VListAnimal v-if="openList" />
        </div>
    </div>
</template>
