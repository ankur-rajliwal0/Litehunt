import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "../assets/images/logo.webp";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Our Mission", path: "/our-mission" },
    { name: "About", path: "/about" },
    { name: "Pricing", path: "/pricing" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full bg-[#051424] border-b border-gray-700">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <NavLink to="/">
            <img
              src={logo}
              alt="Litehunt Logo"
              className="h-20 md:h-24 w-auto object-contain hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.6)] transition-all duration-300"
            />
          </NavLink>

          {/* Desktop Navigation */}
          <ul className="hidden lg:flex items-center gap-10">
            {navLinks.map((item) => (
              <li key={item.name}>
                <NavLink
                  to={item.path}
                  end={item.path === "/"}
                  className={({ isActive }) =>
                    `relative pb-1 inter transition-all duration-300 after:absolute after:left-0 after:bottom-0 after:h-[2px] after:bg-cyan-400 after:transition-all after:duration-300 ${
                      isActive
                        ? "text-cyan-400 after:w-full"
                        : "text-white hover:text-cyan-400 after:w-0 hover:after:w-full"
                    }`
                  }
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Desktop Contact Button */}
          <div className="hidden lg:block">
            <NavLink to="/contact">
              <button className="px-6 py-3 rounded-md bg-cyan-500 border border-cyan-500 text-black font-bold transition-all duration-300 hover:bg-transparent hover:border-white hover:text-white hover:scale-105 hover:shadow-[0_0_20px_rgba(255,255,255,0.5)]">
                Contact Us
              </button>
            </NavLink>
          </div>

          {/* Mobile Toggle */}
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
              <li key={item.name}>
                <NavLink
                  to={item.path}
                  end={item.path === "/"}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `block text-lg transition-all duration-300 ${
                      isActive
                        ? "text-cyan-400 underline underline-offset-8"
                        : "text-white hover:text-cyan-400"
                    }`
                  }
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>

          <NavLink to="/contact" onClick={() => setIsOpen(false)}>
            <button className="mt-6 w-full py-3 rounded-md bg-cyan-500 border border-cyan-500 text-black font-bold transition-all duration-300 hover:bg-transparent hover:border-white hover:text-white hover:shadow-[0_0_20px_rgba(255,255,255,0.5)]">
              Contact Us
            </button>
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;