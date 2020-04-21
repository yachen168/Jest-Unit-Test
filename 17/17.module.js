function getResult() {
    const result1 = calculate('candidate1');
    const result2 = calculate('candidate2');
    const result3 = calculate('candidate3');
    const result4 = calculate('candidate4');
    return `一號選手：${result1}，二號選手：${result2}，三號選手：${result3}，四號選手：${result4}`;
}

function calculate(candidate) {
    const votes = [51, 5, 23, 21];
    const table = [
        ['candidate1', 'candidate3', 'candidate2', 'candidate4'],
        ['candidate3', 'candidate2', 'candidate4', 'candidate1'],
        ['candidate2', 'candidate3', 'candidate4', 'candidate1'],
        ['candidate4', 'candidate3', 'candidate2', 'candidate1']
    ];
    return table.map((value, index) => (4 - value.indexOf(candidate)) * votes[index])
        .reduce((accumulator, currentValue) => accumulator + currentValue);
}

module.exports = getResult;