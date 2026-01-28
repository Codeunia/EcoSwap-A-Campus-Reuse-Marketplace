"use client";

import { useEffect, useState } from "react";
import { use } from "react";
import axios from "@/lib/axios";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function SellerProfile({ params }) {
  const { id } = use(params);
  const [seller, setSeller] = useState(null);
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchProfile = async () => {
      const res = await axios.get(`/api/users/${id}`);
      setSeller(res.data.user);
      setItems(res.data.items);
    };

    fetchProfile();
  }, [id]);

  if (!seller) return null;

  return (
    <>
      <Header />
      <main className="max-w-5xl mx-auto px-6 py-12">
        <div className="mb-8">
          <h1 className="text-3xl font-bold">
            {seller.firstName} {seller.lastName}
          </h1>
          <p className="text-gray-600">{seller.email}</p>
        </div>

        <h2 className="text-xl font-semibold mb-4">Items by Seller</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map((item) => (
            <div key={item._id} className="border rounded-lg p-4">
              <img
                src={item.photos?.[0]}
                className="h-40 w-full object-cover rounded mb-2"
              />
              <h3 className="font-semibold">{item.title}</h3>
              <p className="text-sm text-gray-600">{item.category}</p>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
