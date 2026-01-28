import Footer from "../../components/Footer";
import Header from "../../components/Header";
import {
  FaBookOpen,
  FaLaptop,
  FaCouch,
  FaTshirt,
  FaFutbol,
  FaUtensils,
  FaPenFancy,
  FaHome,
  FaShoppingBag,
  FaUser,
  FaExchangeAlt,
  FaLeaf,
} from "react-icons/fa";
import Link from "next/link";

const categories = [
  {
    name: "Textbooks",
    description:
      "Academic books, study guides, reference materials, and course-specific textbooks",
    tags: ["Engineering", "Business", "Science", "+3 more"],
    image: "/books.jpg",
    icon: <FaBookOpen className="text-green-600 text-xl" />,
    items: "2,450 items"
  },
  {
    name: "Electronics",
    description:
      "Laptops, tablets, phones, calculators, and other electronic gadgets",
    tags: ["Laptops", "Mobiles", "Calculators", "+5 more"],
    image:
      "/electronics.jpg",
    icon: <FaLaptop className="text-green-600 text-xl" />,
    items: "1,980 items"
  },
  {
    name: "Furniture",
    description: "Desks, chairs, shelves, and dorm furniture essentials",
    tags: ["Desks", "Chairs", "Shelves", "+4 more"],
    image:
      "/furniture.jpg",
    icon: <FaCouch className="text-green-600 text-xl" />,
    items: "860 items"
  },
  {
    name: "Clothing",
    description:
      "Casual wear, formal attire, and accessories for students",
    tags: ["Shirts", "Jackets", "Shoes", "+6 more"],
    image:
      "/clothing.jpg",
    icon: <FaTshirt className="text-green-600 text-xl" />,
    items: "3,120 items"
  },
  {
    name: "Sports Equipment",
    description: "Gear for indoor and outdoor sports activities",
    tags: ["Football", "Badminton", "Gym", "+2 more"],
    image:
      "/sports.jpg",
    icon: <FaFutbol className="text-green-600 text-xl" />,
    items: "780 items"
  },
  {
    name: "Kitchen Items",
    description: "Utensils, cookware, and appliances for student kitchens",
    tags: ["Plates", "Pans", "Cups", "+5 more"],
    image:
      "/kitchen.jpg",
    icon: <FaUtensils className="text-green-600 text-xl" />,
    items: "1,420 items"
  },
  {
    name: "Stationery",
    description: "Notebooks, pens, art supplies, and other study tools",
    tags: ["Notebooks", "Pens", "Art", "+4 more"],
    image:
      "/calculus.jpg",
    icon: <FaPenFancy className="text-green-600 text-xl" />,
    items: "2,890 items"
  },
  {
    name: "Home Decor",
    description: "Posters, plants, and decorative items for dorm rooms",
    tags: ["Posters", "Plants", "Lights", "+3 more"],
    image:
      "/basketball.jpg",
    icon: <FaHome className="text-green-600 text-xl" />,
    items: "950 items"
  },
];

const CategoriesPage = () => {
  return (
    <>
      <Header />
      <div className="pt-8 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              All Categories
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our complete collection of items shared by students across
              your campus community
            </p>
          </div>

          {/* Category Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {categories.map((cat, index) => (
              <Link
                key={index}
                className="cursor-pointer"
                href={`/browse-items?category=${cat.name.toLowerCase()}`}
              >
                <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group h-full">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      alt={cat.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      src={cat.image}
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300"></div>
                    <div className="absolute top-4 left-4">
                      <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg">
                        {cat.icon}
                      </div>
                    </div>
                    <div className="absolute top-4 right-4">
                      <div className="bg-green-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                        {cat.items}
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {cat.name}
                    </h3>
                    <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                      {cat.description}
                    </p>
                    <div className="mb-4">
                      <div className="flex flex-wrap gap-1">
                        {cat.tags.map((tag, i) => (
                          <span
                            key={i}
                            className={`text-xs ${
                              tag.startsWith("+")
                                ? "text-gray-500 px-2 py-1"
                                : "bg-gray-100 text-gray-600 px-2 py-1 rounded-full"
                            }`}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="flex items-center text-green-600 font-medium">
                      <span className="whitespace-nowrap">
                        Browse {cat.name}
                      </span>
                      <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">
                        →
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Platform Statistics */}
          <div className="mt-20 bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-8 md:p-12">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Platform Statistics
              </h2>
              <p className="text-xl text-gray-600">
                See how our community is making a difference
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaShoppingBag className="text-white text-2xl" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">
                  12,860
                </div>
                <div className="text-gray-600">Total Items</div>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaUser className="text-white text-2xl" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">
                  3,240
                </div>
                <div className="text-gray-600">Active Students</div>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaExchangeAlt className="text-white text-2xl" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">
                  8,950
                </div>
                <div className="text-gray-600">Successful Swaps</div>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaLeaf className="text-white text-2xl" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">
                  $89,420
                </div>
                <div className="text-gray-600">Money Saved</div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="mt-16 bg-white rounded-2xl shadow-lg p-8 md:p-12 text-center">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Can't Find What You're Looking For?
            </h3>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Post a request and let your campus community know what you need.
              Someone might have exactly what you're looking for!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                className="bg-green-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-700 transition-colors whitespace-nowrap cursor-pointer"
                href="/post-item"
              >
                Post a Request
              </a>
              <a
                className="bg-white text-green-600 border-2 border-green-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-50 transition-colors whitespace-nowrap cursor-pointer"
                href="/browse-items"
              >
                Browse All Items
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CategoriesPage;
