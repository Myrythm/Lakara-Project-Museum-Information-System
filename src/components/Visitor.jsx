import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const data = {
  labels: Array.from({ length: 30 }, (_, i) => i + 1),
  datasets: [
    {
      label: 'Pengunjung',
      data: [100, 200, 150, 300, 250, 100, 50, 200, 300, 150, 100, 200, 150, 300, 250, 100, 50, 200, 300, 150, 100, 200, 150, 300, 250, 100, 50, 200, 300, 150],
      backgroundColor: 'rgba(54, 162, 235, 0.2)',
      borderColor: 'rgba(54, 162, 235, 1)',
      borderWidth: 1
    }
  ]
};

const options = {
  scales: {
    y: {
      beginAtZero: true
    }
  }
};

const Visitor = () => (
  <>
    <h2>Analisis Pengunjung</h2>
    <div style={{ width: '100%' }}> {/* Atur ukuran yang lebih kecil sesuai kebutuhan */}
      <Bar data={data} options={options} />
    </div>
  </>
);

export default Visitor;
