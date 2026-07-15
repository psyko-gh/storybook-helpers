import { LitElement, css, html } from "lit";
import { customElement, property } from "lit/decorators.js";

/**
 * An sample element.
 *
 * @tag my-element3
 */

@customElement("my-element3")
export class MyElement3 extends LitElement {
  // Missing attribute: false

  /**
   * @type {Object}
   */
  @property({attribute: false}) objectA = undefined;

  // __objectA = undefined;


  // /**
  //  *
  //  * @type {object} v
  //  */
  // @property({attribute: false})
  // set objectA(v) {
  //   console.log('typeof objectA, ', typeof v)
  //   console.trace(v)
  //   this.__objectA = v;
  // }
  //
  // get objectA() {
  //   return this.__objectA;
  // }
  //
  // Missing type
  /**
   * @type {object}
   */
  @property({attribute: false}) objectB = {test: 'b'};

  // Proper way of defining an object prop
  @property({type: Object, attribute: false}) objectC = undefined;

  // Same as objectA
  @property({type: Object, attribute: true}) objectD?;

  @property({type: Object})
  funcA = undefined;

  /**
   *
   * @type {Function}
   */
  @property({attribute: false})
  funcB = a => a +1;

  @property({attribute: false})
  funcC = undefined;

  @property({type: Object, attribute: true})
  funcD = undefined;

  render() {
    return html`
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
          ${this.log('objectB')}
          ${this.log('objectC')}
          ${this.log('objectD')}
          ${this.log('funcA')}
          ${this.log('funcB')}
          ${this.log('funcC')}
          ${this.log('funcD')}
          </tbody>
      </table>            
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
      table {
          width: 100%;
          border: 1px solid gray;
          border-collapse: collapse;
      }
      
      table td {
          border: 1px solid gray;
      }
    
  `;
}

declare global {
  interface HTMLElementTagNameMap {
    "my-element3": MyElement3;
  }
}
