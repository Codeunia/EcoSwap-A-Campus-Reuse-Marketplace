// "use client"; 
// import { Search, Grid, List, User } from "lucide-react";
// import Header from "../../components/Header";
// import Footer from "../../components/Footer";

// const categories = [
//   "Textbooks",
//   "Electronics",
//   "Furniture",
//   "Clothing",
//   "Sports Equipment",
//   "Kitchen Items",
//   "Stationery",
//   "Home Decor",
// ];

// const types = ["Sell", "Donate", "Swap"];
// const conditions = ["New", "Like New", "Good", "Fair"];

// const typeBadgeClasses = {
//   Sell: "bg-blue-100 text-blue-800",
//   Donate: "bg-green-100 text-green-800",
//   Swap: "bg-purple-100 text-purple-800",
// };

// const conditionClasses = {
//   "Like New": "text-green-500",
//   Good: "text-yellow-600",
//   New: "text-green-600",
//   Fair: "text-yellow-700",
// };

// const items = [
//   {
//     id: 1,
//     href:
//       "/preview/c4a786ea-4379-4110-ab83-97a9ad2dc0a3/1760440/item/1",
//     type: "Sell",
//     price: 45,
//     image:
//       "https://readdy.ai/api/search-image?query=Mathematics%20calculus%20textbook%20cover%20James%20Stewart%208th%20edition%20in%20good%20condition%2C%20academic%20book%20with%20clean%20cover%2C%20bright%20natural%20lighting%2C%20simple%20white%20background%2C%20educational%20material&width=300&height=200&seq=browse1&orientation=landscape",
//     imageAlt: "Calculus: Early Transcendentals - 8th Edition",
//     category: "Textbooks",
//     condition: "Good",
//     title: "Calculus: Early Transcendentals - 8th Edition",
//     description:
//       "Used for Calculus I and II. Some highlighting but all pages intact. Great condition overall.",
//     user: "Sarah M.",
//     time: "2 hours ago",
//     university: "Stanford University",
//     availability: "Available",
//   },
//   {
//     id: 2,
//     href:
//       "/preview/c4a786ea-4379-4110-ab83-97a9ad2dc0a3/1760440/item/2",
//     type: "Sell",
//     price: 850,
//     image:
//       "https://readdy.ai/api/search-image?query=Silver%20MacBook%20Air%20M1%20laptop%20in%20excellent%20condition%20on%20clean%20white%20surface%2C%20modern%20laptop%20computer%2C%20bright%20natural%20lighting%2C%20minimalist%20tech%20setup%2C%20pristine%20condition&width=300&height=200&seq=browse2&orientation=landscape",
//     imageAlt: "MacBook Air M1 - 13 inch, 256GB",
//     category: "Electronics",
//     condition: "Like New",
//     title: "MacBook Air M1 - 13 inch, 256GB",
//     description:
//       "Barely used MacBook Air. Purchased last year but got a new one from work. Includes original charger and box.",
//     user: "Mike R.",
//     time: "4 hours ago",
//     university: "MIT",
//     availability: "Available",
//   },
//   {
//     id: 3,
//     href:
//       "/preview/c4a786ea-4379-4110-ab83-97a9ad2dc0a3/1760440/item/3",
//     type: "Donate",
//     image:
//       "https://readdy.ai/api/search-image?query=Comfortable%20ergonomic%20office%20desk%20chair%20in%20good%20condition%2C%20black%20swivel%20chair%20with%20armrests%2C%20clean%20white%20background%2C%20bright%20natural%20lighting%2C%20furniture%20item&width=300&height=200&seq=browse3&orientation=landscape",
//     imageAlt: "Ergonomic Study Desk Chair",
//     category: "Furniture",
//     condition: "Good",
//     title: "Ergonomic Study Desk Chair",
//     description:
//       "Moving out and need to get rid of this chair. Very comfortable for long study sessions. Pick up only.",
//     user: "Jessica L.",
//     time: "6 hours ago",
//     university: "Harvard University",
//     availability: "Available",
//   },
//   {
//     id: 4,
//     href:
//       "/preview/c4a786ea-4379-4110-ab83-97a9ad2dc0a3/1760440/item/4",
//     type: "Swap",
//     image:
//       "https://readdy.ai/api/search-image?query=Complete%20chemistry%20laboratory%20equipment%20set%20with%20beakers%2C%20test%20tubes%2C%20and%20scientific%20instruments%2C%20clean%20white%20background%2C%20bright%20natural%20lighting%2C%20educational%20lab%20supplies&width=300&height=200&seq=browse4&orientation=landscape",
//     imageAlt: "Complete Chemistry Lab Kit",
//     category: "Academic",
//     condition: "New",
//     title: "Complete Chemistry Lab Kit",
//     description:
//       "Brand new lab kit, never used. Looking to swap for physics lab equipment or similar value items.",
//     user: "David K.",
//     time: "8 hours ago",
//     university: "UC Berkeley",
//     availability: "Available",
//   },
//   {
//     id: 5,
//     href:
//       "/preview/c4a786ea-4379-4110-ab83-97a9ad2dc0a3/1760440/item/5",
//     type: "Sell",
//     price: 75,
//     image:
//       "https://readdy.ai/api/search-image?query=North%20Face%20winter%20jacket%20in%20medium%20size%2C%20navy%20blue%20warm%20coat%20in%20good%20condition%2C%20clean%20white%20background%2C%20bright%20natural%20lighting%2C%20fashion%20clothing%20item&width=300&height=200&seq=browse5&orientation=landscape",
//     imageAlt: "North Face Winter Jacket - Medium",
//     category: "Clothing",
//     condition: "Good",
//     title: "North Face Winter Jacket - Medium",
//     description:
//       "Warm and cozy jacket, perfect for winter. Size medium. Some minor wear but still in great shape.",
//     user: "Emma T.",
//     time: "12 hours ago",
//     university: "Yale University",
//     availability: "Available",
//   },
//   {
//     id: 6,
//     href:
//       "/preview/c4a786ea-4379-4110-ab83-97a9ad2dc0a3/1760440/item/6",
//     type: "Sell",
//     price: 40,
//     image:
//       "https://readdy.ai/api/search-image?query=Basketball%20and%20sports%20equipment%20set%20including%20athletic%20gear%2C%20sports%20ball%20and%20workout%20accessories%2C%20clean%20white%20background%2C%20bright%20natural%20lighting%2C%20sports%20equipment&width=300&height=200&seq=browse6&orientation=landscape",
//     imageAlt: "Basketball and Gym Equipment Set",
//     category: "Sports",
//     condition: "Good",
//     title: "Basketball and Gym Equipment Set",
//     description:
//       "Basketball, resistance bands, and water bottle. Great for staying active on campus.",
//     user: "Ryan P.",
//     time: "1 day ago",
//     university: "UCLA",
//     availability: "Available",
//   },
//   {
//     id: 7,
//     href:
//       "/preview/c4a786ea-4379-4110-ab83-97a9ad2dc0a3/1760440/item/7",
//     type: "Sell",
//     price: 650,
//     image:
//       "https://readdy.ai/api/search-image?query=iPhone%2013%20Pro%20in%20excellent%20condition%2C%20modern%20smartphone%20in%20pristine%20state%2C%20clean%20white%20background%2C%20bright%20natural%20lighting%2C%20premium%20mobile%20device&width=300&height=200&seq=browse7&orientation=landscape",
//     imageAlt: "iPhone 13 Pro - 128GB Unlocked",
//     category: "Electronics",
//     condition: "Like New",
//     title: "iPhone 13 Pro - 128GB Unlocked",
//     description:
//       "Upgraded to newer model. Phone is in excellent condition with screen protector and case.",
//     user: "Alex Chen",
//     time: "1 day ago",
//     university: "Stanford University",
//     availability: "Available",
//   },
//   {
//     id: 8,
//     href:
//       "/preview/c4a786ea-4379-4110-ab83-97a9ad2dc0a3/1760440/item/8",
//     type: "Sell",
//     price: 120,
//     image:
//       "https://readdy.ai/api/search-image?query=Organic%20chemistry%20textbook%20bundle%20with%20multiple%20books%20and%20study%20guides%2C%20academic%20materials%20in%20good%20condition%2C%20clean%20white%20background%2C%20bright%20natural%20lighting%2C%20educational%20books&width=300&height=200&seq=browse8&orientation=landscape",
//     imageAlt: "Organic Chemistry Textbook Bundle",
//     category: "Textbooks",
//     condition: "Good",
//     title: "Organic Chemistry Textbook Bundle",
//     description:
//       "Complete set including textbook, study guide, and molecular model kit. Perfect for organic chemistry course.",
//     user: "Maria G.",
//     time: "2 days ago",
//     university: "Princeton University",
//     availability: "Available",
//   },
//   {
//     id: 9,
//     href:
//       "/preview/c4a786ea-4379-4110-ab83-97a9ad2dc0a3/1760440/item/9",
//     type: "Sell",
//     price: 80,
//     image:
//       "https://readdy.ai/api/search-image?query=Compact%20mini%20refrigerator%20perfect%20for%20college%20dorm%20room%2C%20small%20white%20fridge%20in%20good%20condition%2C%20clean%20white%20background%2C%20bright%20natural%20lighting%2C%20dorm%20appliance&width=300&height=200&seq=browse9&orientation=landscape",
//     imageAlt: "Mini Fridge - Perfect for Dorm",
//     category: "Appliances",
//     condition: "Good",
//     title: "Mini Fridge - Perfect for Dorm",
//     description:
//       "Compact fridge, perfect size for dorm room. Clean and works perfectly. Moving out sale.",
//     user: "Tom W.",
//     time: "2 days ago",
//     university: "Columbia University",
//     availability: "Available",
//   },
// ];

