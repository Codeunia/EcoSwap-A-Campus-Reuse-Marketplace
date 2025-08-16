import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { LuRecycle } from "react-icons/lu";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Brand & Social */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center">
                <LuRecycle/>
              </div>
              <span className="font-['Pacifico'] text-2xl text-green-400">
                EcoSwap
              </span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Connecting college students to share, swap, and save through
              sustainable reuse. Building stronger campus communities one
              exchange at a time.
            </p>
            <div className="flex space-x-4">
              <a className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors cursor-pointer">
                <FaFacebookF className="text-lg" />
              </a>
              <a className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors cursor-pointer">
                <FaTwitter className="text-lg" />
              </a>
              <a className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors cursor-pointer">
                <FaInstagram className="text-lg" />
              </a>
              <a className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors cursor-pointer">
                <FaLinkedinIn className="text-lg" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li><a className="text-gray-400 hover:text-green-400 transition-colors" href="/browse">Browse Items</a></li>
              <li><a className="text-gray-400 hover:text-green-400 transition-colors" href="/categories">Categories</a></li>
              <li><a className="text-gray-400 hover:text-green-400 transition-colors" href="/post-item">Post an Item</a></li>
              <li><a className="text-gray-400 hover:text-green-400 transition-colors" href="/how-it-works">How It Works</a></li>
              <li><a className="text-gray-400 hover:text-green-400 transition-colors" href="/safety">Safety Tips</a></li>
            </ul>
          </div>

          {/* Account */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Account</h3>
            <ul className="space-y-3">
              <li><a className="text-gray-400 hover:text-green-400 transition-colors" href="/login">Sign In</a></li>
              <li><a className="text-gray-400 hover:text-green-400 transition-colors" href="/register">Create Account</a></li>
              <li><a className="text-gray-400 hover:text-green-400 transition-colors" href="/dashboard">My Dashboard</a></li>
              <li><a className="text-gray-400 hover:text-green-400 transition-colors" href="/profile">Profile Settings</a></li>
              <li><a className="text-gray-400 hover:text-green-400 transition-colors" href="/messages">Messages</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Support</h3>
            <ul className="space-y-3">
              <li><a className="text-gray-400 hover:text-green-400 transition-colors" href="/help">Help Center</a></li>
              <li><a className="text-gray-400 hover:text-green-400 transition-colors" href="/contact">Contact Us</a></li>
              <li><a className="text-gray-400 hover:text-green-400 transition-colors" href="/faq">FAQ</a></li>
              <li><a className="text-gray-400 hover:text-green-400 transition-colors" href="/terms">Terms of Service</a></li>
              <li><a className="text-gray-400 hover:text-green-400 transition-colors" href="/privacy">Privacy Policy</a></li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-center md:text-left mb-4 md:mb-0">
              © 2025 EcoSwap. All rights reserved. Made with ❤️ for college students.
            </p>
            <div className="flex space-x-6">
              <a className="text-gray-400 hover:text-green-400 transition-colors text-sm" href="/terms">Terms</a>
              <a className="text-gray-400 hover:text-green-400 transition-colors text-sm" href="/privacy">Privacy</a>
              <a className="text-gray-400 hover:text-green-400 transition-colors text-sm" href="/cookies">Cookies</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;