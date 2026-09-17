import axios from "axios";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  timeout: 5000,
  headers: { "Content-Type": "application/json", "X-Custom-Header": "foobar" },
});

export default api;

// const api = axios.create({
//   baseURL: process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:3005",

//   timeout: 5000,

//   headers: {
//     "X-Custom-Header": "foobar",
//     Authorization: "Bearer ${getToken()}",
//     "Access-Control-Allow-Origin": "*", // Allow CORS
//   },
// });
// export default api;

// const authApi = axios.create({
//   baseURL: "https://api.example.com",
//   headers: {
//     Authorization: `Bearer ${getToken()}`,
//   },
// });
