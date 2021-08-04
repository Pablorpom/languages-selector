export default class OptionList{
    constructor(list){
        this.list = list;
        this.createOptions();
    }
    createOptions(){
        const labelList = this.list.map(language => {
            return language.label;
        })
    }
}