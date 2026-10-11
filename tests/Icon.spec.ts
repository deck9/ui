import { mount } from "@vue/test-utils";
import { describe, expect, it, vi } from "vitest";
import { D9Icon } from "../src";

describe("D9Icon", () => {
  it("renders a brand icon with the fab prefix", () => {
    const wrapper = mount(D9Icon, { props: { name: "github" } });
    const svg = wrapper.find("svg");

    expect(svg.attributes("data-prefix")).toBe("fab");
    expect(svg.attributes("data-icon")).toBe("github");
  });

  it("renders nothing for an unknown name", () => {
    vi.spyOn(console, "warn").mockImplementation(() => undefined);
    const wrapper = mount(D9Icon, { props: { name: "no-such-icon" } });

    expect(wrapper.find("svg").exists()).toBe(false);
  });
});
