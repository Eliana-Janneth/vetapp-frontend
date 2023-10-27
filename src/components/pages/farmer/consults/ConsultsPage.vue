<script setup lang="ts">
import PersonOnline from './PersonOnline.vue';
import ChatList from './ChatList.vue';
import LeftMessage from './LeftMessage.vue';
import RightMessage from './RightMessage.vue';
import InputBottom from './InputBottom.vue';
import ChatHeader from './ChatHeader.vue';


    
</script>

<template>
    <section class="flex h-screen flex-col overflow-hidden lg:flex-row">
        <div class="w-full bg-gray-100">
            <div class="border-b px-4 lg:px-10">
                <ChatHeader name="Eliana Puerta" :state="true" />
            </div>

            <div class="h-96 overflow-auto px-4 py-4 lg:px-6">
                <LeftMessage
                    message="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio, eveniet? Impedit laborum laudantium harum debitis possimus error accusamus earum reiciendis maiores expedita ullam rerum temporibus autem cumque distinctio, quam sed suscipit, vero quod explicabo veritatis quas? Architecto eveniet corporis ipsam ea totam quia error sapiente reprehenderit facilis. Incidunt eos laboriosam voluptatibus vel suscipit. Dicta optio facilis consectetur quod molestias distinctio dolore voluptate, excepturi quae praesentium ducimus? Maxime illum, explicabo enim modi praesentium quidem tempora illo iusto quibusdam repudiandae, fugit dolorem quas aliquam soluta alias. Unde, dolore vero voluptate eligendi, saepe ipsa aliquid obcaecati earum laboriosam labore veritatis commodi assumenda sint."
                    hour="10:00 am"
                />
                <RightMessage message="Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum" hour="10:00 am" />
                <LeftMessage message="Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum" hour="10:00 am" />
                <RightMessage message="Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum" hour="10:00 am" />
                <LeftMessage message="Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum" hour="10:00 am" />
                <RightMessage message="Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum" hour="10:00 am" />
            </div>
            <InputBottom />
        </div>
        <div class="w-full lg:w-96 bg-white p-4">
            <h3 class="mb-8 text-2xl">Chat en línea</h3>
            <div class="mb-4 flex w-full overflow-auto">
                <PersonOnline name="Eliana" image="https://i.pravatar.cc/300" />
                <PersonOnline name="Eliana" image="https://i.pravatar.cc/400" />
                <PersonOnline name="Eliana" image="https://i.pravatar.cc/500" />
                <PersonOnline name="Eliana" image="https://i.pravatar.cc/300" />
                <PersonOnline name="Eliana" image="https://i.pravatar.cc/300" />
                <PersonOnline name="Eliana" image="https://i.pravatar.cc/300" />
                <PersonOnline name="Eliana" image="https://i.pravatar.cc/300" />
              

            </div>
            <div class="h-4/5 overflow-auto">
                <ChatList
                    name="Eliana Puerta"
                    date="9:00 am"
                    lastMessage="Lorem ipsum bla bla bla"
                    image="https://i.pravatar.cc/300"
                />
                <ChatList
                    name="Pedro"
                    date="9:00 am"
                    lastMessage="Lorem ipsum bla bla bla ipsumipsum ipsum ipsum "
                    image="https://i.pravatar.cc/400"
                />
                <ChatList
                    name="Pedro"
                    date="9:00 am"
                    lastMessage="Lorem ipsum bla bla bla"
                    image="https://i.pravatar.cc/500"
                />
                <ChatList
                    name="Pedro"
                    date="9:00 am"
                    lastMessage="Lorem ipsum bla bla bla"
                    image="https://i.pravatar.cc/600"
                />
                <ChatList
                    name="Pedro"
                    date="9:00 am"
                    lastMessage="Lorem ipsum bla bla bla"
                    image="https://i.pravatar.cc/700"
                />
                <ChatList
                    name="Pedro"
                    date="9:00 am"
                    lastMessage="Lorem ipsum bla bla bla"
                    image="https://i.pravatar.cc/800"
                />
            </div>
        </div>
    </section>
</template>
