function getResult() {
    let sportQuantity = [0, 0, 0];
    let totalWeight = 0;
    // 隨機整數選取運動器材(遞迴)
    function carryEquipment() {
        const sportWeight = [30, 20, 50];
        const zeroOrOneOrTwo = Math.floor(Math.random() * 3);
        if (totalWeight + sportWeight[zeroOrOneOrTwo] < 1000) {
            sportQuantity[zeroOrOneOrTwo] += 1;
            totalWeight += sportWeight[zeroOrOneOrTwo];
            return carryEquipment(sportQuantity, totalWeight);
        }
        return `啞鈴數量：${sportQuantity[0]}、單槓數量：${sportQuantity[1]}、跑步機數量：${sportQuantity[2]}，總重量：${totalWeight}kg`;
    }
    return carryEquipment();
}

module.exports = getResult;