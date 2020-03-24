function getResult() {
    const costOfTime_Turtle = 1000 / 0.28;
    const costOfTime_Rabbit = 1000 / (20 - 1 / 5);
    const result = Math.floor(costOfTime_Turtle - costOfTime_Rabbit);
    return `兔子還可休息 ${result} 秒(取整數)`;
}

module.exports = getResult;