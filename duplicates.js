const Samplearray = [-1, -2, 2, 2, 3, 3, 4, 4, 4, 5, 5, 8, 11, 11, 13];

//let randomArray = [];
function removeDuplicates(arr) {
  if (arr.length === 0) {
    return 0;
  }

  let k = 1;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] !== arr[i - 1]) {
      arr[k] = arr[i];
      k++;
    }
  }

  arr.length = k;
  return k;
}

console.log(removeDuplicates(Samplearray));
