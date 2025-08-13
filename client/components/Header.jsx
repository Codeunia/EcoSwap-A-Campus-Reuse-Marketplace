import { LuRecycle } from "react-icons/lu";

const Header = () => {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <a
              className="flex items-center space-x-2"
              href="/"
            >
              <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center">
                <LuRecycle className="text-white"/>
              </div>
              <span className="font-['Pacifico'] text-2xl text-green-600">
                EcoSwap
              </span>
            </a>
          </div>

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center space-x-8">
            <a
              className="text-gray-700 hover:text-green-600 transition-colors whitespace-nowrap"
              href="/browse"
            >
              Browse Items
            </a>
            <a
              className="text-gray-700 hover:text-green-600 transition-colors whitespace-nowrap"
              href="/categories"
            >
              Categories
            </a>
            <a
              className="text-gray-700 hover:text-green-600 transition-colors whitespace-nowrap"
              href="/how-it-works"
            >
              How It Works
            </a>
          </nav>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              className="text-gray-700 hover:text-green-600 transition-colors whitespace-nowrap"
              href="/login"
            >
              Login
            </a>
            <a
              className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors whitespace-nowrap cursor-pointer"
              href="/register"
            >
              Sign Up
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button className="text-gray-700 hover:text-green-600 cursor-pointer">
              <i className="ri-menu-line text-xl"></i>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;