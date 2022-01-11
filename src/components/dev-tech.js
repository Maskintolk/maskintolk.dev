import { LitElement, css, html } from 'lit';

const styles = css`
  :host,
  a {
    --font-size: var(--font-size-header);
    --image-width: 33px;
    --image-height: 33px;

    display: inline-flex;
    flex-direction: row;
    align-items: center;
    text-decoration: none;
    color: var(--primary-color);
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
    margin-right: 10px;
  }
  img {
    width: var(--image-width);
    height: var(--image-height);
    filter: grayscale(100%);
  }
  h2 {
    font-size: var(--font-size);
    font-weight: 200;
    margin: 10px 0;
  }
  a:hover {
    color: var(--nav-hover-color);
  }
`;

const template = (el) => html`
  <div><img src="${el.icon}" /></div>
  <h2>${el.name}</h2>
`;
const linkTemplate = (el) =>
  html` <a href="${el.link}" target="_blank"> ${template(el)} </a> `;

export class DevTechElement extends LitElement {
  static styles = styles;

  static get properties() {
    return {
      name: { type: String },
      icon: { type: String },
      link: { type: String },
      size: { type: String, reflect: true },
    };
  }

  constructor() {
    super();
    this.size = 'medium';
  }

  render() {
    return this.link ? linkTemplate(this) : template(this);
  }
}

customElements.define('dev-tech', DevTechElement);
