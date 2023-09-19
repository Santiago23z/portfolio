import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  
  // Agrega ".mov" a assetsInclude
  assetsInclude: ["**/*.mov"],
})
