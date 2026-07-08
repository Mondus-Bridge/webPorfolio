import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import tailwindcss from '@tailwindcss/postcss';
import autoprefixer from 'autoprefixer';


export default defineConfig({
    css: {
    postcss: {
      plugins: [tailwindcss, autoprefixer],
    },
  },
  plugins: [react()],
  base: '/webPorfolio/',
  server: {
    port: 5173,
  },
});
