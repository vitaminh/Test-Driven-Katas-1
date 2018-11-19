const { expect } = require('chai');
const longestCommonPrefix = require('./longestCommonPrefix');

describe('longestCommonPrefix', () => {
  it('Returns empty string if empty array was provided', () => {
    expect(longestCommonPrefix([])).to.equal('');
  });
  it('Returns one letter if one letter matches', () => {
    expect(longestCommonPrefix(['foo', 'faa', 'fee'])).to.equal('f');
  });
  it('Returns entire word if entire word matches', () => {
    expect(longestCommonPrefix(['foo', 'foo', 'foo'])).to.equal('foo');
  });
  it('Returns nothing if nothing matches', () => {
    expect(longestCommonPrefix(['abc', 'def', 'ghi', 'jkl'])).to.equal('');
  });
  it('Returns numbers if numbers matche', () => {
    expect(longestCommonPrefix(['123', '134', '1', '176'])).to.equal('1');
  });
  it('Returns numbers if numbers matche', () => {
    expect(longestCommonPrefix([1234, 134, 1, 176])).to.equal(1);
  });
});
