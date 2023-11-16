import D9Skeleton from "./Skeleton.vue";

export default {
  title: "Loaders/Skeleton",
  component: D9Skeleton,
  argTypes: {
    title: {
      control: "boolean",
    },
    footer: {
      control: "boolean",
    },
    avatar: {
      control: "boolean",
    },
    lines: {
      control: "number",
    },
  },
};

const Template = (args: Record<string, unknown>) => ({
  components: { D9Skeleton },
  setup() {
    return { args };
  },
  template: "<D9Skeleton class='text-grey-100' v-bind='args' />",
});

export const Default = Template.bind({});
Default.args = {
  lines: 3,
  footer: true,
  title: true,
  avatar: true,
};

export const Minimal = Template.bind({});
Minimal.args = {
  lines: 3,
  footer: false,
  title: true,
  avatar: false,
};
