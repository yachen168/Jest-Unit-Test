// 印出一陣列 1~20
function printArray_tenToTwenty() {
    let array_tenToTwenty = []
    for (let i = 10; i < 21; i++) {
        array_tenToTwenty.push(i);
    }
    return array_tenToTwenty;
}

// 找出陣列裡的質數
function findPrimeNumber() {
    const primeNumber = printArray_tenToTwenty().filter(value => isPrimeNumber(value));
    return primeNumber;
}

// 判斷一個數是否為質數
function isPrimeNumber(value) {
    for (let i = 2; i < +value; i++) {
        return !!(+value % i);
    }
}

// 找出 100 以內倍數
function getMultiple() {
    let multiple = [];
    findPrimeNumber().forEach(element => {
        for (let i = 1; i < 100; i++) {
            if (i % element === 0) {
                multiple.push(i);
            }
        }
    })
    return multiple;
}


module.exports = { findPrimeNumber, getMultiple };