const { isPositiveInteger, getResultOfDivided } = require("./08.module");
// 測試採 3A 原則。
// 因在終端機輸入的值都是 string，所以皆以 string 做測試。
describe("JS08", () => {
  describe("使用者是否輸入正整數", () => {
    it("若輸入任何符號，則要求重新輸入，例如：(´・3・`)", () => {
      const inputNumber = "(´・3・`)";
      const result = isPositiveInteger(inputNumber);
      expect(result).toBeFalsy();
    });
    it("若輸入任何英文，則要求重新輸入，例如：7pupu", () => {
      const inputNumber = "7pupu";
      const result = isPositiveInteger(inputNumber);
      expect(result).toBeFalsy();
    });
    it("若輸入負數，則要求重新輸入，例如：-10", () => {
      const inputNumber = "-10";
      const result = isPositiveInteger(inputNumber);
      expect(result).toBeFalsy();
    });
    it("若輸入小數，則要求重新輸入，例如：1.68", () => {
      const inputNumber = "1.68";
      const result = isPositiveInteger(inputNumber);
      expect(result).toBeFalsy();
    });
    it("若輸入 0，則要求重新輸入", () => {
      const inputNumber = "1.68";
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
  describe("將正確格式的數字除以 3，並顯示結果", () => {
    it("若輸入 45，則顯示：需除以 1 次，此時為 15.00", () => {
      const inputNumber = "45";
      const timesOfDivide = 1;
      const result = getResultOfDivided(inputNumber, timesOfDivide);
      expect(result).toEqual({ timesOfDivide: 1, resultAfterDivided: "15" });
    });
    it("若輸入 100，則顯示：需除以 3 次，此時為 3.703703703703704", () => {
      const inputNumber = "100";
      const timesOfDivide = 1;
      const result = getResultOfDivided(inputNumber, timesOfDivide);
      expect(result).toEqual({
        timesOfDivide: 3,
        resultAfterDivided: "3.703703703703704",
      });
    });
  });
});
