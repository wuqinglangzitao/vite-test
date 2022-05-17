<!--
 * @Description: 
 * @Version: 1.0
 * @Autor: laikt
 * @Date: 2022-05-17 13:54:49
 * @LastEditors: laikt
 * @LastEditTime: 2022-05-17 17:18:50
-->

<script setup>
import { ref, defineAsyncComponent } from "vue";
const aButton = defineAsyncComponent(() => import("base/aButton"));
console.log(aButton);
defineProps({
  msg: String
});

const count = ref(0);
</script>
<script>
// import { defineAsyncComponent } from "vue";
// const aButton = defineAsyncComponent(() => import("base/aButton"));
// console.log(aButton);
// export default {
//   components: {
//     "a-Button": aButton
//   },
//   data() {
//     return {
//       show: false
//     };
//   }
// };
//
</script>

<template>
  <h1>{{ msg }}</h1>
  <a-Button></a-Button>
</template>

<style scoped>
a {
  color: #42b983;
}
</style>
