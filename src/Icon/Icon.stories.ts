import { D9Icon } from "../index";
import { icons, brands } from "../index";

export default {
  title: "Basics/Icon",
  component: D9Icon,
  argTypes: {
    size: {
      options: ["xs", "1x", "2x", "3x", "4x"],
      control: { type: "inline-radio" },
    },
    name: {
      options: [...icons, ...brands],
      control: { type: "select" },
    },
  },
  decorators: [
    () => ({
      template:
        '<div class="px-8 py-4 inline-block text-grey-500"><story/></div>',
    }),
  ],
};

const Template = (args, { argTypes }) => ({
  components: { D9Icon },
  setup() {
    return { args };
  },
  template: '<D9Icon v-bind="args" />',
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
