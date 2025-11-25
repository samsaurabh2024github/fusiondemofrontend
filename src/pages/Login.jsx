import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { login } from "../features/auth/authSlice";
import { useNavigate } from "react-router-dom";
import loginimg1 from "../assets/login1.avif";

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
<div
  className="min-h-screen flex justify-center items-center bg-cover bg-center relative"
  style={{ backgroundImage: `url(${loginimg1})` }}
>
  {/* Dark overlay */}
  <div className="absolute inset-0 bg-black/50"></div>

  {/* Login Card */}
  <div className="relative w-full max-w-md px-6 py-12 mt-20">
    <form
      onSubmit={handleSubmit}
      className="bg-white/20 backdrop-blur-xl border border-white/30 shadow-2xl 
                 p-8 rounded-2xl space-y-6 text-white animate-fadeIn"
    >
      {/* Title */}
      <h2 className="text-4xl font-extrabold text-center drop-shadow-lg">
        FusionMain
      </h2>
      <p className="text-center text-white/80">Welcome back! Please log in.</p>

      {/* Email */}
      <div>
        <label className="block mb-1 text-sm font-medium text-white/80">
          Email
        </label>
        <div className="flex items-center bg-white/20 border border-white/30 
                        rounded-lg p-3 backdrop-blur-sm focus-within:ring-2 focus-within:ring-blue-400">
          <span className="material-icons text-white/70 mr-2">email</span>
          <input
            type="email"
            placeholder="Enter your email"
            className="bg-transparent outline-none w-full text-white placeholder-white/70"
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />
        </div>
      </div>

      {/* Password */}
      <div>
        <label className="block mb-1 text-sm font-medium text-white/80">
          Password
        </label>
        <div className="flex items-center bg-white/20 border border-white/30 
                        rounded-lg p-3 backdrop-blur-sm focus-within:ring-2 focus-within:ring-blue-400">
          <span className="material-icons text-white/70 mr-2">lock</span>
          <input
            type="password"
            placeholder="Enter your password"
            className="bg-transparent outline-none w-full text-white placeholder-white/70"
            onChange={(e) => setForm({ ...form, password: e.target.value })}
          />
        </div>
      </div>

      {/* Button */}
      <button
        disabled={loading}
        className="w-full py-3 rounded-xl bg-blue-600 hover:bg-blue-700 
                   transition transform hover:scale-[1.02] active:scale-[0.98]
                   text-white font-semibold shadow-lg shadow-blue-900/40"
      >
        {loading ? "Logging in..." : "Login"}
      </button>

      {/* Error */}
      {error && (
        <p className="text-red-300 text-center font-medium">{error}</p>
      )}

      {/* Extra links */}
      <p className="text-center mt-4 text-white/70 text-sm">
        Forgot your password?{" "}
        <span className="text-blue-300 hover:underline cursor-pointer">
          Reset here
        </span>
      </p>
    </form>
  </div>
</div>



  );
}
