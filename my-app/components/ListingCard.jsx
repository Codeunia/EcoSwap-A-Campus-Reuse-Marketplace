"use client";

import { FaCircleUser } from "react-icons/fa6";
import { useRouter } from "next/navigation";

const ListingCard = ({ listing }) => {
  const router = useRouter();

  const typeLabel =
    listing.type === "sell"
      ? "Sell"
      : listing.type === "donate"
        ? "Donate"
        : "Swap";

  const timeAgo = new Date(listing.createdAt).toLocaleDateString();
  const categorySlug = listing.category
  .toLowerCase()
  .replace(/\s+/g, "-");

  return (
    <div
      onClick={() => router.push(`/items/${listing._id}`)}
      className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group cursor-pointer"
    >
      {/* Image Section */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={listing.photos?.[0] || "/placeholder.jpg"}
          alt={listing.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />

        {/* Type Badge */}
        <div className="absolute top-4 left-4">
          <span
            className={`px-3 py-1 rounded-full text-sm font-medium ${
              typeLabel === "Sell"
                ? "bg-blue-100 text-blue-800"
                : typeLabel === "Donate"
                  ? "bg-green-100 text-green-800"
                  : "bg-purple-100 text-purple-800"
            }`}
          >
            {typeLabel}
          </span>
        </div>

        {/* Price */}
        <div className="absolute top-4 right-4">
          <span className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold text-gray-900">
            {listing.type === "sell" ? `$${listing.price}` : "Free"}
          </span>
        </div>
      </div>

      {/* Details */}
      <div className="p-6">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium text-green-600">
            {listing.category}
          </span>
          <span className="text-sm text-gray-500">{timeAgo}</span>
        </div>

        <h3 className="text-lg font-semibold text-gray-900 mb-3 line-clamp-2">
          {listing.title}
        </h3>
        <p className="text-sm text-gray-600 mb-3 line-clamp-2">
          {listing.description}
        </p>

        {/* Seller */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
              <FaCircleUser className="text-2xl text-grey-600"/>
            </div>
            <span className="text-sm text-gray-600">
              {listing.postedBy?.firstName} {listing.postedBy?.lastName}
            </span>
          </div>
          <span className="text-sm font-medium text-green-600">Available</span>
        </div>

        {/* Button */}
        <div className="mt-4 pt-4 border-t border-gray-100">
          <button
            onClick={(e) => {
              e.stopPropagation();
              router.push(`/categories/${categorySlug}/${listing._id}`);
            }}
            className="w-full bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition-colors font-medium"
          >
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default ListingCard;
