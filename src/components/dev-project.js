import { LitElement, css, html } from 'lit';

const styles = css`
  :host {
    --width: 290px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 385px;
    background-color: var(--card-background-color);
  }
  .title {
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
    margin-top: 30px;
    min-height: 122px;
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
  img {
    width: var(--width);
    height: var(--width);
  }
  .more {
    text-align: center;
    padding: 10px;
  }
  .main {
    padding: 0 20px;
  }
`;

const template = (el) => html`
  <div>
    <img src="${el.screenshot}" />
  </div>
  <div class="main">
    <div class="title">${el.name}</div>
    <div>
      <p>${el.description}</p>
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
