/*
 * @Description:
 * @Version: 1.0
 * @Autor: laikt
 * @Date: 2022-05-17 13:54:20
 * @LastEditors: laikt
 * @LastEditTime: 2022-05-17 15:11:31
 */
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import federation from "@originjs/vite-plugin-federation";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    federation({
      name: "base",
      filename: "remoteEntry.js",
      exposes: {
        "./aButton": "./src/a-Button.vue"
      },
      // remotes: {
      //   foo: "remote_foo"
      // },
      shared: {
        vue: {
          requiredVersion: "^3.0.0"
        }
      }
    })
  ],
  build: {
    assetsInlineLimit: 40960,
    target: "esnext",
    minify: true,
    cssCodeSplit: false,
    rollupOptions: {
      output: {
        minifyInternalExports: false
      }
    }
  }
});
