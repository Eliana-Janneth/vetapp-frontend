<script setup lang="ts">
import { EnvelopeIcon, LockClosedIcon, LockOpenIcon } from '@heroicons/vue/24/outline';
import { useForm } from 'vee-validate';
import { ref, computed } from 'vue';
import { VInput } from '@elements';
import * as yup from 'yup';
//import { useRouter } from 'vue-router';

const passwordIcon = ref(LockClosedIcon);

const schema = yup.object({
    email: yup
        .string()
        .required('Por favor ingrese un correo')
        .email('Debes ingresar un correo valido "alguien@example.com"'),
    password: yup.string().required('Por favor ingrese una contraseña'),
});

const {  handleSubmit, defineComponentBinds, errors, values } = useForm({
    validationSchema: schema,
});

const email = defineComponentBinds('email');
const password = defineComponentBinds('password');


const errorMessage = ref<string | null>(null);

// const disabled = computed(() => {
//     return !values.email || !values.password;
// });

// Después de que el usuario inicia sesión y obtiene un token de acceso
localStorage.setItem('accessToken', 'el-token-de-acceso'); // Almacena el token en el almacenamiento local
// Función para obtener el token de acceso almacenado


// const login = async () => {
//   try {
//     // Realizar una solicitud al servidor para autenticar al usuario y obtener el token de acceso
//     // Esto depende de cómo esté configurado tu servidor
//     const response = await fetch('http://localhost:9999/login', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({
//         email: email.value,
//         password: password.value,
//       }),
//     });
//     if (!response.ok) {
//       throw new Error('Credenciales incorrectas');
//     }

//     // Si la autenticación es exitosa, el servidor debe devolver un token de acceso
//     const data = await response.json();
//     const accessToken = data.accessToken;

//     // Almacenar el token de acceso de forma segura (por ejemplo, en localStorage)
//     localStorage.setItem('accessToken', accessToken);

//     // Redirigir a la página protegida
//     router.push('/pagina-protegida');
//   } catch (error:any) {
//     errorMessage.value = error.message;
//   }
// };
const onSubmit = handleSubmit(async (values) => {
    const apiUrl = 'http://127.0.0.1:9999/auth/login/';

    alert(JSON.stringify(values, null, 2));
    try {
        const response = await fetch(apiUrl, {
            method: 'POST',
            body: JSON.stringify(values),
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (!response.ok) {
            const errorData = await response.json();
            if (errorData && errorData.response) {
                alert(`Error del servidor: ${errorData.response}`);
            } else {
                alert('Error en la solicitud al servidor.');
            }
            return;
        }
        // Si la respuesta es exitosa
        const responseData = await response.json();
        console.log('Respuesta del backend:', responseData);
        alert('Usuario logueado exitosamente'); 
    }
    catch (error) {
        console.error('Error al realizar la solicitud:', error);
    }
});

</script>

<template>
    <pre>{{ JSON.stringify(values, null, 2) }}</pre> 
    <form class="flex flex-col items-center gap-2 rounded-xl bg-white p-4" @submit="onSubmit" >
        <h1 class="text-2xl font-medium text-indigo-900">Iniciar Sesión</h1>

        <VInput
            v-bind="email"
            variant="farmer"
            placeholder="Correo Electrónico"
            name="email"
            type="email"
            :icon="EnvelopeIcon"
            :error="errors.email"
        />
        

        <VInput
            v-bind="password"        
            placeholder="Contraseña"
            type="password"
            name="password"
            :icon="passwordIcon"
            :error="errors.password"
            @focus="passwordIcon = LockOpenIcon"
            @blur="passwordIcon = LockClosedIcon"
        />

        <a href="" class="text-indigo-900">¿Olvidó su contraseña?</a>
        <button @click="onSubmit" :class="['btn btn-primary']" type="submit" value="iniciarSesión">
            Iniciar Sesión
        </button>
    </form>
    <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p>

</template>
<style>
.error-message {
  color: red;
}
</style>