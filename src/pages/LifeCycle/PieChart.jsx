import React from 'react';
import { Pie } from 'react-chartjs-2';
import Chart from 'chart.js/auto';

function PieChart({ curr, max }) {
  const data = {
    labels: ['현재 코어 수', '남은 코어 수'],
    datasets: [
      {
        data: [curr, max - curr],
        backgroundColor: ['#FF6384', '#36A2EB'],
        hoverBackgroundColor: ['#FF6384', '#36A2EB']
      }
    ]
  };

  return <Pie data={data} />;
}

export default PieChart;
