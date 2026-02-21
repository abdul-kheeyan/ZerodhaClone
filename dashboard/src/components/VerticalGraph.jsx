import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Holdings Value",
    },
  },
};

export function VerticalGraph({ holdings = [] }) {
  const labels = holdings.map((stock) => stock.name);

  const data = {
    labels,
    datasets: [
      {
        label: "Current Value",
        data: holdings.map(
          (stock) => stock.price * stock.qty
        ),
        backgroundColor: "rgba(83, 164, 255, 0.6)",
      },
    ],
  };

  return (
    <div style={{ marginTop: "40px" }}>
      <Bar options={options} data={data} />
    </div>
  );
}
