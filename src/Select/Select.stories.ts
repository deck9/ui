import { D9Select } from "../index";
import { icons } from "../index";

export default {
  title: "Forms/Select",
  component: D9Select,
  argTypes: {
    size: {
      options: ["small", "medium", "large"],
      control: "inline-radio",
    },
    icon: { options: icons, control: "select" },
    modelValue: false,
  },
};

const people = [
  { id: 1, value: 1, label: "Wade Cooper" },
  { id: 2, value: 2, label: "Arlene Mccoy" },
  { id: 3, value: 3, label: "Devon Webb" },
  { id: 4, value: 4, label: "Tom Cook" },
  { id: 5, value: 5, label: "Tanya Fox" },
  { id: 6, value: 6, label: "Hellen Schmidt" },
  { id: 7, value: 7, label: "Caroline Schultz", disabled: true },
  { id: 8, value: 8, label: "Mason Heaney" },
  { id: 9, value: 9, label: "Claudie Smitham-Honey", disabled: true },
  { id: 10, value: 10, label: "Emil Schaefer", icon: "envelope" },
];

const Template = (args) => ({
  setup() {
    return {
      people,
      args,
    };
  },
  components: { D9Select },
  template: `<div><D9Select class="inline-block w-56" v-bind="{ options: people, ...args}" /></div>`,
});

export const Default = Template.bind({});
Default.args = {
  placeholder: "Please select...",
};

export const Small = Template.bind({});
Small.args = {
  placeholder: "Please select...",
  size: "small",
};

export const Large = Template.bind({});
Large.args = {
  placeholder: "Please select...",
  size: "large",
};

export const Disabled = Template.bind({});
Disabled.args = {
  placeholder: "Please select...",
  isDisabled: true,
};

export const DisabledItemWithBadge = Template.bind({});
DisabledItemWithBadge.args = {
  placeholder: "Please select...",
  disabledBadge: "Planned!",
};

export const WithIcon = Template.bind({});
WithIcon.args = {
  placeholder: "Please select...",
  size: "medium",
  icon: "user",
};
