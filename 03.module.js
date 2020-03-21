// 是否為大於等於 0 的整數
function isPositiveInteger(inputAge) {
    const positiveInteger = /^\d+$/;
    return positiveInteger.test(inputAge);
}

// 判斷年齡
function isOriginPrice(inputAge) {
    return (+inputAge > 6 && +inputAge < 65) ? '400 元' : '200 元';
}


module.exports = { isPositiveInteger, isOriginPrice };