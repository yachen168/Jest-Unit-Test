function getResultOfMerge() {
    const arr1 = [2, 3, 1, 7, 9];
    const arr2 = [8, 7, 9, 3, 1];
    let resultOfMerge = [];
    arr1.forEach((value, index) => resultOfMerge[index] = arr1[index] + arr2[index]);
    return resultOfMerge;
}

module.exports = getResultOfMerge;