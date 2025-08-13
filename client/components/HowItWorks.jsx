import { IoMailOutline, IoCameraOutline, IoSearchOutline } from "react-icons/io5";
import { FaHandshake } from "react-icons/fa";
const HowItWorks = () => {

const steps = [
  {
    color: "bg-blue-500",
    icon: <IoMailOutline className="text-white text-2xl" />,
    step: "01",
    title: "Sign Up with College Email",
    desc: "Register using your college email address to join your campus community and verify your student status.",
  },
  {
    color: "bg-green-500",
    icon: <IoCameraOutline className="text-white text-2xl" />,
    step: "02",
    title: "Post Your Items",
    desc: "Upload photos and details of items you want to donate, sell, or swap. Set your preferred exchange method.",
  },
  {
    color: "bg-purple-500",
    icon: <IoSearchOutline className="text-white text-2xl" />,
    step: "03",
    title: "Browse & Connect",
    desc: "Search for items you need, filter by category, and connect directly with other students on campus.",
  },
  {
    color: "bg-orange-500",
    icon: <FaHandshake className="text-white text-2xl" />,
    step: "04",
    title: "Meet & Exchange",
    desc: "Arrange safe meetups on campus to complete your exchanges and build lasting connections.",
  },
];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            How EcoSwap Works
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join thousands of students already saving money and reducing waste through our simple 4-step process
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((item, index) => (
            <div className="text-center group" key={index}>
              <div className="relative mb-8">
                <div
                  className={`w-20 h-20 ${item.color} rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}
                >
                  {item.icon}
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">
                  {item.step}
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {item.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-8 md:p-12 text-center">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to Start Saving?
          </h3>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Join your campus community today and discover how easy it is to save money while helping the environment
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              className="bg-green-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-700 transition-colors whitespace-nowrap cursor-pointer"
              href="/register"
            >
              Get Started Free
            </a>
            <a
              className="bg-white text-green-600 border-2 border-green-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-50 transition-colors whitespace-nowrap cursor-pointer"
              href="/browse"
            >
              Browse Items
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;