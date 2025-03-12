<template>
  <div class="header_wrapper p-8">
    <div class="inner_wrapper p-8 rounded-md bg-[#fafafa20]">
      <div class="flex">
        <div class="stat-block">
          <font-awesome-icon :icon="['fas', 'users-line']" />
          <!-- stat
            label -->
        </div>
        <div class="account ml-auto">
          <a href="/account">Account</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.header_wrapper {
}
</style>
