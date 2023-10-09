<script setup lang="ts">
import { ref,  reactive } from 'vue';
import { TDiagnosisPayload } from '@/services';
import { PencilIcon } from '@heroicons/vue/24/outline';

const values: TDiagnosisPayload = reactive({
    animal: '',
    diagnosis: '',
    treatment: '',
});

</script>
<template>
    <div class="bg-white">
        <div class="max-h-96 overflow-y-scroll">
            
        </div>
    </div>
</template>
