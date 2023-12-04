<script setup lang="ts">
import { useUserStore } from '@/stores';
import { twMerge } from 'tailwind-merge';
import { hasSlotContent } from '@/helpers';
import VSkeleton from './VSkeleton.vue';

defineProps<{
    loading?: boolean;
    class?: string;
    bodyClass?: string;
}>();

const user = useUserStore();

const styles = {
    farmer: {
        container: 'bg-emerald-100',
        header: 'text-emerald-100 bg-emerald-500 px-[18px] flex items-center gap-1 py-1',
        body: 'border-emerald-200',
        loader: 'bg-emerald-300',
    },
    vet: {
        container: 'bg-sky-100',
        header: 'text-sky-100 bg-sky-500 px-[18px] flex items-center gap-1 py-1',
        body: 'border-sky-200',
        loader: 'bg-sky-300',
    },
};

const style = styles[user.role];
</script>

<template>
    <div
        :class="
            twMerge(
                style.container,
                'flex w-fit flex-col overflow-hidden rounded-md shadow',
                $props.class,
                $props.loading && 'w-[200px] lg:w-[200px]',
            )
        "
    >
        <header v-if="hasSlotContent($slots.header)" :class="twMerge('leading-none', style.header, 'font-semibold')">
            <VSkeleton v-if="loading" :class="[style.loader, 'h-6']" />
            <slot v-else name="header" />
        </header>

        <main :class="twMerge('flex h-full flex-col gap-1 rounded-b-md border-2 px-4 py-2', style.body, bodyClass)">
            <template v-if="loading">
                <VSkeleton :class="[style.loader, 'h-5']" />
                <VSkeleton :class="[style.loader, 'h-5 w-[80%]']" />
                <VSkeleton :class="[style.loader, 'h-5 w-[60%]']" />
                <VSkeleton :class="[style.loader, 'h-5 w-[70%]']" />
                <VSkeleton :class="[style.loader, 'h-5 w-[90%]']" />
            </template>
            <slot v-else />
        </main>
    </div>
</template>
