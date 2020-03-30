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
    const result1 = votes.map((value, index) => value * gradeOfCandidate1[index]);
    const result2 = votes.map((value, index) => value * gradeOfCandidate2[index]);
    const result3 = votes.map((value, index) => value * gradeOfCandidate3[index]);
    const result4 = votes.map((value, index) => value * gradeOfCandidate4[index]);
    // 將結果相加
    const accumulator1 = result1.reduce((accumulator, currentValue) => accumulator + currentValue);
    const accumulator2 = result2.reduce((accumulator, currentValue) => accumulator + currentValue);
    const accumulator3 = result3.reduce((accumulator, currentValue) => accumulator + currentValue);
    const accumulator4 = result4.reduce((accumulator, currentValue) => accumulator + currentValue);
    return `一號選手：${accumulator1}，二號選手：${accumulator2}，三號選手：${accumulator3}，四號選手：${accumulator4}`;
}

module.exports = getResult;