<template>
  <Menu as="div" class="inline-block text-left">
    <MenuButton class="focus:outline-none" ref="reference">
      <slot name="button">
        <D9Icon class="fill-current" name="ellipsis-h" />
      </slot>
    </MenuButton>

    <teleport
      :to="typeof usePortal === 'string' ? usePortal : 'body'"
      :disabled="false || !usePortal"
    >
      <div class="w-56" :style="floatingStyles" ref="floating">
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
import { onMounted, ref, watchEffect, withDefaults } from "vue";
import { useFloating, autoUpdate, flip, shift, offset } from "@floating-ui/vue";

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

const reference = ref(null);
const floating = ref(null);

const placement = props.position === "left" ? "bottom-end" : "bottom-start";

const { floatingStyles } = useFloating(reference, floating, {
  placement,
  whileElementsMounted: autoUpdate,
  middleware: [offset(6), flip(), shift({ padding: 6 })],
});
</script>
