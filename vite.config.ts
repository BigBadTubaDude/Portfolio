import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { compression } from 'vite-plugin-compression2'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/Portfolio",
  plugins: [react(), compression({
    algorithm: "brotliCompress",
  })],
})
