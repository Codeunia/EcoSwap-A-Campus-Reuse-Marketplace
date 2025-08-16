import Link from "next/link";
import toast from "react-hot-toast";
import { LuRecycle } from "react-icons/lu";

const Header = ({ isLoggedIn, setIsLoggedIn, setShowLogin }) => {
  const handleProtectedClick = (e) => {
    if (!isLoggedIn) {
      e.preventDefault();
      toast.error("Please log in to access this page.");
    }
  };

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <button
              onClick={() => setShowLogin(true)}
              className="flex items-center space-x-2"
            >
              <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center">
                <LuRecycle className="text-white" />
              </div>
              <span className="font-['Pacifico'] text-2xl text-green-600">
                EcoSwap
              </span>
            </button>
          </div>

          {/* Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href={isLoggedIn ? "/browse-items" : "/"}
              onClick={handleProtectedClick}
              className="text-gray-700 hover:text-green-600 transition-colors whitespace-nowrap"
            >
              Browse Items
            </Link>
            <Link
              href={isLoggedIn ? "/categories" : "/"}
              onClick={handleProtectedClick}
              className="text-gray-700 hover:text-green-600 transition-colors whitespace-nowrap"
            >
              Categories
            </Link>
            <Link
              href={isLoggedIn ? "/how-it-works" : "/"}
              onClick={handleProtectedClick}
              className="text-gray-700 hover:text-green-600 transition-colors whitespace-nowrap"
            >
              How It Works
            </Link>
          </nav>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            {!isLoggedIn ? (
              <>
                <Link href="/login"
                  onClick={() => setShowLogin(true)}
                  className="text-gray-700 hover:text-green-600 transition-colors whitespace-nowrap"
                >
                  Login
                </Link>
                <Link href="/"
                  onClick={() => setShowLogin(true)}
                  className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors whitespace-nowrap cursor-pointer"
                >
                  Sign Up
                </Link>
              </>
            ) : (
              <button
                onClick={() => {
                  setIsLoggedIn(false);
                  toast.success("Logged out successfully");
                }}
                className="text-red-600 hover:text-red-800 transition-colors whitespace-nowrap"
              >
                Logout
              </button>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
