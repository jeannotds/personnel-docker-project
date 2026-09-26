import axios from "axios";

const api = axios.create({
  baseURL:
    typeof window === "undefined"
      ? process.env.INTERNAL_API_URL
      : process.env.NEXT_PUBLIC_API_URL,
  timeout: 5000,
  headers: { "Content-Type": "application/json", "X-Custom-Header": "foobar" },
});

export default api;
