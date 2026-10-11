import { mount } from "@vue/test-utils";
import { describe, expect, it, vi } from "vitest";
import { D9Button } from "../src";

describe("D9Button", () => {
  it("calls @click when enabled", async () => {
    const onClick = vi.fn();
    const wrapper = mount(D9Button, { props: { label: "Save", onClick } });

    await wrapper.trigger("click");

    expect(onClick).toHaveBeenCalledTimes(2);
  });

  it("is natively disabled when isDisabled, so @click isn't called", async () => {
    const onClick = vi.fn();
    const wrapper = mount(D9Button, {
      props: { label: "Save", isDisabled: true, onClick },
    });

    await wrapper.trigger("click");

    expect(wrapper.attributes()).toHaveProperty("disabled");
    expect(onClick).not.toHaveBeenCalled();
  });

  // Enter on a focused button, or in the form, reaches the button as a click
  it("keeps focus while loading, but neither calls @click nor submits its form", async () => {
    const onClick = vi.fn();
    const onSubmit = vi.fn((event: Event) => event.preventDefault());
    const form = document.createElement("form");
    form.addEventListener("submit", onSubmit);
    document.body.append(form);
    const wrapper = mount(D9Button, {
      props: { label: "Save", isLoading: true, onClick },
      attrs: { type: "submit" },
      attachTo: form,
    });

    (wrapper.element as HTMLButtonElement).focus();
    await wrapper.trigger("click");

    expect(wrapper.attributes()).not.toHaveProperty("disabled");
    expect(wrapper.attributes("aria-disabled")).toBe("true");
    expect(wrapper.attributes("aria-busy")).toBe("true");
    expect(document.activeElement).toBe(wrapper.element);
    expect(onClick).not.toHaveBeenCalled();
    expect(onSubmit).not.toHaveBeenCalled();

    wrapper.unmount();
    form.remove();
  });
});
