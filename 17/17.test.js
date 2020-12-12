const calculate = require("./17.module");
// 測試採 3A 原則。
describe("JS17", () => {
  describe("是否正確計算出結果", () => {
    it("一號選手：253", () => {
      const arrTable = [
        ["candidate1", "candidate3", "candidate2", "candidate4"],
        ["candidate3", "candidate2", "candidate4", "candidate1"],
        ["candidate2", "candidate3", "candidate4", "candidate1"],
        ["candidate4", "candidate3", "candidate2", "candidate1"],
      ];
      const votes = [51, 5, 23, 21];
      const candidate = "candidate1";
      const result = calculate(arrTable, votes, candidate);
      expect(result).toBe(253);
    });
    it("二號選手：251", () => {
      const arrTable = [
        ["candidate1", "candidate3", "candidate2", "candidate4"],
        ["candidate3", "candidate2", "candidate4", "candidate1"],
        ["candidate2", "candidate3", "candidate4", "candidate1"],
        ["candidate4", "candidate3", "candidate2", "candidate1"],
      ];
      const votes = [51, 5, 23, 21];
      const candidate = "candidate2";
      const result = calculate(arrTable, votes, candidate);
      expect(result).toBe(251);
    });
    it("二號選手：251", () => {
      const arrTable = [
        ["candidate1", "candidate3", "candidate2", "candidate4"],
        ["candidate3", "candidate2", "candidate4", "candidate1"],
        ["candidate2", "candidate3", "candidate4", "candidate1"],
        ["candidate4", "candidate3", "candidate2", "candidate1"],
      ];
      const votes = [51, 5, 23, 21];
      const candidate = "candidate3";
      const result = calculate(arrTable, votes, candidate);
      expect(result).toBe(305);
    });
    it("二號選手：251", () => {
      const arrTable = [
        ["candidate1", "candidate3", "candidate2", "candidate4"],
        ["candidate3", "candidate2", "candidate4", "candidate1"],
        ["candidate2", "candidate3", "candidate4", "candidate1"],
        ["candidate4", "candidate3", "candidate2", "candidate1"],
      ];
      const votes = [51, 5, 23, 21];
      const candidate = "candidate4";
      const result = calculate(arrTable, votes, candidate);
      expect(result).toBe(191);
    });
  });
});
