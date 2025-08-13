import ListingCard from "./ListingCard";

const listingsData = [
  {
    image: "/calculus.jpg",
    title: "Calculus Textbook - 8th Edition",
    type: "Sell",
    price: "$45",
    category: "Textbooks",
    timeAgo: "2 hours ago",
    seller: "Sarah M.",
  },
  {
    image: "/laptop.jpg",
    title: "MacBook Air M1 - Excellent Condition",
    type: "Sell",
    price: "$850",
    category: "Electronics",
    timeAgo: "4 hours ago",
    seller: "Mike R.",
  },
  {
    image: "/desk.jpg",
    title: "Desk Chair - Perfect for Studying",
    type: "Donate",
    price: "Free",
    category: "Furniture",
    timeAgo: "6 hours ago",
    seller: "Jessica L.",
  },
  {
    image: "/chemistry.jpg",
    title: "Chemistry Lab Equipment Set",
    type: "Swap",
    price: "Swap",
    category: "Academic",
    timeAgo: "8 hours ago",
    seller: "David K.",
  },
  {
    image: "/winterjacket.jpg",
    title: "Winter Jacket - Size Medium",
    type: "Sell",
    price: "$25",
    category: "Clothing",
    timeAgo: "12 hours ago",
    seller: "Emma T.",
  },
  {
    image: "/basketball.jpg",
    title: "Basketball and Sports Gear",
    type: "Sell",
    price: "$30",
    category: "Sports",
    timeAgo: "1 day ago",
    seller: "Ryan P.",
  },
];

const ListingsSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Recent Listings
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Check out the latest items posted by students in your campus
            community
          </p>
        </div>

        {/* Grid of Listings */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {listingsData.map((listing, index) => (
            <ListingCard key={index} listing={listing} />
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <a
            className="bg-green-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-700 transition-colors whitespace-nowrap cursor-pointer"
            href="#"
          >
            View All Listings
          </a>
        </div>
      </div>
    </section>
  );
};

export default ListingsSection;