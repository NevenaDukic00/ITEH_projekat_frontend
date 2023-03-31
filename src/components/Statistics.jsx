import React from "react";
import { useState, useEffect } from "react";
import { Bar, Pie, Line } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
import "../css/statistics.css";
Chart.register(...registerables);

function Statistics({
  vulkan,
  laguna,
  lion,
  other,
  revenue,
  pride,
  thief,
  mockingbird,
  before,
  mile,
}) {
  let sum = 700 + revenue;

  const rev = {
    labels: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ],
    datasets: [
      {
        label: "Revenue",
        backgroundColor: "rgba(210,173,189)",
        borderColor: "rgba(0,0,0,1)",
        borderWidth: 2,
        data: [1200, 2000, sum, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      },
    ],
  };

  const publ = {
    labels: ["Laguna", "Vulkan", "Lion", "Other"],
    datasets: [
      {
        label: "Publishers",
        backgroundColor: [
          "rgba(210,173,189)",
          "rgba(173,204,233)",
          "rgba(245,222,152)",
          "rgba(214,237,161)",
        ],
        borderColor: "rgba(0,0,0,1)",
        borderWidth: 2,
        data: [laguna, vulkan, lion, other],
      },
    ],
  };
  let pp = 200 + pride;
  let bt = 600 + thief;
  let hkm = 300 + mockingbird;
  let mby = 456 + before;
  let gm = 245 + mile;

  const books = {
    labels: [
      "Pride and Prejudice",
      "The Book Thief",
      "How to kill Mockingbird",
      "Me Before You",
      "The Green Mile",
    ],
    datasets: [
      {
        label: "Top selling books",
        backgroundColor: [
          "rgba(210,173,189)",
          "rgba(173,204,233)",
          "rgba(245,222,152)",
          "rgba(214,237,161)",
          "rgba(244,204,204)",
        ],
        borderColor: "rgba(0,0,0,1)",
        borderWidth: 2,
        data: [pp, bt, hkm, mby, gm],
      },
    ],
  };

  return (
    <>
      <h1>Statistics</h1>
      <h3>Revenue</h3>
      <div className="lineChart">
        <Line
          data={rev}
          options={{
            title: {
              display: true,
              text: "Revenue",
              fontSize: 20,
            },
            legend: {
              display: true,
              position: "right",
            },
          }}
        />
      </div>
      <h3>Publishing houses</h3>
      <div className="pieChart">
        <Pie
          data={publ}
          options={{
            title: {
              display: true,
              text: "Publishing houses",
              fontSize: 20,
            },
            legend: {
              display: true,
              position: "right",
            },
          }}
        />
      </div>
      <h3>Top selling books</h3>
      <div className="barChart">
        <Bar
          data={books}
          options={{
            title: {
              display: true,
              // text: "Top selling books",
              fontSize: 20,
            },
            legend: {
              display: true,
              position: "right",
            },
          }}
        />
      </div>
    </>
  );
}

export default Statistics;
