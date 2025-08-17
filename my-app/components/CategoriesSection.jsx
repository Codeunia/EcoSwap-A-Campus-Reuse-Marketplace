import {
  IoBookOutline,
  IoPhonePortraitOutline,
  IoHomeOutline,
  IoShirtOutline,
  IoBasketballOutline,
  IoRestaurantOutline,
  IoArrowForwardOutline,
} from "react-icons/io5";

const CategoriesSection = () => {
  const categories = [
    {
      name: "Textbooks",
      href: "/category/textbooks",
      img: "/books.jpg",  
      icon: <IoBookOutline className="text-green-600 text-xl" />,
      items: "2,450",
    },
    {
      name: "Electronics",
      href: "/category/electronics",
      img: "/electronics.jpg",
      icon: <IoPhonePortraitOutline className="text-green-600 text-xl" />,
      items: "1,800",
    },
    {
      name: "Furniture",
      href: "/category/furniture",
      img: "/furniture.jpg",
      icon: <IoHomeOutline className="text-green-600 text-xl" />,
      items: "950",
    },
    {
      name: "Clothing",
      href: "/category/clothing",
      img: "/clothing.jpg",
      icon: <IoShirtOutline className="text-green-600 text-xl" />,
      items: "3,200",
    },
    {
      name: "Sports Equipment",
      href: "/category/sports",
      img: "/sports.jpg",
      icon: <IoBasketballOutline className="text-green-600 text-xl" />,
      items: "500",
    },
    {
      name: "Kitchen Items",
      href: "/category/kitchen",
      img: "/kitchen.jpg",
      icon: <IoRestaurantOutline className="text-green-600 text-xl" />,
      items: "1,100",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Browse by Category
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Find exactly what you need from thousands of items shared by your fellow students
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((cat, idx) => (
            <a key={idx} className="cursor-pointer" href={`/categories/${cat.name.toLowerCase()}`}>
              <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={cat.img}
                    alt={cat.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300"></div>
                  <div className="absolute top-4 left-4">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg">
                      {cat.icon}
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{cat.name}</h3>
                  <p className="text-gray-600 mb-4">{cat.items} items available</p>
                  <div className="flex items-center text-green-600 font-medium">
                    <span className="whitespace-nowrap">Browse {cat.name}</span>
                    <IoArrowForwardOutline className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <a
            className="bg-green-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-700 transition-colors whitespace-nowrap cursor-pointer"
            href="/categories"
          >
            View All Categories
          </a>
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
