import React, { useState, useEffect } from 'react';
import { MAINTIME } from '../../../../Action/ActionTypes';
import { GetTime } from '../../../../Action/Time';
import { MainTimeToText } from '../../../../helper/translate';
import styled from 'styled-components';

const TimeStampBox = styled.div`
  color: ${props => props.theme.draksubtitle};
  font-size: 10px;
`;

const TimeItems = ({ timestamp }) => {
  const [time, setTime] = useState();
  // console.log(match);
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(GetTime(timestamp, MAINTIME));
    }, 1000);
    return () => clearInterval(interval);
  }, [timestamp]);

  if (time !== undefined) {
    return <TimeStampBox>{MainTimeToText({ time })}</TimeStampBox>;
  }

  return <TimeStampBox>{null}</TimeStampBox>;
};

export default TimeItems;
