import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: "/amorvita",
  define: {
    __DEFINES__: JSON.stringify({}) 
  }
});
