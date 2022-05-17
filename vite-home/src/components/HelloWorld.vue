<!--
 * @Description: 
 * @Version: 1.0
 * @Autor: laikt
 * @Date: 2022-05-17 13:54:49
 * @LastEditors: laikt
 * @LastEditTime: 2022-05-17 15:49:00
-->
<script setup>
import { ref } from "vue";

defineProps({
  msg: String
});

const count = ref(0);
</script>

<template>
  <h1>{{ msg }}</h1>
  <aButton />
</template>

<style scoped>
a {
  color: #42b983;
}
</style>
