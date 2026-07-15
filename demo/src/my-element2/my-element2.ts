import { LitElement, css, html } from "lit";
import { customElement, property } from "lit/decorators.js";

/**
 * An sample element.
 *
 * @tag my-element2
 *
 * @slot - This adds content between the logo and the counter button
 * @slot button-content - This adds extra content into the counter button
 *
 * @csspart button - The button
 * @csspart docs-hint - Adds custom styles to the docs hint
 *
 * @cssprop [--card-border-color=#ccc] - The card border color
 * @cssprop [--card-border-size=1px] - The card border color
 * @cssprop [--card-border-style=solid] - The card border color
 * @cssprop [--card-border-radius=8px] - The card border radius
 *
 * @event count - This is a custom event
 */
@customElement("my-element2")
export class MyElement2 extends LitElement {
  /** Copy for the read the docs hint. */
  @property({ attribute: "docs-hint", reflect: true })
  docsHint = "Click on the Storybook logo to learn more";

  /** The number of times the button has been clicked. */
  @property({ type: Number, reflect: true })
  count?: number = 0;

  __objectA = undefined;


  @property()
  set objectA(v) {
    throw new Error('haaa')
    console.log('aaaaa, ', v)
    console.trace(v)
    this.__objectA = v;
  }

  get objectA() {
    return this.__objectA;
  }

  // Missing type
  @property({attribute: false}) objectB = undefined;

  // Proper way of defining an object prop
  @property({type: Object, attribute: false}) objectC = undefined;

  // Same as objectA
  @property({type: Object, attribute: true}) objectD?;

  // Did not report for function, but the results are similar
  @property({type: Object})
  funcA = undefined;

  @property({attribute: false})
  funcB = undefined;

  @property({type: Object, attribute: false})
  funcC = undefined;

  @property({type: Object, attribute: true})
  funcD = undefined;

  /**
   * @type {(n: number) => number}
   */
  @property({ attribute: false })
  someOptionalFunction  = (n) => 2*n;

  /**
   * @type {(n: number) => number}
   */
  @property({ attribute: false })
  funcWithDefault = (n) => 2*n;

  /** Adds a label to the component */
  @property()
  label? = "count is:";

  /** Adds a label to the component */
  @property()
  label2? = "count is:";

  /** Increments the `count`. */
  increment() {
    this.count!++;
    this.dispatchEvent(new CustomEvent("count", { bubbles: true }));
  }

  /** Decrements the `count`. */
  decrement() {
    this.count!--;
    this.dispatchEvent(new CustomEvent("count", { bubbles: true }));
  }

  private _onClick() {
    console.log('cvlik')
    this.count!++;
    this.dispatchEvent(new CustomEvent("count", { bubbles: true }));
  }

  render() {
    return html`
      <div class="card">
        <div>
                someOptionalFunction: ${typeof this.someOptionalFunction}<br/>
                funcWithDefault: ${typeof this.funcWithDefault}<br/>
            <table>
                <thead>
                <tr>
                    <th>var</th>
                    <th>typeof var</th>
                    <th>value</th>
                </tr>
                </thead>
                <tbody>
                ${this.log('objectA')}
                </tbody>
            </table>
            
          
        </div>
        <slot></slot>
        <div>
          <button @click=${this._onClick} part="button">
            ${this.label} ${this.count} 
            <slot name="button-content"></slot>
          </button>
        </div>
        <p class="read-the-docs" part="docs-hint">${this.docsHint}</p>
      </div>
    `;
  }

  log(k: string) {
    const v = this[k];
    return html`
        <tr>
        <td>${k}</td>
        <td>${typeof v}</td>
        <td>${v === null 
                ? 'null' 
                : v === undefined 
                        ? 'undefined' 
                        : typeof v == 'string' 
                                ? `"${v}"` 
                                : typeof v == 'object' ? JSON.stringify(v) : v}</td>
    </tr>`
  }
  static styles = css`
    :host {
      --card-border-color: #ccc;
      --card-border-size: 1px;
      --card-border-style: solid;
      --card-border-radius: 8px;

      display: block;
      max-width: 500px;
      margin: 0 auto;
      padding: 2rem;
      text-align: center;
    }

      table {
          width: 100%;
          border: 1px solid gray;
          border-collapse: collapse;
      }
      
      table td {
          border: 1px solid gray;
      }
    .logo {
      max-height: 6em;
      padding: 1.5em;
      will-change: filter;
      transition: filter 300ms;
      filter: drop-shadow(0 0 1em #000000aa);
    }
    .logo:hover {
      filter: drop-shadow(0 0 1.25em #090b25aa);
    }

    .card {
      padding: 2em;
      border: var(--card-border-color) var(--card-border-size)
        var(--card-border-style);
      border-radius: var(--card-border-radius);
    }

    .read-the-docs {
      color: #888;
    }

    h1 {
      font-size: 3.2em;
      line-height: 1.1;
    }

    a {
      font-weight: 500;
      color: #646cff;
      text-decoration: inherit;
    }
    a:hover {
      color: #535bf2;
    }
  `;
}

declare global {
  interface HTMLElementTagNameMap {
    "my-element2": MyElement2;
  }
}
