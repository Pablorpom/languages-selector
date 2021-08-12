/* eslint-disable arrow-body-style */

const compareLists = (list1, list2) => {
  const findResult = list2.find((list2Item) => {
    return list1.find((list1Item) => list2Item === list1Item);
  });
  // let findResult;
  // for (let i = 0; i < this.list2.length; i += 1) {
  //   for (let x = 0; x < this.list1.length; x += 1) {
  //     if (this.list1[i] === this.list2[x]) {
  //       findResult = this.list1[i];
  //       break;
  //     }
  //   }
  // }
  return findResult;
};

export default compareLists;
