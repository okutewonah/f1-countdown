import React from 'react';
import '../../App.scss';

const Timer = props => {

  const days = Math.floor(props.time / 86400000);
  const hours = Math.floor((props.time - (86400000 * days))  / 3600000);
  const minutes = Math.floor((props.time - (86400000 * days) - (3600000 * hours))  / 60000);
  const seconds = Math.floor((props.time - (86400000 * days) - (3600000 * hours) - (60000 * minutes))  / 1000)

  const extractTwoDigitNumber = (value) => {
    return value < 10 ? `0${value}` : value;
  }

  return (
    <section>
      <div>
        {`${extractTwoDigitNumber(days)}`}
      </div>
      <div>
        {`${extractTwoDigitNumber(hours)}`}
      </div>
      <div>
        {`${extractTwoDigitNumber(minutes)}`}
      </div>
      <div>
        {`${extractTwoDigitNumber(seconds)}`}
      </div>      
    </section>
  );
};

export default Timer;