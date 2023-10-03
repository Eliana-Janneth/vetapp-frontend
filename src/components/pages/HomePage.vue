<script setup lang="ts">
import { HomeTemplate } from '@/components/templates'
import MenuFarmerPage from './MenuFarmerPage.vue';
import MenuVetPage from './MenuVetPage.vue';
const user = JSON.parse(localStorage.getItem('user') ?? '{}')
</script>

<template>
    <HomeTemplate :role="user.role">
        <MenuFarmerPage v-if="user.role === 'farmer'"/>
        <MenuVetPage v-else />

       
    </HomeTemplate>
</template>
