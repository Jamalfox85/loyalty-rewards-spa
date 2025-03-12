import { describe, it, expect } from "vitest";

import { mount } from "@vue/test-utils";
import HomeView from "../../views/HomeView.vue";

describe("HomeView", () => {
  it("renders properly", async () => {
    const wrapper = mount(HomeView, {
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
