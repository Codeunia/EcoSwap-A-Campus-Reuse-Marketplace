"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import ListingCard from "./ListingCard";
import { useRouter } from "next/navigation";
import Loader from "./Loader";

const ListingsSection = () => {
  const [listings, setListings] = useState([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const fetchListings = async () => {
      try {
        const res = await axios.get("/api/items?limit=6");
        setListings(res.data);
      } catch (err) {
        console.error("Failed to fetch listings", err);
      } finally {
        setLoading(false);
      }
    };

    fetchListings();
  }, []);
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Recent Listings
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Check out the latest items posted by students in your campus community
          </p>
        </div>

        {/* Listings */}
        {loading ? (
          <Loader />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {listings.map((listing) => (
              <ListingCard
                key={listing._id}
                listing={listing}
                onViewDetails={() => router.push(`/items/${listing._id}`)}
              />
            ))}
          </div>
        )}

        {/* View All Button */}
        <div className="text-center mt-12">
          <button
            onClick={() => router.push("/browse-items")}
            className="bg-green-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-700 transition-colors"
          >
            View All Listings
          </button>
        </div>

      </div>
    </section>
  );
};

export default ListingsSection;
