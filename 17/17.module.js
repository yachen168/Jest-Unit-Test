function calculate(arrTable, votes, candidate) {
  return arrTable
    .map((value, index) => (4 - value.indexOf(candidate)) * votes[index])
    .reduce((accumulator, currentValue) => accumulator + currentValue, 0);
}

module.exports = calculate;
