import Checkbox from "./Checkbox.vue";

export default {
  title: "Forms/Checkbox",
  component: Checkbox,
};

export const Default = (args, {argTypes}) => ({
  components: {Checkbox},
  template: '<checkbox />'
})