<template>
  <header class="sidebar_wrapper flex flex-col p-4">
    <!-- LOGO -->
    <div class="logo-group flex justify-center mb-16 p-4 text-4xl font-bold">
      <h1 class="logo">LoyaltySync</h1>
    </div>

    <!-- NAV LINKS-->
    <div class="nav-group mt-4">
      <div
        v-for="link in navLinks"
        @click="handleClick(link.path)"
        :class="{ active: link.path === $route.path }"
        class="nav-item flex items-center py-2 px-8 mb-4 rounded-md cursor-pointer"
      >
        <font-awesome-icon :icon="['fas', link.icon]" class="mr-4" />
        <p class="text-lg font-bold">{{ link.name }}</p>
      </div>
    </div>

    <!-- SEPARATOR -->
    <div class="py-4">
      <hr />
    </div>

    <!-- RESOURCE LINKS -->
    <div class="nav-group mt-4">
      <div
        v-for="link in resourceLinks"
        @click="handleClick(link.path)"
        class="nav-item flex items-center py-2 px-8 mb-4 rounded-md cursor-pointer"
      >
        <font-awesome-icon :icon="['fas', link.icon]" class="mr-4" />
        <p class="text-lg font-bold">{{ link.name }}</p>
      </div>
    </div>

    <!-- SOCIAL MEDIA LINKS -->
    <div class="nav-group mt-auto flex">
      <div
        v-for="link in socialLinks"
        @click="handleClick(link.path)"
        class="nav-item flex justify-center items-center h-10 w-10 rounded-full cursor-pointer mr-2"
      >
        <font-awesome-icon :icon="['fab', link.icon]" class="text-xl" />
      </div>
    </div>
  </header>
</template>
<script lang="ts">
export default {
  props: {
    msgProp: {
      type: String,
    },
  },
  data() {
    return {
      msgData: "Welcome to Your Vue.js App",
      navLinks: [
        { name: "Home", icon: "house", path: "/" },
        { name: "Plans", icon: "money-bill-wave", path: "/plans" },
        { name: "Rewards", icon: "gift", path: "/rewards" },
        { name: "Contact", icon: "envelope", path: "/contact" },
      ],
      resourceLinks: [
        { name: "API", icon: "code", path: "/api" },
        { name: "Documentation", icon: "book", path: "/docs" },
        { name: "Support", icon: "headset", path: "/support" },
      ],
      socialLinks: [
        { name: "Twitter", icon: "twitter", path: "https://twitter.com" },
        { name: "Facebook", icon: "facebook", path: "https://facebook.com" },
        { name: "Instagram", icon: "instagram", path: "https://instagram.com" },
      ],
    };
  },
  methods: {
    handleClick(path: string) {
      this.$router.push(path);
    },
  },
};
</script>

<style lang="scss" scoped>
.sidebar_wrapper {
  .logo-group {
  }
  .nav-group {
    .nav-item {
      background: linear-gradient(90deg, #fafafa15 0%, #0a192f 100%);
      &:hover {
        background: #fafafa15;
        transition: 0.3s;
      }
      &.active {
        background: #fafafa30;
        border: solid 1px #fafafa;
      }
    }
  }
}
</style>
