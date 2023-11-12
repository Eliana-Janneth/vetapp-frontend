<script setup lang="ts">
</script>

<template>
    <select v-model="$i18n.locale">
        <option value="es">{{ $t('locale.es') }}</option>
        <option value="en">{{ $t('locale.en') }}</option>
    </select>
</template>
