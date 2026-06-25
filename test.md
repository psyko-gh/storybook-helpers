Testing template attributes and props assignments

## Object - renderDefaultValues: false 
With `renderDefaultValues: false`

With no default value _(optional objects for instance)_

| Prop declaration                                                   | typeof var | value         | Note                                                      |
|--------------------------------------------------------------------|------------|---------------|-----------------------------------------------------------|
| `@property({type: Object}) objectA = undefined;`                   | undefined  | undefined     | :x: Value ok, but missing `attribute: false` in @property |
| `@property({attribute: false}) objectB = undefined;`          z    | string     | "undefined"   | :x: Wrong value assigned                                  |
| `@property({type: Object, attribute: false}) objectC = undefined;` | string     | "undefined"   | :x: Wrong value assigned                                  |
| `@property({type: Object, attribute: true}) objectD?;`             | undefined  | undefined     | :x: Value ok, but missing `attribute: false` in @property |

With default value 

| Prop declaration                                                      | typeof var | value          | Note                                                      |
|-----------------------------------------------------------------------|------------|----------------|-----------------------------------------------------------|
| `@property({type: Object}) objectA = {test: true};`                   | object     | {"test":true}  | :x: Value ok, but missing `attribute: false` in @property |
| `@property({attribute: false}) objectB = {test: true};`               | object     | {"test":true}  | :heavy_check_mark: OK                                     |
| `@property({type: Object, attribute: false}) objectC = {test: true};` | object     | {"test":true}  | :heavy_check_mark: OK                                     |
| `@property({type: Object, attribute: true}) objectD?;`                | undefined  | undefined      | :x: Value ok, but missing `attribute: false` in @property |

## Object - renderDefaultValues: true

With `renderDefaultValues: true`

With no default value _(optional objects for instance)_

| Prop declaration                                                   | typeof var | value       | Note                                                           |
|--------------------------------------------------------------------|------------|-------------|----------------------------------------------------------------|
| `@property({type: Object}) objectA = undefined;`                   | object     | null        | :x: Invalid value, but missing `attribute: false` in @property |
| `@property({attribute: false}) objectB = undefined;`               | string     | "undefined" | :x: Wrong value assigned                                       |
| `@property({type: Object, attribute: false}) objectC = undefined;` | string     | "undefined" | :x: Wrong value assigned                                       |
| `@property({type: Object, attribute: true}) objectD?;`             | undefined  | undefined   | :x: Value ok, but missing `attribute: false` in @property      |

With default value

| Prop declaration                                                      | typeof var | value         | Note                                                           |
|-----------------------------------------------------------------------|------------|---------------|----------------------------------------------------------------|
| `@property({type: Object}) objectA = {test: true};`                   | object     | null          | :x: Invalid value, but missing `attribute: false` in @property |
| `@property({attribute: false}) objectB = {test: true};`               | object     | {"test":true} | :heavy_check_mark: OK                                          |
| `@property({type: Object, attribute: false}) objectC = {test: true};` | object     | {"test":true} | :heavy_check_mark: OK                                          |
| `@property({type: Object, attribute: true}) objectD?;`                | undefined  | undefined     | :x: Value ok, but missing `attribute: false` in @property      |
