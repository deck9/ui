<template>
  <Menu as="div" class="relative inline-block text-left">
    <MenuButton>
      <slot name="button">
        <D9Icon class="fill-current" name="ellipsis-h" />
      </slot>
    </MenuButton>

    <transition
      enter-active-class="transition duration-100 ease-out"
      enter-from-class="transform scale-95 opacity-0"
      enter-to-class="transform scale-100 opacity-100"
      leave-active-class="transition duration-75 ease-out"
      leave-from-class="transform scale-100 opacity-100"
      leave-to-class="transform scale-95 opacity-0"
    >
      <MenuItems
        class="
          origin-top-left
          absolute
          left-0
          mt-1
          py-1
          bg-white
          w-56
          rounded
          shadow-lg
          text-grey-700
          focus:outline-none
        "
      >
        <slot></slot>
      </MenuItems>
    </transition>
  </Menu>
</template>

<script setup lang="ts">
import { Menu, MenuButton, MenuItems } from "@headlessui/vue";
import { D9Icon } from "../index";
</script>
