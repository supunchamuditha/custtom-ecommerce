// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    // port: 3000,
    proxy: {
      "/api": {
        target: "http://localhost:3000/api", // Replace with your backend URL
        changeOrigin: true,
        prependPath: true, // Ensure this is configured properly
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
});
