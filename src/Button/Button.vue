<template>
  <button
    class="relative inline-flex items-center focus:outline-none focus:ring active:ring transition duration-150 ease-in-out"
    type="button"
    :aria-label="label"
    :class="classes"
    @click="onClick"
  >
    <div :class="!isLoading || 'invisible'">
      <Icon
        v-if="icon && iconPosition === 'left'"
        :name="icon"
        :class="iconClasses"
      />
      <span>{{ label }}</span>
      <Icon
        v-if="icon && iconPosition === 'right'"
        :name="icon"
        :class="iconClasses"
      />
    </div>

    <span
      v-if="isLoading"
      class="absolute inset-0 flex items-center justify-center"
    >
      <Icon class="animate-spin" name="circle-notch" />
    </span>
  </button>
</template>

<script setup lang="ts">
import Icon from "../Icon/Icon";
import { computed, withDefaults } from "vue";

interface ButtonProps {
  label: string;
  size?: "small" | "medium" | "large" | undefined;
  type?: "primary" | "light" | "dark" | undefined;
  isLoading?: boolean | undefined;
  isDisabled?: boolean | undefined;
  icon?: string | undefined;
  iconPosition?: "left" | "right" | undefined;
}

interface ButtonEmits {
  (e: "onClick"): void;
}

const emit = defineEmits<ButtonEmits>();

const props = withDefaults(defineProps<ButtonProps>(), {
  size: "medium",
  type: "primary",
  isLoading: false,
  isDisabled: false,
});

const classes = computed(() => {
  return {
    // colors
    "text-white bg-blue-600 border-transparent hover:bg-blue-500 active:bg-blue-700 ring-blue-300":
      props.type === "primary",
    "text-blue-600 bg-white border-transparent hover:bg-grey-100 active:bg-grey-100 ring-blue-200":
      props.type === "light",
    "text-grey-50 bg-grey-700 border-transparent hover:bg-grey-900 active:bg-grey-900 ring-grey-300":
      props.type === "dark",

    "pointer-events-none opacity-75 cursor-not-allowed": props.isDisabled,

    // sizes
    "px-4 py-1 text-xs leading-5 font-normal rounded-lg":
      props.size === "small",
    "px-5 py-2 text-sm leading-5 font-medium rounded-lg":
      props.size === "medium",
    "px-12 py-5 text-lg leading-5 font-medium rounded-lg":
      props.size === "large",
  };
});

const iconClasses = computed(() => {
  return {
    "ml-2":
      ["small", "medium"].includes(props.size) &&
      props.iconPosition === "right",
    "ml-4 -mr-5 text-base":
      ["large"].includes(props.size) && props.iconPosition === "right",

    "mr-2":
      ["small", "medium"].includes(props.size) && props.iconPosition === "left",
    "mr-4 -ml-5 text-base":
      ["large"].includes(props.size) && props.iconPosition === "left",

    "text-white": props.type === "primary",
    "text-grey-700": props.type === "light",
    "text-grey-50": props.type === "dark",
  };
});

function onClick() {
  if (props.isDisabled) {
    return;
  }

  emit("onClick");
}
</script>
