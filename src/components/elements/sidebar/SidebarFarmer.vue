<script setup lang="ts">
import { HomeIcon, ChatBubbleLeftEllipsisIcon, StarIcon, UserCircleIcon, ArrowLeftOnRectangleIcon} from '@heroicons/vue/24/solid';
import { VSidebarItem, VSidebarButton } from '@elements/sidebar';

defineProps<{
    open: boolean;
}>();

defineEmits(['close', 'openAnimal', 'openUser', 'cerrarSesion'])


</script>

<template>
    <Transition name="side">
        <div v-if="open" class="w-56 overflow-hidden">
            <div class="flex h-full w-56 flex-col rounded-lg bg-white p-4">
                <div class="flex justify-between p-2">
                    <div
                        class="flex flex-col items-center text-3xl font-semibold text-emerald-700 hover:text-emerald-900"
                    >
                        <h1>VetApp</h1>
                    </div>
                    <div class="flex items-center">
                        <VSidebarButton @click="$emit('close')" />
                    </div>
                </div>
                <hr class="border-1 w-full border-emerald-700 hover:border-emerald-900" />
                <div class="mt-4 flex-1">
                    <ul class="flex flex-col gap-4">
                        <VSidebarItem custom-class="btn-menu-farmer" label="Home" :icon="HomeIcon" />
                        <VSidebarItem
                            custom-class="btn-menu-farmer"
                            label="Consultas"
                            :icon="ChatBubbleLeftEllipsisIcon"
                        />
                        <VSidebarItem custom-class="btn-menu-farmer" label="Mis animales" :icon="StarIcon" @click="$emit('openAnimal')" />
                        <VSidebarItem custom-class="btn-menu-farmer" label="Perfil" :icon="UserCircleIcon" @click="$emit('openUser')" />
                        <VSidebarItem custom-class="btn-menu-farmer" label="Cerrar Sesión" :icon="ArrowLeftOnRectangleIcon" @click="$emit('cerrarSesion')" />

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
