<script setup lang="ts">
import { EnvelopeIcon, LockClosedIcon, LockOpenIcon } from '@heroicons/vue/24/outline';
import { useForm } from 'vee-validate';
import { ref, reactive } from 'vue';
import { VInput } from '@elements';
import * as yup from 'yup';
import { TLoginPayload, vetappApi } from '@/services';
import { useRouter } from 'vue-router';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

const router = useRouter();
const passwordIcon = ref(LockClosedIcon);
const values: TLoginPayload = reactive({
    username: '',
    password: '',
});

const schema = yup.object({
    username: yup.string().required(t('LoginPage.username')).email(t('LoginPage.validemail')),
    password: yup.string().required(t('LoginPage.logpass')),
});

const { handleSubmit, defineComponentBinds, errors, meta } = useForm<TLoginPayload>({
    validationSchema: schema,
});

const email = defineComponentBinds('username');
const password = defineComponentBinds('password');

const errorMessage = ref<string | null>(null);

const onSubmit = handleSubmit((loginValues: TLoginPayload) => {
    values.username = loginValues.username;
    values.password = loginValues.password;
    vetappApi
        .login(values)
        .then(() => {
            const token = localStorage.getItem('accessToken');
            if (token) {
                const user = localStorage.getItem('user');
                const role = JSON.parse(user!).role;
                if (role === 'farmer') router.push({ name: 'animals.index' });
                else router.push({ name: 'patients.index' });
            }
        })
        .catch((error) => {
            console.error('Error de inicio de sesión:', error);
            errorMessage.value = error.message;
        });
});
</script>

<template>
    <form
        class="flex flex-col items-center gap-2 rounded-xl bg-white p-4"
        @submit.prevent="onSubmit"
        @keyup.enter="onSubmit"
    >
        <h1 class="text-2xl font-medium text-indigo-900">{{ $t('LoginPage.login') }}</h1>

        <VInput
            v-bind="email"
            :placeholder="$t('LoginPage.email')"
            name="email"
            type="email"
            :icon="EnvelopeIcon"
            :error="errors.username"
        />

        <VInput
            v-bind="password"
            :placeholder="$t('LoginPage.password')"
            type="password"
            name="password"
            :icon="passwordIcon"
            :error="errors.password"
            @focus="passwordIcon = LockOpenIcon"
            @blur="passwordIcon = LockClosedIcon"
        />
        <div class="flex gap-6">
            <router-link :to="{ name: 'welcome' }" class="btn btn-primary">{{  $t('LoginPage.return') }}</router-link>
            <button
                :disabled="!meta.valid"
                :class="['btn btn-primary', !meta.valid && 'pointer-events-none opacity-50']"
                type="submit"
            >
                {{ $t('LoginPage.login2') }}
            </button>
        </div>
    </form>
    <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p>
</template>
<style>
.error-message {
    color: red;
}
</style>
