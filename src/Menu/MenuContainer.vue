<template>
  <Menu as="div" class="relative inline-block text-left">
    <MenuButton class="focus:outline-none" ref="button">
      <slot name="button">
        <D9Icon class="fill-current" name="ellipsis-h" />
      </slot>
    </MenuButton>

    <teleport
      :to="typeof usePortal === 'string' ? usePortal : 'body'"
      :disabled="!usePortal"
    >
      <MenuItems
        ref="container"
        :class="[
          {
            'absolute left-0 origin-top-left':
              !usePortal && position === 'right',
            'absolute right-0 origin-top-right':
              !usePortal && position === 'left',
          },
          'z-40 mt-1 py-1 bg-white w-56 rounded shadow-lg text-grey-700 focus:outline-none',
        ]"
      >
        <slot></slot>
      </MenuItems>
    </teleport>
  </Menu>
</template>

<script setup lang="ts">
import { Menu, MenuButton, MenuItems } from "@headlessui/vue";
import { D9Icon } from "../index";
import { withDefaults } from "vue";
import { usePopper } from "../utils/usePopper";

const props = withDefaults(
  defineProps<{
    position: "left" | "right";
    usePortal: boolean | string;
  }>(),
  {
    position: "left",
    usePortal: false,
  }
);

const placement = props.position === "left" ? "bottom-end" : "bottom-start";

const [button, container] = usePopper({ placement });
</script>
