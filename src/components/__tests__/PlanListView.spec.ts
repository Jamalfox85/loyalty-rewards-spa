import { describe, it, expect } from "vitest";

import { mount } from "@vue/test-utils";
import PlanListView from "../../views/PlanListView.vue";

describe("HomeView", () => {
  it("renders properly", async () => {
    const wrapper = mount(PlanListView, {
      props: {
        msgProp: "Props Work",
      },
    });
    await wrapper.setData({
      msgData: "Data Works",
    });
    expect(wrapper.text()).toContain("Props Work");
    expect(wrapper.text()).toContain("Data Works");
  });
});
