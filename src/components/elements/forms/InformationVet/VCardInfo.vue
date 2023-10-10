<script setup lang="ts">
defineProps<{
    tittle : string;
    lastName : string;

    label : string;
}>();
</script>

<template>
    <form class="mx-auto flex w-1/2 flex-col items-center gap-2 rounded-lg bg-sky-100/70 p-2">
        <div class="flex flex-col gap-2 lg:flex-row">
            <VSpan
                v-bind="title"
                custom-class="uppercase font-semibold text-lg"
                variant="vet"
                :label="values.first_name"
                name="first_name"
            />
            <VSpan
                v-bind="university"
                custom-class="uppercase font-semibold text-lg"
                variant="vet"
                :label="values.last_name"
                name="last_name"
            />
        </div>
        <div class="flex flex-col gap-2">
            <VSpan
                v-bind="document"
                variant="vet"
                :label="values.document_number"
                name="document_number"
                :icon="IdentificationIcon"
            />
            <VSpan v-bind="email" variant="vet" :label="values.email" name="email" :icon="EnvelopeIcon" />
            <VSpan v-bind="phone" variant="vet" :label="values.phone_number" name="phone_number" :icon="PhoneIcon" />
            <VSpan v-bind="address" variant="vet" :label="values.address" name="address" :icon="MapPinIcon" />
            <VSpan v-bind="city" variant="vet" :label="values.city" name="city" :icon="MapIcon" />
            <VSpan
                v-bind="license"
                variant="vet"
                :label="values.license_number"
                name="city"
                :icon="IdentificationIcon"
            />
            <VSpan
                v-bind="licenseExpiration"
                variant="vet"
                :label="values.license_expiry_date"
                name="city"
                :icon="CalendarDaysIcon"
            />
        </div>
    </form>
</template>