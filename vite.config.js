import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/Paginaweb/', // 👈 Muy importante: coincide con el nombre del repo en GitHub
})

