<script setup lang="ts">

defineProps<{
    label: string;
    placeholder: string;
    name: string;

}>();

</script>


<template>
    <label class="relative block drop-shadow-xl w-full">
        <span class="block font-medium text-fuchsia-700 text-lg">{{ label }}</span>
        <textarea
            class="placeholder:text-fuchsia-400/50 block w-full h-full bg-white hover:bg-fuchsia-50 focus:bg-fuchsia-100 border border-fuchsia-700 rounded-lg py-2 px-2 shadow-md focus:outline-none focus:border-fuchsia-500 focus:ring-fuchsia-500 focus:ring-1 text-md text-fuchsia-700"
            :placeholder="placeholder" :name="name" required> 
        </textarea> 
    </label>
</template>