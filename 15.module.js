// 隨機整數選取運動器材(遞迴)
function getRandomSport(sportNumber, total) {
    const sporWeight = [30, 20, 50];
    const zeroOrOneOrTwo = Math.floor(Math.random() * 3);
    if (total + sporWeight[zeroOrOneOrTwo] < 1000) {
        sportNumber[zeroOrOneOrTwo] += 1;
        total += sporWeight[zeroOrOneOrTwo];
        return getRandomSport(sportNumber, total);
    }
    return `啞鈴數量：${sportNumber[0]}、單槓數量：${sportNumber[1]}、跑步機數量：${sportNumber[2]}，總重量：${total}kg`;
}

module.exports = getRandomSport;