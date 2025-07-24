// components/Login.jsx
import { useState } from "react";
import axios from "axios";

export default function Login({ switchTo }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/auth/login", {
        email,
        password,
      });
      alert(res.data.token ? `Logged in! Token: ${res.data.token}` : res.data.message);
    } catch (err) {
      alert(err?.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="w-full max-w-md bg-white/80 p-8 rounded-xl shadow-lg backdrop-blur-md border border-white/30">
      <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">Login</h2>
      <form onSubmit={handleLogin} className="space-y-4">
        <input
          type="email"
          placeholder="Email"
          required
          className="w-full px-4 py-2 rounded border focus:outline-none focus:ring-2 focus:ring-blue-400 text-gray-800"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          required
          className="w-full px-4 py-2 rounded border focus:outline-none focus:ring-2 focus:ring-blue-400 text-gray-800"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded transition"
        >
          Login
        </button>
      </form>
      <p className="text-sm text-center mt-4 text-gray-700">
        Don’t have an account?
        <button onClick={switchTo} className="ml-1 text-blue-600 hover:underline font-semibold">
          Register
        </button>
      </p>
    </div>
  );
}
