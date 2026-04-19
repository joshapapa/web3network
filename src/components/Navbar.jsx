import React, { useState } from "react";
import { Link } from "react-router"; 

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "igo", href: "/connect" },
    { name: "launchpad", href: "/connect" },
    { name: "staking", href: "/connect" },
    { name: "farming", href: "/connect" },
    { name: "crypto", href: "/connect" },
    { name: "defi", href: "/connect" },
    { name: "web3", href: "/connect" },
    { name: "ido", href: "/connect" },
    { name: "token", href: "/connect" },
    { name: "nft", href: "/connect" },
  ];

  return (
    <nav className="bg-[#02050A] text-white px-5 md:px-8 py-5 flex items-center justify-between relative z-[100]">
      {/* Logo */}
      <Link to="/">
        <div className="flex items-center text-xl md:text-2xl font-bold tracking-tighter shrink-0">
          <img src="images/logos/logo.png" alt="WEB3 NETWORK" />
        </div>
      </Link>

      {/* Desktop Menu */}
      <div className="hidden lg:flex gap-6 items-center">
        {navLinks.map((link, index) => (
          <Link
            key={index}
            to={`${link.href}/${link.name}`}
            className="text-xs font-medium hover:text-gray-400 transition-colors duration-200 uppercase"
          >
            {link.name}
          </Link>
        ))}
      </div>

      {/* Mobile Hamburger Button */}
      <button
        className="lg:hidden flex flex-col gap-1.5"
        onClick={() => setIsOpen(true)}
      >
        <span className="h-0.5 w-6 bg-white"></span>
        <span className="h-0.5 w-6 bg-white"></span>
        <span className="h-0.5 w-6 bg-white"></span>
      </button>

      {/* Mobile Side Drawer Overlay */}
      <div
        className={`fixed inset-0 bg-black/60 transition-opacity duration-300 lg:hidden ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsOpen(false)}
      ></div>

      {/* Mobile Side Drawer */}
      <div
        className={`fixed top-0 left-0 h-screen w-[75%] max-w-[300px] bg-[#0B0E13] z-[101] transform transition-transform duration-300 ease-in-out lg:hidden ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col p-6 h-full">
          {/* Drawer Header */}
          <div className="flex items-center justify-between mb-10">
            <div className="flex items-center text-xl font-bold tracking-tighter">
              <img src="images/logos/logo.png" alt="WEB3 NETWORK" className="h-6" />
            </div>
            <button 
                onClick={() => setIsOpen(false)}
                className="text-white text-2xl"
            >
              ✕
            </button>
          </div>

          {/* Drawer Links */}
          <div className="flex flex-col gap-6">
            {navLinks.map((link, index) => (
              <Link
                key={index}
                to={`${link.href}/${link.name}`}
                className="text-base font-bold tracking-wide hover:text-blue-400 transition-colors uppercase"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;