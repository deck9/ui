import { ref } from "vue";
import { D9Label, D9Select } from "../index";
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

// The parent stores a copy of each pick, like useVModel with clone: true
export const CopyingParent = () => ({
  components: { D9Select },
  setup() {
    const model = ref(null);
    const emits = ref(0);
    const store = (value) => {
      emits.value++;
      model.value = { ...value };
    };

    return { people, model, emits, store };
  },
  template: `
    <div class="w-56 space-y-1">
      <D9Select placeholder="Please select..." :model-value="model" :options="people" @update:model-value="store" />
      <p class="text-xs text-grey-600">update:modelValue emits: {{ emits }}</p>
    </div>
  `,
});

// D9Labels linked by id: clicking a label opens its select, and the button's
// name is the label plus the chosen value or placeholder. A plain <label for>
// still names its select alone, and a select with an id but no label is named
// by its own text.
export const WithLabel = () => ({
  components: { D9Label, D9Select },
  setup() {
    const languages = [
      { id: "en", label: "English" },
      { id: "de", label: "German" },
    ];
    const language = ref(languages[0]);

    return { people, languages, language };
  },
  template: `
    <div class="w-56 space-y-4">
      <div class="space-y-1">
        <D9Label id="language" label="Language" />
        <D9Select id="language" v-model="language" :options="languages" />
      </div>
      <div class="space-y-1">
        <D9Label id="assignee" label="Assignee" />
        <D9Select id="assignee" placeholder="Please select..." :options="people" />
      </div>
      <div class="space-y-1">
        <label for="owner" class="block text-sm">Owner</label>
        <D9Select id="owner" placeholder="Pick an owner" :options="people" />
      </div>
      <D9Select id="reviewer" placeholder="Pick a reviewer" :options="people" />
    </div>
  `,
});

// Labels are plain text: markup in a label shows as written, in the list and the button
export const LabelsAsText = () => ({
  components: { D9Select },
  setup() {
    const options = [
      { id: 1, label: "<img src=x onerror=alert(1)>" },
      { id: 2, label: "<b>Not bold</b>" },
    ];
    const value = ref(options[0]);

    return { options, value };
  },
  template: `<div class="w-56"><D9Select v-model="value" :options="options" /></div>`,
});

// Same shape as Input's logic editor: a badge per block through the option
// slot, and options rebuilt as new objects. After a rebuild, the select with
// `by="key"` still shows the checkmark; the one without `by` loses it.
export const OptionSlot = () => ({
  components: { D9Label, D9Select },
  setup() {
    const blocks = () => [
      { key: "a1", title: "A1", text: "What is your name?" },
      { key: "a2", title: "A2", text: "How old are you?" },
      { key: "b1", title: "B1", text: "Where do you live?" },
    ];
    const toOption = (block) => ({ ...block, label: block.text });
    const options = ref(blocks().map(toOption));
    const selects = ref([
      {
        id: "with-by",
        title: 'With by="key"',
        by: "key",
        value: options.value[1],
      },
      { id: "without-by", title: "Without by", value: options.value[1] },
    ]);
    const rebuilds = ref(0);
    const rebuild = () => {
      options.value = blocks().map(toOption);
      rebuilds.value++;
    };

    return { options, selects, rebuilds, rebuild };
  },
  template: `
    <div class="w-96 space-y-4">
      <div v-for="select in selects" :key="select.id" class="space-y-1">
        <D9Label :id="select.id" :label="select.title" />
        <D9Select :id="select.id" v-model="select.value" :options="options" :by="select.by" placeholder="Select a block">
          <template #option="{ option }">
            <span class="inline-flex items-center text-xs">
              <span class="bg-grey-700 text-white rounded mr-2 px-1 py-px w-16 truncate inline-block text-center">{{ option.title }}</span>
              <span class="inline-block truncate">{{ option.text }}</span>
            </span>
          </template>
        </D9Select>
      </div>
      <button type="button" class="text-sm text-blue-600" @click="rebuild">Rebuild options</button>
      <p class="text-xs text-grey-600">Rebuilds: {{ rebuilds }}</p>
    </div>
  `,
});
