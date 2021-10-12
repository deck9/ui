import D9Spinner from "./Spinner.vue";

export default {
  title: "Loaders/Spinner",
  component: D9Spinner,
};

const Template = (args: Record<string, unknown>) => ({
  components: { D9Spinner },
  setup() {
    return { args };
  },
  template: "<d9-spinner class='text-grey-300' v-bind='args' />",
});

export const Default = Template.bind({});
