/*
 * @Description:
 * @Version: 1.0
 * @Autor: laikt
 * @Date: 2022-05-17 13:54:49
 * @LastEditors: laikt
 * @LastEditTime: 2022-05-17 15:57:34
 */
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import federation from "@originjs/vite-plugin-federation";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    federation({
      name: "home",
      filename: "remoteEntry.js",
      // exposes: {
      //   "./Button": "./src/Button.vue"
      // },
      remotes: {
        base: "http://localhost:4173/assets/remoteEntry.js"
        // base: {
        //   external: `Promise.resolve('http://172.16.56.224:8080/assets/remoteEntry.js')`,
        //   externalType: "promise"
        // }
      },
      shared: ["vue"]
    })
  ],
  cacheDir: "node_modules/.cacheDir",
  build: {
    target: "esnext",
    minify: false,
    cssCodeSplit: true,
    rollupOptions: {
      output: {
        minifyInternalExports: false
      }
    }
  }
});
