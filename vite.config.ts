import react from "@vitejs/plugin-react";
import fs from "fs";
import { defineConfig } from "vite";
import { nodePolyfills } from "vite-plugin-node-polyfills";
import svgr from "vite-plugin-svgr";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    nodePolyfills(),
    svgr({
      include: "**/*.svg",
    }),
  ],
  server: {
    port: 443,
    host: "0.0.0.0",
    hmr: {
      host: "tg-music-app.local",
      port: 443,
    },
    https: {
      key: fs.readFileSync("./.cert/localhost-key.pem"),
      cert: fs.readFileSync("./.cert/localhost.pem"),
    },
  },
});
