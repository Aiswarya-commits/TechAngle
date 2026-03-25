import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  build: {
    minify: 'esbuild',        // or 'terser' if you prefer
    chunkSizeWarningLimit: 2000,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'], // adjust to your heavy deps
        },
      },
    },
  },
})
