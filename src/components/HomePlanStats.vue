<template>
  <div class="plan_wrapper_stats grow flex w-full">
    <!-- Purchases To Credit -->
    <div
      class="purchases-to-credit-plan w-full border flex justify-center items-center"
    >
      <div class="mr-8">
        <n-statistic label="Repeat Reward Purchases" :value="242">
          <template #suffix>
            <span class="text-sm">purchases</span>
          </template>
        </n-statistic>
      </div>
      <div>
        <n-statistic label="Credits Accumulated" :value="9384">
          <template #prefix>
            <span class="text-sm">$</span>
          </template>
        </n-statistic>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { NButton, NStatistic } from "naive-ui";
export default {
  props: {},
  components: {
    NButton,
    NStatistic,
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
