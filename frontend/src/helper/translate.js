function hexToString(hex) {
  let string = '';
  for (let i = 0; i < hex.length; i += 2) {
    string += String.fromCharCode(parseInt(hex.substr(i, 2), 16));
  }
  return string;
}

const SECOND = 1000;
const MINUTE = 60 * SECOND;
const HOUR = 60 * MINUTE;
const DAY = 24 * HOUR;

function translateTimestamp2(timestamp) {
  let time = Date.now() - timestamp;

  let times = [];
  times.push(parseInt(time / DAY));
  time %= DAY;
  times.push(parseInt(time / HOUR));
  time %= HOUR;
  times.push(parseInt(time / MINUTE));
  time %= MINUTE;
  times.push(parseInt(time / SECOND));

  let count = 0;
  let timeString = '';
  if (times[0]) {
    timeString += times[0] + ' days ';
    count += 1;
  }
  if (times[1]) {
    timeString += times[1] + ' hrs ';
    count += 1;
  }

  if (times[2] && count < 2) {
    timeString += times[2] + ' mins ';
    count += 1;
  }
  if (times[3] && count < 2) {
    timeString += times[3] + ' secs';
  }

  timeString += ' ago';

  // console.log(timeString);
  return timeString;
}

function translateTimestamp(timestamp) {
  let time = Date.now() - timestamp * SECOND;

  let times = [];
  times.push(parseInt(time / DAY));
  time %= DAY;
  times.push(parseInt(time / HOUR));
  time %= HOUR;
  times.push(parseInt(time / MINUTE));
  time %= MINUTE;
  times.push(parseInt(time / SECOND));

  let count = 0;
  let timeString = '';
  if (times[0]) {
    timeString += times[0] + ' days ';
    count += 1;
  }
  if (times[1]) {
    timeString += times[1] + ' hrs ';
    count += 1;
  }

  if (times[2] && count < 2) {
    timeString += times[2] + ' mins ';
    count += 1;
  }
  if (times[3] && count < 2) {
    timeString += times[3] + ' secs';
  }

  timeString += ' ago';

  // console.log(timeString);
  return timeString;
}

export { hexToString, translateTimestamp, translateTimestamp2 };
