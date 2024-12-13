const prepareString = (str) => str.toLowerCase().replace(/[^a-z]/g, "");

function reverseString(str) {
  return str.split("").reverse().join("");
}

const isPalindrome = (str) => {
  const sanitizedStr = prepareString(str);
  return sanitizedStr === reverseString(sanitizedStr);
};

module.exports = (str) => {
  const sanitizedStr = prepareString(str);
  if (!isPalindrome(sanitizedStr)) {
    return [];
  }
  return [prepareString(str)];
};
