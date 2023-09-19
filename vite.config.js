import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    // Configuración para manejar archivos .mov como activos
    fs: {
      // Indica que .mov es un tipo de archivo estático
      allow: ["**/*.mov"]
    }
  }
})