// const BrowseItems = () => {
//   return (
//     <>
//     <Header />
//     <div className="pt-8 pb-20">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Header */}
//         <div className="mb-8">
//           <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
//             Browse Items
//           </h1>
//           <p className="text-xl text-gray-600">
//             Discover amazing items shared by your fellow students
//           </p>
//         </div>

//         {/* Search and Sort */}
//         <div className="bg-white rounded-2xl shadow-lg p-6">
//           <form className="flex flex-col md:flex-row gap-4" onSubmit={(e) => e.preventDefault()}>
//             <div className="flex-1 relative">
//               <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                 <Search className="w-5 h-5 text-gray-400" />
//               </div>
//               <input
//                 placeholder="Search for textbooks, electronics, furniture..."
//                 className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm"
//                 type="text"
//                 />
//             </div>
//             <div className="flex gap-3">
//               <select className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm pr-8 cursor-pointer">
//                 <option value="newest">Newest First</option>
//                 <option value="oldest">Oldest First</option>
//                 <option value="price-low">Price: Low to High</option>
//                 <option value="price-high">Price: High to Low</option>
//                 <option value="alphabetical">A to Z</option>
//               </select>
//               <button
//                 type="submit"
//                 className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors font-medium whitespace-nowrap cursor-pointer"
//                 >
//                 Search
//               </button>
//             </div>
//           </form>
//         </div>

