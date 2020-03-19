const SECOND = 1000;
const MINUTE = SECOND * 60;
const HOUR = MINUTE * 60;
const DAY = HOUR * 24;

function hexToString(hex) {
  let string = '';
  for (let i = 0; i < hex.length; i += 2) {
    string += String.fromCharCode(parseInt(hex.substr(i, 2), 16));
  }
  return string;
}

const intToHex = number => {
  return `0x${number.toString(16)}`;
};

const hexToInt = hex => {
  return parseInt(hex);
};

module.exports = {
  hexToString,
  intToHex,
  hexToInt,
};
