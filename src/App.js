import "./App.css";
import Histogram from "./charts/Histogram";
import LineChart from "./charts/LineChart";
import LineChart2 from "./charts/LineChart2";
import TimeSeries from "./charts/TimeSeries";

function App() {
  return (
    <div className="App">
      <div className="row">
        <LineChart2 height={400} width={400} />
        <TimeSeries height={400} width={400} />
        <Histogram  height={550} width={700} />
      </div>

    </div>
  );
}

export default App;
