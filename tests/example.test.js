// tests/example.test.js

// Import the function you intend to test
const brokenFunction = require('../src/utils'); 

// Define the test suite
test('brokenFunction should return 2', () => { 
  // This is the expected behavior for the Pokedex to be "bug-free"
  expect(brokenFunction()).toBe(2); 
});

// NOTE: The previous failure was because brokenFunction() was returning 1