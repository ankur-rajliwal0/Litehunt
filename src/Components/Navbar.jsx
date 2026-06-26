import React, { useState } from "react";
import logo from "../assets/images/logo.webp";
import { Menu, X } from "lucide-react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("Home");

  const navLinks = [
    "Home",
    "Services",
    "Portfolio",
    "Our Mission",
    "Pricing",
  ];

  return (
    <nav className="w-full sticky top-0 z-50 bg-[#051424] border-b border-gray-700">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="/" className="flex items-center">
            <img
              src={logo}
              alt="Litehunt Logo"
              className="h-20 md:h-24 w-auto object-contain
              hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.6)] transition-all duration-300"
            />
          </a>

          {/* Desktop Menu */}
          <ul className="hidden lg:flex items-center gap-10 text-white font-medium">
            {navLinks.map((item) => (
              <li key={item}>
                <a
                  href="#"
                  onClick={() => setActiveLink(item)}
                  className={`relative pb-1 inter transition-all duration-300
                    ${
                      activeLink === item
                        ? "text-cyan-400"
                        : "text-white hover:text-cyan-400"
                    }
                    after:absolute
                    after:left-0
                    after:bottom-0
                    after:h-[2px]
                    after:bg-cyan-400
                    after:transition-all
                    after:duration-300
                    ${
                      activeLink === item
                        ? "after:w-full"
                        : "after:w-0 hover:after:w-full"
                    }
                  `}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>

          {/* Desktop Contact Button */}
          <div className="hidden lg:block">
            <button
              className="
                px-6 py-3
                rounded-md
                bg-cyan-500
                border border-cyan-500
                text-black
                inter font-bold
                transition-all duration-300
                hover:bg-transparent
                hover:border-white
                hover:text-white
                hover:scale-105
                hover:shadow-[0_0_20px_rgba(255,255,255,0.5)]
              "
            >
              Contact Us
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={30} /> : <Menu size={30} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ${
            isOpen ? "max-h-[500px] pb-6" : "max-h-0"
          }`}
        >
          <ul className="flex flex-col gap-5 pt-4">
            {navLinks.map((item) => (
              <li key={item}>
                <a
                  href="#"
                  onClick={() => {
                    setActiveLink(item);
                    setIsOpen(false);
                  }}
                  className={`block text-lg transition-all duration-300 ${
                    activeLink === item
                      ? "text-cyan-400 underline underline-offset-8"
                      : "text-white hover:text-cyan-400"
                  }`}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile Contact Button */}
          <button
            className="
              mt-6
              w-full
              py-3
              rounded-md
              bg-cyan-500
              border border-cyan-500
              text-black
              font-bold
              transition-all duration-300
              hover:bg-transparent
              hover:border-white
              hover:text-white
              hover:shadow-[0_0_20px_rgba(255,255,255,0.5)]
            "
          >
            Contact Us
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;