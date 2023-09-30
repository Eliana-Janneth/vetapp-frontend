<script setup lang="ts">
import { VInput, VButton } from '@elements';
import { useForm } from 'vee-validate';

const { handleSubmit, setValues, values } = useForm({
    initialValues: {
        first_name: '',
        last_name: '',
        document_number: '',
        email: '',
        address: '',
        phone_number: '',
    },
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
            console.log(userData);
            setValues({
                first_name: userData.first_name,
                last_name: userData.last_name,
                document_number: userData.document_number,
                email: userData.email,
                address: userData.address,
                phone_number: userData.phone_number,
            });
        }
    } catch (error) {
        // Manejar cualquier error que ocurra durante la solicitud
        console.error('Error:', error);
    }
});
</script>
<template>
    <form class="flex flex-col gap-2 bg-white p-2">
        <div class="flex flex-col gap-2 lg:flex-row">
            <h1>{{ values.first_name }}</h1>
            <h1>{{ values.last_name }}</h1>
            <VInput
                :set-value="values.first_name"
                custom-class="form-farmer"
                label-color="text-emerald-800"
                label="Nombre"
                placeholder="Escriba su nombre"
                type="text"
                name="first_name"
            />
            <VInput
                custom-class="form-farmer"
                label-color="text-emerald-800"
                label="Apellido"
                placeholder="Escriba su apellido"
                type="text"
                name="last_name"
            />
        </div>
        <div class="flex flex-col gap-2 lg:flex-row">
            <VInput
                custom-class="form-farmer"
                label-color="text-emerald-800"
                label="Documento de Identidad"
                placeholder="Escriba su documento de identidad"
                type="text"
                name="document_number"
            />
            <VInput
                custom-class="form-farmer"
                label-color="text-emerald-800"
                label="Correo Electrónico"
                placeholder="Escriba su correo electrónico"
                type="email"
                name="email"
            />
            <VInput
                custom-class="form-farmer"
                label-color="text-emerald-800"
                label="Número de Teléfono"
                placeholder="Escriba su número de teléfono"
                type="text"
                name="phone_number"
            />
        </div>
        <div class="flex flex-col gap-2 lg:flex-row">
            <VInput
                custom-class="form-farmer"
                label-color="text-emerald-800"
                label="Dirección"
                placeholder="Escriba su dirección"
                type="text"
                name="address"
            />
            <VInput
                custom-class="form-farmer"
                label-color="text-emerald-800"
                label="Municipio"
                placeholder="Escriba su municipio"
                type="text"
                name="city"
            />
        </div>
        <div class="flex justify-center p-4">
            <VButton @click="onGet" label="Pedir Datos" custom-class="btn form-button-farmer" />
        </div>
    </form>
</template>
