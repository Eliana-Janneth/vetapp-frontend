<script setup lang="ts">
import { useUserStore } from '@/stores';

defineProps<{
    customClass?: string;
    label: string;
    description: string;
    update?: boolean;
    type?: 'input' | 'textArea';
    functionUpdate?: Function | any;
}>();

const userStore = useUserStore();
</script>

<template>
    <div
        :class="[
            'mx-auto w-full border border-x-0 border-t-0 p-2 lg:w-full',
            userStore.isVet ? 'border-sky-200/50' : 'border-emerald-200/50',
        ]"
    >
        <dl class="p-2">
            <div class="flex flex-col">
                <dt :class="['text-lg font-semibold', userStore.isFarmer ? 'text-emerald-600' : 'text-sky-600']">
                    {{ label }}
                </dt>
                <dd class="ml-2 flex flex-col justify-between text-justify lg:flex-row">
                    <span
                        :class="[
                            'text-base font-medium',
                            userStore.isFarmer ? 'text-emerald-700' : 'text-sky-700',
                            customClass,
                        ]"
                        >{{ description }}</span
                    >
                </dd>
            </div>
        </dl>
    </div>
</template>
