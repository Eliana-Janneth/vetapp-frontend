<script setup lang="ts">
import { VButton, VInput, VTextArea } from '@elements';
</script>

<template>
    <!-- Formulario para registrar animales -->
    <div class="h-screen flex-col items-center justify-center rounded-xl bg-white p-2 md:flex-row">
      <div class="flex-col items-center justify-center">
        <h1 class="text-center text-4xl font-bold text-indigo-500">Historial Médico</h1>
      </div>
      <div class="flex flex-col justify-center gap-4 md:flex-row">
        <div class="flex flex-col gap-3 md:w-2/5">
          <VInput label="Fecha del Reporte" type="date" name="date"></VInput>
          <VInput label="Diagnostico" placeholder="¿Cuál fue el diagnostico?" type="text" name="color"></VInput>
          <VTextArea label="Tratamiento" placeholder="Describe alguna caracteristica importante" name="description"></VTextArea>
        </div>
      </div>
      <div class="flex justify-center p-16">
        <VButton label="Guardar"></VButton>
      </div>
    </div>
  </template>