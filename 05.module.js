// 是否為大於等於 4 的偶數
function isEven_AtLeastFour(n) {
    const Integer_AtLeastFour = /^[468]$|^[1-9][02468]+$/;
    return Integer_AtLeastFour.test(n);
}

// 遞迴
function getRecursive(n) {
    n = +n;
    if (n === 4) {
        return (n - 2) * n;
    }
    return getRecursive(n - 2) + (n - 2) * n;
}

module.exports = { isEven_AtLeastFour, getRecursive };