import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/Product-Store/',
  resolve: {
    alias: {
      react: 'react', // Aide Vite à trouver React
    },
  },
})
