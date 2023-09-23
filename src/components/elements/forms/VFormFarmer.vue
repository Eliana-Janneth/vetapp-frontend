<script setup lang="ts">
import { VInput } from '@elements';
import { useForm } from 'vee-validate';

const { handleSubmit, setValues, values } = useForm({
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
            setValues({
                first_name: userData.first_name,
                last_name: userData.last_name,
                document_number: userData.document_number,
                email: userData.email,
                address: userData.address,
                phone_number: userData.phone_number
        });
    }
    } catch (error) {
        // Manejar cualquier error que ocurra durante la solicitud
        console.error('Error:', error);
    }
});
</script>
<template>
    <div class="flex flex-col bg-white gap-2 p-2">
        <div class="flex gap-2">
            <h1>{{ values.first_name }}</h1>
            <VInput :set-value="values.first_name" label="Nombre" placeholder="Escriba su nombre" type="text" name="first_name" />
            <VInput label="Apellido" placeholder="Escriba su apellido" type="text" name="last_name" />
        </div>
        <div class="flex gap-2">
            <VInput label="Documento de Identidad" placeholder="Escriba su documento de identidad" type="text"
                name="document_number" />
            <VInput label="Correo Electrónico" placeholder="Escriba su correo electrónico" type="email" name="email" />
            <VInput label="Número de Teléfono" placeholder="Escriba su número de teléfono" type="text"
                name="phone_number" />
        </div>
        <div class="flex gap-2">
            <VInput label="Dirección" placeholder="Escriba su dirección" type="text" name="address" />
            <VInput label="Municipio" placeholder="Escriba su municipio" type="text" name="city" />
        </div>
        <div class="flex justify-center p-4">
            <button @click="onGet" class="form-button-vet">Pedir Datos</button>
        </div>
    </div>
</template>