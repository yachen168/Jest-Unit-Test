function getResult() {
    const weightOfEquipments = [30, 20, 50];
    let quantityOfEquipments = [0, 0, 0];
    let totalWeight = 0;
    // 隨機整數選取運動器材(遞迴)
    function carryEquipments() {
        const zeroOrOneOrTwo = Math.floor(Math.random() * 3);
        if (totalWeight + weightOfEquipments[zeroOrOneOrTwo] < 1000) {
            quantityOfEquipments[zeroOrOneOrTwo] += 1;
            totalWeight += weightOfEquipments[zeroOrOneOrTwo];
            return carryEquipments(quantityOfEquipments, totalWeight);
        }
        return { quantityOfEquipments, totalWeight };
    }
    return carryEquipments();
}

module.exports = getResult;