import React, { useEffect } from "react";
import D3Chart from './D3Chart';

const ChartWrapper = (props) => {
  useEffect(() => {
    D3Chart(props);
	}, [props]);
	
	// It may be possible to use refs as well but I believe the component would need to be class based
  return (
  	<div className={props.pinID}/>
  );
}

export default ChartWrapper;