import { useState } from "react";
import { Chart } from "./components/Chart/Chart";
import "./App.css";
import Input from "./components/Input/Input";
import Button from "./components/Button/Button";

const App: React.FC = () => {
  const [askCrypto, setAskCrypto] = useState("");
  const [render, setRender] = useState(false);
  const [livePrice, setLivePrice] = useState("");
  const [chartData, setChartData] = useState({});

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
        `https://api.coincap.io/v2/assets/${crypto}/history?interval=d1&start=1633305600000&end=1634393652000`
      );
      const data = await res.json();

      setChartData({
        labels: weeks.map((month: string) => month),
        datasets: [
          {
            label: "Price in USD",
            data: data.data.map((crypto: any) => crypto.priceUsd),
            borderColor: ["#000000"],
            tension: 0.3,
            fill: true,
          },
        ],
      });

      setRender(true);

      const pricesWs = new WebSocket(
        `wss://ws.coincap.io/prices?assets=${crypto}`
      );

      pricesWs.onmessage = function (msg) {
        setLivePrice(msg.data);
        console.log(msg.data);
      };
    }
  };

  return (
    <div className="App">
      <main>
        <Input
          placeholder="Search your favorito crypto..."
          event={(e: any) => setAskCrypto(e.target.value)}
          action={search}
        />
        <Chart
          chartData={chartData}
          price={livePrice}
          title={askCrypto}
          show={render}
        />
        <Button
          content="GitHub →"
          link="https://github.com/rodsnts/crypto-react"
        />
      </main>
    </div>
  );
}

export default App;
