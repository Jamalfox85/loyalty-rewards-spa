<template>
  <div class="plan_logs_wrapper grow flex w-full">
    <n-tabs type="segment" animated>
      <n-tab-pane name="reward_progress" tab="Reward Progress">
        <n-list hoverable clickable>
          <n-list-item v-for="log in rewardProgressLogs">
            <div class="flex">
              <div class="mr-4">
                <b>{{ log.points }} Pts Earned</b>
                <p>{{ log.customerName }}</p>
              </div>
              <div class="flex">
                <n-tag
                  v-for="tag in log.tags"
                  class="mr-2"
                  :bordered="false"
                  type="info"
                  size="small"
                >
                  {{ tag }}
                </n-tag>
              </div>
            </div>
          </n-list-item>
        </n-list>
      </n-tab-pane>
      <n-tab-pane name="plan_history" tab="Plan History">
        <n-list hoverable clickable>
          <n-list-item v-for="log in planHistoryLogs">
            <div class="flex">
              <div class="mr-4">
                <b>{{ log.action }}</b>
                <p>{{ log.date }}</p>
              </div>
              <div class="flex">
                <n-tag class="mr-2" :bordered="false" type="info" size="small">
                  {{ log.planName }}
                </n-tag>
              </div>
            </div>
          </n-list-item>
        </n-list>
      </n-tab-pane>
    </n-tabs>
  </div>
</template>
<script lang="ts">
import { NButton, NTabs, NTabPane, NList, NListItem, NTag } from "naive-ui";
export default {
  props: {},
  components: {
    NButton,
    NTabs,
    NTabPane,
    NList,
    NListItem,
    NTag,
  },
  data() {
    return {
      rewardProgressLogs: [
        {
          id: 1,
          points: 43,
          customerName: "Sally Mae",
          tags: ["Tag A", "Tag B"],
        },
        {
          id: 2,
          points: 30,
          customerName: "John Doe",
          tags: ["Tag C"],
        },
        {
          id: 3,
          points: 25,
          customerName: "Jane Smith",
          tags: ["Tag A", "Tag D"],
        },
      ],
      planHistoryLogs: [
        {
          id: 1,
          action: "Plan Created",
          planName: "Basic Plan",
          date: "2023-10-01",
        },
        {
          id: 2,
          action: "Plan Updated",
          planName: "Premium Plan",
          date: "2023-10-05",
        },
      ],
    };
  },
};
</script>
<style lang="scss" scoped></style>
