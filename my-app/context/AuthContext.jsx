// "use client";

// import { createContext, useContext, useEffect, useState } from "react";
// import axios from "@/lib/axios";

// const AuthContext = createContext(null);

// export const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchUser = async () => {
//       try {
//         const res = await api.get("/api/me");
//         setUser(res.data);
//       } catch {
//         setUser(null);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchUser();
//   }, []);

//   const login = (userData) => {
//     setUser(userData);
//   };

//   const logout = async () => {
//     await axios.post("/api/logout");
//     setUser(null);
//   };

//   return (
//     <AuthContext.Provider
//       value={{ user, isLoggedIn: !!user, loading, login, logout }}
//     >
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export const useAuth = () => useContext(AuthContext);

"use client";

import { createContext, useContext, useEffect, useState } from "react";
import axios from "@/lib/axios";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // 🔥 RESTORE SESSION FROM COOKIE
  useEffect(() => {
    const loadUser = async () => {
      try {
        const res = await axios.get("/api/me");
        setUser(res.data.user);
      } catch {
        setUser(null);
      } finally {
        setLoading(false);
      }
    };

    loadUser();
  }, []);

  const login = (userData) => {
    setUser(userData);
  };

  const logout = async () => {
    await axios.post("/api/logout");
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isLoggedIn: !!user,
        loading,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
