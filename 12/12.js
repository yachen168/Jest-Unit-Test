// 12. 找出10~20的質數，並列出前述各質數在1~100的倍數
const rl = require('../readline.module');
const { findPrimeNumber, getMultiple } = require('./12.module');

console.log(findPrimeNumber());
console.log(getMultiple());
rl.close();