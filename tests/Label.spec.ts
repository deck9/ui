import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";
import { D9Label } from "../src";

describe("D9Label help text", () => {
  it("gets the id <id>-help next to <id>-label", () => {
    const wrapper = mount(D9Label, {
      props: { id: "name", label: "Name", description: "Full name." },
    });

    expect(wrapper.find("label").attributes("id")).toBe("name-label");
    expect(wrapper.find("#name-help").text()).toBe("Full name.");
  });

  it("has no help id without an id", () => {
    const wrapper = mount(D9Label, {
      props: { label: "Name", description: "Full name." },
    });

    expect(wrapper.find("[id]").exists()).toBe(false);
  });

  it("renders no help element without a description", () => {
    const wrapper = mount(D9Label, { props: { id: "name", label: "Name" } });

    expect(wrapper.find("#name-help").exists()).toBe(false);
  });

  it("uses a text color with at least 4.5:1 contrast on white and grey-50", () => {
    const wrapper = mount(D9Label, {
      props: { id: "name", label: "Name", description: "Full name." },
    });
    const classes = wrapper.find("#name-help").classes();

    // grey is slate: 500 is 4.76:1 on white, 4.55:1 on grey-50; 400 is only 2.56 / 2.45
    expect(classes).toContain("text-grey-500");
    expect(classes).not.toContain("text-grey-400");
  });
});
