import React from "react";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Doughnut } from "react-chartjs-2";

// Register chart elements
ChartJS.register(ArcElement, Tooltip, Legend);

function DoughnutChart({ data }) {
  if (!data) return null;

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom",
      },
    },
  };

  return (
    <div style={{ marginTop: "30px" }}>
      <Doughnut data={data} options={options} />
    </div>
  );
}

export default DoughnutChart;
