<script setup lang="ts">
import { useForm } from 'vee-validate';

const { handleSubmit, defineInputBinds } = useForm();

const onSubmit = handleSubmit(values => {
  fetch('https://apimocha.com/vetapp-api/farmers', {
    method: 'POST',
    body: JSON.stringify(values)
  })
});

const name = defineInputBinds('username');
const surname = defineInputBinds('surname');
</script>

<template>
    <div class="flex">
        <div>
            <!-- <img src="/src/assets/img/imgRegister2.jpg" alt="Registro" class="h-full" /> -->
        </div>
        <div>
            <form @submit="onSubmit">
                <div class="flex flex-col">
                    <label for="name">Nombre</label>
                    <input id="name" name="name" v-bind="name" type="text">
                </div>

                <div class="flex flex-col">
                    <label for="surname">Apellido</label>
                    <input id="surname" name="surname" v-bind="surname" type="text">
                </div>

                <button type="submit">
                    Enviar
                </button>
            </form>
        </div>
    </div>
</template>
