"use client";

import Header from "../components/Header";
import Register from "../components/Register";
import { Toaster } from "react-hot-toast";
import PublicRoute from "../components/PublicRoute";

export default function App() {
  return (
    <PublicRoute>
      <Toaster position="top-right" />
      <Header />
      <Register />
    </PublicRoute>
  );
}
