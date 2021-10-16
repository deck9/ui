<template>
  <Menu as="div" class="relative inline-block text-left">
    <MenuButton class="focus:outline-none" ref="button">
      <slot name="button">
        <D9Icon class="fill-current" name="ellipsis-h" />
      </slot>
    </MenuButton>

    <teleport to="body" :disabled="!usePortal">
      <transition
        enter-active-class="transition duration-100 ease-out"
        enter-from-class="transform scale-95 opacity-0"
        enter-to-class="transform scale-100 opacity-100"
        leave-active-class="transition duration-75 ease-out"
        leave-from-class="transform scale-100 opacity-100"
        leave-to-class="transform scale-95 opacity-0"
      >
        <MenuItems
          :class="[
            {
              'left-0 origin-top-left': !usePortal && position === 'right',
              'right-0 origin-top-right': !usePortal && position === 'left',
            },
            usePortal ? 'absolute top-0' : 'absolute',
            'mt-1 py-1 bg-white w-56 rounded shadow-lg text-grey-700 focus:outline-none',
          ]"
          :style="
            usePortal ? `left: ${anchorLeft}px; top: ${anchorTop}px;` : ''
          "
        >
          <slot v-bind="{ position }"></slot>
        </MenuItems>
      </transition>
    </teleport>
  </Menu>
</template>

<script setup lang="ts">
import { Menu, MenuButton, MenuItems } from "@headlessui/vue";
import { D9Icon } from "../index";
import { onMounted, onUnmounted, Ref, ref, VNode, withDefaults } from "vue";
import { debounce } from "lodash";

const props = withDefaults(
  defineProps<{
    position: "left" | "right";
    usePortal: boolean;
  }>(),
  {
    position: "left",
    usePortal: false,
  }
);

const button = ref(null) as unknown as Ref<VNode>;
const anchorTop = ref(0);
const anchorLeft = ref(0);

const setAnchorPosition = debounce(() => {
  const dimensions: DOMRect = button.value.el?.getBoundingClientRect();
  const menuWidth = 224;

  anchorTop.value = dimensions.top + dimensions.height;
  anchorLeft.value =
    props.position === "left"
      ? dimensions.left + dimensions.width - menuWidth
      : dimensions.left;
}, 150);

onMounted(() => {
  setAnchorPosition();

  window.addEventListener("resize", setAnchorPosition);
});

onUnmounted(() => {
  window.removeEventListener("resize", setAnchorPosition);
});
</script>
