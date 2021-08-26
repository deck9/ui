import { D9Icon } from "@/index";
import { icons } from "@/index";

export default {
  title: "BotReach/Icon",
  component: D9Icon,
  argTypes: {
    size: {
      control: { type: "select", options: ["xs", "1x", "2x", "3x", "4x"] },
    },
    name: {
      control: { type: "select", options: icons },
    },
  },
  decorators: [
    () => ({
      template:
        '<div class="px-8 py-4 inline-block text-grey-50"><story/></div>',
    }),
  ],
};

const Template = (args, { argTypes }) => ({
  components: { D9Icon },
  setup() {
    return { args };
  },
  template: '<d9-icon v-bind="args" />',
});

export const Primary = Template.bind({});
Primary.args = {
  name: "user",
  size: "1x",
};

export const Small = Template.bind({});
Small.args = {
  name: "user",
  size: "xs",
};

export const Large = Template.bind({});
Large.args = {
  name: "user",
  size: "2x",
};
