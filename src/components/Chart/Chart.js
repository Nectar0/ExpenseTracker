import React from "react";
import ChartBar from "./ChartBar";
import "./Chart.css";

//sleep
//Sleep
//Sleep
//Dynamic chart corresponding to user input expense information
const Chart = (props) => {
  const dataPointValues = props.dataPoints.map((dataPoint) => dataPoint.value);
  //use "..." spread operator to switch dataPoints array into standalone argument, returns 12 arguments (12 months)
  const totalMaximum = Math.max(...dataPointValues);
  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={totalMaximum}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
