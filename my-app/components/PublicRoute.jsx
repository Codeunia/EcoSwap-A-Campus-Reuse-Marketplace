// "use client";

// import { useEffect } from "react";
// import { useRouter } from "next/navigation";
// import { useAuth } from "../context/AuthContext";

// export default function PublicRoute({ children }) {
//   const { isLoggedIn } = useAuth();
//   const router = useRouter();

//   useEffect(() => {
//     if (isLoggedIn) {
//       router.replace("/home");
//     }
//   }, [isLoggedIn, router]);

//   if (isLoggedIn) return null;

//   return children;
// }

"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "../context/AuthContext";

export default function PublicRoute({ children }) {
  const { isLoggedIn, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && isLoggedIn) {
      router.replace("/home");
    }
  }, [loading, isLoggedIn, router]);

  if (loading) return null;

  if (isLoggedIn) return null;

  return children;
}
