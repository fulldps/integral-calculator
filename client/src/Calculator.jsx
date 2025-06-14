import { useState } from "react";
import { calculateIntegral } from "./api";

export default function Calculator() {
  const [func, setFunc] = useState("x^2"); // Функция по умолчанию
  const [a, setA] = useState(0);
  const [b, setB] = useState(1);
  const [result, setResult] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const integralResult = await calculateIntegral(func, a, b);
    setResult(integralResult);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={func}
          onChange={(e) => setFunc(e.target.value)}
          placeholder="Введите функцию (например, x^2)"
        />
        <input
          type="number"
          value={a}
          onChange={(e) => setA(Number(e.target.value))}
          placeholder="Нижний предел (a)"
        />
        <input
          type="number"
          value={b}
          onChange={(e) => setB(Number(e.target.value))}
          placeholder="Верхний предел (b)"
        />
        <button type="submit">Вычислить</button>
      </form>
      {result !== null && <p>Результат: {result}</p>}
    </div>
  );
}
