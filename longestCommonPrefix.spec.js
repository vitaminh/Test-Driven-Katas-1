const { expect } = require('chai');
const longestCommonPrefix = require('./longestCommonPrefix');

describe('wrap', () => {
  it('Returns empty string if empty string was provided', () => {
    expect(wrap('', 10)).to.equal('');
  });
  it('Returns one line', () => {
    expect(wrap('the', 2)).to.equal('th\ne');
  });
  it('Returns two line', () => {
    expect(wrap('the string', 5)).to.equal('the\nstrin\ng');
  });
  it('Returns all spaces in new line', () => {
    expect(wrap('the new string in', Infinity)).to.equal('the new string in');
  });
});
