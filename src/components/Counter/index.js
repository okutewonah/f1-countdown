import React from 'react';
import Timer from '../Timer';

const Counter = props => {

  // const dateStr = process.env.REACT_APP_DATE;
  const dateStr = "2021.05.23"
  let nowDate = new Date();

  let lightsOutDate = new Date(dateStr);

  const [data, setData] = React.useState(lightsOutDate - nowDate);

  const updateLightsOut = () => {
    nowDate = new Date();
    setData(lightsOutDate - nowDate)
  }

  React.useEffect(() => {
    const interval = setInterval(() => {
      updateLightsOut()
    }, 1000);

    return () => {
      clearInterval(interval);
    }
  })

  return (
    <div className="content">
      <p>lights out</p>
      <h1>
        <Timer time={data}/>
      </h1>
      <h4>and away we go!!!</h4>
    </div>
  );
};

export default Counter;
