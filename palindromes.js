const prepareString = (str) => str.toLowerCase().replace(/[^a-z]/g, "");

function reverseString(str) {
  return str.split("").reverse().join("");
}

const isPalindrome = (str) => {
  const sanitizedStr = prepareString(str);
  return sanitizedStr === reverseString(sanitizedStr);
};

const palindromes = (str) => {
  const sanitizedStr = prepareString(str);
  if (!isPalindrome(sanitizedStr)) {
    return [];
  }
  return [prepareString(str)];
};

// Attach helpers to the exported function for testing
palindromes.prepareString = prepareString;
palindromes.isPalindrome = isPalindrome;

module.exports = palindromes;
