import React, { useEffect, useRef } from "react";
import * as d3 from "d3";
import "./LineChart.css";

const LineChart = () => {
  const d3chart = useRef();
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch(
        "http://data.cityofnewyork.us/resource/tg4x-b46p.json"
      );
      const json = await data.json();
      // console.log("json", json);
      const permits = json.filter((e) => {
        return e.eventtype === "Shooting Permit";
      });
      // console.log("permits", permits);
    };

    fetchData().catch(console.error);
  }, []);
  return (
    <div >
      <h1>First Cart here</h1>
    </div>
  );
};

export default LineChart;
