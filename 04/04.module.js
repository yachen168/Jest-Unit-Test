// 是否為大於 0 的整數
function isPositiveInteger(inputNumber) {
    const positiveInteger = /^[1-9]\d*$/;
    return positiveInteger.test(inputNumber);
}
// return 結果
function getResult(inputNumber) {
    let equation = "1";
    for (let i = 2; i <= +inputNumber; i++) {
        if (i % 2) {
            equation += `-${i}`;
        } else {
            equation += `+${i}`;
        }
    }
    return `總合：${equation} = ${eval(equation)}`;
}

module.exports = { isPositiveInteger, getResult };