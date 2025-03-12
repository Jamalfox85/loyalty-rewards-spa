<template>
  <div class="plans_wrapper border p-8 flex">
    <div class="inner_wrapper p-8 rounded-md bg-[#fafafa20] grow">
      <div class="plans-header flex justify-between mb-4">
        <h1 class="text-2xl font-semibold">Manage Plans</h1>
        <n-button type="primary" @click="addPlan">Add Plan</n-button>
      </div>

      <n-data-table
        :columns="columns"
        :data="plans"
        :pagination="pagination"
        striped
        class="mt-4"
      />
    </div>

    <drawer-create-plan
      :show="showAddPlanDrawer"
      @close="showAddPlanDrawer = false"
    />
  </div>
</template>

<script lang="ts">
import DrawerCreatePlan from "../components/DrawerCreatePlan.vue";
import { NButton, NDataTable } from "naive-ui";
import { h } from "vue";

export default {
  components: {
    DrawerCreatePlan,
    NButton,
    NDataTable,
  },
  data() {
    return {
      showAddPlanDrawer: false,
      activePlanIndex: 0,
      plans: [
        { id: 1, name: "Basic Rewards", pointsPerDollar: 1 },
        { id: 2, name: "Premium Rewards", pointsPerDollar: 2 },
        { id: 3, name: "Gold Rewards", pointsPerDollar: 3 },
        { id: 4, name: "Platinum Rewards", pointsPerDollar: 5 },
        { id: 5, name: "Diamond Rewards", pointsPerDollar: 10 },
      ],
      columns: [
        {
          title: "Name",
          key: "name",
        },
        {
          title: "Points Per Dollar",
          key: "pointsPerDollar",
        },
        {
          title: "Actions",
          key: "actions",
          render: (row: any) => {
            return h("div", { class: "flex" }, [
              h(
                NButton,
                {
                  size: "small",
                  onClick: () => this.editPlan(row),
                },
                "Edit"
              ),
              h(
                NButton,
                {
                  size: "small",
                  type: "error",
                  onClick: () => this.deletePlan(row.id),
                },
                "Delete"
              ),
            ]);
          },
        },
      ],
      pagination: {
        pageSize: 10,
      },
    };
  },
  methods: {
    addPlan() {
      this.showAddPlanDrawer = true;
    },
    editPlan(plan) {
      this.activePlanIndex = plan.id;
    },
    deletePlan(id: number) {
      this.plans = this.plans.filter((plan) => plan.id !== id);
    },
  },
};
</script>

<style lang="scss"></style>
