// 判斷是否為大於等於 0 的整數
function isInteger(inputAge) {
    const positiveInteger = /^\d+$/;
    const isPositiveInteger = positiveInteger.test(inputAge);
    return isPositiveInteger;
}

// 判斷年齡
function isOriginPrice(inputAge) {
    return (+inputAge > 6 && +inputAge < 65);
}


module.exports = { isInteger, isOriginPrice };