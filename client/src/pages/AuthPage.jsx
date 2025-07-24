import { useState } from "react";
import Login from "../components/Login";
import Register from "../components/Register";
import { motion, AnimatePresence } from "framer-motion";

export default function AuthPage() {
  const [mode, setMode] = useState("login");

  return (
    <div className="relative w-screen h-screen bg-gradient-to-br from-green-300 via-white to-green-200 flex items-center justify-center overflow-hidden">
      {/* Animated Circle */}
      <motion.div
        className="absolute bg-green-500 rounded-full blur-3xl opacity-30 z-0"
        animate={
          mode === "register"
            ? { width: 300, height: 300, bottom: 40, right: 40 }
            : { width: 600, height: 600, bottom: -200, right: -100 }
        }
        transition={{ duration: 1, ease: "easeInOut" }}
      />

      {/* Form Card */}
      <AnimatePresence mode="wait">
        <motion.div
          key={mode}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -30 }}
          transition={{ duration: 0.5 }}
          className="z-10 w-full max-w-md px-4"
        >
          {mode === "login" ? (
            <Login switchTo={() => setMode("register")} />
          ) : (
            <Register switchTo={() => setMode("login")} />
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