//         {/* Main Layout */}
//         <div className="flex flex-col lg:flex-row gap-8 mt-8">
//           {/* Filters Sidebar */}
//           <div className="lg:w-1/4">
//             <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-24">
//               <div className="flex items-center justify-between mb-6">
//                 <h2 className="text-xl font-semibold text-gray-900">Filters</h2>
//                 <button className="text-green-600 hover:text-green-700 text-sm font-medium cursor-pointer">
//                   Clear All
//                 </button>
//               </div>

//               {/* Category */}
//               <div className="mb-6">
//                 <h3 className="text-lg font-medium text-gray-900 mb-3">Category</h3>
//                 <div className="space-y-2">
//                   {categories.map((cat) => (
//                       <label key={cat} className="flex items-center cursor-pointer">
//                       <input
//                         className="w-4 h-4 text-green-600 border-gray-300 focus:ring-green-500"
//                         type="radio"
//                         value={cat}
//                         name="category"
//                         />
//                       <span className="ml-3 text-gray-700">{cat}</span>
//                     </label>
//                   ))}
//                 </div>
//               </div>

//               {/* Type */}
//               <div className="mb-6">
//                 <h3 className="text-lg font-medium text-gray-900 mb-3">Type</h3>
//                 <div className="space-y-2">
//                   {types.map((t) => (
//                       <label key={t} className="flex items-center cursor-pointer">
//                       <input
//                         className="w-4 h-4 text-green-600 border-gray-300 focus:ring-green-500"
//                         type="radio"
//                         value={t}
//                         name="type"
//                         />
//                       <span className="ml-3 text-gray-700">{t}</span>
//                     </label>
//                   ))}
//                 </div>
//               </div>

