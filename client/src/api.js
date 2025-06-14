import axios from "axios";

const API_URL = "http://localhost:5000/calculate";

export const calculateIntegral = async (func, a, b) => {
  const response = await axios.post(API_URL, { func, a, b });
  return response.data.result; // Вернёт число (результат интеграла)
};
