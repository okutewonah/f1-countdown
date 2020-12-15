import React from 'react';
import Timer from '../Timer';

const Counter = props => {

  // const dateStr = process.env.REACT_APP_DATE;
  const dateStr = "2021.03.21"
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
    <div>
      <p>lights out</p>
      <h1 style={{fontSize: "100px", margin: "0px",}}>
        <Timer time={data}/>
      </h1>
      <h4>away we go...</h4>
    </div>
  );
};

export default Counter;