<template>
  <div class="main_wrapper flex p-8">
    <div class="inner_wrapper grow p-8 rounded-md bg-[#fafafa20] flex">
      <div class="left-col flex flex-col w-[30%] mr-8">
        <div
          class="cell-1 flex items-center justify-center p-4 rounded-md bg-[#0A192F] h-[200px]"
        >
          <h1 class="text-bold text-center" style="font-size: 36px">
            Smooth and efficient rewards management
          </h1>
        </div>
        <div class="cell-2 flex flex-col py-4 grow">
          <home-getting-started />
        </div>
      </div>
      <div class="right-col grow">
        <div
          class="cell-3 flex flex-col items-center justify-center p-4 rounded-md bg-[#0A192F] h-[300px]"
        >
          <home-plan-stats />
        </div>
        <div class="cell-4 flex flex-col py-4 grow">
          <home-plan-logs />
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import HomeGettingStarted from "../components/HomeGettingStarted.vue";
import HomePlanStats from "../components/HomePlanStats.vue";
import HomePlanLogs from "../components/HomePlanLogs.vue";
import { NButton } from "naive-ui";
export default {
  props: {},
  components: {
    HomeGettingStarted,
    HomePlanStats,
    HomePlanLogs,
    NButton,
  },
  data() {
    return {};
  },
};
</script>
<style lang="scss" scoped>
.main_wrapper {
}
</style>
