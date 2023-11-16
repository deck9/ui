import { D9Textarea } from "../index";
import { icons } from "../index";
import { v4 as uuidv4 } from "uuid";
import { ref } from "vue";

export default {
  title: "Forms/Textarea",
  component: D9Textarea,
  argTypes: {
    size: {
      control: "inline-radio",
      options: ["small", "medium", "large"],
    },
  },
};

const Template = (args) => ({
  setup() {
    return {
      args,
      uid: ref(uuidv4()),
    };
  },
  components: { D9Textarea },
  template: `<div><D9Textarea v-bind="args" /></div>`,
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

export const AsBlock = Template.bind({});
AsBlock.args = {
  placeholder: "Your Input",
  size: "medium",
  block: true,
};
