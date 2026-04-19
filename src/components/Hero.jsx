import React, { useState, useEffect } from "react";
import { Link } from "react-router";
import { motion } from "framer-motion";

// This component creates a vertical strip that "spins" multiple times
const CasinoDigit = ({ targetDigit, index }) => {
  // To make it look like it's spinning through many numbers,
  // we repeat the 0-9 sequence.
  // The higher the index (digits to the right), the longer the spin.
  const repetitions = 3 + index;
  const digits = Array.from(
    { length: 10 * repetitions + targetDigit + 1 },
    (_, i) => i % 10,
  );

  return (
    <div className="relative h-[1.1em] overflow-hidden inline-block leading-none">
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: `-${((digits.length - 1) * 100) / digits.length}%` }}
        transition={{
          duration: 2 + index * 0.5, // Digits on the right take longer to stop
          ease: [0.45, 0.05, 0.55, 0.95],
        }}
        className="flex flex-col"
      >
        {digits.map((n, i) => (
          <span key={i} className="h-[1.1em] flex items-center justify-center">
            {n}
          </span>
        ))}
      </motion.div>
    </div>
  );
};

const CasinoCounter = ({ value, suffix = "", isCurrency = false }) => {
  // Convert value to string and handle decimals for the $1.36 Billion case
  const strValue = value.toString();

  return (
    <div className="flex items-baseline text-2xl md:text-4xl font-semibold">
      {isCurrency && <span className="mr-0.5">$</span>}
      {strValue.split("").map((char, i) => {
        if (isNaN(parseInt(char))) {
          return <span key={i}>{char}</span>;
        }
        return <CasinoDigit key={i} targetDigit={parseInt(char)} index={i} />;
      })}
      <span className="whitespace-pre">{suffix}</span>
    </div>
  );
};

