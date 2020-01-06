import React from 'react';
import ChartWrapper from './ChartWrapper'

const App = () => {
  const pinID = '3231312312';
  const pinData = [20, 12, 14, 13, 1];
  return (
    <div className="App">
      <ChartWrapper pinID={`pin-${pinID}`} pinData={pinData}/>
    </div>
  );
}

export default App;
