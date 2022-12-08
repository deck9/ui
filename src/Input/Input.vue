<template>
  <div class="relative" :class="[block ? 'w-full block' : 'inline-block']">
    <input
      class="
        relative
        mono-50
        bg-white
        text-grey-800
        placeholder:text-grey-400 placeholder:font-normal
        border-grey-300
        dark:bg-grey-800
        dark:text-grey-100
        dark:placeholder:text-grey-500
        dark:border-grey-700
        focus:border-blue-400 focus:ring-blue-400
        dark:focus:border-blue-800 dark:focus:ring-blue-800
        rounded
      "
      :class="[inputClasses, textSizeClasses, disabledClasses]"
      :placeholder="placeholder"
      :type="resolvedInputType"
      :tabindex="isDisabled ? '-1' : undefined"
      :value="localValue"
      v-bind="$attrs"
      ref="input"
      @input="onInput"
    />

    <template v-if="type === 'color'">
      <label class="absolute inset-y-2 left-2 w-8 cursor-pointer">
        <input
          class="invisible"
          type="color"
          v-model="localValue"
          @input="onInput"
        />
        <span
          class="
            border-1
            absolute
            inset-0
            block
            rounded
            border border-grey-600/25
            bg-clip-border
            shadow
          "
          :style="`background-color: ${localValue}`"
        ></span>
      </label>

      <button
        v-if="isColorPickerSupported && showColorPicker"
        type="button"
        class="
          absolute
          inset-y-2
          right-2
          h-7
          w-7
          rounded-full
          hover:bg-grey-200
        "
        @click="openPicker"
      >
        <D9Icon size="xs" name="eyedropper" />
      </button>
    </template>

    <span
      v-else-if="icon"
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

<script lang="ts">
export default {
  inheritAttrs: false,
};
</script>

<script setup lang="ts">
import D9Icon from "../Icon/Icon.vue";
import { Size } from "../types";
import {
  computed,
  InputHTMLAttributes,
  Ref,
  ref,
  watch,
  withDefaults,
} from "vue";
import { useEyeDropper } from "@vueuse/core";
import { useFormClasses } from "../utils/useFormClasses";

const props = withDefaults(
  defineProps<{
    modelValue?: string | null;
    type: string;
    placeholder?: string;
    size?: Size;
    icon?: string;
    isDisabled?: boolean;
    block?: boolean;
    showColorPicker?: boolean;
  }>(),
  {
    type: "text",
    size: "medium",
    isDisabled: false,
  }
);

const localValue = ref(props.modelValue ?? "");

const emit = defineEmits<{
  (e: "update:modelValue", value: string): void;
}>();

const { inputClasses, disabledClasses, textSizeClasses } =
  useFormClasses(props);

const resolvedInputType = computed(() => {
  if (props.type === "color") {
    return "text";
  }

  return props.type;
});

const {
  isSupported: isColorPickerSupported,
  open: openColorPicker,
  sRGBHex,
} = useEyeDropper();

const openPicker = () => {
  openColorPicker();
};

watch(sRGBHex, (value) => {
  localValue.value = value;
  emit("update:modelValue", value);
});

const onInput = function (payload: Event): void {
  localValue.value = (payload?.target as InputHTMLAttributes).value;
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
