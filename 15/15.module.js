// 隨機整數選取運動器材(遞迴)
function carryEquipments(quantityOfEquipments, weightOfEquipments, totalWeight) {
    const zeroOrOneOrTwo = Math.floor(Math.random() * 3);
    if (totalWeight + weightOfEquipments[zeroOrOneOrTwo] < 1000) {
        quantityOfEquipments[zeroOrOneOrTwo] += 1;
        totalWeight += weightOfEquipments[zeroOrOneOrTwo];
        return carryEquipments(quantityOfEquipments, weightOfEquipments, totalWeight);
    }
    return { quantityOfEquipments, weightOfEquipments, totalWeight };
}

module.exports = carryEquipments;