//               {/* Price Range */}
//               <div className="mb-6">
//                 <h3 className="text-lg font-medium text-gray-900 mb-3">Price Range</h3>
//                 <div className="space-y-3">
//                   <div className="flex items-center space-x-3">
//                     <input
//                       placeholder="Min"
//                       className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm"
//                       type="number"
//                       defaultValue={0}
//                       />
//                     <span className="text-gray-500">to</span>
//                     <input
//                       placeholder="Max"
//                       className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm"
//                       type="number"
//                       defaultValue={1000}
//                       />
//                   </div>
//                 </div>
//               </div>

//               {/* Condition */}
//               <div className="mb-6">
//                 <h3 className="text-lg font-medium text-gray-900 mb-3">Condition</h3>
//                 <div className="space-y-2">
//                   {conditions.map((c) => (
//                       <label key={c} className="flex items-center cursor-pointer">
//                       <input
//                         className="w-4 h-4 text-green-600 border-gray-300 focus:ring-green-500"
//                         type="radio"
//                         value={c}
//                         name="condition"
//                         />
//                       <span className="ml-3 text-gray-700">{c}</span>
//                     </label>
//                   ))}
//                 </div>
//               </div>

//               <button className="w-full bg-green-600 text-white py-3 px-4 rounded-lg hover:bg-green-700 transition-colors font-medium whitespace-nowrap cursor-pointer">
//                 Apply Filters
//               </button>
//             </div>
//           </div>

//           {/* Items */}
//           <div className="lg:w-3/4">
//             <div className="bg-white rounded-2xl shadow-lg p-6">
//               <div className="flex items-center justify-between mb-6">
//                 <div>
//                   <h2 className="text-xl font-semibold text-gray-900">All Items</h2>
//                   <p className="text-gray-600">{items.length} items found</p>
//                 </div>
//                 <div className="flex items-center space-x-2">
//                   <button className="p-2 rounded-lg transition-colors cursor-pointer bg-green-100 text-green-600" aria-label="Grid view">
//                     <Grid className="w-5 h-5" />
//                   </button>
//                   <button className="p-2 rounded-lg transition-colors cursor-pointer text-gray-400 hover:text-gray-600" aria-label="List view">
//                     <List className="w-5 h-5" />
//                   </button>
//                 </div>
//               </div>

//               <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
//                 {items.map((item) => {
//                     const badgeClass = typeBadgeClasses[item.type];
//                     const conditionClass = conditionClasses[item.condition] || "text-gray-600";
//                     const priceLabel = item.type === "Sell" ? `$${item.price}` : item.type === "Donate" ? "Free" : "Swap";
//                     return (
//                         <a key={item.id} className="cursor-pointer" href={item.href}>
//                       <div className="border border-gray-200 rounded-xl hover:shadow-lg transition-all duration-300 overflow-hidden group">
//                         <div className="relative h-48 overflow-hidden">
//                           <img
//                             alt={item.imageAlt}
//                             className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
//                             src={item.image}
//                             />
//                           <div className="absolute top-3 left-3">
//                             <span className={`px-2 py-1 rounded-full text-xs font-medium ${badgeClass}`}>
//                               {item.type}
//                             </span>
//                           </div>
//                           <div className="absolute top-3 right-3">
//                             <span className="bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full text-sm font-semibold text-gray-900">
//                               {priceLabel}
//                             </span>
//                           </div>
//                         </div>
//                         <div className="p-4">
//                           <div className="flex items-center justify-between mb-2">
//                             <span className="text-xs font-medium text-green-600">{item.category}</span>
//                             <span className={`text-xs font-medium ${conditionClass}`}>{item.condition}</span>
//                           </div>
//                           <h3 className="text-sm font-semibold text-gray-900 mb-2 line-clamp-2">{item.title}</h3>
//                           <p className="text-xs text-gray-600 mb-3 line-clamp-2">{item.description}</p>
//                           <div className="flex items-center justify-between text-xs text-gray-500">
//                             <div className="flex items-center space-x-1">
//                               <User className="w-4 h-4" />
//                               <span>{item.user}</span>
//                             </div>
//                             <span>{item.time}</span>
//                           </div>
//                           <div className="mt-2 pt-2 border-t border-gray-100">
//                             <div className="flex items-center justify-between">
//                               <span className="text-xs text-gray-500">{item.university}</span>
//                               <span className="text-xs font-medium text-green-600">{item.availability}</span>
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                     </a>
//                   );
//                 })}
//               </div>

