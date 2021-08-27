import D9Checkbox from "./Checkbox.vue";

export default {
  title: "Forms/Checkbox",
  component: D9Checkbox,
};

const Template = (args: any) => ({
  components: { D9Checkbox },
  setup() {
    return { args };
  },
  template: '<d9-checkbox v-bind="args" />',
});

export const WithLabel = Template.bind({});
WithLabel.args = {
  label: "Check me out",
  modelValue: false,
};

export const WithDescrption = Template.bind({});
WithDescrption.args = {
  label: "Check me out",
  description: "I am a description which can be used to display more text",
  modelValue: false,
};

export const Checked = Template.bind({});
Checked.args = {
  label: "Check me out",
  description: "I am a description which can be used to display more text",
  modelValue: true,
};