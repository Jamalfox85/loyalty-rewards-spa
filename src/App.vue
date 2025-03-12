<template>
  <div class="app_wrapper bg-[#0A192F] text-[#FAFAFA]">
    <TheSidebar class="sidebar_wrapper" />
    <div class="grow flex flex-col">
      <TheHeader />
      <n-config-provider>
        <router-view class="grow"></router-view>
      </n-config-provider>
    </div>
  </div>
</template>

<script lang="ts">
import { RouterLink, RouterView } from "vue-router";
import { NButton } from "naive-ui";
import { NConfigProvider } from "naive-ui";

import TheHeader from "./components/TheHeader.vue";
import TheSidebar from "./components/TheSidebar.vue";

export default {
  components: {
    TheHeader,
    TheSidebar,
    NButton,
    NConfigProvider,
  },
  data() {
    return {};
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
.app_wrapper {
  height: 100vh;
  display: flex;
  .sidebar_wrapper {
    width: 300px;
    overflow: hidden;
  }
}
</style>
