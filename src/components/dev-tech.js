import { LitElement, css, html } from 'lit';

const styles = css`
  :host {
    --font-size: var(--font-size-header);
    --image-width: 33px;
    --image-height: 33px;

    display: flex;
    flex-direction: row;
    align-items: flex-start;
  }
  :host([size='large']) {
    --font-size: var(--font-size-title);
    --image-width: calc(33px * 2);
    --image-height: calc(33px * 2);
  }
  :host([size='medium']) {
    --font-size: var(--font-size-header);
    --image-width: 33px;
    --image-height: 33px;
  }
  :host([size='small']) {
    --font-size: var(--font-size-text);
    --image-width: calc(33px * 0.8);
    --image-height: calc(33px * 0.8);
  }
  div {
    margin: 0 20px;
  }
  img {
    width: var(--image-width);
    height: var(--image-height);
  }
  h2 {
    font-size: var(--font-size);
    font-weight: 200;
    margin: 10px 0;
  }
`;

const template = (el) => html`
  <div><img src="${el.icon}" /></div>
  <h2>${el.name}</h2>
`;

export class DevTechElement extends LitElement {
  static styles = styles;

  static get properties() {
    return {
      name: { type: String },
      icon: { type: String },
      size: { type: String, reflect: true },
    };
  }

  constructor() {
    super();
    this.size = 'medium';
  }

  render() {
    return template(this);
  }
}

customElements.define('dev-tech', DevTechElement);
