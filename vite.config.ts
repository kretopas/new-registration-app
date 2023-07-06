import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 8080
  },
  resolve: {
    alias: {
      "@assets": "/src/assets",
      "@components": "/src/components",
      "@configs": "/src/configs",
      "@helpers": "/src/helpers",
      "@services": "/src/services",
      "@views": "/src/views"
    }
  },
  //optimizeDeps: {
  //  include: ['esm-dep > cjs-dep'],
  //},
})
