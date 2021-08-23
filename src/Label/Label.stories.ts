import D9Label from "./Label.vue";

export default {
  title: "Forms/Label",
  component: D9Label,
};

export const Default = (args) => ({
  components: {D9Label},
  setup() {
    return {args};
  },
  template: '<d9-label id="name" label="Your name" />',
});