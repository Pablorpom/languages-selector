export default class Persist {
  constructor(node) {
    this.node = node;
    this.attachEvents();
    this.persistSelectedLanguage();
  }

  attachEvents() {
    this.node.addEventListener('change', () => this.onChange());
  }

  onChange() {
    localStorage.setItem('s', this.node.value);
  }

  persistSelectedLanguage() {
    if (localStorage.getItem('s')) {
      this.node.value = localStorage.getItem('s');
    }
  }
}
