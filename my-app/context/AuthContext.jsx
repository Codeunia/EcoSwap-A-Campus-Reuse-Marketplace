"use client";
import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [accountType, setAccountType] = useState(null);

  const login = (role = "user") => {
    setIsLoggedIn(true);
    setAccountType(role);
  };

  const logout = () => {
    setIsLoggedIn(false);
    setAccountType(null);
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, accountType, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
