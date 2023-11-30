<script setup lang="ts">
import { ref, computed, reactive } from 'vue';
import type { TRegisterFormAccount, TRegisterFormProfile } from './types';
import AccountForm from './AccountForm.vue';
import ProfileForm from './ProfileForm.vue';
import { TRegisterPayload, vetappApi } from '@/services';
import { useRouter } from 'vue-router';

const values: TRegisterPayload = reactive({
    email: '',
    profile: 'farmer',
    password: '',
    repeat_password: '',
    first_name: '',
    last_name: '',
    document_number: '',
    phone_number: '',
    city: '',
    address: '',
});

const router = useRouter();
const formState = ref(0);
const isFormState = (state: number) => formState.value === state;
const nextFormState = (accountValues: TRegisterFormAccount) => {
    values.email = accountValues.email;
    values.profile = accountValues.profile;
    values.password = accountValues.password;
    values.repeat_password = accountValues.confirmPassword;

    formState.value++;
};

const initialAccountValues = computed<TRegisterFormAccount>(() => ({
    email: values.email,
    profile: values.profile,
    password: values.password,
    confirmPassword: values.repeat_password,
}));

const prevFormState = () => formState.value--;

const onSubmit = (profileValues: TRegisterFormProfile) => {
    values.first_name = profileValues.firstName;
    values.last_name = profileValues.lastName;
    values.document_number = profileValues.document;
    values.phone_number = profileValues.phone;
    values.city = profileValues.city;
    values.address = profileValues.address;

    vetappApi.register(values).then((res) => {
        if (res.error) formState.value--;
        else router.push({ name: 'login' });
    });
};
</script>

<template>
    <AccountForm v-if="isFormState(0)" @done="nextFormState" :initialValues="initialAccountValues" />
    <ProfileForm v-if="isFormState(1)" @done="onSubmit" @cancel="prevFormState" />
</template>
