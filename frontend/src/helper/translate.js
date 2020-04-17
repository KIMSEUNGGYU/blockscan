export const hexToString = hex => {
  let string = '';
  for (let i = 0; i < hex.length; i += 2) {
    string += String.fromCharCode(parseInt(hex.substr(i, 2), 16));
  }
  return string;
};

export const MainTimeToText = ({ time }) => {
  return time.Minutes
    ? time.Minutes + ' mins ' + time.Seconds + ' secs ago'
    : time.Seconds
    ? time.Seconds + ' secs ago'
    : null;
};
