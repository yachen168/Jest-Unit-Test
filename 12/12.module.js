// 印出一陣列 10~20
function arrayNumsOfRange(minNum, maxNum) {
    const range = maxNum - minNum + 1;
    return Array(range).fill().map((value, index) => index + 10);
}

// 找出陣列裡的質數
function findPrimeNumber(arrNums) {
    return arrNums.filter(value => isPrimeNumber(value));
}

// 判斷一個數是否為質數
function isPrimeNumber(value) {
    let primeNumber = true;
    for (let i = 2; i < value; i++) {
        if (!(value % i)) {
            primeNumber = false;
        }
    }
    return primeNumber;
}

// 找出 100 以內倍數
function getMultiple(arrPrimes) {
    let multiple = [];
    arrPrimes.forEach(value => {
        for (let i = 1; i < 100; i++) {
            if (!(i % value)) {
                multiple.push(i);
            }
        }
    })
    return multiple;
}

module.exports = { findPrimeNumber, getMultiple, arrayNumsOfRange };