// 過濾出結果
function getResult() {
    const array = [3, 50, 0, 13, 2, 4, 11];
    const indexOfPrimeNumber = array.map((value, index) => {
        if (isPrimeNumber(value)) {
            return `質數：${value} (索引值為 ${index})`;
        }
    })
    return arrangeArray(indexOfPrimeNumber);
}

// 判斷一個數是否為質數
function isPrimeNumber(value) {
    for (let i = 2; i < +value; i++) {
        return !!(+value % i);
    }
}

// 整理陣列
function arrangeArray(indexOfPrimeNumber) {
    return indexOfPrimeNumber.filter(value => value).join(' , ');
}

module.exports = getResult;