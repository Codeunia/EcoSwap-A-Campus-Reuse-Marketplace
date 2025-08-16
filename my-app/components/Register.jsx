"use client"; 
import { useState } from "react";
import { RiUserLine, RiAdminLine, RiMailLine, RiPhoneLine, RiLockLine, RiEyeLine, RiEyeOffLine } from "react-icons/ri";
import Link from "next/link"; 
import axios from "axios"; 

export default function RegisterForm() {
  const [accountType, setAccountType] = useState("user");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    college: "",
    phone: "",
    password: "",
    confirmPassword: "",
    acceptTerms: false,
  });
  const [message, setMessage] = useState("");

  // handle change for inputs
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  // submit function
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/register", {
        ...formData,
        accountType,
      });
      setMessage(response.data.message);
    } catch (error) {
      setMessage(error.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <div className="flex-1 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl w-full space-y-8">
        <div className="text-center">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center">
              <RiUserLine className="text-white text-2xl" />
            </div>
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Join EcoSwap</h2>
          <p className="text-gray-600">
            Create your account and start sharing with your campus community
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8">
          <form className="space-y-6" onSubmit={handleSubmit}>
            {/* Account Type Toggle */}
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

            {/* Name Fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                  First Name
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center">
                    <RiUserLine className="text-gray-400" />
                  </div>
                  <input
                    id="firstName"
                    name="firstName"
                    type="text"
                    placeholder="Enter first name"
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors"
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                  Last Name
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center">
                    <RiUserLine className="text-gray-400" />
                  </div>
                  <input
                    id="lastName"
                    name="lastName"
                    type="text"
                    placeholder="Enter last name"
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors"
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
            </div>

            {/* Email / College Fields */}
            {accountType === "user" ? (
              <>
                <div>
                  <label htmlFor="collegeEmail" className="block text-sm font-medium text-gray-700 mb-2">
                    College Email Address
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center">
                      <RiMailLine className="text-gray-400" />
                    </div>
                    <input
                      id="collegeEmail"
                      name="email"
                      type="email"
                      placeholder="yourname@college.edu"
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors"
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <p className="text-xs text-gray-400 mt-1">Must be a valid college email address</p>
                </div>

                <div>
                  <label htmlFor="college" className="block text-sm font-medium text-gray-700 mb-2">
                    College/University
                  </label>
                  <select
                    id="college"
                    name="college"
                    className="w-full pl-3 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors"
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select your college...</option>
                    <option value="college1">College 1</option>
                    <option value="college2">College 2</option>
                  </select>
                </div>
              </>
            ) : (
              <div>
                <label htmlFor="adminEmail" className="block text-sm font-medium text-gray-700 mb-2">
                  Admin Email Address
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center">
                    <RiMailLine className="text-gray-400" />
                  </div>
                  <input
                    id="adminEmail"
                    name="email"
                    type="email"
                    placeholder="admin@ecoswap.com"
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors"
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
            )}

            {/* Phone */}
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                Phone Number (Optional)
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center">
                  <RiPhoneLine className="text-gray-400" />
                </div>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="(555) 123-4567"
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors"
                  onChange={handleChange}
                />
              </div>
            </div>

            {/* Password */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                    name="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Create password"
                    className="w-full pl-10 pr-12 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors"
                    onChange={handleChange}
                    required
                  />
                  <button
                    type="button"
                    className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <RiEyeOffLine className="text-gray-400 hover:text-gray-600" /> : <RiEyeLine className="text-gray-400 hover:text-gray-600" />}
                  </button>
                </div>
              </div>

              <div>
                <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-2">
                  Confirm Password
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center">
                    <RiLockLine className="text-gray-400" />
                  </div>
                  <input
                    id="confirmPassword"
                    name="confirmPassword"
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder="Confirm password"
                    className="w-full pl-10 pr-12 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors"
                    onChange={handleChange}
                    required
                  />
                  <button
                    type="button"
                    className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  >
                    {showConfirmPassword ? <RiEyeOffLine className="text-gray-400 hover:text-gray-600" /> : <RiEyeLine className="text-gray-400 hover:text-gray-600" />}
                  </button>
                </div>
              </div>
            </div>

            {/* Terms */}
            <div className="flex items-start">
              <input
                id="acceptTerms"
                type="checkbox"
                required
                name="acceptTerms"
                className="w-4 h-4 text-green-600 border-gray-300 rounded focus:ring-green-500 mt-1"
                onChange={handleChange}
              />
              <label htmlFor="acceptTerms" className="ml-3 text-sm text-gray-700">
                I agree to the <a href="#" className="text-green-600 hover:text-green-700">Terms of Service</a> and <a href="#" className="text-green-600 hover:text-green-700">Privacy Policy</a>
              </label>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full bg-green-600 text-white py-3 px-4 rounded-lg hover:bg-green-700 focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition-colors font-medium whitespace-nowrap cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {accountType === "user" ? "Create User Account" : "Create Admin Account"}
            </button>
          </form>
        </div>

        <p className="text-center text-sm text-gray-600">
          Already have an account?{" "}
          <Link href="/login"
            className="text-green-600 hover:text-green-700 font-medium">
            Sign in here
          </Link>
        </p>
      </div>
    </div>
  );
}


// "use client";
// import { useState } from "react";
// import axios from "axios";

// export default function Register() {
//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     college: "",
//     phone: "",
//     password: "",
//     confirmPassword: "",
//     acceptTerms: false,
//     accountType: "user",
//   });
//   const [message, setMessage] = useState("");

//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     setFormData({ ...formData, [name]: type === "checkbox" ? checked : value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await axios.post("/api/register", formData);
//       setMessage(res.data.message);
//     } catch (err) {
//       setMessage(err.response?.data?.message || "Something went wrong");
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 rounded-lg shadow max-w-md w-full">
//       <input name="firstName" placeholder="First Name" onChange={handleChange} className="border p-2 w-full" />
//       <input name="lastName" placeholder="Last Name" onChange={handleChange} className="border p-2 w-full" />
//       <input name="email" placeholder="Email" onChange={handleChange} className="border p-2 w-full" />
//       <input name="college" placeholder="College" onChange={handleChange} className="border p-2 w-full" />
//       <input name="phone" placeholder="Phone" onChange={handleChange} className="border p-2 w-full" />
//       <input name="password" type="password" placeholder="Password" onChange={handleChange} className="border p-2 w-full" />
//       <input name="confirmPassword" type="password" placeholder="Confirm Password" onChange={handleChange} className="border p-2 w-full" />
//       <label className="flex items-center space-x-2">
//         <input type="checkbox" name="acceptTerms" onChange={handleChange} />
//         <span>Accept Terms</span>
//       </label>
//       <select name="accountType" onChange={handleChange} className="border p-2 w-full">
//         <option value="user">User</option>
//         <option value="admin">Admin</option>
//       </select>
//       <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded w-full">Register</button>
//       <p className="text-center text-sm text-red-500">{message}</p>
//     </form>
//   );
// }
