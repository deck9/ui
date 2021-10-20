<template>
  <Listbox as="div" v-model="selected" :disabled="isDisabled">
    <div class="relative">
      <ListboxButton
        class="
          w-full
          mono-50
          bg-grey-50
          text-grey-800
          placeholder-grey-600
          border border-grey-300
          dark:bg-grey-800
          dark:text-grey-100
          dark:placeholder-grey-400
          dark:border-grey-700
          focus:ring-2
          focus:border-blue-400
          focus:ring-blue-400
          focus:outline-none
          dark:focus:border-blue-800 dark:focus:ring-blue-800
          cursor-default
          rounded
          font-normal
          text-left
        "
        :class="[inputClasses, textSizeClasses, disabledClasses]"
      >
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
            pointer-events-none
          "
          :class="textSizeClasses"
        >
          <D9Icon :name="icon" />
        </span>
        <span v-if="selected" class="block truncate">{{ selected.label }}</span>
        <span class="text-grey-500" v-else>{{ placeholder }}</span>
        <span
          class="
            absolute
            right-0
            inset-y-0
            inline-flex
            items-center
            justify-center
            text-grey-700
            dark:text-grey-100
            px-4
            pointer-events-none
          "
        >
          <D9Icon
            class="text-grey-400"
            name="chevron-down"
            aria-hidden="true"
          />
        </span>
      </ListboxButton>

      <transition
        leave-active-class="transition ease-in duration-100"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0"
      >
        <ListboxOptions
          class="
            absolute
            z-10
            mt-1
            w-full
            bg-white
            dark:bg-grey-700 dark:text-grey-50
            shadow-lg
            max-h-60
            rounded-md
            py-1
            text-base
            ring-1 ring-black ring-opacity-5
            overflow-auto
            focus:outline-none
            sm:text-sm
          "
        >
          <ListboxOption
            as="template"
            v-for="item in options"
            :key="item.id"
            :value="item"
            v-slot="{ active, selected }"
          >
            <li
              :class="[
                active
                  ? 'text-white bg-grey-800'
                  : 'text-gray-900 dark:text-grey-50',
                'cursor-default select-none relative py-2 pl-3 pr-9',
              ]"
            >
              <span
                :class="[
                  selected ? 'font-semibold' : 'font-normal',
                  'block truncate',
                ]"
              >
                {{ item.label }}
              </span>

              <span
                v-if="selected"
                :class="[
                  active ? 'text-blue-100' : 'text-blue-500',
                  'absolute inset-y-0 right-0 flex items-center pr-4',
                ]"
              >
                <D9Icon name="check" class="h-5 w-5" aria-hidden="true" />
              </span>
            </li>
          </ListboxOption>
        </ListboxOptions>
      </transition>
    </div>
  </Listbox>
</template>

<script setup lang="ts">
import D9Icon from "../Icon/Icon.vue";
import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from "@headlessui/vue";
import { Size } from "../types";
import { ref, watch, withDefaults } from "vue";
import { useFormClasses } from "../utils/useFormClasses";

interface SelectOption {
  [key: string]: unknown;
  id: string | number;
  label: string | number;
}

const props = withDefaults(
  defineProps<{
    modelValue?: SelectOption | null;
    size?: Size;
    icon?: string;
    placeholder?: string;
    isDisabled?: boolean;
    options: Array<SelectOption>;
  }>(),
  {
    size: "medium",
    isDisabled: false,
  }
);

const selected = props.modelValue ? ref(props.modelValue) : ref(null);

const emit = defineEmits<{
  (e: "update:modelValue", value: SelectOption): void;
}>();

const { inputClasses, disabledClasses, textSizeClasses } =
  useFormClasses(props);

if (props.modelValue) {
  watch(props.modelValue, (value) => {
    if (value.id !== selected.value?.id) {
      selected.value = value;
    }
  });
}

watch(selected, (value: SelectOption | null) => {
  if (value) {
    emit("update:modelValue", value);
  }
});
</script>
