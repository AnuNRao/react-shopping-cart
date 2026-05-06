import { defineConfig } from 'vite'

export default defineConfig({
  optimizeDeps: {
    include: ['axios'],
  },
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:5000',
        changeOrigin: true,
      },
    },
  },
});