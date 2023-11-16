import D9Switch from "./Switch.vue";
import { ref } from "vue";

export default {
  title: "Forms/Switch",
  component: D9Switch,
};

const Template = (args: Record<string, unknown>) => ({
  components: { D9Switch },
  setup() {
    const enabled = ref(args.modelValue ? true : false);

    return { args, enabled };
  },
  template: '<D9Switch v-bind="args" v-model="enabled" />',
});

export const IsOff = Template.bind({});
IsOff.args = {
  label: "Check me out",
  modelValue: false,
  onLabel: "On",
  offLabel: "Off",
};

export const IsOn = Template.bind({});
IsOn.args = {
  label: "Check me out",
  modelValue: true,
  onLabel: "On",
  offLabel: "Off",
};

export const WithDifferentStateLabels = Template.bind({});
WithDifferentStateLabels.args = {
  label: "Check me out",
  modelValue: true,
  onLabel: "Yes",
  offLabel: "No",
};
