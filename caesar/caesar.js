const caesar = function (phrase, shift) {
  let char;
  let newPhrase = "";
  let actualShift = shift % 26;
  let shifted;

  for (let i = 0; i < phrase.length; i++) {
    char = phrase[i];

    if (isUpper(char)) {
      // shift, then check boundaries
      shifted = checkBoundaries(char.charCodeAt(0) - 65 + actualShift);
      newPhrase += String.fromCharCode(shifted + 65);
    } else if (isLower(char)) {
      shifted = checkBoundaries(char.charCodeAt(0) - 97 + actualShift);
      newPhrase += String.fromCharCode(shifted + 97);
    } else {
      newPhrase += char;
    }
  }
  return newPhrase;
};

const checkBoundaries = function (num) {
  if (num < 0) {
    return num + 26;
  } else if (num > 0) {
    return num % 26;
  } else {
    return num;
  }
};

const isUpper = function (char) {
  return char.charCodeAt(0) >= 65 && char.charCodeAt(0) <= 65 + 26;
};

const isLower = function (char) {
  return char.charCodeAt(0) >= 97 && char.charCodeAt(0) <= 97 + 26;
};

module.exports = caesar;
