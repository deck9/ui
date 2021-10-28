<template>
  <button
    class="
      relative
      inline-flex
      items-center
      focus:outline-none focus:ring
      active:ring
      transition
      duration-150
      ease-in-out
    "
    type="button"
    :aria-label="label"
    :class="buttonClasses"
    :tabindex="isDisabled ? '-1' : undefined"
    @click="onClick"
  >
    <div :class="!isLoading || 'invisible'">
      <D9Icon
        v-if="icon && iconPosition === 'left'"
        :name="icon"
        :class="iconClasses"
      />
      <span>{{ label }}</span>
      <D9Icon
        v-if="icon && iconPosition === 'right'"
        :name="icon"
        :class="iconClasses"
      />
    </div>

    <span
      v-if="isLoading"
      class="absolute inset-0 flex items-center justify-center"
    >
      <D9Icon class="animate-spin" name="circle-notch" />
    </span>
  </button>
</template>

<script setup lang="ts">
import D9Icon from "../Icon/Icon.vue";
import { ColorScheme, PositionHorizontal, Size } from "../types";
import { computed, withDefaults } from "vue";

interface ButtonProps {
  label: string;
  size?: Size;
  color?: ColorScheme;
  isLoading?: boolean;
  isDisabled?: boolean;
  icon?: string;
  iconPosition?: PositionHorizontal;
}

interface ButtonEmits {
  (e: "onClick"): void;
}

const emit = defineEmits<ButtonEmits>();

const props = withDefaults(defineProps<ButtonProps>(), {
  size: "medium",
  color: "primary",
  iconPosition: "right",
  isLoading: false,
  isDisabled: false,
});

const buttonClasses = computed(() => {
  const colors = {
    "text-white bg-blue-600 border-transparent hover:bg-blue-700 active:bg-blue-700 dark:ring-blue-800 ring-offset-2 dark:ring-offset-grey-900":
      props.color === "primary",
    "text-blue-600 bg-grey-100 border-transparent hover:bg-blue-100 hover:text-blue-700 active:bg-grey-100 ring-blue-300 ring-offset-2 dark:ring-offset-grey-900":
      props.color === "light",
    "text-grey-50 bg-grey-700 border-transparent hover:bg-grey-800 active:bg-grey-700 ring-grey-500 dark:ring-grey-400 dark:ring-opacity-50 ring-offset-2 dark:ring-offset-grey-900":
      props.color === "dark",
  };

  const disabledClasses = {
    "pointer-events-none opacity-75 cursor-not-allowed": props.isDisabled,
  };

  const sizes = {
    "px-4 py-1 text-xs leading-5 mono-100 rounded-lg": props.size === "small",
    "px-5 py-2 text-sm leading-4 font-medium rounded-lg":
      props.size === "medium",
    "px-8 py-3 text-base leading-6 font-medium rounded-lg":
      props.size === "large",
  };

  return {
    ...colors,
    ...disabledClasses,
    ...sizes,
  };
});

const iconClasses = computed(() => {
  const iconLeft = {
    "mr-2 -ml-1":
      ["small", "medium"].includes(props.size) && props.iconPosition === "left",
    "mr-4 -ml-2":
      ["large"].includes(props.size) && props.iconPosition === "left",
  };

  const iconRight = {
    "ml-3 -mr-1":
      ["small", "medium"].includes(props.size) &&
      props.iconPosition === "right",
    "ml-3 -mr-3":
      ["large"].includes(props.size) && props.iconPosition === "right",
  };

  const colors = {
    "text-white": props.color === "primary",
    "text-blue-600": props.color === "light",
    "text-grey-50": props.color === "dark",
  };

  return {
    ...iconLeft,
    ...iconRight,
    ...colors,
  };
});

function onClick() {
  if (props.isDisabled) {
    return;
  }

  emit("onClick");
}
</script>
