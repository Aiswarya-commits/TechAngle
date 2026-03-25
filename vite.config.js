import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],

  build: {
    minify: 'esbuild',
    chunkSizeWarningLimit: 2000,

    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          // You can add more chunks later if needed
          // router: ['react-router-dom'],
        },
      },

      // ← This is the important part to remove the warnings
      onwarn(warning, warn) {
        if (warning.code === 'MODULE_LEVEL_DIRECTIVE') {
          return; // Ignore "use client" warnings from react-router
        }
        warn(warning); // Keep all other warnings
      },
    },
  },
})