import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "remoteApp",
      filename: "remote.js",
      exposes: {
        "./CountBtn": "./src/CountBtn",
        "./store": "./src/store.js",
      },
      shared: ["react", "react-dom", "jotai", "@chakra-ui/react"],
    }),
  ],
  build: {
    // modulePreload: false,
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },
});

//需要 build 後才會產出 可 export js
//http://localhost:5001/assets/remote.js
