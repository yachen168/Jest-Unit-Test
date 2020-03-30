function getResultOfMerge() {
    const arr1 = [2, 3, 1, 7, 9];
    const arr2 = [8, 7, 9, 3, 1];
    const resultOfMerge = arr1.map((value, index) => value + arr2[index]);
    return resultOfMerge;
}

module.exports = getResultOfMerge;