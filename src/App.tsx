import { useState } from "react";
import { Chart } from "./components/Chart";
import "./App.css";

function App() {
  const [askCrypto, setAskCrypto] = useState("");
  const [livePrice, setLivePrice] = useState("");

  const weeks = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  const crypto = askCrypto;

  const search = async (evt: any) => {
    if (evt.key === "Enter") {
      const res = await fetch(
        `https://api.coincap.io/v2/assets/${crypto}/history?interval=d1&start=1633305600000&end=1633910400000`
      );
      const data = await res.json();

      setChartData({
        labels: weeks.map((month: string) => month),
        datasets: [
          {
            label: "Price in USD",
            data: data.data.map((crypto: any) => crypto.priceUsd),
            borderColor: ["#11a8ff"],
            tension: 0.1,
            fill: true,
          },
        ],
      });

      const pricesWs = new WebSocket(
        `wss://ws.coincap.io/prices?assets=${crypto}`
      );

      pricesWs.onmessage = function (msg) {
        setLivePrice(msg.data);
        console.log(msg.data);
      };
    }
  };

  const [chartData, setChartData] = useState({});

  return (
    <div className="App">
      <input
        type="text"
        onChange={(e) => setAskCrypto(e.target.value)}
        onKeyPress={search}
        name="crypto"
      />
      <Chart chartData={chartData} />
      <h1>
        Current Price:{" "}
        <span>${livePrice.replace(/{"[a-zA-Z]+":"|"}/g, " ")}</span>
      </h1>
    </div>
  );
}

export default App;
