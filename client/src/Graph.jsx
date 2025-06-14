import { Line } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
Chart.register(...registerables);

export default function Graph({ func, a, b }) {
  // Генерируем точки для графика
  const labels = [];
  const data = [];
  const step = (b - a) / 100;

  for (let x = a; x <= b; x += step) {
    labels.push(x.toFixed(2));
    try {
      const y = Math.evaluate(func, { x }); // Вычисляем y = func(x)
      data.push(y);
    } catch {
      data.push(null); // Если функция невалидна, пропускаем точку
    }
  }

  const chartData = {
    labels,
    datasets: [
      {
        label: `График ${func}`,
        data,
        borderColor: "rgb(75, 192, 192)",
        tension: 0.1,
      },
    ],
  };

  return <Line data={chartData} />;
}
