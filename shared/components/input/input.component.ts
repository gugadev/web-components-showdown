import {
  LitElement, customElement, html, property
} from "lit-element"
import { Part } from "lit-html"
import { classMap } from "lit-html/directives/class-map"
import styles from './input.styles.pcss'

@customElement('one-input')
class Input extends LitElement {
  @property({ type: String }) type: string = 'text'
  @property({ type: Boolean }) disabled: boolean = false
  @property({ type: Boolean }) readonly: boolean = false
  @property({ type: Boolean }) required: boolean = false
  @property({ type: String }) placeholder: string = ''
  @property({ type: String }) value: string = ''
  @property({ type: Boolean }) focuz: boolean = false
  @property({ type: Boolean }) valid: boolean = false
  @property({ type: Boolean }) invalid: boolean = false

  private handleInput(e) {
    this.dispatchEvent(
      new CustomEvent('$input', {
        detail: {
          target: e.target,
          value: e.target.value
        }
      })
    )
  }

  render() {
    return html`
      <style>${styles}</style>
      <input
        class=${this.getClasses()}
        type=${this.type}
        ?disabled=${this.disabled}
        ?readonly=${this.readonly}
        ?required=${this.required}
        .value=${this.value}
        .placeholder=${this.placeholder}
        @input=${this.handleInput}
      />
    `
  }

  private getClasses(): (part: Part) => void {
    return classMap({
      focus: this.focuz,
      valid:  this.valid,
      invalid: this.invalid
    })
  }
}
