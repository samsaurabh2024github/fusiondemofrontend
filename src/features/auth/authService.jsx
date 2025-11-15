import API from "../../api/axiosInstance";

const login = async (userData) => {
  const res = await API.post("/auth/login", userData);
  return res.data;
};

const authService = { login };
export default authService;
