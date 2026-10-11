<template>
  <Menu as="div" class="inline-block text-left" v-slot="{ open }">
    <MenuButton class="focus:outline-none" ref="reference">
      <slot name="button">
        <D9Icon class="fill-current" name="ellipsis-h" />
      </slot>
      <span v-if="!hasText($slots.button?.())" class="sr-only">{{
        label
      }}</span>
    </MenuButton>

    <teleport
      :to="typeof usePortal === 'string' ? usePortal : 'body'"
      :disabled="false || !usePortal"
    >
      <!-- Mounted only while open, so autoUpdate doesn't track closed menus -->
      <transition
        enter-active-class="transition duration-200 ease-in-out"
        enter-from-class="transform -translate-y-4 opacity-0"
        enter-to-class="transform opacity-100"
        leave-active-class="transition duration-100 ease-in-out"
        leave-from-class="transform opacity-100"
        leave-to-class="transform -translate-y-2 opacity-0"
      >
        <div
          v-if="open"
          class="w-56 z-20"
          :style="floatingStyles"
          ref="floating"
        >
          <MenuItems
            static
            :class="[
              'z-40 mt-1 p-1 bg-white rounded shadow-lg text-grey-700 focus:outline-none w-full',
            ]"
          >
            <slot></slot>
          </MenuItems>
        </div>
      </transition>
    </teleport>
  </Menu>
</template>

<script setup lang="ts">
import { Menu, MenuButton, MenuItems } from "@headlessui/vue";
import { D9Icon } from "../index";
import { Comment, ref, withDefaults, type VNode } from "vue";
import { useFloating, autoUpdate, flip, shift, offset } from "@floating-ui/vue";

const props = withDefaults(
  defineProps<{
    position: "left" | "right";
    usePortal: boolean | string;
    label?: string;
  }>(),
  {
    position: "left",
    usePortal: false,
    label: "Open menu",
  }
);

// A trigger with its own visible text is already named by it; the label would double it.
const hasText = (nodes: VNode[] = []): boolean =>
  nodes.some((node) =>
    typeof node.children === "string"
      ? node.type !== Comment && node.children.trim() !== ""
      : Array.isArray(node.children) && hasText(node.children as VNode[])
  );

const reference = ref(null);
const floating = ref(null);

const placement = props.position === "left" ? "bottom-end" : "bottom-start";

const { floatingStyles } = useFloating(reference, floating, {
  placement,
  // left/top instead of a transform, so the transition's translate isn't overridden
  transform: false,
  whileElementsMounted: autoUpdate,
  middleware: [offset(6), flip(), shift({ padding: 6 })],
});
</script>
