const wrap = (line, maxLen) => {
  if (line.length <= maxLen) {
    return line;
  }
  const indexOfBlank = line.lastIndexOf(' ', maxLen);
  console.log(indexOfBlank);
  let split;
  let offset;
  if (indexOfBlank > -1) {
    split = indexOfBlank;
    offset = 1;
  } else {
    split = maxLen;
    offset = 0;
  }
  return (
    line.substring(0, split) +
    '\n' +
    wrap(line.substring(split + offset), maxLen)
  );
};
console.log(wrap('the string', 5));

module.exports = wrap;
