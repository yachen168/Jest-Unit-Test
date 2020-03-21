// 是否為整數
function isIntegers(inputNumber1, inputNumber2) {
    const integer = /^-?\d+$/;
    return (integer.test(inputNumber1) && integer.test(inputNumber2));
}

// 餘數是否相同
function isRemainderEqual(inputNumber1, inputNumber2) {
    return (+inputNumber1 % 3 === +inputNumber2 % 3) ? '餘數相同' : '餘數不同';
}

module.exports = { isIntegers, isRemainderEqual };