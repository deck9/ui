<template>
  <div
    class="relative inline-flex items-center focus:outline-none focus:ring active:ring transition duration-150 ease-in-out rounded-lg overflow-hidden"
  >
    <button
      type="button"
      :aria-label="label"
      :tabindex="isDisabled ? '-1' : undefined"
      class="relative"
      :class="buttonClasses"
      @click="onClickMain"
    >
      <div :class="!isLoading || 'invisible'">
        <span>{{ label }}</span>
      </div>

      <span
        v-if="isLoading"
        class="absolute inset-0 flex items-center justify-center"
      >
        <D9Icon class="ml-3 animate-spin" name="circle-notch" />
      </span>
    </button>
    <button
      class="border-l-white/50 border-l"
      :class="[buttonClasses, splitButtonClasses]"
      @click="onClickSplit"
    >
      <D9Icon :class="[iconClasses]" :name="icon" />
    </button>
  </div>
</template>

<script setup lang="ts">
import D9Icon from "../Icon/Icon.vue";
import { ColorScheme, Size } from "../types/types";
import { computed, withDefaults } from "vue";

interface ButtonProps {
  label: string;
  size?: Size;
  color?: ColorScheme;
  isLoading?: boolean;
  isDisabled?: boolean;
  icon?: string;
}

interface ButtonEmits {
  (e: "onClick"): void;
  (e: "onClickSplit"): void;
}

const emit = defineEmits<ButtonEmits>();

const props = withDefaults(defineProps<ButtonProps>(), {
  size: "medium",
  color: "primary",
  isLoading: false,
  isDisabled: false,
  icon: "plus",
});

const buttonClasses = computed(() => {
  const colors = {
    "text-white bg-blue-600 border-transparent hover:bg-blue-700 active:bg-blue-700 dark:ring-blue-800 ring-offset-2 dark:ring-offset-grey-900":
      props.color === "primary",
    "text-blue-600 bg-grey-100 border-transparent hover:bg-blue-100 hover:text-blue-700 active:bg-grey-100 ring-blue-300 ring-offset-2 dark:ring-offset-grey-900":
      props.color === "light",
    "text-grey-50 bg-grey-700 border-transparent hover:bg-grey-800 active:bg-grey-700 ring-grey-500 dark:ring-grey-400 dark:ring-opacity-50 ring-offset-2 dark:ring-offset-grey-900":
      props.color === "dark",
    "text-red-50 bg-red-500 border-transparent hover:bg-red-600 active:bg-red-600 ring-red-400 dark:ring-red-400 dark:ring-opacity-50 ring-offset-2 dark:ring-offset-red-900":
      props.color === "danger",
  };

  const sizes = {
    "px-4 py-1 text-xs leading-5 mono-100": props.size === "small",
    "px-5 py-2 text-sm leading-4 font-medium": props.size === "medium",
    "px-8 pr-4 py-3 text-base leading-6 font-medium": props.size === "large",
  };

  const disabledClasses = {
    "pointer-events-none opacity-75 cursor-not-allowed": props.isDisabled,
  };

  return {
    ...colors,
    ...disabledClasses,
    ...sizes,
  };
});

const splitButtonClasses = computed(() => {
  const colors = {
    "border-l-white/50 border-l": props.color === "primary",
    "border-l-blue-100 border-l": props.color === "light",
    "border-l-grey-600 border-l": props.color === "dark",
    "border-l-red-600 border-l": props.color === "danger",
  };

  const sizes = {
    "pl-2 pr-3": props.size === "small",
    "pl-3 pr-3": props.size === "medium",
    "pl-4 pr-5": props.size === "large",
  };

  return {
    ...colors,
    ...sizes,
  };
});

const iconClasses = computed(() => {
  const colors = {
    "text-white": props.color === "primary",
    "text-blue-600": props.color === "light",
    "text-grey-50": props.color === "dark",
  };

  return {
    ...colors,
  };
});

function onClickMain() {
  if (props.isDisabled) {
    return;
  }

  emit("onClick");
}

function onClickSplit() {
  if (props.isDisabled) {
    return;
  }

  emit("onClickSplit");
}
</script>
