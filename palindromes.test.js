const palindromes = require("./palindromes");
const { prepareString, isPalindrome } = palindromes;

describe("palindromes()", () => {
  it("correctly identifies one-word palindromes", () => {
    expect(palindromes("madam")).toEqual(["madam"]);
    expect(palindromes("racecar")).toEqual(["racecar"]);
  });
  it("returns an empty array when given no palindromes", () => {
    expect(palindromes("tic tac toe")).toEqual([]);
  });

  it("ignores casing", () => {
    expect(palindromes("WoW")).toEqual(["wow"]);
  });

  it("ignores punctuation", () => {
    expect(palindromes("yo, banana boy!")).toEqual(["yobananaboy"]);
  });

  it("detects multi-word palindromes", () => {
    expect(palindromes("A man, a plan, a canal, Panama")).toEqual([
      "amanaplanacanalpanama",
    ]);
  });
});

describe("prepareString()", () => {
  it("converts the given string to lowercase", () => {
    expect(prepareString("aAaA")).toBe("aaaa");
  });

  it("removes all non-letter characters", () => {
    expect(prepareString("To infinity, and beyond!")).toBe(
      "toinfinityandbeyond",
    );
  });
});

describe("isPalindrome()", () => {
  it("returns true when given a palindrome", () => {
    expect(isPalindrome("aba")).toBe(true);
    expect(isPalindrome("abba")).toBe(true);
  });

  it("returns false when given a non-palindrome", () => {
    expect(isPalindrome("abb")).toBe(false);
    expect(isPalindrome("aaba")).toBe(false);
  });
});
