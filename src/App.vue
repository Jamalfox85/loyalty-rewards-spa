<template>
  <header class="border border-red-500">
    <router-link to="/">Home</router-link>
    <router-link to="/plans">Plans</router-link>
  </header>
  <router-view></router-view>
</template>

<script lang="ts">
import { RouterLink, RouterView } from "vue-router";
import { NButton } from "naive-ui";

export default {
  components: { NButton },
  data() {
    return {
      msg: "Welcome to Your Vue.js Appx",
    };
  },
  methods: {
    ping() {
      window.$message.success("Test!");
    },
  },
};
</script>

<style scoped></style>
