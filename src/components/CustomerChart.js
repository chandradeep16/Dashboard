import React from "react";
import { PieChart } from "react-minimal-pie-chart";

function CustomerChart() {
  const data = [
    { title: "Sales", value: 30, color: "#fdc094" },
    { title: "Stock", value: 20, color: "#ff9190" },
    { title: "Goal", value: 50, color: "#5e72eb" },
  ];

  return (
    <div
      className="card"
      style={{ padding: "10px", width: "400px", margin: "0 auto" }}
    >
      <div style={{ fontSize: "24px", fontWeight: "bold", color: "#333" }}>
        Customers
      </div>
      <div
        style={{
          marginTop: "10px",
          marginBottom: "20px",
          fontSize: "14px",
          color: "#777",
        }}
      >
        Customers who buy products
      </div>

      <div style={{ width: "350px", height: "200px", margin: "0 auto" }}>
        <PieChart
          data={data}
          label={({ dataEntry }) => `${dataEntry.title}: ${dataEntry.value}%`}
          labelPosition={70}
          labelStyle={{
            fontSize: "8px",
            fontFamily: "sans-serif",
            fontWeight: "bold",
            fill: "#000",
          }}
          lineWidth={50}
          paddingAngle={2}
          radius={43}
          segmentsStyle={{
            transition: "stroke .10s",
            cursor: "pointer",
          }}
          segmentsShift={(index) => (index === 0 ? 7 : 0)}
        />
      </div>
    </div>
  );
}

export default CustomerChart;



