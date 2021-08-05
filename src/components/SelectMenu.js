export default class SelectMenu {
  constructor(node) {
    this.node = node;
    this.SelectMenu();
  }

  SelectMenu() {
    this.node.innerHTML = `
    <select name="select" class="select-menu">
    <option value="off">Off</option>
    </select>
    `;
  }
}
