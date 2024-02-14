import React from 'react';
import { Pie } from 'react-chartjs-2';
import Chart from 'chart.js/auto';

function PieChart({ curr, max, licName }) {
  const labelsMap = {
    '동시 사용자수': ['현재 사용자 수', '남은 사용자 수'],
    '코어': ['현재 코어 수', '남은 코어 수']
  };

  // licName에 따른 labels 설정
  const labels = labelsMap[licName] || ['현재 수', '남은 수'];

  const data = {
    labels,
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
