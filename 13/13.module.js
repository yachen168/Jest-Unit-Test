function getRestTime() {
    const distance = 1000;
    const speedPerSecond_Turtle = 0.28;
    const speedPerSecond_Rabbit = 20 - 1 / 5;
    const costTime_Turtle = distance / speedPerSecond_Turtle;
    const costTime_Rabbit = distance / speedPerSecond_Rabbit;
    const restTime = Math.floor(costTime_Turtle - costTime_Rabbit);
    return restTime;
}

module.exports = getRestTime;