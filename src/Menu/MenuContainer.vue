<template>
  <Menu as="div" class="relative inline-block text-left">
    <MenuButton class="focus:outline-none" ref="button">
      <slot name="button">
        <D9Icon class="fill-current" name="ellipsis-h" />
      </slot>
    </MenuButton>

    <teleport :to="typeof usePortal === 'string' ? usePortal : 'body'" :disabled="!usePortal">
      <div ref="container" class="w-48">
        <transition
          enter-active-class="transition duration-200 ease-in-out"
          enter-from-class="transform -translate-y-4 opacity-0"
          enter-to-class="transform opacity-100"
          leave-active-class="transition duration-100 ease-in-out"
          leave-from-class="transform opacity-100"
          leave-to-class="transform -translate-y-2 opacity-0"
        >
          <MenuItems
            :class="[
              {
                'absolute left-0 origin-top-left':
                  !usePortal && position === 'right',
                'absolute right-0 origin-top-right':
                  !usePortal && position === 'left',
              },
              'z-40 mt-1 p-1 bg-white rounded shadow-lg text-grey-700 focus:outline-none w-full',
            ]"
          >
            <slot></slot>
          </MenuItems>
        </transition>
      </div>
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
