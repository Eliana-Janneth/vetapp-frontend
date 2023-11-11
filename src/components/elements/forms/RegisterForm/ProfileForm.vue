<script setup lang="ts">
import { VInput } from '@elements';
import { useForm } from 'vee-validate';
import * as yup from 'yup';
import type { TRegisterFormProfile } from './types';
import {
    UserIcon,
    UserPlusIcon,
    IdentificationIcon,
    PhoneIcon,
    BuildingOffice2Icon,
    HomeIcon,
} from '@heroicons/vue/24/outline';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

const emit = defineEmits(['done', 'cancel']);

const validationSchema = yup.object({
    firstName: yup
        .string()
        .required(t('RegisterPage.valname'))
        .min(2, t('RegisterPage.valminname'))
        .max(40, t('RegisterPage.valmaxname')),
    lastName: yup
        .string()
        .required(t('RegisterPage.vallastname'))
        .min(2, t('RegisterPage.valminlastname'))
        .max(40, t('RegisterPage.valmaxlastname')),
    document: yup
        .string()
        .required(t('RegisterPage.valdocument'))
        .matches(/^\d+$/, t('RegisterPage.valmatchdocument'))
        .max(10, t('RegisterPage.valmaxdocument')),
    phone: yup
        .string()
        .required(t('RegisterPage.valcell'))
        .matches(/^[\d+]+$/, t('RegisterPage.valmatchescell'))
        .max(15, t('RegisterPage.valmaxcell'))
        .min(7, t('RegisterPage.valmincell')),
    city: yup
        .string()
        .required(t('RegisterPage.valmun'))
        .min(2, t('RegisterPage.valminmun'))
        .max(50, t('RegisterPage.valmaxmun')),
    address: yup
        .string()
        .required(t('RegisterPage.valaddress'))
        .min(5, t('RegisterPage.valminaddress'))
        .max(100, t('RegisterPage.valmaxaddress')),
});

const { handleSubmit, defineComponentBinds, errors, meta } = useForm<TRegisterFormProfile>({ validationSchema });

const firstName = defineComponentBinds('firstName');
const lastName = defineComponentBinds('lastName');
const document = defineComponentBinds('document');
const phone = defineComponentBinds('phone');
const city = defineComponentBinds('city');
const address = defineComponentBinds('address');

const onSubmit = handleSubmit((values) => {
    emit('done', values);
});
</script>

<template>
    <form @submit="onSubmit" class="flex flex-col items-center gap-y-4 p-2">
        <div class="flex w-full flex-col gap-4 lg:flex-row">
            <VInput
                v-bind="firstName"
                :label="$t('RegisterPage.name')"
                name="name"
                :placeholder="$t('RegisterPage.name')"
                :icon="UserIcon"
                :maxlength="40"
                :error="errors.firstName"
            />

            <VInput
                v-bind="lastName"
                :label="$t('RegisterPage.lastname')"
                :placeholder="$t('RegisterPage.lastname')"
                name="lastName"
                :icon="UserPlusIcon"
                :maxlength="40"
                :error="errors.lastName"
            />
        </div>

        <VInput
            v-bind="document"
            :label="$t('RegisterPage.id')"
            :placeholder="$t('RegisterPage.id2')"
            type="number"
            name="document"
            :icon="IdentificationIcon"
            :maxlength="12"
            :error="errors.document"
        />

        <VInput
            v-bind="phone"
            :label="$t('RegisterPage.cell')"
            :placeholder="$t('RegisterPage.cell2')"
            type="number"
            name="phone"
            :icon="PhoneIcon"
            :maxlength="15"
            :error="errors.phone"
        />

        <VInput
            v-bind="city"
            :label="$t('RegisterPage.mun')"
            :placeholder="$t('RegisterPage.mun2')"
            name="city"
            :icon="BuildingOffice2Icon"
            :maxlength="50"
            :error="errors.city"
        />

        <VInput
            v-bind="address"
            :label="$t('RegisterPage.address')"
            :placeholder="$t('RegisterPage.address')"
            name="address"
            :icon="HomeIcon"
            :maxlength="100"
            :error="errors.address"
        />

        <div class="flex w-full justify-center gap-4">
            <button
                :disabled="!meta.valid"
                type="submit"
                :class="['btn btn-primary', !meta.valid && 'pointer-events-none opacity-50']"
            >
                {{ $t("RegisterPage.register2") }}
            </button>
            <button @click="emit('cancel')" class="btn btn-primary">{{ $t("RegisterPage.cancelar") }}</button>
        </div>
    </form>
</template>
