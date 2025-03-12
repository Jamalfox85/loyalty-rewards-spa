<template>
  <div class="getting_started_wrapper">
    <div class="getting-started-group w-full">
      <div
        v-for="(step, index) in gettingStartedSteps"
        class="getting-started-step border border-[#fafafa40] rounded-md flex items-center p-2 mb-4"
      >
        <div
          class="step-number mr-4 h-8 w-8 flex items-center justify-center border border-[#fafafa20] rounded-full bg-[#0077FF]"
        >
          <p>{{ index + 1 }}</p>
        </div>
        <div class="step-text">
          <b>{{ step.text }}</b>
        </div>
        <div class="ml-auto">
          <NButton
            class="ml-auto"
            size="small"
            color="#0077ff"
            @click="$router.push(step.path)"
          >
            Go
          </NButton>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { NButton } from "naive-ui";
export default {
  props: {},
  components: {
    NButton,
  },
  data() {
    return {
      gettingStartedSteps: [
        {
          text: "Sign up",
          path: "/signup",
        },
        {
          text: "Create a loyalty program",
          path: "/create-program",
        },
        {
          text: "Start earning rewards",
          path: "/earn-rewards",
        },
      ],
    };
  },
};
</script>
<style lang="scss" scoped></style>
