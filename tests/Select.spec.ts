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
});
