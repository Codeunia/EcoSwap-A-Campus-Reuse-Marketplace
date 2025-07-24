import { useState } from "react";
import axios from "axios";

export default function Register({ switchTo }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/auth/register", {
        name,
        email,
        password,
      });
      alert(res.data.message || "Registered!");
    } catch (err) {
      alert(err?.response?.data?.message || "Registration failed");
    }
  };

  return (
    <div className="w-full bg-white p-8 rounded-xl shadow-lg border">
      <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">Create Account</h2>
      <form onSubmit={handleRegister} className="space-y-4">
        <input
          type="text"
          placeholder="Name"
          required
          className="w-full px-4 py-2 rounded border bg-white text-black focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          required
          className="w-full px-4 py-2 rounded border bg-white text-black focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          required
          className="w-full px-4 py-2 rounded border bg-white text-black focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded transition"
        >
          Register
        </button>
      </form>
      <p className="text-sm text-center mt-4 text-gray-700">
        Already have an account?
        <button onClick={switchTo} className="ml-1 text-blue-600 hover:underline font-semibold bg-white">
          Login
        </button>
      </p>
    </div>
  );
}
