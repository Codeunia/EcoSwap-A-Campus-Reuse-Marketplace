"use client";

import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

import Link from "next/link";
import {
  ArrowLeft,
  MapPin,
  Clock,
  Eye,
  Heart,
  Repeat,
  MessageCircle,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ItemDetailsPage({ params }) {
  const { id , category} = React.use(params);

  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    if (!id) return;

    const fetchItem = async () => {
      try {
        const res = await axios.get(`/api/items/${id}`);
        setItem(res.data);
      } catch (err) {
        console.error("Failed to fetch item", err);
      } finally {
        setLoading(false);
      }
    };
    fetchItem();
  }, [id]);

  if (loading) {
    return <p className="text-center pt-32">Loading item...</p>;
  }

  if (!item) {
    return <p className="text-center pt-32">Item not found</p>;
  }

  return (
    <>
      <Header />

      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-6 py-12">

          {/* Back */}
          <Link
            href="/browse-items"
            className="inline-flex items-center text-gray-600 hover:text-emerald-600 mb-8 transition"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Browse
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

            {/* LEFT – Images */}
            <div>
              <div className="bg-gray-50 rounded-2xl overflow-hidden mb-4 aspect-square relative">
                {item.photos?.length ? (
                  <img
                    src={item.photos[activeImage]}
                    alt={item.title}
                    className="object-contain p-8 w-full h-full"
                  />
                ) : (
                  <div className="flex items-center justify-center h-full text-gray-400">
                    No image available
                  </div>
                )}
              </div>

              {/* Thumbnails */}
              <div className="grid grid-cols-4 gap-3">
                {item.photos?.map((photo, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveImage(index)}
                    className={`aspect-square rounded-lg overflow-hidden border-2 transition-all
                      ${
                        activeImage === index
                          ? "border-emerald-500"
                          : "border-gray-200 hover:border-gray-300"
                      }`}
                  >
                    <img
                      src={photo}
                      alt={`preview-${index}`}
                      className="object-contain p-2 w-full h-full bg-gray-50"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* RIGHT – Details */}
            <div>
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h1 className="text-3xl font-bold text-gray-900 mb-2">
                    {item.title}
                  </h1>

                  <div className="flex items-center gap-4 text-sm text-gray-600">
                    <span className="flex items-center">
                      <MapPin className="w-4 h-4 mr-1" />
                      {item.meetingLocation || "Campus"}
                    </span>
                    <span className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {new Date(item.createdAt).toLocaleDateString()}
                    </span>
                    <span className="flex items-center">
                      <Eye className="w-4 h-4 mr-1" /> Views
                    </span>
                  </div>
                </div>

                <button className="p-3 rounded-full hover:bg-gray-100">
                  <Heart className="w-6 h-6 text-gray-600" />
                </button>
              </div>

              {/* Price Card */}
              <div className="bg-emerald-50 rounded-xl p-6 mb-6">
                <div className="text-3xl font-bold text-emerald-600 mb-2">
                  {item.type === "sell"
                    ? `$${item.price}`
                    : item.type === "donate"
                    ? "Free"
                    : "Swap"}
                </div>

                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 bg-white rounded-full text-sm font-medium">
                    {item.condition}
                  </span>
                  <span className="px-3 py-1 bg-white rounded-full text-sm font-medium">
                    {item.category}
                  </span>
                </div>
              </div>

              {/* Actions */}
              <div className="space-y-3">
                {item.type === "sell" && (
                  <button className="w-full py-4 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl font-semibold text-lg">
                    Buy Now
                  </button>
                )}

                <div className="grid grid-cols-2 gap-3">
                  <button className="py-3 bg-white hover:bg-gray-50 text-emerald-600 border-2 border-emerald-600 rounded-xl font-semibold">
                    <Repeat className="inline w-5 h-5 mr-2" />
                    Propose Exchange
                  </button>

                  <button className="py-3 bg-white hover:bg-gray-50 text-gray-900 border-2 border-gray-300 rounded-xl font-semibold">
                    <MessageCircle className="inline w-5 h-5 mr-2" />
                    Contact Seller
                  </button>
                </div>
              </div>

              {/* Description */}
              <div className="border-t border-gray-200 pt-6 mt-6">
                <h2 className="text-xl font-bold mb-4">Description</h2>
                <p className="text-gray-700 leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Seller */}
              <div className="border-t border-gray-200 pt-6 mt-6">
                <h2 className="text-xl font-bold mb-4">Seller Information</h2>
                <p className="text-gray-700">
                  {item.postedBy?.name || "Anonymous"}
                </p>
              </div>

            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
