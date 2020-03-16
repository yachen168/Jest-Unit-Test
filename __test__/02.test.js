const getResult = require('../02.module');

describe('兩整數分別除以 3，看餘數是否相同', () => {

    it('餘數相同：第一個數為 6，第二個數為 9，除以 3 的餘數皆為 0', function() {
        const number1 = 6;
        const number2 = 9;
        expect(getResult(number1, number2)).toBeTruthy();
    })
    it('餘數不同：第一個數為 8，第二個數為 4，除以 3 的餘數分別為 2 與 1', function() {
        const number1 = 8;
        const number2 = 4;
        expect(getResult(number1, number2)).toBeFalsy();
    })

    // it('不播放電影: 人數為 0', function() {
    //     const number2 = 0;
    //     const remainder2 = number2 / 3;
    //     expect(getResult(number2)).toBeFalsy();
    // })

});