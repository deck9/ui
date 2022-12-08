import { D9Input } from "../index";
import { icons } from "../index";
import { v4 as uuidv4 } from "uuid";
import { ref } from "vue";

export default {
  title: "Forms/Input",
  component: D9Input,
  argTypes: {
    type: {
      control: { type: "inline-radio" },
      options: ["text", "password", "color", "number", "email", "tel", "url"],
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
  template: `<div><d9-input v-bind="args" /></div>`,
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
