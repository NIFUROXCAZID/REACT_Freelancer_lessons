import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  base: '/',
  plugins: [react()],
  resolve: {
    alias: {
      '@': '/src', // Відносний шлях до src
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        includePaths: ["./src"], // Щоб працював еліас для scss
      },
    },
  },
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: './src/tests/setupTests.js',
  },
})
