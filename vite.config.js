import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
   plugins: [react()],
   base: '/', // 👈 GitHub Pages user site এর জন্য root path
   server: {
      port: 3000, // 👈 force Vite to run on port 3000
   },
});
