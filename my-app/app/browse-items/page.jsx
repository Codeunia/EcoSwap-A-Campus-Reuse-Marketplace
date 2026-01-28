"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import axios from "@/lib/axios";
import { Search, Grid, List, User } from "lucide-react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { useSearchParams } from "next/navigation";
import Loader from "../../components/Loader";

// Filter options
const categories = [
  "Textbooks",
  "Electronics",
  "Furniture",
  "Clothing",
  "Sports Equipment",
  "Kitchen Items",
  "Stationery",
  "Home Decor",
  "Grocery",
];

const types = ["sell", "donate", "swap"];
const conditions = ["new", "used", "fair"];

const typeBadgeClasses = {
  sell: "bg-blue-100 text-blue-800",
  donate: "bg-green-100 text-green-800",
  swap: "bg-purple-100 text-purple-800",
};

const conditionClasses = {
  "Like New": "text-green-500",
  Good: "text-yellow-600",
  New: "text-green-600",
  Fair: "text-yellow-700",
};

const BrowseItems = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  // Filters
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("newest");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedType, setSelectedType] = useState("");
  const [selectedCondition, setSelectedCondition] = useState("");
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(1000);
  const ITEMS_PER_PAGE = 9;
  const [visibleCount, setVisibleCount] = useState(ITEMS_PER_PAGE);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const res = await axios.get("/api/items");
        setItems(res.data);
      } catch (err) {
        console.error("Failed to fetch items:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchItems();
  }, []);

  useEffect(() => {
    setVisibleCount(ITEMS_PER_PAGE);
  }, [
    search,
    selectedCategory,
    selectedType,
    selectedCondition,
    minPrice,
    maxPrice,
    sort,
  ]);

  const filteredItems = items
    .filter((item) => item.title.toLowerCase().includes(search.toLowerCase()))
    .filter((item) =>
      selectedCategory
        ? item.category?.toLowerCase() === selectedCategory.toLowerCase()
        : true,
    )
    .filter((item) =>
      selectedType
        ? item.type?.toLowerCase() === selectedType.toLowerCase()
        : true,
    )
    .filter((item) =>
      selectedCondition
        ? item.condition?.toLowerCase() === selectedCondition.toLowerCase()
        : true,
    )
    .filter((item) =>
      item.type === "sell"
        ? item.price >= minPrice && item.price <= maxPrice
        : true,
    )
    .sort((a, b) => {
      if (sort === "newest")
        return new Date(b.createdAt) - new Date(a.createdAt);
      if (sort === "oldest")
        return new Date(a.createdAt) - new Date(b.createdAt);
      if (sort === "price-low") return (a.price || 0) - (b.price || 0);
      if (sort === "price-high") return (b.price || 0) - (a.price || 0);
      if (sort === "alphabetical") return a.title.localeCompare(b.title);
      return 0;
    });

  const searchParams = useSearchParams();
  const categoryFromURL = searchParams.get("category");

  useEffect(() => {
    if (categoryFromURL) {
      setSelectedCategory(
        categories.find(
          (c) => c.toLowerCase() === categoryFromURL.toLowerCase(),
        ) || "",
      );
    }
  }, [categoryFromURL]);

  return (
    <>
      <Header />
      <div className="pt-8 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Browse Items
            </h1>
            <p className="text-xl text-gray-600">
              Discover amazing items shared by your fellow students
            </p>
          </div>

          {/* Search & Sort */}
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <form
              className="flex flex-col md:flex-row gap-4"
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="flex-1 relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="w-5 h-5 text-gray-400" />
                </div>
                <input
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search for textbooks, electronics, furniture..."
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm"
                  type="text"
                />
              </div>
              <div className="flex gap-3">
                <select
                  value={sort}
                  onChange={(e) => setSort(e.target.value)}
                  className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm pr-8 cursor-pointer"
                >
                  <option value="newest">Newest First</option>
                  <option value="oldest">Oldest First</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="alphabetical">A to Z</option>
                </select>
                <button
                  type="submit"
                  className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors font-medium whitespace-nowrap cursor-pointer"
                >
                  Search
                </button>
              </div>
            </form>
          </div>

          {/* Layout */}
          <div className="flex flex-col lg:flex-row gap-8 mt-8">
            {/* Sidebar Filters */}
            <div className="lg:w-1/4">
              <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-24">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-semibold text-gray-900">
                    Filters
                  </h2>
                  <button
                    className="text-green-600 hover:text-green-700 text-sm font-medium cursor-pointer"
                    onClick={() => {
                      setSelectedCategory("");
                      setSelectedType("");
                      setSelectedCondition("");
                      setMinPrice(0);
                      setMaxPrice(1000);
                    }}
                  >
                    Clear All
                  </button>
                </div>

                {/* Category */}
                <div className="mb-6">
                  <h3 className="text-lg font-medium text-gray-900 mb-3">
                    Category
                  </h3>
                  <div className="space-y-2">
                    {categories.map((cat) => (
                      <label
                        key={cat}
                        className="flex items-center cursor-pointer"
                      >
                        <input
                          type="radio"
                          checked={selectedCategory === cat}
                          onChange={() => setSelectedCategory(cat)}
                          className="w-4 h-4 text-green-600 border-gray-300 focus:ring-green-500"
                        />
                        <span className="ml-3 text-gray-700">{cat}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Type */}
                <div className="mb-6">
                  <h3 className="text-lg font-medium text-gray-900 mb-3">
                    Type
                  </h3>
                  <div className="space-y-2">
                    {types.map((t) => (
                      <label
                        key={t}
                        className="flex items-center cursor-pointer"
                      >
                        <input
                          type="radio"
                          checked={selectedType === t}
                          onChange={() => setSelectedType(t)}
                          className="w-4 h-4 text-green-600 border-gray-300 focus:ring-green-500"
                        />
                        <span className="ml-3 text-gray-700">{t}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Price Range */}
                <div className="mb-6">
                  <h3 className="text-lg font-medium text-gray-900 mb-3">
                    Price Range
                  </h3>
                  <div className="flex items-center space-x-3">
                    <input
                      type="number"
                      value={minPrice}
                      onChange={(e) => setMinPrice(Number(e.target.value))}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm"
                    />
                    <span className="text-gray-500">to</span>
                    <input
                      type="number"
                      value={maxPrice}
                      onChange={(e) => setMaxPrice(Number(e.target.value))}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm"
                    />
                  </div>
                </div>

                {/* Condition */}
                <div className="mb-6">
                  <h3 className="text-lg font-medium text-gray-900 mb-3">
                    Condition
                  </h3>
                  <div className="space-y-2">
                    {conditions.map((c) => (
                      <label
                        key={c}
                        className="flex items-center cursor-pointer"
                      >
                        <input
                          type="radio"
                          checked={selectedCondition === c}
                          onChange={() => setSelectedCondition(c)}
                          className="w-4 h-4 text-green-600 border-gray-300 focus:ring-green-500"
                        />
                        <span className="ml-3 text-gray-700">{c}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <button className="w-full bg-green-600 text-white py-3 px-4 rounded-lg hover:bg-green-700 transition-colors font-medium whitespace-nowrap cursor-pointer">
                  Apply Filters
                </button>
              </div>
            </div>

            {/* Items */}
            <div className="lg:w-3/4">
              {loading ? (
                <Loader/>
              ) : (
                <div className="bg-white rounded-2xl shadow-lg p-6">
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <h2 className="text-xl font-semibold text-gray-900">
                        All Items
                      </h2>
                      <p className="text-gray-600">
                        {filteredItems.length} items found
                      </p>
                    </div>
                  </div>

                  {/* Items Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                    {filteredItems.slice(0, visibleCount).map((item) => {
                      const badgeClass = typeBadgeClasses[item.type];
                      const conditionClass =
                        conditionClasses[item.condition] || "text-gray-600";
                      const priceLabel =
                        item.type === "sell"
                          ? `$${item.price}`
                          : item.type === "donate"
                            ? "Free"
                            : "Swap";

                      return (
                        <Link
                          href={`/categories/${item.category.toLowerCase()}/${item._id}`}
                          key={item._id}
                        >
                          <div
                            key={item._id}
                            className="border border-gray-200 rounded-xl hover:shadow-lg transition-all duration-300 overflow-hidden group"
                          >
                            <div className="relative h-48 overflow-hidden">
                              {item.photos?.[0] ? (
                                <img
                                  src={item.photos[0]}
                                  alt={item.title}
                                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                />
                              ) : (
                                <div className="w-full h-full flex items-center justify-center bg-gray-100">
                                  <span className="text-gray-400">
                                    No image
                                  </span>
                                </div>
                              )}
                              <div className="absolute top-3 left-3">
                                <span
                                  className={`px-2 py-1 rounded-full text-xs font-medium ${badgeClass}`}
                                >
                                  {item.type}
                                </span>
                              </div>
                              <div className="absolute top-3 right-3">
                                <span className="bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full text-sm font-semibold text-gray-900">
                                  {priceLabel}
                                </span>
                              </div>
                            </div>
                            <div className="p-4">
                              <div className="flex items-center justify-between mb-2">
                                <span className="text-xs font-medium text-green-600">
                                  {item.category}
                                </span>
                                <span
                                  className={`text-xs font-medium ${conditionClass}`}
                                >
                                  {item.condition}
                                </span>
                              </div>
                              <h3 className="text-sm font-semibold text-gray-900 mb-2 line-clamp-2">
                                {item.title}
                              </h3>
                              <p className="text-xs text-gray-600 mb-3 line-clamp-2">
                                {item.description}
                              </p>
                              <div className="flex items-center justify-between text-xs text-gray-500">
                                <div className="flex items-center space-x-1">
                                  <User className="w-4 h-4" />
                                  <span>
                                    {item.postedBy
                                      ? `${item.postedBy.firstName} ${item.postedBy.lastName}`
                                      : "Anonymous"}
                                  </span>
                                </div>
                                <span>
                                  {new Date(
                                    item.createdAt,
                                  ).toLocaleDateString()}
                                </span>
                              </div>
                              <div className="mt-2 pt-2 border-t border-gray-100">
                                <div className="flex items-center justify-between">
                                  <span className="text-xs text-gray-500">
                                    {item.meetingLocation || "Campus"}
                                  </span>
                                  <span className="text-xs font-medium text-green-600">
                                    {item.availability || "Available"}
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </Link>
                      );
                    })}
                  </div>

                  {filteredItems.length > visibleCount && (
                    <div className="text-center mt-8">
                      <button
                        onClick={() =>
                          setVisibleCount((prev) => prev + ITEMS_PER_PAGE)
                        }
                        disabled={visibleCount >= filteredItems.length}
                        className="bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition-colors font-medium cursor-pointer"
                      >
                        Load More Items
                      </button>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default BrowseItems;
