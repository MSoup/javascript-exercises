const palindromes = function (phrase) {
  let filtered = phrase.toLowerCase().replace(/[^a-zA-Z]/g, "");
  let filteredLen = filtered.length;

  let firstEl, lastEl;
  for (let i = 0; i < Math.floor(filteredLen / 2); i++) {
    firstEl = filtered[i];
    lastEl = filtered[filteredLen - i - 1];
    if (firstEl != lastEl) {
      return false;
    }
  }
  return true;
};

module.exports = palindromes;
