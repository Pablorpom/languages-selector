/* eslint-disable no-console */
/* eslint-disable no-param-reassign */
/* eslint-disable no-cond-assign */
export default class ListComparison {
  constructor(node, videoList, navigatorList) {
    this.node = node;
    this.videoList = videoList.map((language) => language.id);
    this.navigatorList = navigatorList;
    this.comparedLists();
    this.showSelected();
  }

  showSelected() {
    console.log(this.node.value);
  }

  comparedLists() {
    this.videoList.forEach((Language, index = 0) => {
      if (Language === this.navigatorList[index]) {
        this.node.value = Language;
      } else if (Language === this.navigatorList[index += 1]) {
        this.node.value = Language;
      }
      index += 1;
    });
  }
}
