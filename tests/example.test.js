const brokenFunction = require('../src/utils');

test('should pass', () => { 
  // The test expects 2, and the corrected function will now return 2.
  expect(brokenFunction()).toBe(2); 
});