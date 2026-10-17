import D9Label from "./Label.vue";
import D9Input from "../Input/Input.vue";

export default {
  title: "Forms/Label",
  component: D9Label,
};

export const Default = (args: Record<string, unknown>) => ({
  components: { D9Label },
  setup() {
    return { args };
  },
  template: '<D9Label id="name" label="Your name" />',
});

export const WithDescription = (args: Record<string, unknown>) => ({
  components: { D9Label },
  setup() {
    return { args };
  },
  template:
    '<D9Label id="name" label="Your name" description="Please use your full name." />',
});

export const LinkedToField = (args: Record<string, unknown>) => ({
  components: { D9Label, D9Input },
  setup() {
    return { args };
  },
  // The help text gets the id "<id>-help": point the field at it with aria-describedby.
  template: `
    <div>
      <D9Label id="name" label="Your name" description="Please use your full name." />
      <D9Input id="name" aria-describedby="name-help" />
    </div>`,
});
