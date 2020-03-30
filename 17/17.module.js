function getResult() {
    const votes = [51, 5, 23, 21];
    const table = [
        ['candidate1', 'candidate3', 'candidate2', 'candidate4'],
        ['candidate3', 'candidate2', 'candidate4', 'candidate1'],
        ['candidate2', 'candidate3', 'candidate4', 'candidate1'],
        ['candidate4', 'candidate3', 'candidate2', 'candidate1']
    ];
    // 四位候選人在各票數所得分數
    const gradeOfCandidate1 = table.map((value) => 4 - value.indexOf('candidate1'));
    const gradeOfCandidate2 = table.map((value) => 4 - value.indexOf('candidate2'));
    const gradeOfCandidate3 = table.map((value) => 4 - value.indexOf('candidate3'));
    const gradeOfCandidate4 = table.map((value) => 4 - value.indexOf('candidate4'));
    // 候選人的各種票數*各種票數所得分數
    const voteMultiplyGrade1 = votes.map((value, index) => value * gradeOfCandidate1[index]);
    const voteMultiplyGrade2 = votes.map((value, index) => value * gradeOfCandidate2[index]);
    const voteMultiplyGrade3 = votes.map((value, index) => value * gradeOfCandidate3[index]);
    const voteMultiplyGrade4 = votes.map((value, index) => value * gradeOfCandidate4[index]);
    // 累加
    const result1 = voteMultiplyGrade1.reduce((accumulator, currentValue) => accumulator + currentValue);
    const result2 = voteMultiplyGrade2.reduce((accumulator, currentValue) => accumulator + currentValue);
    const result3 = voteMultiplyGrade3.reduce((accumulator, currentValue) => accumulator + currentValue);
    const result4 = voteMultiplyGrade4.reduce((accumulator, currentValue) => accumulator + currentValue);
    return `一號選手：${result1}，二號選手：${result2}，三號選手：${result3}，四號選手：${result4}`;
}

module.exports = getResult;