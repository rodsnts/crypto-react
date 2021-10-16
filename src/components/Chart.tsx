import { Line } from "react-chartjs-2";

export const Chart = ({ chartData }: any) => {
  return (
    <div>
      <Line
        data={chartData}
        options={{
          responsive: true,
          plugins: {
            title: {
              display: true,
              text: "Bitcoin price",
            },
            legend: {
              display: true,
              position: "bottom",
            },
          },
        }}
      />
    </div>
  );
};
