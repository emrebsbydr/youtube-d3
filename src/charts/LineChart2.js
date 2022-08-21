import * as d3 from "d3";
import { useEffect, useState } from "react";


function LineChart2(props) {
  const { width, height } = props;

  const [data, setData] = useState([]);



  useEffect(() => {
    if (data.length > 0) {
      // console.log(data.length)
      drawChart();
    } else {
      generateData();
    }
  },[data]);

  //[{label:1, value:5},{label:2,value:11}]
  const generateData = () => {
    let chartData = [];

  //   chartData = [
  //   {label:1, value:5},
  //   {label:2,value:11},
  //   {label:3, value:15},
  //   {label:4,value:31},
  //   {label:5, value:45},
  //   {label:6,value:51},
  //   {label:7, value:65},
  //   {label:8,value:151},
  // ]

    for (let i = 0; i < 20; i++) {
      let value = Math.floor(Math.random() * i + 3);
      chartData.push({
        label: i,
        value,
      });
    }

    setData(chartData);
  };

  const drawChart = () => {
    //estaplish margin
    const margin = { top: 10, right: 50, bottom: 50, left: 50 };

    // x and y axis max values
    const yMinValue = d3.min(data, (d) => d.value);
    const yMaxValue = d3.max(data, (d) => d.value);
    const xMinValue = d3.min(data, (d) => d.label);
    const xMaxValue = d3.max(data, (d) => d.label);

    //creating cart area
    const svg = d3
      .select("#container")
      .append("svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
      .attr("transform", `translate(${margin.left},${margin.top})`); // moving svg according to parent div

    //create scale for the x axis
    const xScale = d3
      .scaleLinear()
      .domain([xMinValue, xMaxValue])
      .range([0, width]);

    //create scale for the y axis
    const yScale = d3.scaleLinear().range([height, 0]).domain([0, yMaxValue]);

    //create x grid

    svg
      .append("g")
      .attr("class", "grid")
      .attr("transform", `translate(0,${height})`)
      .call(d3.axisBottom(xScale).tickSize(-height).tickFormat(""));

    // create y grid
    svg
      .append("g")
      .attr("class", "grid")
      .call(d3.axisLeft(yScale).tickSize(-width).tickFormat(""));

    // create the x axis on the bottom
    svg
      .append("g")
      .attr("class", "x-axis")
      .attr("transform", `translate(0,${height})`)
      .call(d3.axisBottom().scale(xScale).tickSize(15));

    // create the y axis on the left
    svg.append("g").attr("class", "y-axis").call(d3.axisLeft(yScale));

    // create a line with x and y coordinates scaled to the data
    const line = d3
      .line()
      .x((d) => xScale(d.label))
      .y((d) => yScale(d.value))
      .curve(d3.curveMonotoneX); // this line helps the line curve not sharp turn


  	// draw the line
	svg
  .append('path')
  .datum(data)
  .attr('fill', 'none')
  .attr('stroke', '#f6c3d0')
  .attr('stroke-width', 2.5)
  .attr('class', 'line')
  .attr('d', line);
}





  // console.log("data:", data)
  // console.log("props:", props)
  return (
    <div>

      <div id="container">
      <h1>Second LineChart2</h1>
      </div>
    </div>
  );
}
export default LineChart2;
