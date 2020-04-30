// 過濾出結果
function getResult(array) {
    return array
        .map((value, index) => ({ index, value }))
        .filter(({ value }) => isPrimeNumber(value))
}
// 判斷一個數是否為質數
function isPrimeNumber(value) {
    for (let i = 2; i < +value; i++) {
        return !!(+value % i);
    }
}

module.exports = { getResult };