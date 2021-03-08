import React from 'react';

const Timer = props => {

  const days = Math.floor(props.time / 86400000);
  const hours = Math.floor((props.time - (86400000 * days))  / 3600000);
  const minutes = Math.floor((props.time - (86400000 * days) - (3600000 * hours))  / 60000);
  const seconds = Math.floor((props.time - (86400000 * days) - (3600000 * hours) - (60000 * minutes))  / 1000)

  const extractTwoDigitNumber = (value) => {
    return value < 10 ? `0${value}` : value;
  }

  return (
    <section className="timer">
      <div className="timer__item">
        <p className="timer__item--para">{`${extractTwoDigitNumber(days)}`}</p>
      </div>
      <div className="timer__item">
        <p className="timer__item--para">{`${extractTwoDigitNumber(hours)}`}</p>
      </div>
      <div className="timer__item">
        <p className="timer__item--para">{`${extractTwoDigitNumber(minutes)}`}</p>
      </div>
      <div className="timer__item">
        <p className="timer__item--para">{`${extractTwoDigitNumber(seconds)}`}</p>
      </div>      
    </section>
  );
};

export default Timer;