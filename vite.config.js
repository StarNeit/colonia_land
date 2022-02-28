import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  server: {
    open: true,
  },
  build: {
    target: "es2015",
  },
  transpileDependencies: ['@vue/reactivity'],
  css: {
    preprocessorOptions: {
      scss: {
        includePaths: [
          // 'node_modules',
          'node_modules/breakpoint-sass/stylesheets',
        ],
      },
    },
  },
})