//               <div className="text-center mt-8">
//                 <button className="bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition-colors font-medium whitespace-nowrap cursor-pointer">
//                   Load More Items
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//     <Footer />
//     </>
//   );
// };

// export default BrowseItems;


// "use client";
// import { useEffect, useState } from "react";
// import axios from "axios"; 
// import {User } from "lucide-react";
// import Header from "../../components/Header";
// import Footer from "../../components/Footer";

// const typeBadgeClasses = {
//   sell: "bg-blue-100 text-blue-800",
//   donate: "bg-green-100 text-green-800",
//   swap: "bg-purple-100 text-purple-800",
// };

// const conditionClasses = {
//   "Like New": "text-green-500",
//   Good: "text-yellow-600",
//   New: "text-green-600",
//   Fair: "text-yellow-700",
// };

// const BrowseItems = () => {
//   const [items, setItems] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchItems = async () => {
//       try {
//         const res = await axios.get("/api/items");
//         setItems(res.data);
//       } catch (err) {
//         console.error("Failed to fetch items:", err);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchItems();
//   }, []);

//   return (
//     <>
//       <Header />
//       <div className="pt-8 pb-20">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="mb-8">
//            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
//              Browse Items
//            </h1>
//            <p className="text-xl text-gray-600">
//              Discover amazing items shared by your fellow students
//            </p>
//         </div>

//           {loading ? (
//             <p className="text-center text-gray-600">Loading items...</p>
//           ) : (
//             <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-8">
//               {items.map((item) => {
//                 const badgeClass = typeBadgeClasses[item.type];
//                 const conditionClass =
//                   conditionClasses[item.condition] || "text-gray-600";
//                 const priceLabel =
//                   item.type === "sell"
//                     ? `$${item.price}`
//                     : item.type === "donate"
//                     ? "Free"
//                     : "Swap";

//                 return (
//                   <div
//                     key={item._id}
//                     className="border border-gray-200 rounded-xl hover:shadow-lg transition-all duration-300 overflow-hidden group"
//                   >
//                     <div className="relative h-48 overflow-hidden">
//                       {item.photos?.[0] ? (
//                         <img
//                           src={item.photos[0]}
//                           alt={item.title}
//                           className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
//                         />
//                       ) : (
//                         <div className="w-full h-full flex items-center justify-center bg-gray-100">
//                           <span className="text-gray-400">No image</span>
//                         </div>
//                       )}
//                       <div className="absolute top-3 left-3">
//                         <span
//                           className={`px-2 py-1 rounded-full text-xs font-medium ${badgeClass}`}
//                         >
//                           {item.type}
//                         </span>
//                       </div>
//                       <div className="absolute top-3 right-3">
//                         <span className="bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full text-sm font-semibold text-gray-900">
//                           {priceLabel}
//                         </span>
//                       </div>
//                     </div>

