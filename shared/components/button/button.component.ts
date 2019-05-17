import { LitElement, html, property, customElement } from 'lit-element'
import { classMap } from 'lit-html/directives/class-map'
import { Part } from 'lit-html'
import styles from './button.styles.pcss'

@customElement('one-button')
export class Button extends LitElement {
  @property() kind: string = ''

  render() {
    return html`
      <style>${styles}</style>
      <button class=${this.getClass()}>
        <slot></slot>
      </button>
    `
  }

  private getClass(): (part: Part) => void {
    const classes = {
      [this.kind]: true
    }
    return classMap(classes)
  }
}
