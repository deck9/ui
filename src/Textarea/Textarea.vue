<template>
  <div class="relative">
    <textarea
      class="mono-50 bg-white text-grey-800 placeholder:text-grey-400 placeholder:font-normal border-grey-300 dark:bg-grey-800 dark:text-grey-100 dark:placeholder:text-grey-500 dark:border-grey-700 focus:border-blue-400 focus:ring-blue-400 dark:focus:border-blue-800 dark:focus:ring-blue-800 rounded"
      :class="[inputClasses, textSizeClasses, disabledClasses]"
      :tabindex="isDisabled ? '-1' : undefined"
      :value="modelValue ?? ''"
      v-bind="$attrs"
      ref="input"
      cols="56"
      rows="8"
      @input="onInput"
    >
    </textarea>
  </div>
</template>

<script lang="ts">
export default {
  inheritAttrs: false,
};
</script>

<script setup lang="ts">
import { Size } from "../types/types";
import { InputHTMLAttributes, Ref, ref, withDefaults } from "vue";
import { useFormClasses } from "../utils/useFormClasses";

const props = withDefaults(
  defineProps<{
    modelValue?: string | null;
    size?: Size;
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

const input = ref(null) as unknown as Ref<HTMLInputElement>;

const focus = (): void => {
  if (!props.isDisabled) {
    input.value.focus();
  }
};

defineExpose({
  focus,
});
</script>
