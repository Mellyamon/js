const Samplearray = [1, 5, 2, 4, 5, 3, 4, 8];
function checkIndexOfNegativeNumber(arrNums) {
  for (let index = 0; index < arrNums.length; index++) {
    if (arrNums[index] < 0) {
      return index;
    }
  }
  return -1;
}
checkIndexOfNegativeNumber(Samplearray);
console.log(checkIndexOfNegativeNumber(Samplearray));
