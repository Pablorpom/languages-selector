export default class SelectMenu{
    constructor(node){
        this.node = node;
        this.module();
    }
    module(){
        this.node.innerHTML = `<select name="select" class="select-menu"></select>`;
    }
}
