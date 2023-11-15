import { D9SplitButton } from "../index";
import { icons } from "../index";

export default {
  title: "Basics/SplitButton",
  component: D9SplitButton,
  argTypes: {
    color: {
      options: ["primary", "light", "dark", "danger"],
    },
    size: {
      options: ["small", "medium", "large"],
    },
    icon: { options: icons, control: { type: "select" } },
    iconPosition: { options: ["left", "right"] },
    onClick: { action: "clicked" },
  },
};

const Template = (args: Record<string, unknown>) => ({
  components: { D9SplitButton },
  setup() {
    return { args };
  },
  template: '<D9SplitButton v-bind="args" />',
});

export const Medium = Template.bind({});
Medium.args = {
  label: "Split Button",
  size: "medium",
};

export const Small = Template.bind({});
Small.args = {
  size: "small",
  label: "Split Button",
};

export const Large = Template.bind({});
Large.args = {
  size: "large",
  label: "Split Button",
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: "Split Button",
  isDisabled: true,
};

export const Loading = Template.bind({});
Loading.args = {
  label: "Split Button",
  isLoading: true,
};

export const LoadingAndDisabled = Template.bind({});
LoadingAndDisabled.args = {
  label: "Split Button",
  isDisabled: true,
  isLoading: true,
};
