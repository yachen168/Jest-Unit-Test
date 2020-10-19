const { isPositiveInteger, getResult } = require("./04.module");
// 測試採 3A 原則。
// 因在終端機輸入的值都是 string，所以皆以 string 做測試。
describe("JS04", () => {
  describe("使用者是否輸入大於 0 的整數", () => {
    it("若輸入含任何符號，要求重新輸入，例如：(´・ω・`)", () => {
      const inputNumber = "(´・ω・`)";
      const result = isPositiveInteger(inputNumber);
      expect(result).toBeFalsy();
    });
    it("若輸入含任何英文，要求重新輸入，例如：7pupu", () => {
      const inputNumber = "7pupu";
      const result = isPositiveInteger(inputNumber);
      expect(result).toBeFalsy();
    });
    it("若輸入負數，要求重新輸入，例如：-10", () => {
      const inputNumber = "-10";
      const result = isPositiveInteger(inputNumber);
      expect(result).toBeFalsy();
    });
    it("若輸入小數，要求重新輸入，例如：1.68", () => {
      const inputNumber = "1.68";
      const result = isPositiveInteger(inputNumber);
      expect(result).toBeFalsy();
    });
    it("若輸入 0，要求重新輸入", () => {
      const inputNumber = "0";
      const result = isPositiveInteger(inputNumber);
      expect(result).toBeFalsy();
    });
    it("若輸入空值，要求重新輸入", () => {
      const inputNumber = "";
      const result = isPositiveInteger(inputNumber);
      expect(result).toBeFalsy();
    });
    it("若輸入有效數字，將字串轉為數字，例如：18", () => {
      const inputNumber = "18";
      const result = isPositiveInteger(inputNumber);
      expect(result).toBeTruthy();
    });
  });
  describe("顯示 1+2-3....n 與總和", () => {
    it("若 n = 8，顯示 1 + 2 - 3 + 4 - 5 + 6 - 7 + 8 = 6", () => {
      const inputNumber = "8";
      const result = getResult(inputNumber);
      expect(result).toEqual({
        equation: "1 + 2 - 3 + 4 - 5 + 6 - 7 + 8",
        total: 6,
      });
    });
    it("若 n = 5，顯示 1 + 2 - 3 + 4 - 5 = -1", () => {
      const inputNumber = "5";
      const result = getResult(inputNumber);
      expect(result).toEqual({ equation: "1 + 2 - 3 + 4 - 5", total: -1 });
    });
    it("若 n = 1，顯示 1 = 1", () => {
      const inputNumber = "1";
      const result = getResult(inputNumber);
      expect(result).toEqual({ equation: "1", total: 1 });
    });
  });
});
