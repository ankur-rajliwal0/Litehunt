import React from "react";
import logo from "../assets/images/logo.webp";
import { Send } from "lucide-react";

function Footer() {
  return (
    <footer className="bg-[#051424] text-white border-t border-gray-700">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Logo Section */}
          <div>
            <img
              src={logo}
              alt="LiteHunt"
              className="h-22 w-auto mb-6 object-contain"
            />

            <p className="text-gray-400 leading-8 text-base">
              Sophisticated engineering for high-performance brands.
              Built with React, Node, WordPress, and Shopify.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg mb-6">Services</h3>

            <ul className="space-y-4 text-gray-400">
              <li>
                <a href="#" className="hover:text-cyan-400 transition">
                  Fullstack Development
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-cyan-400 transition">
                  Ecommerce Solutions
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-cyan-400 transition">
                  Real Estate Portals
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-cyan-400 transition">
                  Technical SEO
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-lg mb-6">Company</h3>

            <ul className="space-y-4 text-gray-400">
              <li>
                <a href="#" className="hover:text-cyan-400 transition">
                  Why Choose Us
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-cyan-400 transition">
                  Our Mission
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-cyan-400 transition">
                  About Us
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-cyan-400 transition">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-semibold text-lg mb-6">Newsletter</h3>

            <p className="text-gray-400 mb-6 leading-7">
              Stay updated with our latest engineering insights.
            </p>

            <div className="flex">
              <input
                type="email"
                placeholder="Email address"
                className="flex-1 bg-[#1B2A3D] px-4 py-3 outline-none text-white placeholder:text-gray-500 rounded-l-md"
              />

              <button className="bg-cyan-500 px-5 rounded-r-md hover:bg-cyan-400 transition-all duration-300">
                <Send size={18} className="text-black" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="mt-16 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-500">
            © 2024 LiteHunt. Sophisticated Engineering. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;