<script setup lang="ts">
import { useForm } from 'vee-validate';
import { VInput, VSelect } from '@elements';
import type { TRegisterFormAccount } from './types';
import * as yup from 'yup';
import { AtSymbolIcon, LockClosedIcon } from '@heroicons/vue/24/outline';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

const emit = defineEmits(['done']);

const props = defineProps<{ initialValues?: TRegisterFormAccount }>();

const validationSchema = yup.object({
    email: yup
        .string()
        .required(t('RegisterPage.requiredemail'))
        .email(t('RegisterPage.erroremail'))
        .min(10, t('RegisterPage.lengthemail')),
    password: yup
        .string()
        .required(t('RegisterPage.requiredpass'))
        .min(8, t('RegisterPage.minpass'))
        .max(200, t('RegisterPage.maxpass')),
    profile: yup.string().oneOf(['farmer', 'vet'], t('RegisterPage.oneprofile')).required(t('RegisterPage.oneprofile')),
    confirmPassword: yup
        .string()
        .required(t('RegisterPage.requiredpass2'))
        .min(8, t('RegisterPage.confirmminpass'))
        .oneOf([yup.ref('password')], t('RegisterPage.onepass')),
});

const { handleSubmit, defineComponentBinds, errors, meta } = useForm<TRegisterFormAccount>({
    validationSchema,
    initialValues: props.initialValues,
});

const profile = defineComponentBinds('profile');
const email = defineComponentBinds('email');
const password = defineComponentBinds('password');
const confirmPassword = defineComponentBinds('confirmPassword');

const onSubmit = handleSubmit((values) => {
    emit('done', values);
});

const profiles = [
    { text: t('RegisterPage.farm'), value: 'farmer' },
    { text: t('RegisterPage.vet'), value: 'vet' },
];
</script>

<template>
    <form @submit="onSubmit" class="flex flex-col items-center gap-y-4 p-2">
        <VSelect
            :options="profiles"
            v-bind="profile"
            :label="$t('RegisterPage.profile')"
            placeholder="Seleccione su pefil"
            name="profile"
            :error="errors.profile"
        />

        <VInput
            v-bind="email"
            label="Email"
            :placeholder="$t('RegisterPage.alertemail')"
            type="email"
            name="email"
            :icon="AtSymbolIcon"
            :maxlength="60"
            :error="errors.email"
        />

        <VInput
            v-bind="password"
            :label="$t('RegisterPage.password')"
            :placeholder="$t('RegisterPage.alertpass')"
            type="password"
            name="password"
            :icon="LockClosedIcon"
            :maxlength="30"
            :error="errors.password"
        />

        <VInput
            v-bind="confirmPassword"
            :label="$t('RegisterPage.confirmpass')"
            :placeholder="$t('RegisterPage.alertconfirmpass')"
            type="password"
            name="password"
            :icon="LockClosedIcon"
            :maxlength="30"
            :error="errors.confirmPassword"
        />

        <div class="flex w-full justify-center gap-4">
            <button
                :disabled="!meta.valid"
                type="submit"
                :class="['btn btn-primary', !meta.valid && 'pointer-events-none opacity-50']"
            >
                {{ $t('RegisterPage.next') }}
            </button>
            <router-link :to="{ name: 'welcome' }" class="btn btn-primary">{{ $t('RegisterPage.cancel') }}</router-link>
        </div>
    </form>
</template>
