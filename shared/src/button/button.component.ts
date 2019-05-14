import { LitElement, html } from 'lit-element'
import styles from './button.styles.scss'

export class Button extends LitElement {
  render() {
    return html`
      <style>${styles}</style>
      <button>
        <slot></slot>
      </button>
    `
  }
}
