import { ref, onMounted, watchEffect, Ref, VNode } from "vue";
import { createPopper, Options } from "@popperjs/core/lib/popper-lite.js";

export function usePopper(options?: any): [Ref<VNode>, Ref<VNode>] {
  const reference = ref(null) as unknown as Ref<VNode>;
  const popper = ref(null) as unknown as Ref<VNode>;

  onMounted(() => {
    watchEffect((onInvalidate) => {
      if (!popper.value) return;
      if (!reference.value) return;

      const popperEl = popper.value.el || popper.value;
      const referenceEl = reference.value.el || reference.value;

      if (!(referenceEl instanceof HTMLElement)) return;
      if (!(popperEl instanceof HTMLElement)) return;

      const { destroy } = createPopper(referenceEl, popperEl, options);

      onInvalidate(destroy);
    });
  });

  return [reference, popper];
}
