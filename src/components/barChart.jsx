import { Bar } from "react-chartjs-2";
import React, { useState, useEffect } from "react";
import { ExcerciseData } from "../../utils/data";
import { Chart as ChartJS } from "chart.js/auto";
import './bar.scss'
function BarChart() {
  const [muscleData, setMuscleData] = useState({
    labels: ExcerciseData.map((i) => i.month),
    datasets: [
      {
        label: "Calories Burnt",
        data: ExcerciseData.map((i) => i.calories),
      backgroundColor: ['#ff598f','#fd8a5e','#01dddd','#00bfaf'],
      },
    ],
  });
  const options = {
    plugins: {
      colors: {
        enabled: true
      }
    }
  };
  return (
    <div className="bar-con">
      <h1>Average Reps</h1>
      <Bar data={muscleData} options={options} />
    </div>
  );
}

export default BarChart;
