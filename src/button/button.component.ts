import { LitElement, html } from 'lit-element'

export class Button extends LitElement {
  render() {
    return html`
      <button>
        <slot></slot>
      </button>
    `
  }
}
