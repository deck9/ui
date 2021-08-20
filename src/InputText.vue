<template>
  <div class="relative">
    <input
      class="appearance-none block w-full text-grey-900 resize-none shadow-none bg-white font-sans max-w-xs placeholder-grey-500 border border-grey-200 focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
      :placeholder="placeholder"
      :class="{ ...classes, ...textSizeClasses }"
      :type="type"
      @input="input"
    />

    <span
      v-if="icon"
      class="absolute left-0 inset-y-0 inline-flex items-center justify-center text-blue-400 px-4"
      :class="textSizeClasses"
    >
      <Icon :name="icon" />
    </span>
  </div>
</template>

<script>
import Icon from "./Icon";

export default {
  name: "ui-input-text",

  components: { Icon },

  props: {
    type: {
      type: String,
      default: "text",
      validator: (value) => {
        return ["text", "password"].includes(value);
      },
    },

    placeholder: {
      type: String,
      default: "",
    },

    size: {
      type: String,
      default: "medium",
      validator: (value) => {
        return ["small", "medium", "large"].includes(value);
      },
    },

    icon: {
      type: String,
      default: null,
    },
  },

  computed: {
    classes() {
      return {
        "px-3 py-2 rounded font-normal": this.size === "small",
        "px-4 py-3 rounded font-normal": this.size === "medium",
        "px-6 py-4 rounded font-normal": this.size === "large",

        "pl-10": this.icon && this.size === "small",
        "pl-12": this.icon && (this.size === "medium" || this.size === "large"),
      };
    },

    textSizeClasses() {
      return {
        "text-xs leading-5": this.size === "small",
        "text-sm leading-5": this.size === "medium",
        "text-lg leading-4": this.size === "large",
      };
    },
  },

  methods: {
    input(value) {
      this.$emit("onInput", value);
    },
  },
};
</script>