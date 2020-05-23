import * as types from './ActionTypes';

export const GetTime = (Timestamp, action) => {
  //Timestamp 는 블록 혹은 트랜잭션 채굴시간 밀로초
  // 초는 무조건 있고, 분은 0 넘으면 추가, 시 0 넘으면 추가
  let Time = {
    Seconds: 0,
    Minutes: null,
    Hours: null,
    Days: null,
  };
  const data = Timestamp; //
  const NowTime = Date.now(); // 현재시간 밀리초
  const resultTime = NowTime - data; // 현재시간 - 넣어준시간
  const Seconds = Math.floor((resultTime / 1000) % 60); //차이값 초 추출
  const Minutes = Math.floor((resultTime / (1000 * 60)) % 60); //차이값 분 추출
  const Hours = Math.floor((resultTime / (1000 * 60 * 60)) % 24); // 차이값 시 추출
  const Days = Math.floor(resultTime / (1000 * 60 * 60 * 24));
  switch (action) {
    case types.MAINTIME: {
      if (Minutes > 0) {
        Time.Minutes = Minutes;
      }
      if (Seconds > 0) {
        Time.Seconds = Seconds;
      }
      break;
    }

    case types.VIEWTIME: {
      if (Days > 0) {
        Time.Days = Days;
      }
      if (Hours >= 0) {
        Time.Hours = Hours;
      }
      if (Minutes >= 0) {
        Time.Minutes = Minutes;
      }
      if (Seconds >= 0) {
        Time.Seconds = Seconds;
      }
      break;
    }
    default:
      break;
  }
  return Time;
};
