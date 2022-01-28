import { LitElement, css, html } from 'lit';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';

const styles = css`
  :host {
    --image-width: 290px;
  }
  h3 {
    font-size: var(--font-size-text);
    font-weight: 400;
  }
  p {
    font-size: var(--font-size-text);
    font-weight: 300;
    margin: 10px 0 0 0;
  }
  a {
    text-decoration: none;
    text-transform: uppercase;
    font-size: var(--font-size-text);
    font-weight: 300;
    color: var(--primary-color);
  }
  a:hover {
    color: var(--nav-hover-color);
  }
  .main {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 10px 20px;
  }
  .more {
    padding: 10px 0;
    text-align: center;
  }
  .title {
    font-size: 1.5rem;
    font-weight: 500;
    text-transform: uppercase;
    padding: 10px 0;
  }
  img {
    width: var(--image-width);
    height: var(--image-width);
    border-radius: 20px;
    margin-top: 20px;
  }
`;

const template = (el) => html`
  <div class="main">
    <div>
      <div class="title">${el.name}</div>
      <div class="description">
        <p>${unsafeHTML(el.description)}</p>
      </div>
    </div>
    <div class="image">
      <img src="${el.screenshot}" />
    </div>
    <div>
      <h3>TECH</h3>
      <slot name="tech"></slot>
    </div>
    ${el.page !== ''
      ? html`
          <div class="more">
            <a href="${el.page}">More info ...</a>
          </div>
        `
      : ''}
  </div>
`;

export class DevProjectElement extends LitElement {
  static styles = styles;

  static get properties() {
    return {
      name: { type: String },
      page: { type: String },
      description: { type: String },
      github: { type: String },
      screenshot: { type: String },
    };
  }

  constructor() {
    super();
    this.size = 'medium';
    this.description = '';
    this.github = '';
  }

  render() {
    return template(this);
  }
}

customElements.define('dev-project', DevProjectElement);
