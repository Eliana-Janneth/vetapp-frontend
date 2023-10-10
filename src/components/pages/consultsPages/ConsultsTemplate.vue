<script setup lang="ts">
import { ref } from 'vue';
import { VTabButton } from '../../elements';

const activeTab = ref(1);
const setActiveTab = (tab: number) => {
    activeTab.value = tab;
};
</script>

<template>
    <div class="flex flex-col gap-4 rounded-lg bg-white p-2">
        <div class="flex justify-center gap-4 p-2 lg:gap-6">
            <VTabButton
                route="consults.diagnosis"
                label="Historial Médico"
                :active="activeTab === 1"
                @click="setActiveTab(1)"
            />
            <VTabButton
                route="profileVet.informationAcademic"
                label=""
                :active="activeTab === 2"
                @click="setActiveTab(2)"
            />
            <VTabButton route="profileVet.workExperience" label="" :active="activeTab === 3" @click="setActiveTab(3)" />
        </div>
        <div class="">
            <router-view />
        </div>
    </div>
</template>
