<script setup lang="ts">
import { ref, reactive } from 'vue';
import type { TFarmerInformation } from './types';
import FormFarmer from './FormFarmer.vue';
import ViewFarmer from './ViewFarmer.vue';
import { TFarmerInformationPayload, vetappApi } from '@/services';

const values: TFarmerInformationPayload = reactive({
    email: '',
    password: '',
    repeat_password: '',
    first_name: '',
    last_name: '',
    document_number: '',
    phone_number: '',
    city: '',
    address: '',
});

const formState = ref(0);
const isFormState = (state: number) => formState.value === state;

const nextFormState = (accountValues: TFarmerInformationPayload) => {
    values.email = accountValues.email;
    values.password = accountValues.password;
    values.repeat_password = accountValues.repeat_password;

    formState.value++;
};

const prevFormState = () => formState.value--;

const onSubmit = (updateValues: TFarmerInformation) => {
    values.phone_number = updateValues.phone;
    values.city = updateValues.city;
    values.address = updateValues.address;
    values.password = updateValues.password;
    values.repeat_password = updateValues.confirmPassword;

    console.log('Form submitted!', values);
    vetappApi.updateUser(values);
};
</script>

<template>
    <ViewFarmer v-if="isFormState(0)" @done="nextFormState" />
    <FormFarmer v-if="isFormState(1)" @done="onSubmit" @cancel="prevFormState" />
</template>
