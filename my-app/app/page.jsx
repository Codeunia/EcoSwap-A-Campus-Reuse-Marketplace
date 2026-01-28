// "use client";
// import { useState } from "react";
// import Header from "../components/Header";
// import Register from "../components/Register";
// import { Toaster } from "react-hot-toast";
// import PublicRoute from "../components/PublicRoute";

// export default function App() {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [showLogin, setShowLogin] = useState(false);

//   return (
//     <>
//     <PublicRoute>

//       <Toaster position="top-right" reverseOrder={false} />
//       <Header
//         isLoggedIn={isLoggedIn}
//         setIsLoggedIn={setIsLoggedIn}
//         setShowLogin={setShowLogin}
//         />

//        (
//         <Register
//           onLoginSuccess={() => {
//             setIsLoggedIn(true); 
//             setShowLogin(false);
//           }}
//           />
//        )
//       </PublicRoute>
//     </>
//   );
// }

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
