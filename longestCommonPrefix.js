const longestCommonPrefix = strs => {
  if (!strs.length) return '';
  for (let charIdx = 0; charIdx < strs[0].length; charIdx++) {
    console.log('str[i].length: ', strs[0].length);
    for (let strIdx = 0; strIdx < strs.length; strIdx++) {
      if (strs[strIdx][charIdx] !== strs[0][charIdx]) return strs[0].slice(0, charIdx);
    }
  }
  return strs[0];
};

module.exports = longestCommonPrefix;
