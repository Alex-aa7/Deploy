import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      workbox: { globPatterns: ["**/*.{html,css,js,ico,png,svg}"] },
      devOptions: {
        enabled: true,
      },
      manifest: {
        name: "Alex App",
        short_name: "AlexApp",
        description: "A simple to-do application",
        theme_color: "#ffffff",
        background_color: "#ffffff",
        icons: [
          {
            src: "public/icon-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            purpose: "any",
            src: "../icon-512x512.png",
            sizes: "512x512",
            type: "image/png",
          },
        ],
        screenshots: [
          {
            src: "./desktop.png",
            type: "image/png",
            sizes: "886x811",
            form_factor: "wide",
          },
            {
            src: "./mobile.png",
            type: "image/png",
            sizes: "886x811",
            form_factor: "narrow",
          },
        ],
      },
    }),
  ],
  base: "/Deploy",
});
