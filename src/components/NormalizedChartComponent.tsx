import {
  Chart as ChartJS,
  CategoryScale,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import React from 'react'
import { useStoreContext } from '../contexts/StoreContext'
import { formatNormalizedChartData } from '../utils/data_handling';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const NormalizedChartComponent:React.FC = () => {
  const {state: { fullData }} = useStoreContext();

  const  {
    dates,
    normalizedOil: oil,
    normalizedGold: gold,
    normalizedCop: cop,
    normalizedEur: eur,
  } = formatNormalizedChartData(fullData);

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'NORMALIZED DATA',
      },
    },
  };

  const data = {
    labels: dates,
    datasets: [
      {
        label: "OIL",
        data: oil,
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
      {
        label: "GOLD",
        data: gold,
        borderColor: 'rgb(153, 162, 35)',
        backgroundColor: 'rgba(153, 162, 35, 0.5)',
      },
      {
        label: "USD",
        data: cop,
        borderColor: 'rgb(53, 162, 35)',
        backgroundColor: 'rgba(53, 162, 35, 0.5)',
      },
      {
        label: "EUR",
        data: eur,
        borderColor: 'rgb(153, 62, 235)',
        backgroundColor: 'rgba(153, 62, 235, 0.5)',
      },
    ]
  }

  return (
    <>
      <Line
        data={data}
        options={options}
      />
    </>
  )
}

export default NormalizedChartComponent;