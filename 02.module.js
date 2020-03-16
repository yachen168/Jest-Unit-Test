function getResult(inputNumber1, inputNumber2) {
    const remainder1 = Number(inputNumber1) % 3;
    const remainder2 = Number(inputNumber2) % 3;
    if (remainder1 === remainder2) {
        console.log(`餘數相同，皆為 ${remainder1}`);
        return true;
    } else {
        console.log(`餘數不同，第一個餘數為 ${remainder1}，第二個餘數為 ${remainder2}`);
        return false;
    }

}

module.exports = getResult;