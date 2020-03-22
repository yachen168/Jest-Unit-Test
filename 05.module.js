// 是否為大於等於 4 的偶數
function isEvenInt_AtLeastFour(n) {
    const evenInt_AtLeastFour = /^[468]$|^[1-9][02468]+$/;
    return evenInt_AtLeastFour.test(n);
}

// 遞迴
function getRecursive(n) {
    n = +n;
    if (n > 4) {
        return getRecursive(n - 2) + (n - 2) * n;
    }
    return 2 * 4;
}

module.exports = { isEvenInt_AtLeastFour, getRecursive };