<script setup lang="ts">
import { useStyleStore } from '@/stores';

const styleStore = useStyleStore();
</script>

<template>
    <select v-model="$i18n.locale" :class="[styleStore.getSelectLanguage]">
        <option value="es">{{ $t('locale.es') }}</option>
        <option value="en">{{ $t('locale.en') }}</option>
    </select>
</template>
