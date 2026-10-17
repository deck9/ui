import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";
import { D9Select } from "../src";

const options = [
  { id: 1, label: "Wade Cooper" },
  { id: 2, label: "Arlene Mccoy" },
];

describe("D9Select", () => {
  it("shows a modelValue change from outside, without emitting it back", async () => {
    const wrapper = mount(D9Select, {
      props: { options, modelValue: options[0], placeholder: "Pick one" },
    });
    const button = () => wrapper.find("button");
    expect(button().text()).toBe("Wade Cooper");

    await wrapper.setProps({ modelValue: options[1] });
    expect(button().text()).toBe("Arlene Mccoy");

    await wrapper.setProps({ modelValue: null });
    expect(button().text()).toBe("Pick one");

    expect(wrapper.emitted("update:modelValue")).toBeUndefined();
  });

  it("puts aria-describedby on the button and other attrs on the wrapper", () => {
    const wrapper = mount(D9Select, {
      props: { options },
      attrs: { "aria-describedby": "x-help", class: "mt-2", "data-a": "1" },
    });

    expect(wrapper.find("button").attributes("aria-describedby")).toBe(
      "x-help"
    );
    // the wrapper's opening tag is the first line of the markup
    const wrapperTag = wrapper.html().split("\n")[0];
    expect(wrapperTag).toContain('class="mt-2"');
    expect(wrapperTag).toContain('data-a="1"');
    expect(wrapperTag).not.toContain("aria-describedby");
  });

  it("shows a class set after the first render on the wrapper", async () => {
    const wrapper = mount(D9Select, { props: { options } });

    await wrapper.setProps({ class: "mt-2" });

    expect(wrapper.html().split("\n")[0]).toContain('class="mt-2"');
  });
});
