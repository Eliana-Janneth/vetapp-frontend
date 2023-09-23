<script setup lang="ts">
import { HomeIcon, ChatBubbleLeftEllipsisIcon, ArrowPathRoundedSquareIcon, UserCircleIcon } from '@heroicons/vue/24/solid';
import { VSidebarItem, VSidebarButton } from '@sidebar';

defineProps<{
    open: boolean;
}>();

defineEmits(['close']);
</script>

<template>
    <Transition name="side">
        <div v-if="open" class="w-56 overflow-hidden">
            <div class="flex flex-col p-4 bg-white rounded-lg h-full w-56">
                <div class="flex justify-between p-2">
                    <div class="flex flex-col items-center text-3xl font-semibold  text-pink-700 hover:text-pink-900    ">
                        <h1>VetApp</h1>
                    </div>
                    <div class="flex items-center">
                        <VSidebarButton @click="$emit('close')" />
                    </div>
                </div>
                <hr class="border-1 w-full border-pink-700 hover:border-pink-900" />
                <div class="flex-1 mt-4">
                    <ul class="flex flex-col gap-4">
                        <VSidebarItem label="Home" :icon="HomeIcon" />
                        <VSidebarItem label="Consultas" :icon="ChatBubbleLeftEllipsisIcon" />
                        <VSidebarItem label="Solicitudes" :icon="ArrowPathRoundedSquareIcon" />
                        <VSidebarItem label="Perfil" :icon="UserCircleIcon" />
                    </ul>
                </div>
            </div>
        </div>
    </Transition>
</template>

<style scoped>
.side-enter-active {
    animation: side 500ms;
}

.side-leave-active {
    animation: side 500ms reverse;
}

@keyframes side {
    from {
        width: 0;
    }

    to {
        width: 224px;
    }
}
</style>
