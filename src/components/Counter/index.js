import React from 'react';

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
    }, 1);

    return () => {
      clearInterval(interval);
    }
  }, [])

  return (
    <div>
      <p>lights out</p>
      <h1>
        {data}
      </h1>
      <h4>away we go...</h4>
    </div>
  );
};

export default Counter;