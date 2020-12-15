const fibonacci = function (n) {
  if (n < 1) {
    return "OOPS";
  }

  f = [0, 1];

  for (let i = 2; i < n + 1; i++) {
    f.push(f[i - 1] + f[i - 2]);
  }
  return f[n];
};

module.exports = fibonacci;
