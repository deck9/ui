<template>
  <Menu as="div" class="relative inline-block text-left" v-slot="{ open }">
    <MenuButton class="focus:outline-none" ref="button">
      <slot name="button">
        <D9Icon class="fill-current" name="ellipsis-h" />
      </slot>
    </MenuButton>

    <teleport
      :to="typeof usePortal === 'string' ? usePortal : 'body'"
      :disabled="!usePortal"
    >
      <div v-show="open">
        <MenuItems
          static
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
      </div>
    </teleport>
  </Menu>
</template>

<script setup lang="ts">
import { Menu, MenuButton, MenuItems } from "@headlessui/vue";
import { D9Icon } from "../index";
import { onMounted, Ref, ref, VNode, withDefaults } from "vue";
import { createPopper } from "@popperjs/core/lib/popper-lite.js";

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

const button = ref(null) as unknown as Ref<VNode>;
const container = ref(null) as unknown as Ref<VNode>;

onMounted(() => {
  if (props.usePortal) {
    const placement = props.position === "left" ? "bottom-end" : "bottom-start";

    createPopper(
      button.value.el as HTMLElement,
      container.value.el as HTMLElement,
      {
        placement,
      }
    );
  }
});
</script>
