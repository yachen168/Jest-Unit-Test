const { isLetters, toCaesarCipher } = require("./16.module");
// 測試採 3A 原則。
describe("JS16", () => {
  describe("使用者是否正確輸入五個英文字母", () => {
    it("若輸入任何符號，要求重新輸入，例如：!ABCD", () => {
      const letters = "!ABCD";
      const result = isLetters(letters);
      expect(result).toBeFalsy();
    });
    it("若輸入任何數字，要求重新輸入，例如：ABCD4", () => {
      const letters = "ABCD4";
      const result = isLetters(letters);
      expect(result).toBeFalsy();
    });
    it("若輸入任何中文，要求重新輸入，例如：哇ABCD", () => {
      const letters = "哇ABCD";
      const result = isLetters(letters);
      expect(result).toBeFalsy();
    });
    it("若輸入任何空值，要求重新輸入，例如：AB CD", () => {
      const letters = "AB CD";
      const result = isLetters(letters);
      expect(result).toBeFalsy();
    });
    it("若輸入格式正確，則開始執行加密", () => {
      const letters = "ABCDE";
      const result = isLetters(letters);
      expect(result).toBeTruthy();
    });
  });
  describe("是否正確加密", () => {
    it("若輸入 ABCDE，回傳 DEFGH", () => {
      const letters = "ABCDE";
      const result = toCaesarCipher(letters);
      expect(result).toMatch("DEFGH");
    });
    it("若輸入 abcde，回傳 defgh", () => {
      const letters = "abcde";
      const result = toCaesarCipher(letters);
      expect(result).toMatch("defgh");
    });
    it("若輸入 xyzab，回傳 abcde", () => {
      const letters = "xyzab";
      const result = toCaesarCipher(letters);
      expect(result).toMatch("abcde");
    });
    it("若輸入 Hello，回傳 Khoor", () => {
      const letters = "Hello";
      const result = toCaesarCipher(letters);
      expect(result).toMatch("Khoor");
    });
  });
});
