const rl = require('../readline.module');
const calculate = require('./17.module');

console.log(`一號選手：${calculate('candidate1')}，二號選手：${calculate('candidate2')}，三號選手：${calculate('candidate3')}，四號選手：${calculate('candidate4')}`);
rl.close();