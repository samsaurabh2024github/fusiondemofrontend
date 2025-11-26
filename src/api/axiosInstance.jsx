import axios from "axios";

const API = axios.create({
  // baseURL: "http://localhost:5001/api",
   baseURL: "https://fusiondemobackend.onrender.com/api",
});

// Auto include token
API.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

export default API;
