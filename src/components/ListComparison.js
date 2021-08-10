/* eslint-disable no-console */
export default class ListComparison {
  constructor(videoList, navigatorList) {
    this.videoList = videoList.map((language) => language.id);
    this.navigatorList = navigatorList;
    this.findedLanguage = null;
    this.comparedLists();
  }

  comparedLists() {
    // eslint-disable-next-line arrow-body-style
    this.findedLanguage = this.navigatorList.find((language) => {
      return this.videoList.find((lang) => language === lang);
    });
    // let findedLanguage;
    // for (let i = 0; i < this.navigatorList.length; i += 1) {
    //   for (let x = 0; x < this.videoList.length; x += 1) {
    //     if (this.videoList[i] === this.navigatorList[x]) {
    //       findedLanguage = this.videoList[i];
    //       break;
    //     }
    //   }
    // }
  }
}
