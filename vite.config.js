import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/Paginaweb/', // 👈 muy importante para subruta
  plugins: [react()],
})
