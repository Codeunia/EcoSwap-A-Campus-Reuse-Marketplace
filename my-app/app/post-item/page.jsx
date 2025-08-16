import React from "react";
import { RiArrowDownSLine, RiImageAddLine } from "react-icons/ri";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

const PostItem = () => {
  return (
    <>
    <Header />
    <div className="pt-8 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Post Your Item
          </h1>
          <p className="text-xl text-gray-600">
            Share your items with the campus community and help reduce waste
          </p>
        </div>

        {/* Form */}
        <form className="bg-white rounded-2xl shadow-lg p-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left Column */}
            <div className="space-y-6">
              {/* Item Title */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Item Title *
                </label>
                <input
                  placeholder="e.g., Calculus Textbook 8th Edition"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 text-sm"
                  required
                  type="text"
                  name="title"
                  />
              </div>

              {/* Description */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Description *
                </label>
                <textarea
                  name="description"
                  placeholder="Describe your item, its condition, and any important details..."
                  rows="5"
                  maxLength="500"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 text-sm resize-none"
                  required
                  ></textarea>
                <p className="text-xs text-gray-500 mt-1">0/500 characters</p>
              </div>

              {/* Category */}
              <div className="relative">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Category *
                </label>
                <button
                  type="button"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 text-left text-sm bg-white cursor-pointer"
                  >
                  <div className="flex items-center justify-between">
                    <span className="text-gray-500">Select a category</span>
                    <RiArrowDownSLine className="transition-transform" />
                  </div>
                </button>
              </div>

              {/* Condition */}
              <div className="relative">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Condition *
                </label>
                <button
                  type="button"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 text-left text-sm bg-white cursor-pointer"
                  >
                  <div className="flex items-center justify-between">
                    <span className="text-gray-500">Select condition</span>
                    <RiArrowDownSLine className="transition-transform flex-shrink-0" />
                  </div>
                </button>
              </div>

              {/* Listing Type */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Listing Type *
                </label>
                <div className="flex space-x-4">
                  {["sell", "donate", "swap"].map((type, index) => (
                      <label
                      key={index}
                      className="flex items-center cursor-pointer"
                      >
                      <input
                        className="mr-2 text-green-600 focus:ring-green-500"
                        type="radio"
                        value={type}
                        name="type"
                        defaultChecked={type === "sell"}
                        />
                      <span className="text-sm text-gray-700">
                        {type.charAt(0).toUpperCase() + type.slice(1)}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Price */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Price *
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
                    $
                  </span>
                  <input
                    placeholder="0.00"
                    min="0"
                    step="0.01"
                    className="w-full pl-8 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 text-sm"
                    required
                    type="number"
                    name="price"
                    />
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-6">
              {/* Photos */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Item Photos
                </label>
                <p className="text-xs text-gray-500 mb-4">
                  Add up to 5 photos. First photo will be the main image.
                </p>
                <div className="border-2 border-dashed rounded-lg p-6 text-center transition-colors border-gray-300 hover:border-green-400">
                  <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <RiImageAddLine className="text-gray-400 text-2xl" />
                  </div>
                  <p className="text-gray-600 mb-2">
                    Drag and drop images here, or
                  </p>
                  <label className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors cursor-pointer whitespace-nowrap">
                    Choose Files
                    <input multiple accept="image/*" className="hidden" type="file" />
                  </label>
                  <p className="text-xs text-gray-500 mt-2">
                    PNG, JPG, GIF up to 10MB each
                  </p>
                </div>
              </div>

              {/* Contact Method */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Preferred Contact Method *
                </label>
                <div className="space-y-3">
                  {[
                      { value: "message", label: "Platform Messages" },
                      { value: "email", label: "Email" },
                      { value: "phone", label: "Phone" },
                    ].map((method, index) => (
                        <label
                        key={index}
                        className="flex items-center cursor-pointer"
                        >
                      <input
                        className="mr-3 text-green-600 focus:ring-green-500"
                        type="radio"
                        value={method.value}
                        name="contactMethod"
                        defaultChecked={method.value === "message"}
                        />
                      <span className="text-sm text-gray-700">
                        {method.label}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Meeting Location */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Preferred Meeting Location
                </label>
                <input
                  placeholder="e.g., Student Union, Library lobby"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 text-sm"
                  type="text"
                  name="meetingLocation"
                  />
              </div>

              {/* Availability */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Availability
                </label>
                <select
                  name="availability"
                  className="w-full px-4 py-3 pr-8 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 text-sm"
                >
                  <option value="flexible">Flexible</option>
                  <option value="weekdays">Weekdays only</option>
                  <option value="weekends">Weekends only</option>
                  <option value="evenings">Evenings only</option>
                </select>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="mt-8 pt-6 border-t border-gray-200">
            <div className="flex flex-col sm:flex-row gap-4 justify-between items-center">
              <p className="text-sm text-gray-600">
                By posting, you agree to our community guidelines and terms of
                service.
              </p>
              <button
                type="submit"
                className="bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition-colors whitespace-nowrap cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                >
                Post Item
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default PostItem;
