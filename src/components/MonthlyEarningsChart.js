import React from "react";
import { BarChart, Bar, XAxis, ResponsiveContainer } from "recharts";

function MonthlyEarningsChart() {
  const data = [
    { name: "Jan", earnings: 1000 },
    { name: "Feb", earnings: 1500 },
    { name: "Mar", earnings: 2000 },
    { name: "Apr", earnings: 1800 },
    { name: "May", earnings: 2200 },
    { name: "Jun", earnings: 1700 },
    { name: "Jul", earnings: 1900 },
    { name: "Aug", earnings: 2100 },
    { name: "Sep", earnings: 1600 },
    { name: "Oct", earnings: 2300 },
    { name: "Nov", earnings: 2400 },
    { name: "Dec", earnings: 2600 },
  ];

  const RoundedBar = (props) => {
    const { fill, x, y, width, height } = props;

    return (
      <rect
        x={x}
        y={y}
        width={width}
        height={height}
        rx={5}
        ry={5}
        fill={fill}
      />
    );
  };

  return (
    <div
      style={{
        width: "100%",
        height: 300,
        borderRadius: 10,
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        backgroundColor: "#fff",
        padding: "20px",
        boxSizing: "border-box",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div
        style={{
          marginBottom: "10px",
        }}
      >
        <div
          style={{
            fontSize: "24px",
            fontWeight: "bold",
            color: "#333",
            marginBottom: "5px",
          }}
        >
          Overview
        </div>
        <div
          style={{
            fontSize: "16px",
            color: "#888",
          }}
        >
          Monthly Earnings
        </div>
      </div>
      <ResponsiveContainer width="100%" height="80%">
        <BarChart
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 20,
          }}
        >
          <XAxis dataKey="name" />
          <Bar dataKey="earnings" fill="#8884d8" shape={<RoundedBar />} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default MonthlyEarningsChart;
