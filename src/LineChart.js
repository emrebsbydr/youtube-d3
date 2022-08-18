import React, {useEffect, useRef} from 'react';
import * as d3 from 'd3';
import './LineChart.css'

const LineChart = () => {
  const d3chart = useRef()
  useEffect(()=>{
     const fetchData = async()=>{
      const data = await fetch('http://data.cityofnewyork.us/resource/tg4x-b46p.json')
      const json = await data.json();
      console.log("json", json)
      const permits = json.filter(e=>{
        return e.eventtype ==="Shooting Permit"
      })
      console.log("permits", permits) 

     }

     fetchData()
     .catch(console.error)
  },[])
  return (
    <div id='d3demo'>
      <h1>hee</h1>
      <svg ref={d3chart}></svg>
    </div>
  )
}

export default LineChart;
