/*
 * @Description:
 * @Version: 1.0
 * @Autor: laikt
 * @Date: 2022-05-17 13:54:49
 * @LastEditors: laikt
 * @LastEditTime: 2022-05-17 15:52:19
 */
import { createApp, defineAsyncComponent } from "vue";
import App from "./App.vue";
const aButton = defineAsyncComponent(() => import("base/aButton"));
console.log(aButton);
const app = createApp(App);
app.component("a-button", aButton);
app.mount("#app");
