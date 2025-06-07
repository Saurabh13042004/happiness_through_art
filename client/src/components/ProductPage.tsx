import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { SaleBanner } from "./SaleBanner";
import { Header } from "./Header";
import { ProductRow } from "./ProductRow";
import PhotoBookCategories from "./PhotoBookCategories";
import ProductFeatures from "./ProductFeatures"; // Import the new component
import Footer from "./Footer";
import { useCart } from '../context/CartContext';



interface ProductDetails {
  id: string;
  name: string;
  type: string;
  price: number;
  originalPrice: number;
  images: string[];
  colors: { name: string; hex: string }[];
  description: string;
  highlights: string[];
  dimensions: string;
  paperQuality: string[];
  reviews: {
    rating: number;
    count: number;
    breakdown: { stars: number; count: number }[];
  };
  shipping: string;
  details: string;
  returnsPolicy: string;
}

// Enhanced product data with Unsplash images
const productData: ProductDetails = {
  id: "1",
  name: "Love You Dad | Little Joys",
  type: "Mini PhotoBook",
  price: 1199,
  originalPrice: 1399,
  images: [
    "https://www.oddgiraffe.com/cdn/shop/files/SPB-loveyoudad.webp?v=1716121830&width=700",
    "https://www.oddgiraffe.com/cdn/shop/products/Asset25_9c07144f-5c4d-4e13-97da-f093b4499171.jpg?v=1716121830&width=700",
    "https://www.oddgiraffe.com/cdn/shop/products/Asset22_898a0c5f-3388-413e-9427-4685d0184ab9.jpg?v=1716121830&width=700",
    "https://www.oddgiraffe.com/cdn/shop/products/Asset26_1ca18afb-e9d6-4e34-b928-f91fed67a243.jpg?v=1716121830&width=700",
    "https://www.oddgiraffe.com/cdn/shop/products/4_e839cb94-5486-4c06-b125-3dc97980e0de.jpg?v=1716121830&width=700",
    "https://www.oddgiraffe.com/cdn/shop/products/33_c49eb32a-e7cf-4278-9325-1ca9b288f11a.webp?v=1716121830&width=700",
    "https://www.oddgiraffe.com/cdn/shop/products/2_6e4e9572-0f4d-4883-9ba2-c368ad1b6b92.webp?v=1716121830&width=700",
  ],
  colors: [
    { name: "Forest Green", hex: "#1F4D3F" },
    { name: "Beige", hex: "#F5F5DC" },
    { name: "Dark Green", hex: "#2C3F3B" },
  ],
  description:
    "Preserve your special memories in our premium quality mini photobook. Perfect for capturing moments with dad.",
  highlights: [
    "Our photobooks fit 1 - 4 photos per page",
    "Customise the number of pages up to 30",
    "Hardcover: 3mm thick & 170gsm smooth paper finish",
    "Inner page: The silkiest paper with a glossy sheen (250gsm) - perfect for your photos",
  ],
  dimensions: 'Mini (6.25" x 6.25")',
  paperQuality: [
    "Premium 100gsm paper",
    "Highest quality 3mm thick hardback cover",
    "170gsm silk-paper finish",
  ],
  reviews: {
    rating: 4.8,
    count: 481,
    breakdown: [
      { stars: 5, count: 420 },
      { stars: 4, count: 47 },
      { stars: 3, count: 11 },
      { stars: 2, count: 3 },
      { stars: 1, count: 0 },
    ],
  },
  shipping:
    "Our products are made to order and are usually dispatched within 2-3 business days",
  details:
    "This personalized photo album is the perfect gift to celebrate Dad. Customize it with your favorite photos and create a keepsake he will treasure forever. Each photobook is crafted with premium materials and attention to detail.",
  returnsPolicy:
    "We want you to be completely satisfied with your purchase. If you're not happy with your order, please contact our customer service team within 14 days of receipt for return instructions.",
};

