import { D9Button, D9Input, D9Label } from "../index";
import { icons } from "../index";
import { v4 as uuidv4 } from "uuid";
import { nextTick, ref } from "vue";

export default {
  title: "Forms/Input",
  component: D9Input,
  argTypes: {
    type: {
      control: { type: "inline-radio" },
      options: ["text", "password", "color", "number", "email", "tel", "url"],
      defaultValue: "text",
    },
    size: {
      control: { type: "inline-radio" },
      options: ["small", "medium", "large"],
    },
    icon: { control: { type: "select" }, options: icons },
    modelValue: { control: { type: "text" } },
    isDisabled: { control: { type: "boolean" }, defaultValue: false },
    block: { control: { type: "boolean" }, defaultValue: false },
  },
};

const Template = (args) => ({
  setup() {
    return {
      args,
      uid: ref(uuidv4()),
    };
  },
  components: { D9Input },
  template: `<div><D9Input class="min-w-md" v-bind="args" /></div>`,
});

export const Default = Template.bind({});
Default.args = {
  placeholder: "Your Input",
};

export const Small = Template.bind({});
Small.args = {
  placeholder: "Your Input",
  size: "small",
};

export const Large = Template.bind({});
Large.args = {
  placeholder: "Your Input",
  size: "large",
};

export const Disabled = Template.bind({});
Disabled.args = {
  placeholder: "Your Input",
  isDisabled: true,
};

export const WithIcon = Template.bind({});
WithIcon.args = {
  placeholder: "Your Input",
  size: "medium",
  icon: "user",
};

export const AsBlock = Template.bind({});
AsBlock.args = {
  placeholder: "Your Input",
  size: "medium",
  block: true,
};

export const ColorInput = Template.bind({});
ColorInput.args = {
  placeholder: "Your Input",
  size: "medium",
  type: "color",
  showColorPicker: true,
};

export const NumberInput = Template.bind({});
NumberInput.args = {
  placeholder: "Your number Input",
  size: "medium",
  min: 1,
  max: 10,
  type: "number",
};

export const NumberClamping = () => ({
  components: { D9Input, D9Label },
  setup() {
    const cases = ref([
      { id: "max-8", label: "max 8: type 8.9", max: 8, value: "" },
      { id: "max-10", label: "max 10: type 1e3", max: 10, value: "" },
      { id: "min-0", label: "min 0: type -3", min: 0, value: "" },
      { id: "max-0", label: "max 0: type 5", max: 0, value: "" },
      {
        id: "min-5",
        label: "min 5, max 20: type 12",
        min: 5,
        max: 20,
        value: "",
      },
    ]);

    return { cases };
  },
  template: `
    <div class="flex flex-col gap-4 max-w-md">
      <p class="text-sm">Type, then press Tab or Enter to clamp.</p>
      <div v-for="item in cases" :key="item.id" class="flex flex-col gap-1">
        <D9Label :id="item.id" :label="item.label" />
        <D9Input
          :id="item.id"
          type="number"
          :min="item.min"
          :max="item.max"
          v-model="item.value"
          block
        />
        <code class="text-xs">{{ JSON.stringify(item.value) }} ({{ typeof item.value }})</code>
      </div>
    </div>
  `,
});

export const FocusAfterAdd = () => ({
  components: { D9Button, D9Input },
  setup() {
    const policies = ref(["I accept the terms."]);
    const inputs = ref<{ focus: () => void }[]>([]);

    const addPolicy = async () => {
      policies.value.push("");
      await nextTick();
      inputs.value[policies.value.length - 1]?.focus();
    };

    return { policies, inputs, addPolicy };
  },
  template: `
    <div class="flex flex-col gap-2 max-w-md">
      <D9Input
        v-for="(policy, i) in policies"
        :key="i"
        :ref="(el) => (inputs[i] = el)"
        v-model="policies[i]"
        :aria-label="'Policy ' + (i + 1)"
        placeholder="Policy text"
        block
      />
      <D9Button label="Add new policy" @click="addPolicy" />
    </div>
  `,
});
