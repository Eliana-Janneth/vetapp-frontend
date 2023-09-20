<script setup lang="ts">
import { FormInput, FormSelect, FormTextArea } from '@elements';
import { useForm } from 'vee-validate';



const { handleSubmit, setFieldValue, values } = useForm({
    initialValues: {
        first_name: '',
        last_name: '',
        document_number: '',
        email: '',
        address: '',
        phone_number: ''
    }
});

const onGet = handleSubmit(async () => {
    try {
        const response = await fetch('http://localhost:9999/farmers/');
        if (!response.ok) {
            throw new Error('Error en la solicitud');
        }
        const data = await response.json();
        console.log('Datos recibidos:', data);
        if (data.length > 0) {
            const userData = data[1];
            console.log(userData)
            setFieldValue('first_name', userData.first_name);
            setFieldValue('last_name', userData.last_name);
            setFieldValue('document_number', userData.document_number);
            setFieldValue('email', userData.email);
            setFieldValue('address', userData.address);
            setFieldValue('phone_number', userData.phone_number);
        }
    } catch (error) {
        // Manejar cualquier error que ocurra durante la solicitud
        console.error('Error:', error);
    }
});

</script>

<template>
    <div class="h-screen flex-col items-center justify-center rounded-xl bg-white p-2 md:flex-row">
        <div>
            <h1 class="text-center text-4xl font-bold text-fuchsia-700">Información Personal</h1>
        </div>
        <h1>{{ values.document_number }}</h1>
        <div class="flex flex-col justify-center gap-4 md:flex-row">
            <div class="flex flex-col gap-3 md:w-2/5">
                <FormInput :set-value="values.first_name" label="Nombre" placeholder="Escribe su nombre" type="text"
                    name="first_name" />
                <FormInput :set-value="values.last_name" label="Apellido" placeholder="Selecciona su especie" type="text"
                    name="last_name" />
                <FormInput :set-value="values.document_number" label="Documento de Identidad"
                    placeholder="Escribe su nombre" type="text" name="document_number" />
            </div>
            <div class="flex flex-col gap-3 md:w-2/5">
                <FormInput :set-value="values.email" label="Correo Electrónico" placeholder="Ingresa su peso actual"
                    type="email" name="email" />
                <FormInput :set-value="values.address" label="Dirección" placeholder="Ingresa su peso actual" type="email"
                    name="address" />
                <FormInput :set-value="values.phone_number" label="Télefono" placeholder="Ingresa su peso actual"
                    type="email" name="phone_number" />
            </div>
        </div>
        <div class="flex justify-center p-4">
            <button @click="onGet" class="form-button-farmer">Pedir Datos</button>
        </div>
    </div>
</template>