const ProductPage: React.FC = () => {
  const [selectedColor, setSelectedColor] = useState(productData.colors[0]);
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState('Mini (6.25" x 6.25")');
  const [expandedSection, setExpandedSection] = useState<string | null>(null);
  const { id } = useParams();
  const { addToCart } = useCart();

  // Add this useEffect to scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  // Handle expanding/collapsing sections
  const toggleSection = (section: string) => {
    if (expandedSection === section) {
      setExpandedSection(null);
    } else {
      setExpandedSection(section);
    }
  };

  // Add to cart handler
  const handleAddToCart = () => {
    addToCart({
      id: productData.id,
      name: productData.name,
      type: productData.type,
      price: productData.price,
      image: productData.images[0],
      color: selectedColor,
      quantity: quantity,
      size: selectedSize
    });
  };

  return (
    <div className="min-h-screen bg-white">

      <div className="max-w-6xl mx-auto px-4">
        {/* Breadcrumb */}
        <div className="py-8 flex items-center text-sm">
          <a href="/" className="hover:underline text-gray-700">
            <svg
              className="w-4 h-4 inline"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              />
            </svg>
          </a>
          <span className="mx-2">/</span>
          <a href="/photobooks" className="hover:underline text-gray-700">
            Photobooks
          </a>
          <span className="mx-2">/</span>
          <span className="text-gray-900">Love You Dad | Little Joys</span>
        </div>

        <div className="flex flex-col md:flex-row gap-8 mb-16 relative">
          {/* Vertical Thumbnails - Desktop Only - Make sticky */}
          <div
            className="hidden md:block md:sticky top-6 self-start h-auto"
            style={{ maxHeight: "calc(100vh - 48px)" }}
          >
            <div
              className="flex flex-col gap-3 w-24 overflow-y-auto pb-2"
              style={{ maxHeight: "calc(100vh - 48px)" }}
            >
              {productData.images.slice(0, 7).map((image, index) => (
                <button
                  key={index}
                  className={`border ${
                    selectedImage === index
                      ? "border-gray-900"
                      : "border-gray-200"
                  } rounded-sm overflow-hidden`}
                  onClick={() => setSelectedImage(index)}
                >
                  <img
                    src={image}
                    alt={`Thumbnail ${index + 1}`}
                    className="w-full aspect-square object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Main Product Image - Make sticky */}
          <div
            className="md:sticky top-6 self-start md:flex-1 bg-gray-50 relative overflow-hidden h-auto"
            style={{ maxHeight: "calc(100vh - 48px)", aspectRatio: "1/1" }}
          >
            <img
              src={productData.images[selectedImage]}
              alt={productData.name}
              className="w-full h-full object-contain"
            />

            {/* Look Inside Button */}
            <button className="absolute top-4 left-4 bg-white px-4 py-2 rounded-sm border border-gray-300 flex items-center">
              <svg
                className="w-4 h-4 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                ></path>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                ></path>
              </svg>
              Look Inside
            </button>

            {/* Magnifying Glass */}
            <button className="absolute top-4 right-4 p-3 bg-white rounded-full">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
            </button>
          </div>

          {/* Product Details - Remains normally scrollable */}
          <div className="md:w-[450px]">
            {/* SALE Label */}
            <div className="mb-3">
              <span className="text-red-600 font-bold text-sm">SALE</span>
            </div>

            {/* Product Title */}
            <h1 className="text-3xl md:text-4xl font-serif mb-1 leading-tight">
              Love You Dad | Little Joys
            </h1>
            <p className="text-gray-600 mb-5">Mini PhotoBook</p>

            {/* Price */}
            <div className="flex items-center gap-3 mb-6">
              <span className="text-2xl font-medium">Rs. 1,199</span>
              <span className="line-through text-sm">Rs. 1,399</span>
            </div>

            {/* Reviews */}
            <div className="mb-6">
              <div className="flex items-center">
                <div className="flex gap-0.5">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <span key={star} className="text-black text-lg">
                      ★
                    </span>
                  ))}
                </div>
                <span className="ml-2 font-medium">481 reviews</span>
              </div>
              <p className="text-sm text-gray-600 mt-1">
                We're rated 4.8 out of 5 from over 10,000 reviews
              </p>
              <a
                href="#reviews"
                className="text-sm font-medium underline mt-1 inline-block"
              >
                See customer reviews
              </a>
            </div>

            {/* Promotion Badge */}
            <div className="bg-yellow-100 p-3 mb-8 rounded-sm flex items-center">
              <span className="mr-2">
                <svg
                  className="w-5 h-5 text-yellow-500 inline"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </span>
              <span className="font-medium">
                Rare 20% off: Limited time only!
              </span>
            </div>

            {/* Color Selection */}
            <div className="mb-8">
              <h3 className="font-medium mb-3 text-lg">Color</h3>
              <div className="flex gap-4">
                {productData.colors.map((color, index) => (
                  <button
                    key={index}
                    className={`w-10 h-10 rounded-full ${
                      selectedColor.hex === color.hex
                        ? "ring-2 ring-offset-1 ring-black"
                        : ""
                    }`}
                    style={{ backgroundColor: color.hex }}
                    onClick={() => setSelectedColor(color)}
                    aria-label={`Select ${color.name} color`}
                  />
                ))}
              </div>
            </div>

            {/* Size Selection */}
            <div className="mb-8">
              <h3 className="font-medium mb-3 text-lg">Size</h3>
              <div className="relative">
  <select 
    className="w-full border border-gray-300 p-3 pr-10 appearance-none focus:outline-none focus:ring-1 focus:ring-black focus:border-black bg-white"
    value={selectedSize}
    onChange={(e) => setSelectedSize(e.target.value)}
  >
    <option>Mini (6.25" x 6.25")</option>
    <option>Medium (8.5" x 8.5")</option>
    <option>Large (10" x 10")</option>
  </select>
                <div className="absolute inset-y-0 right-0 flex items-center px-3 pointer-events-none">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </div>
            </div>

            {/* Quantity Selector */}
            <div className="mb-8">
              <h3 className="font-medium mb-3 text-lg">Quantity</h3>
              <div className="flex items-center border border-gray-300">
                <button 
                  className="px-4 py-2 text-xl"
                  onClick={() => setQuantity(prev => Math.max(1, prev - 1))}
                  aria-label="Decrease quantity"
                >
                  -
                </button>
                <span className="flex-1 text-center">{quantity}</span>
                <button 
                  className="px-4 py-2 text-xl"
                  onClick={() => setQuantity(prev => prev + 1)}
                  aria-label="Increase quantity"
                >
                  +
                </button>
              </div>
            </div>

            {/* Call to Action - Add to Cart Button */}
            <button 
              className="w-full bg-black text-white py-4 font-medium mb-8 hover:bg-gray-800 transition-colors text-lg"
              onClick={handleAddToCart}
            >
              Add to Cart
            </button>

            {/* Delivery Info */}
            <div className="mb-8">
              <h3 className="font-medium mb-2">Delivery</h3>
              <p className="text-red-600 font-medium mb-1">
                Ships between - Jun 02 and Jun 04
              </p>
              <p className="text-sm text-gray-600">{productData.shipping}</p>
            </div>

            {/* Product Highlights - Simplified */}
            <div className="mb-8 border-t border-gray-200 pt-4">
              <ul className="list-disc pl-5 space-y-2 text-gray-800">
                {productData.highlights.map((highlight, index) => (
                  <li key={index} className="text-sm">
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>

            {/* Expandable Sections */}
            <div className="border-t border-gray-200 py-4">
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => toggleSection("details")}
              >
                <h3 className="font-medium">The Details</h3>
                <button className="text-xl">
                  {expandedSection === "details" ? "−" : "+"}
                </button>
              </div>
              {expandedSection === "details" && (
                <div className="mt-3 text-gray-700 text-sm">
                  <p>{productData.details}</p>
                </div>
              )}
            </div>

            <div className="border-t border-gray-200 py-4">
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => toggleSection("dimensions")}
              >
                <h3 className="font-medium">Dimensions & Paper Quality</h3>
                <button className="text-xl">
                  {expandedSection === "dimensions" ? "−" : "+"}
                </button>
              </div>
              {expandedSection === "dimensions" && (
                <div className="mt-3 text-gray-700">
                  <p className="mb-2 text-sm">
                    <strong>Dimensions:</strong> {productData.dimensions}
                  </p>
                  <p className="mb-2 text-sm">
                    <strong>Paper Quality:</strong>
                  </p>
                  <ul className="list-disc pl-5 space-y-1 text-sm">
                    {productData.paperQuality.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            <div className="border-t border-gray-200 py-4">
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => toggleSection("shipping")}
              >
                <h3 className="font-medium">Shipping & Returns</h3>
                <button className="text-xl">
                  {expandedSection === "shipping" ? "−" : "+"}
                </button>
              </div>
              {expandedSection === "shipping" && (
                <div className="mt-3 text-gray-700 text-sm">
                  <p className="mb-2">
                    <strong>Shipping:</strong> {productData.shipping}
                  </p>
                  <p>
                    <strong>Returns:</strong> {productData.returnsPolicy}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>


      {/* Photo Gifts Section */}
      <div className="py-16 border-t border-gray-200">
        <h2 className="text-4xl md:text-5xl text-center font-serif mb-16">
          Photo gifts for your favourites
        </h2>

        {/* Render the ProductRow component */}
        <ProductRow />

        {/* Pagination dots */}
        <div className="flex justify-center mt-8">
          <div className="flex gap-2">
            {[0, 1, 2, 3, 4].map((dot) => (
              <button
                key={dot}
                className={`w-2 h-2 rounded-full ${
                  dot === 0 ? "bg-black" : "bg-gray-300"
                }`}
                aria-label={`Page ${dot + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Add the PhotoBookCategories component */}
      <PhotoBookCategories />

      {/* Add the new ProductFeatures component */}
      <ProductFeatures />

            </div>
    </div>
  );
};

export default ProductPage;
