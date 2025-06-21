import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import fs from 'fs'

export default defineConfig({
  server: {
    https: {
      key: fs.readFileSync('./localhost-key.pem'),
      cert: fs.readFileSync('./localhost.pem'),
    },
    host: true,
    port: 5173,
  },
  base: '/Paginaweb/', // 👈 muy importante para subruta
  plugins: [react()],
})
