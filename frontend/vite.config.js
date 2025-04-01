import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailWindcss from '@tailwindcss/vite'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [tailWindcss(),react()],
  server: {
    port: parseInt(process.env.PORT) || 3000,
    proxy: {
      "/api": {
        target: process.env.VITE_API_URL || "http://localhost:5000",
        changeOrigin: true,
      },
    },
  },
  css: {
    postcss: './postcss.config.js', // Ensure PostCSS config is properly linked
  },
});