//                     <div className="p-4">
//                       <div className="flex items-center justify-between mb-2">
//                         <span className="text-xs font-medium text-green-600">
//                           {item.category}
//                         </span>
//                         <span
//                           className={`text-xs font-medium ${conditionClass}`}
//                         >
//                           {item.condition}
//                         </span>
//                       </div>
//                       <h3 className="text-sm font-semibold text-gray-900 mb-2 line-clamp-2">
//                         {item.title}
//                       </h3>
//                       <p className="text-xs text-gray-600 mb-3 line-clamp-2">
//                         {item.description}
//                       </p>
//                       <div className="flex items-center justify-between text-xs text-gray-500">
//                         <div className="flex items-center space-x-1">
//                           <User className="w-4 h-4" />
//                           <span>{item.postedBy?.name || "Anonymous"}</span>
//                         </div>
//                         <span>
//                           {new Date(item.createdAt).toLocaleDateString()}
//                         </span>
//                       </div>
//                       <div className="mt-2 pt-2 border-t border-gray-100">
//                         <div className="flex items-center justify-between">
//                           <span className="text-xs text-gray-500">
//                             {item.meetingLocation || "Campus"}
//                           </span>
//                           <span className="text-xs font-medium text-green-600">
//                             {item.availability || "Available"}
//                           </span>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 );
//               })}
//             </div>
//           )}
//         </div>
//         <div className="text-center mt-8">
//           <button className="bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition-colors font-medium whitespace-nowrap cursor-pointer">
//               Load More Items
//           </button>
//         </div>
//       </div>
//       <Footer />
//     </>
//   );
// };

// export default BrowseItems;


"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import { Search, Grid, List, User } from "lucide-react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

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
  "Appliances",
  "Academic",
];

const types = ["sell", "donate", "swap"];
const conditions = ["New", "Like New", "Good", "Fair"];

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

const filteredItems = items
  .filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase())
  )
  .filter((item) =>
    selectedCategory
      ? item.category?.toLowerCase() === selectedCategory.toLowerCase()
      : true
  )
  .filter((item) =>
    selectedType ? item.type?.toLowerCase() === selectedType.toLowerCase() : true
  )
  .filter((item) =>
    selectedCondition
      ? item.condition?.toLowerCase() === selectedCondition.toLowerCase()
      : true
  )
  .filter((item) =>
    item.type === "sell"
      ? item.price >= minPrice && item.price <= maxPrice
      : true
  )
  .sort((a, b) => {
    if (sort === "newest") return new Date(b.createdAt) - new Date(a.createdAt);
    if (sort === "oldest") return new Date(a.createdAt) - new Date(b.createdAt);
    if (sort === "price-low") return (a.price || 0) - (b.price || 0);
    if (sort === "price-high") return (b.price || 0) - (a.price || 0);
    if (sort === "alphabetical") return a.title.localeCompare(b.title);
    return 0;
  });


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
                  <h2 className="text-xl font-semibold text-gray-900">Filters</h2>
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
                      <label key={cat} className="flex items-center cursor-pointer">
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
                  <h3 className="text-lg font-medium text-gray-900 mb-3">Type</h3>
                  <div className="space-y-2">
                    {types.map((t) => (
                      <label key={t} className="flex items-center cursor-pointer">
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
                      <label key={c} className="flex items-center cursor-pointer">
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
                <p className="text-center text-gray-600">Loading items...</p>
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
                    <div className="flex items-center space-x-2">
                      <button className="p-2 rounded-lg bg-green-100 text-green-600">
                        <Grid className="w-5 h-5" />
                      </button>
                      <button className="p-2 rounded-lg text-gray-400 hover:text-gray-600">
                        <List className="w-5 h-5" />
                      </button>
                    </div>
                  </div>

                  {/* Items Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                    {filteredItems.map((item) => {
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
                                <span className="text-gray-400">No image</span>
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
                                className={`text-xs font-medium ${conditionClass}`}>
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
                                <span>{item.postedBy?.name || "Anonymous"}</span>
                              </div>
                              <span>
                                {new Date(item.createdAt).toLocaleDateString()}
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
                      );
                    })}
                  </div>

                  <div className="text-center mt-8">
                    <button className="bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition-colors font-medium whitespace-nowrap cursor-pointer">
                      Load More Items
                    </button>
                  </div>
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