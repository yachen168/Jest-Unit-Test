// 是否為大於 0 的整數
function isPositiveInteger(inputNumber) {
    const positiveInteger = /^[1-9]\d*$/;
    return positiveInteger.test(inputNumber);
}

function getResult(inputNumber) {
    let equation = "1";
    let sum = 1;
    for (let i = 2; i <= +inputNumber; i++) {
        const negativeNumber = -i;
        const positiveNumber = +i;
        if (i % 2) {
            equation = equation + "-" + i;
            sum = sum + negativeNumber;
        } else {
            equation = equation + "+" + i;
            sum = sum + positiveNumber;
        }
    }
    return { equation, sum };
}


module.exports = { isPositiveInteger, getResult };