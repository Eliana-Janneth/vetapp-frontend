<script setup lang="ts">
import { UserCircleIcon, AtSymbolIcon, LockClosedIcon } from '@heroicons/vue/24/outline';
import RegisterInput from '../elements/RegisterInput.vue';
import RegisterForm from '../elements/RegisterForm.vue';
import { ref } from 'vue';


const openFormVet = ref(false);
const openFormRegister = ref(false);

//Valida si los campos estan vacios
const validate = () => {
    const inputs = document.querySelectorAll('input');
    let valid = true;
    inputs.forEach((input) => {
        if (input.value === '') {
            valid = false;
        }
    });
    return valid;
};

</script>

<template>
    <div class="bg-white items-center p-2 rounded-3xl border-4 border-indigo-900">
        <div class="flex flex-col p-2">
            <form action="" method="POST">
                <div v-if="!openFormRegister">
                    <h1 class="text-2xl font-medium text-indigo-800 text-center pb-6">Registrate</h1>
                    <label class="relative block drop-shadow-xl w-full">
                        <span class="block font-medium text-indigo-700 text-lg">Perfil</span>
                        <span class="absolute inset-y-12 left-0 flex items-center pl-2">
                            <UserCircleIcon class="w-6 h-6 text-indigo-700" />
                        </span>
                        <select v-model="openFormVet" name="profile" placeholder="Seleccione su perfil" required
                            class="placeholder:text-indigo-400/50 block w-full bg-white hover:bg-indigo-50 focus:bg-indigo-100  border border-indigo-700 rounded-lg py-2 pl-9 pr-3 border-x-0 border-t-0 shadow-md focus:outline-none focus:border-indigo-500 focus:ring-indigo-500 focus:ring-1 text-md text-indigo-700">
                            <option value="vet">Veterinario</option>
                            <option value="farmer">Granjero</option>
                        </select>
                    </label>

                    <RegisterInput label="Email" placeholder="alguien@example.com" type="text" name="email"
                        :icon=AtSymbolIcon>
                    </RegisterInput>
                    <RegisterInput label="Contraseña" placeholder="Ingresa tu contraseña" type="password" name="pass"
                        :icon=LockClosedIcon></RegisterInput>
                    <RegisterInput label="Confirmar contraseña" placeholder="Confirma tu contraseña" type="password"
                        name="password" :icon=LockClosedIcon></RegisterInput>
                    <RegisterInput v-if="openFormVet" label="Matricula Profesional" placeholder="Ingresa tu licencia"
                        type="number" name="license" :icon=AtSymbolIcon>
                    </RegisterInput>

                    <button @click="openFormRegister = true" class="login-button">Siguiente</button>
                </div>
                <RegisterForm v-if="openFormRegister"></RegisterForm>

            </form>

        </div>
    </div>
</template>