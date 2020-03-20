// 過濾出大於等於零的整數
function isPositiveInteger(inputNumber) {
    const positiveInteger = /^\d+$/;
    return positiveInteger.test(inputNumber);
}

// 是否播放電影
function isPlayMovie(inputNumber) {
    return +inputNumber;
}

module.exports = { isPositiveInteger, isPlayMovie };