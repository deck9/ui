<template>
  <button
    class="
      relative
      inline-flex
      items-center
      focus:outline-none
      focus:ring
      active:ring
      transition
      duration-150
      ease-in-out
    "
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
      <Icon class="animate-spin" name="spinner-third" />
    </span>
  </button>
</template>

<script>
import Icon from "./Icon";

export default {
  name: "ui-button",

  components: { Icon },

  emits: ["onClick"],

  props: {
    label: {
      type: String,
      required: true,
    },

    size: {
      type: String,
      default: "medium",
      validator: function (value) {
        return ["small", "medium", "large"].indexOf(value) !== -1;
      },
    },

    type: {
      type: String,
      default: "primary",
      validator: function (value) {
        return ["primary", "light", "dark"].indexOf(value) !== -1;
      },
    },

    isLoading: {
      type: Boolean,
      default: false,
    },

    isDisabled: {
      type: Boolean,
      default: false,
    },

    icon: {
      type: String,
      default: null,
    },

    iconPosition: {
      type: String,
      default: "right",
      validator: (value) => {
        return ["left", "right"].indexOf(value) !== -1;
      },
    },
  },

  computed: {
    classes() {
      return {
        // colors
        "text-white bg-blue-600 border-transparent hover:bg-blue-500 active:bg-blue-700 ring-blue-300":
          this.type === "primary",
        "text-blue-600 bg-white border-transparent hover:bg-grey-100 active:bg-grey-100 ring-blue-200":
          this.type === "light",
        "text-grey-50 bg-grey-700 border-transparent hover:bg-grey-900 active:bg-grey-900 ring-grey-300":
          this.type === "dark",

        "pointer-events-none opacity-75 cursor-not-allowed": this.isDisabled,

        // sizes
        "px-4 py-1 text-xs leading-5 font-normal rounded-lg":
          this.size === "small",
        "px-5 py-2 text-sm leading-5 font-medium rounded-lg":
          this.size === "medium",
        "px-12 py-5 text-lg leading-5 font-medium rounded-lg":
          this.size === "large",
      };
    },

    iconClasses() {
      return {
        "ml-2":
          ["small", "medium"].includes(this.size) &&
          this.iconPosition === "right",
        "ml-4 -mr-5 text-base":
          ["large"].includes(this.size) && this.iconPosition === "right",

        "mr-2":
          ["small", "medium"].includes(this.size) &&
          this.iconPosition === "left",
        "mr-4 -ml-5 text-base":
          ["large"].includes(this.size) && this.iconPosition === "left",

        "text-white": this.type === "primary",
        "text-grey-700": this.type === "light",
        "text-grey-50": this.type === "dark",
      };
    },
  },

  methods: {
    onClick() {
      if (this.isDisabled) {
        return;
      }

      this.$emit("onClick");
    },
  },
};
</script>
