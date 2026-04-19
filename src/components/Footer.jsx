import React, { useState, useEffect } from "react";

const Footer = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <footer className="relative bg-[#020617] text-white pt-16 lg:pt-24 pb-12 px-4 md:px-20 overflow-hidden min-h-[500px]">
      
      {/* Background */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-teal-500/10 rounded-full blur-[120px] pointer-events-none"></div>
      <img src="/images/howstart2.png" alt="" className="absolute top-10 right-10 w-32 opacity-80 hidden lg:flex" />

      <img 
        src="/images/footer-el-1.png" 
        alt="3D Hand holding globe" 
        className="absolute bottom-0 left-0 w-[200px] md:w-[300px] z-10 lg:flex hidden" 
      />

      <img 
        src="/images/footer-el-2.png" 
        alt="3D Green Piggy Bank" 
        className="absolute bottom-0 right-0 w-[220px] md:w-[320px] z-10 lg:flex hidden" 
      />

      <div className="max-w-7xl mx-auto relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-32 items-start text-left">
          
          {/* Quick Links */}
          <div>
            <h3 className="text-2xl lg:text-3xl font-medium mb-8 lg:mb-10">Quick Links</h3>
            <div className="grid grid-cols-2 gap-x-8 lg:gap-x-12 gap-y-4">
              <div className="space-y-4">
                <a href="#" className="block text-gray-400 hover:text-white transition text-base lg:text-lg">IGO</a>
                <a href="#" className="block text-gray-400 hover:text-white transition text-base lg:text-lg">LAUNCHPAD</a>
                <a href="#" className="block text-gray-400 hover:text-white transition text-base lg:text-lg">STAKING</a>
                <a href="#" className="block text-gray-400 hover:text-white transition text-base lg:text-lg">FARMING</a>
                <a href="#" className="block text-gray-400 hover:text-white transition text-base lg:text-lg">CRYPTO</a>
              </div>

              <div className="space-y-4">
                <a href="#" className="block text-gray-400 hover:text-white transition text-base lg:text-lg">DEFI</a>
                <a href="#" className="block text-gray-400 hover:text-white transition text-base lg:text-lg">WEB3</a>
                <a href="#" className="block text-gray-400 hover:text-white transition text-base lg:text-lg">IEO</a>
                <a href="#" className="block text-gray-400 hover:text-white transition text-base lg:text-lg">IDO</a>
                <a href="#" className="block text-gray-400 hover:text-white transition text-base lg:text-lg">TOKEN</a>
                <a href="#" className="block text-gray-400 hover:text-white transition text-base lg:text-lg">GAMING</a>
                <a href="#" className="block text-gray-400 hover:text-white transition text-base lg:text-lg">NFT</a>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div className="lg:text-left flex flex-col items-center lg:items-start pt-10 lg:pt-0">
            <h3 className="text-2xl lg:text-3xl font-bold mb-6 lg:mb-8">Newsletter</h3>

            <p className="text-gray-400 text-base lg:text-lg leading-relaxed mb-8 lg:mb-10 max-w-md">
              Welcome to WEB3 NETWORK, your gateway to the world of Web3 trading! Our user-friendly platform
            </p>

            <div className="relative flex w-full max-w-md gap-3">
              <input
                type="email"
                placeholder="Enter Your Email..."
                className="w-full bg-[#0a101f] border border-gray-800 rounded-full py-3 px-6 lg:py-4 lg:px-8 text-white focus:outline-none focus:border-[#3b82f6] transition text-sm lg:text-base"
              />

              <button className="sm:absolute right-2 top-1/2 sm:-translate-y-1/2 bg-[#3b82f6] text-white w-10 h-10 lg:w-12 lg:h-12 rounded-full flex items-center justify-center hover:bg-blue-600 transition shrink-0">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="7" y1="17" x2="17" y2="7"></line>
                  <polyline points="7 7 17 7 17 17"></polyline>
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-20 lg:mt-32 pt-8 border-t border-gray-800/50 flex justify-center items-center">
          <p className="text-gray-500 text-sm">@ 2026 All Rights Reserved</p>
        </div>
      </div>

      {/* Scroll to Top Button */}
      {showButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-[#3b82f6] text-white w-12 h-12 rounded-full flex items-center justify-center hover:bg-blue-600 transition z-50"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="12" y1="19" x2="12" y2="5"></line>
            <polyline points="5 12 12 5 19 12"></polyline>
          </svg>
        </button>
      )}
    </footer>
  );
};

export default Footer;