import D9Checkbox from "./Checkbox.vue";

export default {
  title: "Forms/Checkbox",
  component: D9Checkbox,
};

export const Default = (args, {argTypes}) => ({
  components: {D9Checkbox},
  template: '<d9-checkbox />'
})