<script setup lang="ts">
import PersonOnline from './PersonOnline.vue';
import ChatList from './ChatList.vue';
import LeftMessage from './LeftMessage.vue';
import RightMessage from './RightMessage.vue';
import InputBottom from './InputBottom.vue';
import ChatHeader from './ChatHeader.vue';



</script>

<template>
    <section class="flex h-screen overflow-hidden">
        <div class="w-full bg-gray-100">
            <div class="border-b px-20">
                <ChatHeader name="Eliana Puerta" :state="true" />
            </div>

            <div class="h-96 overflow-auto px-6 py-2">
                <LeftMessage message="Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum" hour="10:00 am" />
                <RightMessage message="Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum" hour="10:00 am" />
                <LeftMessage message="Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum" hour="10:00 am" />
                <RightMessage message="Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum" hour="10:00 am" />
                <LeftMessage message="Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum" hour="10:00 am" />
                <RightMessage message="Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum" hour="10:00 am" />
            </div>

            <InputBottom />
        </div>
        <div class="w-96 bg-white p-4">
            <h3 class="mb-8 text-2xl">Chat en línea</h3>
            <div class="mb-4 flex w-full overflow-auto">
                <PersonOnline name="Eliana" image="https://i.pravatar.cc/300"/>
                <PersonOnline name="Eliana" image="https://i.pravatar.cc/400"/>
                <PersonOnline name="Eliana" image="https://i.pravatar.cc/500"/>
                <PersonOnline name="Eliana" image="https://i.pravatar.cc/300"/>
                <PersonOnline name="Eliana" image="https://i.pravatar.cc/300"/>
                <PersonOnline name="Eliana" image="https://i.pravatar.cc/300"/>
            </div>
            <div class="h-4/5 overflow-auto">
                <ChatList name="Eliana Puerta" date="9:00 am" lastMessage="Lorem ipsum bla bla bla"  image="https://i.pravatar.cc/300"/>
                <ChatList name="Pedro" date="9:00 am" lastMessage="Lorem ipsum bla bla bla ipsumipsum ipsum ipsum " image="https://i.pravatar.cc/400"/>
                <ChatList name="Pedro" date="9:00 am" lastMessage="Lorem ipsum bla bla bla" image="https://i.pravatar.cc/500"/>
                <ChatList name="Pedro" date="9:00 am" lastMessage="Lorem ipsum bla bla bla" image="https://i.pravatar.cc/600"/>
                <ChatList name="Pedro" date="9:00 am" lastMessage="Lorem ipsum bla bla bla" image="https://i.pravatar.cc/700"/>
                <ChatList name="Pedro" date="9:00 am" lastMessage="Lorem ipsum bla bla bla" image="https://i.pravatar.cc/800"/>
            </div>
        </div>
    </section>
</template>
