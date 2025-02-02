// STEP 1 - Include Dependencies
// Include react
import React from "react";
import ReactDOM from "react-dom";

// Include the react-fusioncharts component
import ReactFC from "react-fusioncharts";

// Include the fusioncharts library
import FusionCharts from "fusioncharts";

// Include the chart type
import Column2D from "fusioncharts/fusioncharts.charts";

// Include the theme as fusion
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";

// Adding the chart and theme as dependency to the core fusioncharts
ReactFC.fcRoot(FusionCharts, Column2D, FusionTheme);

// STEP 2 - Chart Data
const chartData = [
  {
    label: "Jan",
    value: "400k"
  },
  {
    label: "Feb",
    value: "200k"
  },
  {
    label: "Mar",
    value: "50k"
  },
  {
    label: "Apr",
    value: "300k"
  },
];

// STEP 3 - Creating the JSON object to store the chart configurations
const chartConfigs = {
  type: "line", // The chart type
  width: "100%", // Width of the chart
  height: "400", // Height of the chart
  dataFormat: "json", // Data type
  dataSource: {
    // Chart Configuration
    chart: {
      //Set the chart caption
      caption: "Inflow",
      //Set the chart subcaption
      //subCaption: "In MMN = Million Naira",
      //Set the x-axis name
      xAxisName: "Month",
      //Set the y-axis name
      yAxisName: "Inflow",
      numberSuffix: "K",
      //Set the theme for your chart
      theme: "fusion"
    },
    // Chart Data
    data: chartData
  }
};

// STEP 4 - Creating the DOM element to pass the react-fusioncharts component
class Inflow extends React.Component {
  render() {
    return (<ReactFC {...chartConfigs} />);
  }
}

export default Inflow;

