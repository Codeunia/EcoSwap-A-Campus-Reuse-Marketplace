"use client";
import { useEffect, useState } from "react";
import axios from "@/lib/axios";

export default function CheckoutPage({ params }) {
  const { id } = params;
  const [item, setItem] = useState(null);

  useEffect(() => {
    axios.get(`/api/items/${id}`).then(res => setItem(res.data));
  }, [id]);

  if (!item) return <p className="pt-32 text-center">Loading...</p>;

  return (
    <div className="max-w-xl mx-auto pt-32 px-6">
      <h1 className="text-3xl font-bold mb-6">Checkout</h1>

      <div className="bg-white shadow rounded-xl p-6 space-y-4">
        <p className="font-semibold">{item.title}</p>
        <p className="text-gray-600">Seller: {item.postedBy?.email}</p>

        <p className="text-2xl font-bold">${item.price}</p>

        <button className="w-full py-3 bg-emerald-600 text-white rounded-lg">
          Pay Now (Stripe / Razorpay)
        </button>
      </div>
    </div>
  );
}
