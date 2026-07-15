import { getStorybookHelpers } from "../../../src/index.js";
import { html } from "lit";
import "./my-element3.js";
import type { StoryObj } from "@storybook/web-components-vite";
import type { MyElement3 } from "./my-element3.js";

let { args, events, argTypes, template } = getStorybookHelpers("my-element3");
console.log(args)
console.log(argTypes['funcB'])

let argTssypes = {
  "objectA": {
    "name": "objectA",
    "description": "v\n\n\narg ref - `objectA`",
    "control": false,
    "table": {
      "category": "properties",
      "defaultValue": {
        "summary": "truite"
      },
      "type": {
        "summary": "object"
      }
    }
  },
  "objectB": {
    "name": "objectB",
    "description": "\n\n\narg ref - `objectB`",
    "defaultValue": "undefined",
    "control": {
      "type": "text"
    },
    "table": {
      "category": "properties",
      "defaultValue": {
        "summary": "undefined"
      },
      "type": {}
    }
  },
  "objectC": {
    "name": "objectC",
    "description": "\n\n\narg ref - `objectC`",
    "defaultValue": "undefined",
    "control": {
      "type": "text"
    },
    "table": {
      "category": "properties",
      "defaultValue": {
        "summary": "undefined"
      },
      "type": {}
    }
  },
  "objectD": {
    "name": "objectD",
    "description": "\n\n\narg ref - `objectD`",
    "control": {
      "type": "text"
    },
    "table": {
      "category": "attributes",
      "defaultValue": {
        "summary": ""
      },
      "type": {}
    }
  },
  "funcA": {
    "name": "funcA",
    "description": "\n\n\narg ref - `funcA`",
    "defaultValue": "undefined",
    "control": {
      "type": "text"
    },
    "table": {
      "category": "attributes",
      "defaultValue": {
        "summary": "undefined"
      },
      "type": {}
    }
  },
  "funcB": {
    "name": "funcB",
    "description": "\n\n\narg ref - `funcB`",
    "defaultValue": "undefined",
    "control": {
      "type": "text"
    },
    "table": {
      "category": "properties",
      "defaultValue": {
        "summary": "undefined"
      },
      "type": {}
    }
  },
  "funcC": {
    "name": "funcC",
    "description": "\n\n\narg ref - `funcC`",
    "defaultValue": "undefined",
    "control": {
      "type": "text"
    },
    "table": {
      "category": "properties",
      "defaultValue": {
        "summary": "undefined"
      },
      "type": {}
    }
  },
  "funcD": {
    "name": "funcD",
    "description": "\n\n\narg ref - `funcD`",
    "defaultValue": "undefined",
    "control": {
      "type": "text"
    },
    "table": {
      "category": "attributes",
      "defaultValue": {
        "summary": "undefined"
      },
      "type": {}
    }
  },
  "log-method": {
    "name": "log",
    "control": false,
    "table": {
      "category": "methods",
      "type": {
        "summary": "log(k: string) => void"
      }
    }
  }
}
// argTypes.someOptionalFunction.control = false;
const meta = {
  title: "My Element3",
  component: "my-element3",
  args,
  argTypes,
  parameters: {
    actions: {
      handles: events,
    },
  },
};
export default meta;

const fixedArgs = {
  };
export const Default: StoryObj<MyElement3 & typeof args> = {
  render: (args) => {
    console.table(args);

    return html`
        ${template(args)}
        <hr/>
    `
  },
  args: {
  },
};
