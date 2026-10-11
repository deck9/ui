import { library } from "@fortawesome/fontawesome-svg-core";
import { faGitlab } from "@fortawesome/free-brands-svg-icons";
import { mount } from "@vue/test-utils";
import { describe, expect, it, vi } from "vitest";
import { D9Icon } from "../src";

describe("D9Icon", () => {
  it("renders a brand icon with the fab prefix", () => {
    // Registered here like an app does; GitLab was never in D9's own icon list
    library.add(faGitlab);
    const wrapper = mount(D9Icon, { props: { name: "gitlab" } });
    const svg = wrapper.find("svg");

    expect(svg.attributes("data-prefix")).toBe("fab");
    expect(svg.attributes("data-icon")).toBe("gitlab");
  });

  it("renders nothing for an unknown name", () => {
    vi.spyOn(console, "warn").mockImplementation(() => undefined);
    const wrapper = mount(D9Icon, { props: { name: "no-such-icon" } });

    expect(wrapper.find("svg").exists()).toBe(false);
  });
});
