<template>
  <div class="relative">
    <input
      class="
        mono-50
        bg-grey-50
        text-grey-800
        placeholder-grey-600
        border-grey-300
        dark:bg-grey-800
        dark:text-grey-100
        dark:placeholder-grey-400
        dark:border-grey-700
        focus:border-blue-400 focus:ring-blue-400
        dark:focus:border-blue-800 dark:focus:ring-blue-800
        rounded
      "
      :class="[inputClasses, textSizeClasses, disabledClasses]"
      :placeholder="placeholder"
      :type="type"
      :tabindex="isDisabled ? '-1' : undefined"
      :value="modelValue"
      @input="onInput"
    />

    <span
      v-if="icon"
      class="
        absolute
        left-0
        inset-y-0
        inline-flex
        items-center
        justify-center
        text-grey-700
        dark:text-grey-100
        px-4
      "
      :class="textSizeClasses"
    >
      <D9Icon :name="icon" />
    </span>
  </div>
</template>

<script setup lang="ts">
import D9Icon from "../Icon/Icon.vue";
import { Size } from "../types";
import { InputHTMLAttributes, withDefaults } from "vue";
import { useFormClasses } from "../utils/useFormClasses";

const props = withDefaults(
  defineProps<{
    modelValue?: string;
    type: string;
    placeholder?: string;
    size?: Size;
    icon?: string;
    isDisabled?: boolean;
    block?: boolean;
  }>(),
  {
    type: "text",
    size: "medium",
    isDisabled: false,
  }
);

const emit = defineEmits<{
  (e: "update:modelValue", value: string): void;
}>();

const { inputClasses, disabledClasses, textSizeClasses } =
  useFormClasses(props);

const onInput = function (payload: Event): void {
  emit("update:modelValue", (payload?.target as InputHTMLAttributes).value);
};
</script>
