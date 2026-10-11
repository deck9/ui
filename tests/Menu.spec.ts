import { mount } from "@vue/test-utils";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { h } from "vue";
import { D9Menu, D9MenuLink } from "../src";

// jsdom has neither observer, so count the live ones floating-ui's autoUpdate creates.
let observers = 0;
class FakeObserver {
  constructor() {
    observers++;
  }
  observe() {}
  unobserve() {}
  disconnect() {
    observers--;
  }
}

// In jsdom, window is the only scroll ancestor autoUpdate listens on.
let listeners = 0;
const countListeners = (method: "addEventListener" | "removeEventListener") => {
  const original = window[method];
  vi.spyOn(window, method).mockImplementation((...args) => {
    if (args[0] === "scroll" || args[0] === "resize") {
      listeners += method === "addEventListener" ? 1 : -1;
    }
    return original.apply(window, args);
  });
};

beforeEach(() => {
  observers = 0;
  listeners = 0;
  vi.stubGlobal("ResizeObserver", FakeObserver);
  vi.stubGlobal("IntersectionObserver", FakeObserver);
  // autoUpdate only watches layout shifts of a reference that has a size.
  vi.spyOn(Element.prototype, "getBoundingClientRect").mockReturnValue(
    new DOMRect(0, 0, 20, 20)
  );
  countListeners("addEventListener");
  countListeners("removeEventListener");
});

afterEach(() => {
  vi.restoreAllMocks();
  vi.unstubAllGlobals();
});

// useFloating styles the floating wrapper inline.
const floating = () => document.querySelectorAll('[style*="position"]').length;

describe("D9Menu", () => {
  it("tracks its position only while open", async () => {
    const menus = [1, 2, 3].map(() =>
      mount(D9Menu, {
        props: { position: "right", usePortal: true },
        slots: { default: () => h(D9MenuLink, { label: "Account" }) },
        attachTo: document.body,
      })
    );
    expect([floating(), observers, listeners]).toEqual([0, 0, 0]);

    await menus[0].find("button").trigger("click");
    expect(floating()).toBe(1);
    expect(observers).toBeGreaterThan(0);
    expect(listeners).toBeGreaterThan(0);

    await menus[0].find("button").trigger("click");
    expect([floating(), observers, listeners]).toEqual([0, 0, 0]);

    menus.forEach((menu) => menu.unmount());
  });
});
