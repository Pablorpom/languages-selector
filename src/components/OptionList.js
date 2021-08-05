export default class OptionList {
  constructor(node, list) {
    this.node = node;
    this.list = list;
    this.createOptions();
  }

  createOptions() {
    this.list.forEach((language) => {
      this.node.innerHTML += `<option value="${language.id}">${language.label}</option>`;
    });
  }
}
