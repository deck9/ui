import { ref } from "vue";
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

// Same shape as Input's logic editor: options without `id`, rows keyed by index
export const OutsideValueChanges = () => ({
  components: { D9Select },
  setup() {
    const blocks = [
      { key: "name", label: "What is your name?" },
      { key: "age", label: "How old are you?" },
      { key: "city", label: "Where do you live?" },
    ];
    const operators = [
      { key: "equals", label: "is equal to" },
      { key: "contains", label: "contains" },
      { key: "isGreaterThan", label: "is greater than" },
    ];
    const initialRows = () => [
      { source: blocks[0], operator: operators[0] },
      { source: blocks[1], operator: operators[2] },
    ];
    const rows = ref(initialRows());
    const reset = () => (rows.value = initialRows());

    return { blocks, operators, rows, reset };
  },
  template: `
    <div class="w-96 space-y-6">
      <div v-for="(row, index) in rows" :key="index" class="space-y-1">
        <div class="flex justify-between text-sm">
          <span class="font-medium">Condition {{ index + 1 }}</span>
          <span class="space-x-3">
            <button type="button" class="text-grey-600" @click="row.source = null">Clear block</button>
            <button type="button" class="text-red-600" @click="rows.splice(index, 1)">Remove</button>
          </span>
        </div>
        <D9Select placeholder="Select a block" v-model="row.source" size="small" :options="blocks" />
        <D9Select placeholder="Select an operator" v-model="row.operator" size="small" :options="operators" />
        <p class="text-xs text-grey-600">Saved: {{ row.source?.label ?? "no block" }} · {{ row.operator?.label }}</p>
      </div>
      <button type="button" class="text-sm text-blue-600" @click="reset">Reset rows</button>
    </div>
  `,
});
