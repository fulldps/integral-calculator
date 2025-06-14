import { useState } from "react";
import Calculator from "./Calculator";
import Graph from "./Graph";

export default function App() {
  const [calculationData, setCalculationData] = useState(null);

  return (
    <div>
      <h1>Интегральный Калькулятор</h1>
      <Calculator onCalculate={setCalculationData} />
      {calculationData && <Graph {...calculationData} />}
    </div>
  );
}
