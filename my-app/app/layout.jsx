import { AuthProvider } from "@/context/AuthContext";
import "./globals.css";
import RouteLoader from "../components/RouteLoader";

export const metadata = {
  title: "EcoSwap",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <RouteLoader />
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
