import { LitElement, css, html } from 'lit';

const styles = css`
  :host {
    --image-width: 290px;

    display: grid;
    grid-template-columns: var(--image-width) 1fr;
    grid-template-rows: 1fr;
    background-color: var(--card-background-color);
  }
  h3 {
    font-size: var(--font-size-text);
    font-weight: 400;
    margin: 0;
  }
  p {
    font-size: var(--font-size-text);
    font-weight: 300;
    margin: 10px 0 0 0;
    padding: 10px;
  }
  a {
    text-decoration: none;
    text-transform: uppercase;
    font-size: 0.8rem;
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
    max-height: var(--image-width);
    padding: 0 20px;
  }
  .more {
    padding: 10px 0;
    text-align: center;
  }
  .title {
    font-size: var(--font-size-header);
    font-weight: 500;
    text-transform: uppercase;
    border-bottom: 2px solid var(--secondary-color);
    padding: 10px 0;
  }
  img {
    width: var(--image-width);
    height: var(--image-width);
  }
`;

const template = (el) => html`
  <div class="image">
    <img src="${el.screenshot}" />
  </div>
  <div class="main">
    <div>
      <div class="title">${el.name}</div>
      <div class="description">
        <p>${el.description}</p>
      </div>
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
