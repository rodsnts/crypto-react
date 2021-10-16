import styled from "styled-components";
import { Line } from "react-chartjs-2";

export const Chart = ({ chartData, price, show }: any) => {
  return (
    <StyledDiv>
      {show ? (
        <Line
          data={chartData}
          options={{
            responsive: true,
            maintainAspectRatio: true,
          }}
        />
      ) : null}
      <h1>
        Current Price: <span>${price.replace(/{"[a-zA-Z]+":"|"}/g, "")}</span>
      </h1>
    </StyledDiv>
  );
};

const StyledDiv = styled.div`
  background-color: white;
  border: 2px solid black;
  border-radius: 7px;
  box-shadow: -4px 8px 41px -2px rgba(0, 0, 0, 0.1);
  padding: 15px 25px;
`;
