import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000",
  withCredentials: true,
});

export const phoneData = async () => {
  const res = await api.get("/phones");
  return res.data;
};
