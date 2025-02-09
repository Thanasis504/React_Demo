// ScoreChart.jsx
import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const ScoreChart = ({ scores }) => {
  const chartRef = useRef(null);
  let scoreChart = null;

  useEffect(() => {
    if (scores.length > 0) {
      updateGraph(scores);
    }
    return () => {
      if (scoreChart) scoreChart.destroy();
    };
  }, [scores]);

  const updateGraph = (data) => {
    if (!chartRef.current) return;

    const ctx = chartRef.current.getContext("2d");
    if (scoreChart) scoreChart.destroy();

    scoreChart = new Chart(ctx, {
      type: "bar",
      data: {
        labels: data.map((entry) => entry.team_name),
        datasets: [{
          label: "Score",
          data: data.map((entry) => entry.score),
          backgroundColor: "rgba(75, 192, 192, 0.6)",
          borderColor: "rgba(75, 192, 192, 1)",
          borderWidth: 1,
        }],
      },
      options: {
        responsive: true,
        plugins: { legend: { display: false } },
        scales: {
          y: { beginAtZero: true, title: { display: true, text: "Score" } },
        },
      },
    });
  };

  return (
    <div className="row justify-content-center my-5">
      <div className="col-xl-10">
        <canvas ref={chartRef}></canvas>
      </div>
    </div>
  );
};

export default ScoreChart;