const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="relative bg-[#02050A] text-white min-h-screen flex flex-col justify-center items-center px-6 md:px-10 overflow-hidden">
      {/* Background and Decorative Elements */}
      <div className="absolute top-[-10%] right-[-10%] w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-cyan-500/20 rounded-full blur-[80px] md:blur-[120px] pointer-events-none hidden lg:flex"></div>
      <div className="absolute bottom-[-10%] left-[-10%] w-[300px] md:w-[500px] h-[200px] md:h-[350px] bg-[#725B0B] rounded-full blur-[80px] md:blur-[80px] pointer-events-none hidden md:flex"></div>
      <div className="absolute top-[30%] right-[15%] w-[250px] md:w-[400px] h-[250px] md:h-[400px] bg-blue-500/10 rounded-full blur-[70px] md:blur-[100px] pointer-events-none"></div>

      {/* Decorative Floating Icons */}
      <img
        src="/images/bitcoin.png"
        alt="Bitcoin"
        className="spinning-globe lg:flex absolute lg:top-[15%] top-[60%] md:top-[42%] left-[6%] lg:w-16 md:w-28 opacity-80 transition-all duration-1000"
      />
      <img
        src="/images/globe.png"
        alt="Planet"
        className="absolute top-[8%] right-[2%] w-16 md:w-28 spinning-globe hidden lg:flex drop-shadow-[0_0_15px_rgba(34,197,94,0.4)]"
      />
      <img
        src="/images/coin-1.png"
        alt="Silver Coin"
        className="absolute lg:bottom-[20%] right-[5%] w-20 md:w-20 opacity-70 spinning-globe transition-all duration-1000"
      />
      <img
        src="/images/rocket.png"
        alt="Rocket"
        className="absolute bottom-[2%] md:bottom-[2%] left-[-5%] md:left-[-3%] w-24 md:w-40 grayscale-[0.5] rotate-[-2deg] hidden md:block"
      />

      {/* Main Content Container */}
      <div className="container max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center z-10 pt-20 md:pt-10">
        <div className="space-y-6 md:space-y-8 text-center lg:text-left">
          <h1 className="text-4xl md:text-4xl font-bold tracking-tight leading-[1] md:leading-[1.15]">
            Gateway to Encrypt, <br className="hidden md:block" />
            back up, and{" "}
            <span className="text-[#3A96FF] underline">secure</span>
            <span className="relative inline-block mt-2">
              <span className="text-[#fbbf24] underline ml-2">your assets</span>
            </span>
          </h1>

          <p className="text-base md:text-lg text-white max-w-[400px] mx-auto lg:mx-0 leading-relaxed ">
            The easiest, safest, and fastest way to secure & back up crypto
            assets.
          </p>

          <div className="flex sm:flex-row gap-8 md:gap-6 justify-center lg:justify-start">
            <button
              onClick={openModal}
              className="relative bg-[#3A96FF] text-white md:text-lg text-sm py-1 md:py-4 lg:px-8 px-3 md:px-10 rounded-full transition-all ring-2 ring-[#3A96FF] ring-offset-4 ring-offset-[#020617] hover:scale-105"
            >
              Connect Wallet
            </button>

            <button
              onClick={openModal}
              className="relative bg-[#0f172a] text-white text-sm md:text-lg py-1 md:py-4 lg:px-8 px-3 md:px-10 rounded-full transition-all ring-2 ring-[#3A96FF] ring-offset-4 ring-offset-[#020617] hover:bg-[#1e293b] hover:scale-105"
            >
              Explore Now
            </button>
          </div>
        </div>

        <div className="relative flex justify-center lg:justify-end items-center mt-4 lg:mt-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-[#1B4576] blur-[60px] md:blur-[80px] rounded-full"></div>
          <img
            src="/images/Web3.png"
            alt="Web evolution"
            className="relative z-10 w-full max-w-[350px] md:max-w-[550px] object-contain drop-shadow-2xl"
          />
        </div>
      </div>

      {/* Stats Section with True Casino Spinning Logic */}
      <div className="w-full max-w-7xl mt-16 md:mt-24 mb-10 z-20 px-4 md:px-0">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-10 gap-x-8 ">
          <div className="flex flex-col items-start lg:items-center">
            <CasinoCounter value={200} suffix="+" />
            <p className="text-sm md:text-base mt-2">Countries Covered</p>
          </div>

          <div className="flex flex-col items-start lg:items-center md:border-l border-white/10 md:pl-8">
            <CasinoCounter value={30} suffix=" Million" />
            <p className="text-sm md:text-base mt-2">Global Investors</p>
          </div>

          <div className="flex flex-col items-start lg:items-center md:border-l border-white/10 md:pl-8">
            <CasinoCounter value={700} suffix="+" />
            <p className="text-sm md:text-base mt-2">Secured Wallet</p>
          </div>

          <div className="flex flex-col items-start lg:items-center md:border-l border-white/10 md:pl-8">
            <CasinoCounter value={1.36} suffix=" Billion" isCurrency={true} />
            <p className="text-sm md:text-base mt-2">Secured Volume</p>
          </div>
        </div>
      </div>

      {/* Modal - Kept as provided */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-2 bg-black/60 backdrop-blur-md"
          onClick={closeModal}
        >
          <div
            className="bg-[#09131D] w-full max-w-[420px] rounded-lg p-4 relative border border-white/5 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeModal}
              className="absolute top-6 right-6 w-10 h-10 bg-[#1E293B]/50 rounded-full flex items-center justify-center text-gray-400 hover:text-white"
            >
              ✕
            </button>

            <div className="mb-8">
              <h2 className="text-xl lg:text-2xl font-medium text-white mb-1">
                Connect Wallet
              </h2>
              <p className="text-white text-sm">Gateway to Web3</p>
            </div>

            {/* Backup Wallet Tab */}
            <div className="mb-4">
              <span className="text-white text-sm font-medium border-b-2 border-yellow-400 pb-1">
                Backup Wallet
              </span>
            </div>

            <div className="bg-[#111827]/50 border border-white/5 rounded-[24px] p-6 mb-2">
              <div className="flex items-center gap-4 mb-8">
                <img
                  src="/images/btcicon.png"
                  alt=""
                  className="w-12 h-12 z-10"
                />
                <h4 className="text-base font-bold text-white">
                  Automatic/Manual backup
                </h4>
              </div>

              <Link to={"/connect/secure"} className="w-full block">
                <button className="bg-[#3b82f6] hover:bg-[#2563eb] text-white font-medium py-2 px-4 rounded-full transition-all text-sm ">
                  Continue
                </button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Hero;
