// 隨機整數選取運動器材(遞迴)
function getRandomSport(sportQuantity, totalWeight) {
    const sporWeight = [30, 20, 50];
    const zeroOrOneOrTwo = Math.floor(Math.random() * 3);
    if (totalWeight + sporWeight[zeroOrOneOrTwo] < 1000) {
        sportQuantity[zeroOrOneOrTwo] += 1;
        totalWeight += sporWeight[zeroOrOneOrTwo];
        return getRandomSport(sportQuantity, totalWeight);
    }
    return `啞鈴數量：${sportQuantity[0]}、單槓數量：${sportQuantity[1]}、跑步機數量：${sportQuantity[2]}，總重量：${totalWeight}kg`;
}

module.exports = getRandomSport;