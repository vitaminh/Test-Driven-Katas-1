const { expect } = require('chai');
const twoSum = require('./twoSum');

describe('twoSum', () => {
  it('Returns empty array when empty array is passed', () => {
    expect(twoSum([], 10)).to.equal([]);
  });
  it('Returns proper indices when sum is found', () => {
    expect(twoSum([3, 5, 10], 15)).to.equal([1, 2]);
  });
  it('Returns empty array when sum is not found', () => {
    expect(twoSum([1, 2, 3, 4, 5], 100)).to.equal([]);
  });
  it('Returns empty array when sum is not found', () => {
    expect(twoSum([1, 2, 3, 4, 100], 100)).to.equal([]);
  });
  it('Returns first pair that sum up to target value', () => {
    expect(twoSum([50, 50, 50, 50, 50], 100)).to.equal([0, 1]);
  });
});
