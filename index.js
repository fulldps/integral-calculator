import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import * as math from "mathjs";

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.post("/calculate", (req, res) => {
  const { func, a, b } = req.body;

  if (!func || a === undefined || b === undefined) {
    return res.status(400).json({ error: "Не хватает данных " });
  }

  try {
    const result = calculateIntegral(func, a, b);
    res.json({ result });
  } catch (error) {
    res.status(400).json({ error: "Ошибка в вычислениях" });
  }
});

function calculateIntegral(func, a, b, n = 1000) {
  const dx = (b - a) / n;
  let sum = 0;

  for (let i = 0; i < n; i++) {
    const x = a + i * dx; // Текущая точка х
    const y = math.evaluate(func, { x }); // Вычисляем y = func(x);
    sum += y * dx;
  }

  return sum.toFixed(1); // Возвращаем результат с 4 знаками после запятой
}

const PORT = 5000;
app.listen(PORT, () => {
  console.log("Сервер запущен на порту 5000");
});
