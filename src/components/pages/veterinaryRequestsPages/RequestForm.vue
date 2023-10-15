<script setup lang="ts">
import { VTextArea, VButton, VSelect } from '@elements';
</script>

<template>
    <div class="flex justify-center p-6">
    <div class="flex w-96 flex-col items-center gap-4">
        <VTextArea
            label="Escribir mensaje"
            placeholder="Escribe el motivo por el cual quieres realizar una consulta con el veterinario"
        />
        <VSelect label="Animal a consultar" placeholder="Seleccione el animal" />
        <VButton label="Enviar Solicitud" />
    </div></div>
</template>
