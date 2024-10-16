import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import '/src/shared/styles/constants.scss';@import '/src/shared/styles/mixins.scss';`,
      },
    },
    devSourcemap: true,
  },

  resolve: {
    alias: {
      "@": "/src"
    }
  },
});
