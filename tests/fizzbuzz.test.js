const sum = require('../modules/fizzbuzz');

test('sum of 1 and 2 gives 3', () => {
    expect(sum(1, 2)).toBe(3);
});