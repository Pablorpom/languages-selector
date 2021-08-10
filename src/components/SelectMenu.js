export default class SelectMenu {
  constructor(node, list) {
    this.node = node;
    this.list = list;
    this.selectNode = null;
    this.selectMenu();
    this.createOptions();
  }

  selectMenu() {
    this.node.innerHTML += `
      <select name="select" class="${SelectMenu.className}">
        <option value="off">Off</option>
      </select>
    `;
    this.selectNode = this.node.querySelector(`.${SelectMenu.className}`);
  }

  createOptions() {
    this.list.forEach((language) => {
      this.selectNode.innerHTML += `<option value="${language.id}">${language.label}</option>`;
    });
  }
}
SelectMenu.className = 'select-menu';
