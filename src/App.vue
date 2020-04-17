
<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import storage from "./storage";
export default {
  name: "App",
  data() {
    return {};
  },
  mounted() {
    storage.setItem("a", 2);
    storage.setItem("user", { a: 1 });
    storage.setItem("abc", { a: 1 }, "user");
    storage.clear("a", "user");
  }
};
</script>

<style>
</style>
