import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import VueI18nPlugin from '@intlify/unplugin-vue-i18n/vite';
import { dirname, resolve } from 'node:path';
//import workbox from 'workbox-build';

export default defineConfig({
    plugins: [
      vue(),
      VueI18nPlugin({
        include: resolve(
          dirname(fileURLToPath(import.meta.url)),
          '/.src/locales/**'
        ),
      }),
      
    ],
    resolve: {
        alias: {
            '@elements': '/src/components/elements',
            '@pages': '/src/components/pages',
            '@': fileURLToPath(new URL("./src", import.meta.url)),
        },
    },
    // build: {
    //   rollupOptions: {
    //     plugins: [
    //       {
    //         writeBundle: async () => {
    //           await workbox.generateSW({
    //             globDirectory: 'dist',
    //             globPatterns: ['**/*.{html,js,css,ts,vue}'],
    //             swDest: 'dist/sw.js', // Nombre del archivo Service Worker
    //           });
    //         },
    //       } as any,
    //     ],
    //   },
    // },
  });
  
  
  
  