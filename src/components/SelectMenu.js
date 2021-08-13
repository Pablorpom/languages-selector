export default class SelectMenu {
  constructor(node, list, onChange) {
    this.node = node;
    this.list = list;
    this.onChange = onChange;
    this.selectNode = null;
    this.buildNode();
    this.attachEventsToNode();
    this.createOptions();
  }

  buildNode() {
    this.node.innerHTML += `
      <select name="select" class="${SelectMenu.className}">
        <option value="off">Off</option>
      </select>
    `;
    this.selectNode = this.node.querySelector(`.${SelectMenu.className}`);
  }

  attachEventsToNode() {
    this.selectNode.addEventListener('change', () => {
      this.onChange(this.selectNode.value);
    });
  }

  createOptions() {
    this.list.forEach((language) => {
      this.selectNode.innerHTML += `<option value="${language.id}">${language.label}</option>`;
    });
  }

  selectoption(value) {
    if (value) {
      this.selectNode.value = value;
    }
  }
}
SelectMenu.className = 'select-menu';
