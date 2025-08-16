// import './globals.css'

// export const metadata = {
//   title: 'EcoSwap',
//   description: 'Campus Reuse Marketplace'
// }

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       <body className="flex flex-col min-h-screen">
//         <main className="flex-grow">{children}</main>
//       </body>
//     </html>
//   )
// }

// app/layout.js
import { AuthProvider } from "../context/AuthContext";
import "./globals.css";

export const metadata = {
  title: "EcoSwap",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
