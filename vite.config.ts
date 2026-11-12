import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import tailwindcss from '@tailwindcss/vite' // 確保有這行

export default defineConfig({
  plugins: [
    vue(),
    tailwindcss(), // 確保有加入這個外掛
  ],
  base: '/resume/', 
  resolve: {
    alias: {
      '@': path.resolve(import.meta.dirname, './src'),
    },
  },
})