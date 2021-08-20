import InputLabel from "./InputLabel.vue";

export default {
  title: "Forms/InputLabel",
  component: InputLabel,
};

export const Default = (args) => ({
  components: {InputLabel},
  setup() {
    return {args};
  },
  template: '<input-label id="name" label="Your name" />',
});