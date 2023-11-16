import { D9Button } from "../index";
import { icons } from "../index";

export default {
  title: "Basics/Button",
  component: D9Button,
  argTypes: {
    color: {
      options: ["primary", "light", "dark", "danger"],
      control: "inline-radio",
    },
    size: {
      options: ["small", "medium", "large"],
      control: "inline-radio",
    },
    icon: { options: icons, control: "select" },
    iconPosition: {
      options: ["left", "right"],
      control: "inline-radio",
    },
    onClick: { action: "clicked" },
  },
};

const Template = (args: Record<string, unknown>) => ({
  components: { D9Button },
  setup() {
    return { args };
  },
  template: '<D9Button v-bind="args" />',
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
