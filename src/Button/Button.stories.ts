import { D9Button } from "../index";
import { icons } from "../index";

export default {
  title: "BotReach/Button",
  component: D9Button,
  argTypes: {
    type: {
      control: { type: "select", options: ["primary", "light", "dark"] },
    },
    size: {
      control: { type: "select", options: ["small", "medium", "large"] },
    },
    icon: { control: { type: "select", options: icons } },
    iconPosition: { control: { type: "select", options: ["left", "right"] } },
    onClick: { action: "clicked" },
  },
};

const Template = (args) => ({
  components: { D9Button },
  setup() {
    return { args };
  },
  template: '<d9-button v-bind="args" />',
});

export const Medium = Template.bind({});
Medium.args = {
  label: "Hey Button",
  size: "medium",
};

export const Small = Template.bind({});
Small.args = {
  size: "small",
  label: "Hey Button",
};

export const Large = Template.bind({});
Large.args = {
  size: "large",
  label: "Hey Button",
};

export const IconRight = Template.bind({});
IconRight.args = {
  label: "Hey Button",
  icon: "chevron-right",
  iconPosition: "right",
};

export const IconLeft = Template.bind({});
IconLeft.args = {
  label: "Hey Button",
  icon: "chevron-left",
  iconPosition: "left",
};

export const LargeIconRight = Template.bind({});
LargeIconRight.args = {
  size: "large",
  label: "Hey Button",
  icon: "chevron-right",
  iconPosition: "right",
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: "Hey Button",
  isDisabled: true,
};

export const Loading = Template.bind({});
Loading.args = {
  label: "Hey Button",
  isLoading: true,
};

export const LoadingAndDisabled = Template.bind({});
LoadingAndDisabled.args = {
  label: "Hey Button",
  isDisabled: true,
  isLoading: true,
};
