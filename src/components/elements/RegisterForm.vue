<script setup lang="ts">
import { UserIcon, UserPlusIcon, IdentificationIcon,PhoneIcon,BuildingOffice2Icon,HomeIcon } from '@heroicons/vue/24/outline';
import RegisterInput from '../elements/RegisterInput.vue';


</script>

<template>
    <RegisterInput label="Nombre" placeholder="Nombre" type="text" name="name" :icon=UserIcon></RegisterInput>
    <RegisterInput label="Apellido" placeholder="Apellido" type="text" name="lastName" :icon=UserPlusIcon></RegisterInput>
    <RegisterInput label="Identificación" placeholder="Cédula" type="text" name="id" :icon=IdentificationIcon></RegisterInput>
    <RegisterInput label="Celular" placeholder="Número de contacto" type="number" name="phone" :icon=PhoneIcon></RegisterInput>
    <RegisterInput label="Municipio" placeholder="Municipio de residencia" type="text" name="city" :icon=BuildingOffice2Icon></RegisterInput>
    <RegisterInput label="Dirección" placeholder="Dirección" type="text" name="address" :icon=HomeIcon></RegisterInput>
    <button class="login-button">Registrate</button>
</template>