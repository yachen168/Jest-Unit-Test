// 12. 找出10~20的質數，並列出前述各質數在1~100的倍數
const rl = require('../readline.module');
const { findPrimeNumber, getMultiple, arrayNumsOfRange } = require('./12.module');

function getResult() {
    const rangeOfNumbers = arrayNumsOfRange(10, 20);
    const arrPrimes = findPrimeNumber(rangeOfNumbers)
    console.log(arrPrimes);
    console.log(getMultiple(arrPrimes));
}

getResult();
rl.close();