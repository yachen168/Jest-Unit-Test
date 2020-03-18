// 正則表達式
function filtNumber(inputNumber) {
    const positiveInteger = /^\d+$/;
    const isNumberOfCustomer = positiveInteger.test(inputNumber);
    if (!isNumberOfCustomer) {
        return true;
    } else {
        return false;
    }
}


// 判斷是否播放電影
function getResult(inputNumber) {
    if (+inputNumber) {
        return true;
    } else {
        return false;
    }
}


module.exports = { filtNumber, getResult };