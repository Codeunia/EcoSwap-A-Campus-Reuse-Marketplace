"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import toast from "react-hot-toast";
import { LuRecycle } from "react-icons/lu";
import { useAuth } from "../context/AuthContext";

export default function Header() {
  const { isLoggedIn, accountType, logout } = useAuth();
  const [showMenu, setShowMenu] = useState(false);
  const router = useRouter();
  const menuRef = useRef(null);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setShowMenu(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleProtectedClick = (e, path) => {
    if (!isLoggedIn) {
      e.preventDefault();
      toast.error("Please log in to access this page.");
      router.push("/login");
      return;
    }
    router.push(path);
  };

  const { user } = useAuth();
  console.log("AUTH USER:", user);

  const getInitials = () => {
    if (!user) return "U";
    if (user.firstName && user.lastName)
      return `${user.firstName[0]}${user.lastName[0]}`.toUpperCase();
    if (user.firstName)
      return user.firstName[0].toUpperCase();
    if (user.email) return user.email[0].toUpperCase();
    return "U";
  };

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div
            className="flex items-center cursor-pointer"
            onClick={() => router.push("/home")}
          >
            <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center">
              <LuRecycle className="text-white" />
            </div>
            <span className="ml-2 font-['Pacifico'] text-2xl text-green-600">
              EcoSwap
            </span>
          </div>

          {/* Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={(e) => handleProtectedClick(e, "/browse-items")}
              className="text-gray-700 hover:text-green-600 transition-colors"
            >
              Browse Items
            </button>
            <button
              onClick={(e) => handleProtectedClick(e, "/categories")}
              className="text-gray-700 hover:text-green-600 transition-colors"
            >
              Categories
            </button>
            <button
              onClick={(e) => handleProtectedClick(e, "/how-it-works")}
              className="text-gray-700 hover:text-green-600 transition-colors"
            >
              How It Works
            </button>
          </nav>

          {/* Auth / Profile */}
          <div className="hidden md:flex items-center space-x-4 relative">
            {!isLoggedIn ? (
              <>
                <Link
                  href="/login"
                  className="text-gray-700 hover:text-green-600 transition-colors"
                >
                  Login
                </Link>
                <Link
                  href="/"
                  className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors"
                >
                  Sign Up
                </Link>
              </>
            ) : (
              <div ref={menuRef} className="relative">
                {/* Circle Avatar */}
                <div
                  className="w-10 h-10 rounded-full bg-green-600 text-white flex items-center justify-center cursor-pointer"
                  onClick={() => setShowMenu((prev) => !prev)}
                >
                  {getInitials()}
                </div>

                {/* Dropdown */}
                {showMenu && (
                  <div className="absolute right-0 mt-2 w-40 bg-white border border-gray-200 rounded-lg shadow-lg">
                    <button
                      onClick={() => {
                        logout();
                        toast.success("Logged out successfully");
                        router.push("/");
                      }}
                      className="w-full text-left px-4 py-2 text-red-600 hover:bg-gray-100 rounded-lg"
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
