<template>
    <div class="min-h-screen flex justify-center items-center bg-gray-100">
      <div class="bg-white p-4 rounded shadow-md w-96">
        <div class="h-64 overflow-y-auto mb-4">
          <div v-for="message in messages" :key="message.id" class="mb-2">
            <div v-if="message.isSent" class="text-right">
              <div class="bg-blue-500 text-white rounded p-2 inline-block">
                <template v-if="message.type === 'text'">{{ message.text }}</template>
                <template v-else>
                  <img :src="message.image" alt="Imagen" class="max-w-48" />
                </template>
              </div>
            </div>
            <div v-else>
              <div class="bg-gray-200 rounded p-2 inline-block">
                <template v-if="message.type === 'text'">{{ message.text }}</template>
                <template v-else>
                  <img :src="message.image" alt="Imagen" class="max-w-48" />
                </template>
              </div>
            </div>
          </div>
        </div>
        <div class="flex">
          <input
            v-model="newMessage"
            @keyup.enter="sendMessageText"
            class="flex-1 rounded-l p-2"
            type="text"
            placeholder="Escribe tu mensaje..."
          />
          <button @click="sendMessageText" class="rounded-r p-2 bg-blue-500 text-white">
            Enviar
          </button>
        </div>
        <div class="mt-2">
          <label for="imageInput" class="cursor-pointer text-blue-500">
            Adjuntar Imagen
          </label>
          <input
            id="imageInput"
            ref="imageInput"
            type="file"
            accept="image/*"
            class="hidden"
            @change="uploadImage"
          />
        </div>
      </div>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  
  interface Message {
    id: number;
    text?: string;
    image?: string;
    type: 'text' | 'image';
    isSent: boolean;
  }
  
  export default defineComponent({
    data() {
      return {
        messages: [] as Message[],
        newMessage: '',
      };
    },
    methods: {
      sendMessageText() {
        if (this.newMessage.trim() === '') return;
        this.messages.push({
          id: this.messages.length + 1,
          text: this.newMessage,
          type: 'text',
          isSent: true,
        });
        this.newMessage = '';
      },
      uploadImage() {
        const imageInput = this.$refs.imageInput as HTMLInputElement;
        if (imageInput.files && imageInput.files[0]) {
          const imageUrl = URL.createObjectURL(imageInput.files[0]);
          this.messages.push({
            id: this.messages.length + 1,
            image: imageUrl,
            type: 'image',
            isSent: true,
          });
          imageInput.value = ''; // Limpiar el campo de entrada
        }
      },
    },
  });
  </script>
  