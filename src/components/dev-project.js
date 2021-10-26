import { LitElement, css, html } from 'lit';

import './dev-github';

const styles = css`
  :host {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 0 20px 0 20px;
    border: 2px dotted var(--secondary-color);
    min-height: 385px;
  }
  :host(:hover) {
    border: 2px solid var(--secondary-color);
  }
  div:first-of-type {
    display: flex;
    align-items: flex-end;
    padding-top: 20px;
    max-height: 60px;
    font-size: var(--font-size-header);
    font-weight: 500;
    text-transform: uppercase;
    border-bottom: 2px solid var(--secondary-color);
  }
  div:nth-of-type(3) {
    text-align: center;
  }
  h3 {
    font-size: var(--font-size-text);
    font-weight: 400;
  }
  p {
    font-size: var(--font-size-text);
    font-weight: 300;
  }
  .tech {
    min-height: 142px;
  }
  a {
    text-decoration: none;
    font-size: 0.8rem;
    color: var(--nav-hover-color);
  }
  img {
    width: 50%;
    height: 100px;
  }
  .more {
    text-align: center;
    width: 100%;
    padding: 10px;
    margin: 0;
  }
`;

const template = (el) => html`
  <div>${el.name}</div>
  <div>
    <p>${el.description}</p>
  </div>
  <div>
    <img src="${el.screenshot}" />
  </div>
  <div class="tech">
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
