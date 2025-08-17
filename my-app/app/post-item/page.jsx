"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import toast from "react-hot-toast";
import { RiArrowDownSLine, RiImageAddLine } from "react-icons/ri";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

// ⚡ Add your Cloudinary values here
const CLOUD_NAME = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;
const UPLOAD_PRESET = process.env.NEXT_PUBLIC_UPLOAD_PRESET ; 

const PostItem = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [images, setImages] = useState([]); 
  const [uploadedUrls, setUploadedUrls] = useState([]); 

  const handleImageUpload = async (files) => {
    const urls = [];
    for (const file of files) {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("upload_preset", UPLOAD_PRESET);

      try {
        const res = await axios.post("/api/upload", formData);
        urls.push(res.data.url);
      } catch (err) {
        console.error("Cloudinary upload failed:", err);
        toast.error("Image upload failed. Try again.");
      }
    }
    setUploadedUrls(urls);
    return urls;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Upload images first
      const urls = await handleImageUpload(images);

      // Build JSON payload
      const itemData = {
        title: e.target.title.value,
        description: e.target.description.value,
        category: e.target.category.value,
        condition: e.target.condition.value,
        type: e.target.type.value,
        price: e.target.price.value,
        contactMethod: e.target.contactMethod.value,
        meetingLocation: e.target.meetingLocation.value,
        availability: e.target.availability.value,
        photos: urls,
      };

      await axios.post("/api/items", itemData, {
        headers: { "Content-Type": "application/json" },
      });

      toast.success("Item posted successfully!");
      e.target.reset();
      setImages([]);
      setUploadedUrls([]);
      router.push("/browse-items");
    } catch (err) {
      console.error(err);
      toast.error(err.response?.data?.message || "Failed to post item");
    } finally {
      setLoading(false);
    }
  };


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
          <form
            className="bg-white rounded-2xl shadow-lg p-8"
            onSubmit={handleSubmit}
          >
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
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Category *
                  </label>
                  <select
                    name="category"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 text-sm"
                  >
                    <option value="">Select a category</option>
                    <option value="books">Books</option>
                    <option value="electronics">Electronics</option>
                    <option value="clothes">Clothes</option>
                    <option value="furniture">Furniture</option>
                  </select>
                </div>

                {/* Condition */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Condition *
                  </label>
                  <select
                    name="condition"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 text-sm"
                  >
                    <option value="">Select condition</option>
                    <option value="new">New</option>
                    <option value="like new">Like New</option>
                    <option value="used">Used</option>
                  </select>
                </div>

                {/* Listing Type */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Listing Type *
                  </label>
                  <div className="flex space-x-4">
                    {["sell", "donate", "swap"].map((type, index) => (
                      <label key={index} className="flex items-center cursor-pointer">
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
                    <label className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors cursor-pointer whitespace-nowrap">
                      Choose Files
                      <input
                        multiple
                        accept="image/*"
                        className="hidden"
                        type="file"
                        onChange={(e) => setImages([...e.target.files])}
                      />
                    </label>
                    <p className="text-xs text-gray-500 mt-2">
                      PNG, JPG, GIF up to 10MB each
                    </p>
                  </div>
                  {/* Preview */}
                  <div className="mt-4 grid grid-cols-3 gap-2">
                    {images.length > 0 &&
                      Array.from(images).map((file, idx) => (
                        <img
                          key={idx}
                          src={URL.createObjectURL(file)}
                          alt="preview"
                          className="w-full h-24 object-cover rounded-lg border"
                        />
                      ))}
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
                      <label key={index} className="flex items-center cursor-pointer">
                        <input
                          className="mr-3 text-green-600 focus:ring-green-500"
                          type="radio"
                          value={method.value}
                          name="contactMethod"
                          defaultChecked={method.value === "message"}
                        />
                        <span className="text-sm text-gray-700">{method.label}</span>
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
                  By posting, you agree to our community guidelines and terms of service.
                </p>
                <button
                  type="submit"
                  disabled={loading}
                  className="bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition-colors whitespace-nowrap cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? "Posting..." : "Post Item"}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default PostItem;
