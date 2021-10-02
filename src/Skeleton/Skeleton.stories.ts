import D9Skeleton from "./Skeleton.vue";

export default {
  title: "Loaders/Skeleton",
  component: D9Skeleton,
  argTypes: {
    title: {
      control: { type: "boolean" },
    },
    footer: {
      control: { type: "boolean" },
    },
    avatar: {
      control: { type: "boolean" },
    },
    lines: {
      control: { type: "number" },
    },
  },
};

const Template = (args: Record<string, unknown>) => ({
  components: { D9Skeleton },
  setup() {
    return { args };
  },
  template: "<d9-skeleton class='text-grey-100' v-bind='args' />",
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
  avatar: false
}
