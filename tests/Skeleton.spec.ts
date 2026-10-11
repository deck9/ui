import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";
import { D9Skeleton } from "../src";

describe("D9Skeleton", () => {
  it.each([
    [-1, 0],
    [2.5, 2],
  ])("renders lines=%s as %s lines without an error", (lines, count) => {
    const wrapper = mount(D9Skeleton, { props: { lines } });

    expect(wrapper.findAll(".h-4")).toHaveLength(count);
  });

  it("renders the new number of lines when lines changes after mount", async () => {
    const wrapper = mount(D9Skeleton, { props: { lines: 3 } });

    await wrapper.setProps({ lines: 5 });

    expect(wrapper.findAll(".h-4")).toHaveLength(5);
  });
});
