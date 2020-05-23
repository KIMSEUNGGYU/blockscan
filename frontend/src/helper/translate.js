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

export const DetailTimeToText = time => {
  return time.Days
    ? time.Days +
        ' days ' +
        time.Hours +
        ' hrs ' +
        time.Minutes +
        ' mins ' +
        time.Seconds +
        'secs ago'
    : time.Hours
    ? time.Hours + 'hrs ' + time.Minutes + ' mins ' + time.Seconds + ' secs ago'
    : time.Minutes
    ? time.Minutes + ' mins ' + time.Seconds + ' secs ago'
    : time.Seconds
    ? time.Seconds + ' secs ago'
    : null;
};

export const CuttingData = (data, Cutoption) => {
  if (data != null) {
    const preData = data;
    const result = preData.toFixed(Cutoption);
    return result;
  }
  return data;
};

export const TranslateDetailText = path => {
  const array = [];
  if (path === 'block') {
    array.push(
      'Block Height:',
      'Timestamp:',
      'Transactions:',
      'Mined by:',
      'Block Reward:',
      'Uncles Reward:',
      'Difficulty:',
      'Total Difficulty:',
      'Size:',
      'Gas Used:',
      'Gas Limit:',
      'Extra Data:',
      'Hash:',
      'Parent Hash:',
      'Sha3Uncles:',
      'Nonce:',
    );
  } else {
    array.push(
      'Transaction Hash:',
      'Status:',
      'Block:',
      'Timestamp:',
      'From:',
      'To:',
      'Value:',
      'Transaction Fee:',
      'Gas Limit:',
      'Gas Used by Transaction:',
      'Gas Price:',
      'Nonce:',
      'Input Data:',
    );
  }
  return array;
};
