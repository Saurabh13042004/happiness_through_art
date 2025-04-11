import React from 'react';
import { Heart, ArrowRight, Instagram, Pointer as Pinterest } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-purple-50 via-orange-50 to-yellow-50 pt-20 pb-8 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Logo and Newsletter Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Heart className="text-red-500 w-8 h-8 fill-current" />
              <h2 className="text-2xl font-bold">Odd Giraffe</h2>
            </div>
            <p className="text-gray-600 mb-2">Feel Your Best</p>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">WE ALSO MAKE EMAILS.</h3>
            <p className="text-gray-600 mb-6">
              Receive email updates on stuff you'll probably want to know about, including products, launches and events. Unsubscribe anytime.
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Your e-mail"
                className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
              <button className="p-3 bg-black hover:bg-gray-800 text-white rounded-lg transition-colors">
                <ArrowRight className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>

        {/* Links Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          <div>
            <h3 className="font-bold mb-4">ABOUT</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-600 hover:text-black">about us</a></li>
              <li><a href="#" className="text-gray-600 hover:text-black">designers</a></li>
              <li><a href="#" className="text-gray-600 hover:text-black">business & bulk orders</a></li>
              <li><a href="#" className="text-gray-600 hover:text-black">sustainability</a></li>
              <li><a href="#" className="text-gray-600 hover:text-black">wholesale</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold mb-4">HELP</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-600 hover:text-black">contact us</a></li>
              <li><a href="#" className="text-gray-600 hover:text-black">faqs</a></li>
              <li><a href="#" className="text-gray-600 hover:text-black">track your order</a></li>
              <li><a href="#" className="text-gray-600 hover:text-black">returns</a></li>
              <li><a href="#" className="text-gray-600 hover:text-black">shipping</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold mb-4">MORE</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-600 hover:text-black">privacy policy</a></li>
              <li><a href="#" className="text-gray-600 hover:text-black">terms of service</a></li>
              <li><a href="#" className="text-gray-600 hover:text-black">refund policy</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold mb-4">LOCATION</h3>
            <select className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400 bg-white">
              <option>India (INR ₹)</option>
            </select>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-200">
          <p className="text-gray-600 mb-4 md:mb-0">
            © {currentYear} Odd Giraffe. All rights reserved.
          </p>
          <div className="flex gap-4">
            <a href="#" className="text-gray-600 hover:text-black">
              <Instagram className="w-6 h-6" />
            </a>
            <a href="#" className="text-gray-600 hover:text-black">
              <Pinterest className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;