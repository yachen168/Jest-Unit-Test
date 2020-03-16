function getResult(inputNumber) {
    if (Number(inputNumber)) {
        console.log(`人數 ${inputNumber} 人，照常播放電影`);
        return true;
    } else {
        console.log(`人數 ${inputNumber}，不播放電影`);
        return false;
    }
}


module.exports = getResult;