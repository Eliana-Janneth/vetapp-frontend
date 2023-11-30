import './styles/main.css';
import { createApp } from 'vue';
import { router } from './router';
import { createPinia } from 'pinia';
import App from './App.vue';
import Notifications from '@kyvg/vue3-notification';
import { createI18n } from 'vue-i18n';
import { es, en } from './lang';

const i18n = createI18n({
    locale: import.meta.env.VITE_I18N_LOCALE || 'en',
    fallbackLocale: 'en',
    availableLocales: ['es', 'en'],
    messages: { es, en },
});

const pinia = createPinia();

const app = createApp(App);
app.use(pinia);
app.use(router);
app.use(i18n);
app.use(Notifications);

// // Agregar registro del Service Worker
// if ('serviceWorker' in navigator) {
//     navigator.serviceWorker.register('/sw.js').then((registration) => {
//       console.log('Service Worker registrado con éxito:', registration);

//       if (registration.active) {
//         // Manejo de eventos de conectividad
//         window.addEventListener('online', () => {
//           // Actualiza la interfaz para indicar que la aplicación está en línea
//           console.log('La aplicación está en línea');
//         });
      
//         window.addEventListener('offline', () => {
//           // Actualiza la interfaz para indicar que la aplicación está fuera de línea
//           console.log('La aplicación está fuera de línea');
//         });
      
//         // Notificaciones de actualización
//         navigator.serviceWorker.addEventListener('controllerchange', () => {
//           // Notificar al usuario sobre la actualización y recargar la página
//           console.log('Service Worker actualizado. Recargando la página...');
//           window.location.reload();
//         });
      
//         registration.active.postMessage({ type: 'SKIP_WAITING' });
//       }
//     }).catch((error) => {
//       console.error('Error al registrar el Service Worker:', error);
//     });
//   }


app.mount('#app');
