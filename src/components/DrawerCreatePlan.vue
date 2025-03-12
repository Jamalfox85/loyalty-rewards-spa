<template>
  <div class="plans_wrapper border p-8 flex">
    <n-drawer v-model:show="active" :width="502" placement="left">
      <n-drawer-content title="New Plan" closable>
        Stoner is a 1965 novel by the American writer John Williams.
      </n-drawer-content>
    </n-drawer>
  </div>
</template>

<script lang="ts">
import { NButton, NDrawer, NDrawerContent } from "naive-ui";

export default {
  props: {
    show: {
      type: Boolean,
      default: false,
    },
  },
  components: {
    NButton,
    NDrawer,
    NDrawerContent,
  },
  data() {
    return {
      active: true,
    };
  },
  watch: {
    show: {
      handler(newValue) {
        this.active = newValue;
      },
      immediate: true,
    },
    active: {
      handler(newValue) {
        if (!newValue) {
          this.$emit("close");
        }
      },
      immediate: true,
    },
  },
  methods: {},
};
</script>

<style lang="scss"></style>
