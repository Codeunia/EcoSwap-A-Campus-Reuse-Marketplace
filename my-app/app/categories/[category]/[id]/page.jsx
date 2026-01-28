"use client";

import { use, useEffect, useState } from "react";
import axios from "@/lib/axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";

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
  const { id } = use(params);
  const router = useRouter();

  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeImage, setActiveImage] = useState(0);

  const [reviewText, setReviewText] = useState("");
  const [rating, setRating] = useState(0);
  const [liked, setLiked] = useState(false);

  const { user, loading: authLoading } = useAuth();

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

  useEffect(() => {
    if (!id) return;

    const viewed = sessionStorage.getItem(`viewed-${id}`);
    if (viewed) return;

    axios.patch(`/api/items/${id}/view`);
    sessionStorage.setItem(`viewed-${id}`, "true");
  }, [id]);

  useEffect(() => {
    if (!item || !user) return;

    const alreadyLiked = item.likes?.some((id) => id.toString() === user._id);

    setLiked(alreadyLiked);
  }, [item, user]);

  if (loading) return null ;
  if (!item) return <p className="text-center pt-32">Item not found</p>;

  return (
    <>
      <Header />

      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-6 py-12">
          {/* BACK */}
          <Link
            href="/browse-items"
            className="inline-flex items-center text-gray-600 hover:text-emerald-600 mb-8"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Browse
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* LEFT – IMAGES */}
            <div>
              <div className="bg-gray-50 rounded-2xl overflow-hidden mb-4 aspect-square">
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

              <div className="grid grid-cols-4 gap-3">
                {item.photos?.map((photo, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveImage(index)}
                    className={`aspect-square rounded-lg border-2 ${
                      activeImage === index
                        ? "border-emerald-500"
                        : "border-gray-200"
                    }`}
                  >
                    <img
                      src={photo}
                      className="object-contain p-2 w-full h-full"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* RIGHT – DETAILS */}
            <div>
              {/* TITLE + META */}
              <div className="flex justify-between mb-4">
                <div>
                  <h1 className="text-3xl font-bold mb-2">{item.title}</h1>
                  {item.postedBy && (
                    <p className="text-sm text-gray-600 mb-2">
                      Sold by{" "}
                      <Link
                        href={`/profile/${item.postedBy._id}`}
                        className="font-semibold text-emerald-600 hover:underline"
                      >
                        {item.postedBy.firstName} {item.postedBy.lastName}
                      </Link>
                    </p>
                  )}
                  <div className="flex gap-4 text-sm text-gray-600">
                    <span className="flex items-center">
                      <MapPin className="w-4 h-4 mr-1" />
                      {item.meetingLocation || "Campus"}
                    </span>
                    <span className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {new Date(item.createdAt).toLocaleDateString()}
                    </span>
                    <span className="flex items-center">
                      <Eye className="w-4 h-4 mr-1" /> {item.views || 0}
                    </span>
                  </div>
                </div>

                {/* LIKE BUTTON */}
                <button
                  onClick={async () => {
                    try {
                      const res = await axios.patch(
                        `/api/items/${item._id}/like`,
                      );

                      setLiked(res.data.liked);
                      setItem({
                        ...item,
                        likes: res.data.likes,
                      });
                    } catch (err) {
                      if (err.response?.status === 401) {
                        alert("Please login to like");
                      }
                    }
                  }}
                  className={`p-3 flex gap-1 transition active:scale-95`}
                >
                  <Heart
                    className={`w-6 h-6 ${
                      liked ? "fill-red-500 text-red-500" : "text-gray-400"
                    }`}
                  />
                  <span>{item.likes?.length || 0}</span>
                </button>
              </div>

              <div className="bg-gray-50 rounded-xl p-6 mb-6">
                <h3 className="text-lg font-bold mb-4">Product Details</h3>

                <div className="space-y-2 text-sm">
                  <p>
                    <span className="font-medium">Category:</span>{" "}
                    {item.category}
                  </p>

                  <p>
                    <span className="font-medium">Condition:</span>{" "}
                    {item.condition}
                  </p>

                  <p>
                    <span className="font-medium">Type:</span>{" "}
                    {item.type === "sell"
                      ? "For Sale"
                      : item.type === "donate"
                        ? "Free"
                        : "Swap"}
                  </p>

                  {item.type === "sell" && (
                    <p className="text-lg font-bold text-emerald-600">
                      Price: ${item.price}
                    </p>
                  )}
                </div>
              </div>

              {/* ACTIONS */}
              <div className="space-y-3">
                {item.type === "sell" && (
                  <button
                    onClick={() => router.push(`/checkout/${item._id}`)}
                    className="w-full py-4 bg-black text-white rounded-xl font-semibold"
                  >
                    Pay Seller Securely
                  </button>
                )}

                <button
                  onClick={() => router.push(`/checkout/${item._id}`)}
                  className="w-full py-4 bg-emerald-600 text-white rounded-xl font-semibold"
                >
                  <MessageCircle className="inline w-5 h-5 mr-2" />
                  Contact Seller
                </button>

                {item.type === "swap" && (
                  <button className="w-full py-3 border-2 border-emerald-600 text-emerald-600 rounded-xl">
                    <Repeat className="inline w-5 h-5 mr-2" />
                    Propose Exchange
                  </button>
                )}
              </div>

              {/* DESCRIPTION */}
              <div className="border-t pt-6 mt-6">
                <h2 className="text-xl font-bold mb-4">Description</h2>
                <p className="text-gray-700">{item.description}</p>
              </div>

              {/* REVIEWS */}
              <div className="border-t pt-6 mt-6">
                <h2 className="text-xl font-bold mb-4">Ratings & Reviews</h2>

                {/* EXISTING REVIEWS */}
                {item.reviews?.map((r, i) => (
                  <div
                    key={i}
                    className="flex gap-3 bg-gray-50 p-4 rounded-lg mb-3"
                  >
                    <div className="w-10 h-10 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold">
                      {r.userName?.[0] || "U"}
                    </div>

                    <div>
                      <p className="font-semibold">{r.userName}</p>
                      <p className="text-yellow-400">{"★".repeat(r.rating)}</p>
                      <p className="text-sm text-gray-700">{r.comment}</p>
                    </div>
                  </div>
                ))}

                {/* STAR SELECT */}
                <div className="flex gap-1 mb-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <span
                      key={star}
                      onClick={() => setRating(star)}
                      className={`text-2xl cursor-pointer ${
                        star <= rating ? "text-yellow-400" : "text-gray-300"
                      }`}
                    >
                      ★
                    </span>
                  ))}
                </div>

                <textarea
                  value={reviewText}
                  onChange={(e) => setReviewText(e.target.value)}
                  className="w-full p-3 border rounded-lg"
                  placeholder="Write a review..."
                />

                <button
                  onClick={async () => {
                    const res = await axios.post(
                      `/api/items/${item._id}/review`,
                      {
                        rating,
                        comment: reviewText,
                      },
                    );

                    setItem({ ...item, reviews: res.data });
                    setReviewText("");
                    setRating(0);
                  }}
                  className="mt-2 bg-emerald-600 text-white px-6 py-2 rounded-lg"
                >
                  Submit Review
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
