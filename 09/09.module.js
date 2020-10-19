function getResultOfMerge(arr1, arr2) {
  return arr1.map((value, index) => value + arr2[index]);
}

module.exports = getResultOfMerge;
