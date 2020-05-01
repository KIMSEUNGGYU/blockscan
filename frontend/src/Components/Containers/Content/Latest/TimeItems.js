import React, { useState, useEffect } from 'react';
import { MAINTIME } from '../../../../Action/ActionTypes';
import { GetTime } from '../../../../Action/Time';
import { MainTimeToText } from '../../../../helper/translate';
import styled from 'styled-components';

const TimeStampBox = styled.div`
  color: #77838f;
  font-size: 10px;
`;

const TimeItems = ({ timestamp }) => {
  const [time, setTime] = useState();
  useEffect(() => {
    setInterval(() => {
      setTime(GetTime(timestamp, MAINTIME));
    }, 1000);
  }, [time]);

  if (time !== undefined) {
    return <TimeStampBox>{MainTimeToText({ time })}</TimeStampBox>;
  }

  return <TimeStampBox>{null}</TimeStampBox>;
};

export default TimeItems;
