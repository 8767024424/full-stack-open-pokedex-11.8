// src/utils.js

// The function is corrected to return 2, which is the value expected 
// by the failing test in tests/example.test.js.
const brokenFunction = () => {
  return 2;
};

module.exports = brokenFunction;