import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
      '@components': resolve(__dirname, './src/components'),
      '@hooks': resolve(__dirname, './src/hooks'),
      '@constants': resolve(__dirname, './src/constants'),
      '@utils': resolve(__dirname, './src/utils'),
      '@styles': resolve(__dirname, './src/styles'),
    },
  },
  server: {
    port: 3000,
    open: true, // Tự động mở browser
    host: true, // Cho phép access từ network
    allowedHosts: [
      'b36f91be30d3.ngrok-free.app' // thêm host này để Vite cho phép
    ]
  },
  build: {
    outDir: 'dist',
    sourcemap: false, // Disable sourcemap cho production
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          icons: ['lucide-react'],
        },
      },
    },
  },
  preview: {
    port: 4173,
    open: true,
  },
})