// Most of the code for this custom element was lifted from the following article:
// https://dev.to/ananyaneogi/create-a-dark-light-mode-switch-with-css-variables-34l8

import { LitElement, html, css } from 'lit';

export const tagName = 'theme-switcher';

const styles = css`
  :host {
    display: flex;
    align-items: center;

    em {
      margin-left: 10px;
      font-size: 1rem;
    }
  }
  .theme-switch {
    display: inline-block;
    height: 34px;
    position: relative;
    width: 60px;
  }

  .theme-switch input {
    display: none;
  }

  .slider {
    background-color: #ccc;
    bottom: 0;
    cursor: pointer;
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
    transition: 0.4s;
  }

  .slider:before {
    background-color: #fff;
    bottom: 2px;
    content: '';
    height: 26px;
    left: 4px;
    position: absolute;
    transition: 0.4s;
    width: 26px;
  }

  input:checked + .slider {
    background-color: #66bb6a;
  }

  input:checked + .slider:before {
    transform: translateX(26px);
  }

  .slider.round {
    border-radius: 34px;
  }

  .slider.round:before {
    border-radius: 50%;
  }

  div {
    font-size: 0.8rem;
    color: var(--sidebar-secondary-color);
    margin-top: 5px;
  }
`;

class ThemeSwitcher extends LitElement {
  constructor() {
    super();
    this.label = 'Enable dark mode';
  }

  static get styles() {
    return styles;
  }

  toggleTheme(e) {
    const theme = e.target.checked ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    this.toggleLabel(e.target.checked);
  }

  toggleLabel(isDarkMode) {
    this.label = isDarkMode ? 'Disable dark mode' : 'Enable dark mode';
  }

  firstUpdated() {
    const currentTheme = localStorage.getItem('theme')
      ? localStorage.getItem('theme')
      : null;

    if (currentTheme === 'dark') {
      document.documentElement.setAttribute('data-theme', currentTheme);
      const toggleSwitch = this.shadowRoot.querySelector('#checkbox');
      toggleSwitch.checked = true;
      this.toggleLabel(true);
    }
  }

  render() {
    return html`<div>
      <label class="theme-switch" for="checkbox">
        <input @click="${this.toggleTheme}" type="checkbox" id="checkbox" />
        <div class="slider round"></div>
      </label>
      <div>${this.label}</div>
    </div>`;
  }
}

ThemeSwitcher.properties = {
  label: {
    type: String,
  },
};

customElements.define(tagName, ThemeSwitcher);
