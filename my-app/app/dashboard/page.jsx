"use client";
import { Users, ShoppingBag, FileText, DollarSign, Layers } from "lucide-react";
import { motion } from "framer-motion";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend,
  BarChart,
  Bar,
} from "recharts";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

// Activity chart data
const data = [
  { name: "Mon", users: 120, listings: 50 },
  { name: "Tue", users: 200, listings: 70 },
  { name: "Wed", users: 150, listings: 60 },
  { name: "Thu", users: 220, listings: 80 },
  { name: "Fri", users: 280, listings: 100 },
  { name: "Sat", users: 190, listings: 70 },
  { name: "Sun", users: 140, listings: 50 },
];

// Categories data
const categoriesData = [
  { name: "Clothing", value: 15, color: "#FBBF24" },
  { name: "Electronics", value: 25, color: "#3B82F6" },
  { name: "Furniture", value: 18, color: "#8B5CF6" },
  { name: "Other", value: 5, color: "#6B7280" },
  { name: "Sports", value: 10, color: "#EF4444" },
  { name: "Textbooks", value: 27, color: "#10B981" },
];

// Transactions data
const transactionsData = [
  { week: "Week 1", donate: 32, sell: 45, swap: 30 },
  { week: "Week 2", donate: 38, sell: 52, swap: 35 },
  { week: "Week 3", donate: 42, sell: 48, swap: 31 },
  { week: "Week 4", donate: 45, sell: 61, swap: 37 },
];

export default function AdminDashboard() {
  const stats = [
    { title: "Total Users", value: "2,847", change: "+12%", positive: true, icon: <Users /> },
    { title: "Active Listings", value: "1,234", change: "+8%", positive: true, icon: <ShoppingBag /> },
    { title: "Completed Transactions", value: "891", change: "+15%", positive: true, icon: <FileText /> },
    { title: "Reports Pending", value: "23", change: "-5%", positive: false, icon: <FileText /> },
    { title: "Revenue Generated", value: "$12,450", change: "+22%", positive: true, icon: <DollarSign /> },
    { title: "Active Categories", value: "8", change: "0%", positive: true, icon: <Layers /> },
  ];

  return (
    <>
      <Header />
      <div className="p-6 bg-gray-50 min-h-screen">
        <div className="max-w-7xl mx-auto space-y-8">
          {/* Header */}
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-bold text-gray-800">Dashboard Overview</h1>
              <p className="text-gray-500">Monitor your EcoSwap platform performance</p>
            </div>
            <div className="flex items-center space-x-3">
              <select className="border rounded-lg px-3 py-2 text-gray-600">
                <option>Last 7 days</option>
                <option>Last 30 days</option>
                <option>Last 90 days</option>
              </select>
              <button className="bg-green-600 text-white px-4 py-2 rounded-lg font-medium shadow hover:bg-green-700">
                Export Report
              </button>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {stats.map((stat) => (
              <motion.div
                key={stat.title}
                whileHover={{ scale: 1.02 }}
                className="bg-white rounded-xl p-6 shadow flex items-center justify-between"
              >
                <div>
                  <p className="text-gray-500 text-sm">{stat.title}</p>
                  <h2 className="text-2xl font-bold text-gray-800">{stat.value}</h2>
                  <p
                    className={`text-sm font-medium mt-1 ${
                      stat.positive ? "text-green-600" : "text-red-600"
                    }`}
                  >
                    {stat.change} vs last period
                  </p>
                </div>
                <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                  {stat.icon}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Charts & Activity */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* User Activity Trends */}
            <div className="bg-white rounded-xl p-6 shadow col-span-2">
              <h3 className="text-lg font-semibold mb-4">User Activity Trends</h3>
              <ResponsiveContainer width="100%" height={300}>
                <AreaChart data={data}>
                  <defs>
                    <linearGradient id="users" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#10B981" stopOpacity={0.8} />
                      <stop offset="95%" stopColor="#10B981" stopOpacity={0} />
                    </linearGradient>
                    <linearGradient id="listings" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.8} />
                      <stop offset="95%" stopColor="#3B82F6" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Area type="monotone" dataKey="users" stroke="#10B981" fill="url(#users)" />
                  <Area type="monotone" dataKey="listings" stroke="#3B82F6" fill="url(#listings)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>

            {/* Recent Activity */}
            <div className="bg-white rounded-xl p-6 shadow">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold">Recent Activity</h3>
                <button className="text-green-600 text-sm font-medium">View All</button>
              </div>
              <ul className="space-y-4 text-sm text-gray-700">
                <li>
                  <p className="font-medium text-green-600">New User Registration</p>
                  <p>Sarah Johnson from MIT joined EcoSwap</p>
                  <span className="text-xs text-gray-500">2 minutes ago</span>
                </li>
                <li>
                  <p className="font-medium text-blue-600">New Listing Posted</p>
                  <p>MacBook Pro 13&quot; listed by John Doe</p>
                  <span className="text-xs text-gray-500">15 minutes ago</span>
                </li>
                <li>
                  <p className="font-medium text-purple-600">Transaction Completed</p>
                  <p>Order #12345 was successfully completed</p>
                  <span className="text-xs text-gray-500">1 hour ago</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Categories & Transactions */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Popular Categories */}
            <div className="bg-white rounded-xl p-6 shadow">
              <h3 className="text-lg font-semibold mb-4">Popular Categories</h3>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={categoriesData}
                    dataKey="value"
                    nameKey="name"
                    cx="50%"
                    cy="50%"
                    outerRadius={100}
                    label
                  >
                    {categoriesData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Legend />
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>

            {/* Transaction Types */}
            <div className="bg-white rounded-xl p-6 shadow">
              <h3 className="text-lg font-semibold mb-4">Transaction Types</h3>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={transactionsData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="week" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="sell" fill="#10B981" />
                  <Bar dataKey="donate" fill="#3B82F6" />
                  <Bar dataKey="swap" fill="#8B5CF6" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}