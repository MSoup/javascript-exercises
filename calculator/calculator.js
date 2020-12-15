function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function sum(arr) {
  if (!arr) {
    return 0;
  } else {
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
      total += arr[i];
    }
    return total;
  }
}

function multiply(arr) {
  if (!arr) {
    return 0;
  } else {
    let total = 1;
    for (let i = 0; i < arr.length; i++) {
      total *= arr[i];
    }
    return total;
  }
}

function power(a, b) {
  return Math.pow(a, b);
}

function factorial(num) {
  if (num === 0 || num === 1) return 1;
  for (var i = num - 1; i >= 1; i--) {
    num *= i;
  }
  return num;
}

module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
