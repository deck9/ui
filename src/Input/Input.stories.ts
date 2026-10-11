import { D9Button, D9Input } from "../index";
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
