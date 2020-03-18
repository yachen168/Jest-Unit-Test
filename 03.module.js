function getResult(inputAge) {
    const originPrice = 400;
    const discount = 0.5;
    const discountPrice = originPrice * discount;

    if (+inputAge > 6 && +inputAge < 65) {
        console.log(`一般票價： $${originPrice} 元`);
        return `一般票價 $${originPrice} 元`;

    } else {
        console.log(`優待票價： $${discountPrice} 元`);
        return `優待票價 $${discountPrice} 元`;
    }
}


module.exports = getResult;