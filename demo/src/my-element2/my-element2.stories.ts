import { getStorybookHelpers } from "../../../src/index.js";
import { html } from "lit";
import "./my-element2.js";
import type { StoryObj } from "@storybook/web-components-vite";
import type { MyElement2 } from "./my-element2.js";

const { args, events, argTypes, template } = getStorybookHelpers("my-element2");
console.log(args)
console.log(argTypes)
// argTypes.someOptionalFunction.control = false;
const meta = {
  title: "My Element2",
  component: "my-element2",
  args,
  argTypes,
  parameters: {
    actions: {
      handles: events,
    },
  },
};
export default meta;

export const Default: StoryObj<MyElement2 & typeof args> = {
  render: (args) => template(args),
};
