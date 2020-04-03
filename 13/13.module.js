function getRestTime() {
    const costTime_Turtle = 1000 / 0.28;
    const costTime_Rabbit = 1000 / (20 - 1 / 5);
    const restTime = Math.floor(costTime_Turtle - costTime_Rabbit);
    return `兔子還可休息 ${restTime} 秒(取整數)`;
}

module.exports = getRestTime;