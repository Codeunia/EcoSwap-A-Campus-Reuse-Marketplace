import {
  RiMailLine,
  RiCameraLine,
  RiSearchLine,
  RiCheckLine,
  RiMoneyDollarCircleLine,
  RiLeafLine,
  RiGroupLine,
  RiShieldCheckLine,
  RiMapPinLine,
  RiTimeLine,
  RiUserSearchLine,
  RiChatCheckLine,
} from "react-icons/ri";

import { FaHandshake } from "react-icons/fa";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const EcoSwapPage = () => {
  return (
    <>
    <Header/>
    <div className="pt-8 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* How EcoSwap Works */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            How EcoSwap Works
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join thousands of students already saving money and reducing waste
            through our simple, secure process
          </p>
        </div>

        {/* Steps */}
        <div className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {[
                {
                    step: "01",
                    color: "bg-blue-500",
                Icon: RiMailLine,
                title: "Sign Up with College Email",
                desc: "Register using your college email address to join your campus community and verify your student status. This ensures a safe, trusted environment for all exchanges.",
                points: [
                    "Use your official .edu email address",
                    "Verify your account through email confirmation",
                    "Complete your profile with basic information",
                    "Join your specific campus community",
                ],
            },
            {
                step: "02",
                color: "bg-green-500",
                Icon: RiCameraLine,
                title: "Post Your Items",
                desc: "Upload photos and details of items you want to donate, sell, or swap. Set your preferred exchange method and connect with interested students.",
                points: [
                    "Take clear photos from multiple angles",
                    "Write detailed descriptions including condition",
                    "Set fair prices or mark as donation/swap",
                    "Choose your preferred meeting locations",
                ],
            },
            {
                step: "03",
                color: "bg-purple-500",
                Icon: RiSearchLine,
                title: "Browse & Connect",
                desc: "Search for items you need, filter by category, condition, and price. Connect directly with other students through our secure messaging system.",
                points: [
                    "Use advanced filters to find exactly what you need",
                    "View detailed item descriptions and photos",
                    "Message sellers directly through the platform",
                    "Save favorite items for later consideration",
                ],
            },
            {
                step: "04",
                color: "bg-orange-500",
                Icon: FaHandshake ,
                title: "Meet & Exchange",
                desc: "Arrange safe meetups on campus to complete your exchanges. Build lasting connections and contribute to a sustainable campus community.",
                points: [
                    "Meet in safe, public campus locations",
                    "Inspect items before completing exchange",
                    "Rate and review your exchange experience",
                    "Build trust within your campus community",
                ],
            },
        ].map((item, index) => (
            <div
            key={index}
            className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300"
            >
                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0">
                    <div
                      className={`w-16 h-16 ${item.color} rounded-full flex items-center justify-center relative`}
                      >
                      <item.Icon className="text-white text-2xl" />
                      <div className="absolute -top-2 -right-2 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">
                        {item.step}
                      </div>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {item.desc}
                    </p>
                    <ul className="space-y-2">
                      {item.points.map((point, idx) => (
                          <li
                          key={idx}
                          className="flex items-center text-gray-700"
                          >
                          <RiCheckLine className="text-green-600 mr-3 flex-shrink-0" />
                          <span className="text-sm">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Why Choose EcoSwap */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose EcoSwap?
            </h2>
            <p className="text-xl text-gray-600">
              Discover the benefits of joining our campus community
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
                {
                    Icon: RiMoneyDollarCircleLine,
                    title: "Save Money",
                    desc: "Get quality items at fraction of retail prices or through free donations from fellow students.",
                },
                {
                    Icon: RiLeafLine,
                    title: "Help Environment",
                    desc: "Reduce waste by giving items a second life instead of throwing them away.",
                },
                {
                    Icon: RiGroupLine,
                    title: "Build Community",
                    desc: "Connect with students on your campus and build meaningful relationships.",
                },
                {
                    Icon: RiShieldCheckLine,
                    title: "Safe & Secure",
                    desc: "Trade within your trusted campus community with verified student accounts.",
                },
            ].map((benefit, i) => (
                <div
                key={i}
                className="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow duration-300"
                >
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <benefit.Icon className="text-green-600 text-2xl" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Safety First */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Safety First
            </h2>
            <p className="text-xl text-gray-600">
              Your security is our top priority. Follow these guidelines for
              safe exchanges
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
                {
                    Icon: RiMapPinLine,
                    title: "Meet in Public Places",
                    desc: "Always arrange meetups in well-lit, busy campus locations like the library, student center, or cafeteria.",
                },
                {
                    Icon: RiTimeLine,
                    title: "Meet During Daytime",
                    desc: "Schedule exchanges during daylight hours when there are plenty of people around.",
                },
                {
                    Icon: RiUserSearchLine,
                    title: "Verify Student Status",
                    desc: "All users must verify with college email, ensuring you only trade with real students.",
                },
                {
                    Icon: RiChatCheckLine,
                    title: "Use Platform Messaging",
                    desc: "Keep all communication on our platform to maintain a record of your conversations.",
                },
            ].map((tip, i) => (
                <div
                key={i}
                className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
                >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <tip.Icon className="text-red-600 text-xl" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {tip.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {tip.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Get answers to common questions about using EcoSwap
            </p>
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="space-y-6">
              {[
                  {
                      q: "Who can use EcoSwap?",
                      a: "EcoSwap is exclusively for college students. You must have a valid .edu email address to register and join your campus community.",
                    },
                    {
                        q: "Is EcoSwap free to use?",
                        a: "Yes! EcoSwap is completely free for all students. There are no fees for posting items, browsing, or messaging other users.",
                    },
                    {
                        q: "How do I know if an item is still available?",
                        a: "Items are marked as 'Available' or 'Pending' in real-time. You can also message the seller directly to confirm availability before arranging a meetup.",
                    },
                    {
                        q: "What if I have a problem with an exchange?",
                        a: "Our support team is here to help! Contact us through the platform with any issues, and we'll work to resolve them quickly and fairly.",
                    },
                    {
                        q: "Can I post items from off-campus?",
                        a: "Yes, as long as you're a verified student. However, we recommend meeting on campus for safety and convenience for all parties involved.",
                    },
                ].map((faq, i) => (
                    <div
                    key={i}
                    className={`${i !== 4 ? "border-b border-gray-200 pb-6" : ""}`}
                    >
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {faq.q}
                  </h3>
                  <p className="text-gray-600">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-8 md:p-12 text-center">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to Start Saving?
          </h3>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Join thousands of students already making a difference in their
            campus communities
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
              Browse Items Now
            </a>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default EcoSwapPage;
