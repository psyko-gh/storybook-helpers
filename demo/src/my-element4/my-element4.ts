import { LitElement, css, html } from "lit";
import { customElement, property } from "lit/decorators.js";

/**
 * An sample element.
 *
 * @tag my-element4
 */

@customElement("my-element4")
export class MyElement4 extends LitElement {
  // Missing attribute: false


  @property({attribute: false}) objectNoAttribute = undefined;

  @property({attribute: false}) objectNoAttributeDefault = {test: 'test-value'};

  @property({type: Object, attribute: 'object-with-attribute'}) objectWithAttribute = undefined;

  @property({type: Object, attribute: 'object-with-attribute'}) objectWithAttributeDefault = {test: 'test-value'};

  @property({attribute: false}) functionNoAttribute = undefined;

  @property({attribute: false}) functionNoAttributeDefault = i => i + 2;

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
          ${this.log('objectNoAttribute')}
          ${this.log('objectNoAttributeDefault')}
          ${this.log('objectWithAttribute')}
          ${this.log('objectWithAttributeDefault')}
          ${this.log('functionNoAttribute')}
          ${this.log('functionNoAttributeDefault')}
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
          width: 33%;
          border: 1px solid gray;
      }
    
  `;
}

declare global {
  interface HTMLElementTagNameMap {
    "my-element4": MyElement4;
  }
}
