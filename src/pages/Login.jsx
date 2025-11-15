import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { login } from "../features/auth/authSlice";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, error } = useSelector((state) => state.auth);

  const [form, setForm] = useState({ email: "", password: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login(form)).then((res) => {
      if (!res.error) {
        const role = res.payload.user.role;
        role === "admin"
          ? navigate("/admin/dashboard")
          : navigate("/coach/dashboard");
      }
    });
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg p-8 rounded w-96 space-y-5"
      >
        <h2 className="text-2xl font-bold text-center">FusionMain Login</h2>

        <input
          type="email"
          placeholder="Email"
          className="border p-3 w-full rounded"
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />

        <input
          type="password"
          placeholder="Password"
          className="border p-3 w-full rounded"
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        />

        <button
          disabled={loading}
          className="bg-blue-600 text-white px-4 py-2 w-full rounded"
        >
          {loading ? "Logging in..." : "Login"}
        </button>

        {error && <p className="text-red-600 text-center">{error}</p>}
      </form>
    </div>
  );
}
