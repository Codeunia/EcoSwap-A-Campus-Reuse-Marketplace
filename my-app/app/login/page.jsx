"use client" ; 
import Link from "next/link";
import { useState } from "react";
import { RiLoginCircleLine, RiUserLine, RiAdminLine, RiMailLine, RiLockLine, RiEyeLine, RiGoogleFill, RiFacebookFill , RiEyeOffLine} from "react-icons/ri";
import Header from "../../components/Header";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [accountType, setAccountType] = useState("user");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (accountType === "user") {
      router.push("/"); 
    } else if (accountType === "admin") {
      router.push("/dashboard");
    }
  };

  return (
    <>
    <Header />
    <div className="flex-1 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        {/* Header */}
        <div className="text-center">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center">
              <RiLoginCircleLine className="text-white text-2xl" />
            </div>
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Welcome back!</h2>
          <p className="text-gray-600">Sign in to your EcoSwap account</p>
        </div>

        {/* Form Container */}
        <div className="bg-white rounded-2xl shadow-lg p-8 w-full">
          <form className="space-y-6" onSubmit={handleSubmit}>
            {/* Account Type */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">Account Type</label>
              <div className="flex space-x-4">
                <button
                  type="button"
                  onClick={() => setAccountType("user")}
                  className={`flex-1 py-3 px-4 rounded-lg border-2 transition-all cursor-pointer ${
                    accountType === "user"
                    ? "border-green-500 bg-green-50 text-green-700"
                    : "border-gray-200 hover:border-gray-300"
                  }`}
                >
                  <div className="flex items-center justify-center space-x-2">
                    <RiUserLine className="text-lg" />
                    <span className="font-medium">User</span>
                  </div>
                </button>

                <button
                  type="button"
                  onClick={() => setAccountType("admin")}
                  className={`flex-1 py-3 px-4 rounded-lg border-2 transition-all cursor-pointer ${
                    accountType === "admin"
                      ? "border-green-500 bg-green-50 text-green-700"
                      : "border-gray-200 hover:border-gray-300"
                  }`}
                >
                  <div className="flex items-center justify-center space-x-2">
                    <RiAdminLine className="text-lg" />
                    <span className="font-medium">Admin</span>
                  </div>
                </button>
              </div>
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                {accountType == "admin" ? "Admin Email Address" : "College Email Address"}
                
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center">
                  <RiMailLine className="text-gray-400" />
                </div>
                <input
                  id="email"
                  type="email"
                  placeholder={accountType === "admin" ? "admin@gmail.com" : "yourname@college.edu"}
                  required
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors"
                  />
              </div>
            </div>

            {/* Password */}
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center">
                  <RiLockLine className="text-gray-400" />
                </div>
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  required
                  className="w-full pl-10 pr-12 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
                >
                  {showPassword ? (<RiEyeOffLine className="text-gray-400 hover:text-gray-600" />) :  ( <RiEyeLine className="text-gray-400 hover:text-gray-600" />)}
                </button>
              </div>
            </div>

            {/* Remember & Forgot */}
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  type="checkbox"
                  className="w-4 h-4 text-green-600 border-gray-300 rounded focus:ring-green-500"
                />
                <label htmlFor="remember-me" className="ml-2 text-sm text-gray-700">
                  Remember me
                </label>
              </div>
              <a
                href="/forgot-password"
                className="text-sm text-green-600 hover:text-green-700 cursor-pointer"
              >
                Forgot password?
              </a>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full bg-green-600 text-white py-3 px-4 rounded-lg hover:bg-green-700 focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition-colors font-medium whitespace-nowrap cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
              >
              Sign In as {accountType.charAt(0).toUpperCase() + accountType.slice(1)}
            </button>
          </form>

          {/* Social login */}
          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">Or continue with</span>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-3">
              <button className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-lg bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 cursor-pointer">
                <RiGoogleFill className="text-red-500 text-lg" />
                <span className="ml-2">Google</span>
              </button>
              <button className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-lg bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 cursor-pointer">
                <RiFacebookFill className="text-blue-600 text-lg" />
                <span className="ml-2">Facebook</span>
              </button>
            </div>
          </div>
        </div>

        {/* Sign up link */}
        <p className="text-center text-sm text-gray-600">
          Don't have an account?{" "}
          <Link href="/"
            className="text-green-600 hover:text-green-700 font-medium" >
            Sign up here
          </Link>
        </p>
      </div>
    </div>
    </>
  );
}
