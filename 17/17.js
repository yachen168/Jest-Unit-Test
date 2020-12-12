const rl = require('../readline.module');
const calculate = require('./17.module');

const votes = [51, 5, 23, 21];
const arrTable = [
  ["candidate1", "candidate3", "candidate2", "candidate4"],
  ["candidate3", "candidate2", "candidate4", "candidate1"],
  ["candidate2", "candidate3", "candidate4", "candidate1"],
  ["candidate4", "candidate3", "candidate2", "candidate1"],
];

console.log(`一號選手：${calculate(arrTable, votes, 'candidate1')}，二號選手：${calculate(arrTable, votes, 'candidate2')}，三號選手：${calculate(arrTable, votes, 'candidate3')}，四號選手：${calculate(arrTable, votes, 'candidate4')}`);
rl.close();