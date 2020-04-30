function getResultOfMerge(arr1, arr2) {
    const resultOfMerge = arr1.map((value, index) => value + arr2[index]);
    return resultOfMerge;
}

module.exports = getResultOfMerge;