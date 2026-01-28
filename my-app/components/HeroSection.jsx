import { IoBook, IoPhonePortrait, IoHome } from "react-icons/io5";

const HeroSection = () => {
  const features = [
    {
      icon: <IoBook className="text-white text-xl" />,
      title: "Textbooks",
      description: "Save hundreds on textbooks by trading with classmates",
    },
    {
      icon: <IoPhonePortrait className="text-white text-xl" />,
      title: "Electronics",
      description: "Find great deals on laptops, phones and gadgets",
    },
    {
      icon: <IoHome className="text-white text-xl" />,
      title: "Furniture",
      description: "Furnish your dorm room affordably and sustainably",
    },
  ];

  return (
    <section
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('/hero.jpg')",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <div className="max-w-4xl mx-auto">
          {/* Heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Share, Swap &amp; Save
            <span className="block text-green-400">On Campus</span>
          </h1>

          {/* Subtext */}
          <p className="text-xl md:text-2xl mb-8 text-gray-200 leading-relaxed">
            Join your college community in reducing waste and saving money.
            Trade books, electronics, furniture and more with fellow students.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <a
              className="bg-green-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-700 transition-colors whitespace-nowrap cursor-pointer"
              href="/browse-items"
            >
              Browse Items
            </a>
            <a
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors whitespace-nowrap cursor-pointer"
              href="/post-item"
            >
              Post Your Item
            </a>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-lg p-6"
              >
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-200">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
