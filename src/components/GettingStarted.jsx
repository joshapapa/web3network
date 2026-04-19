import React from "react";
import { Link } from "react-router";

const GettingStarted = () => {
  return (
    <section className="bg-[#09131D] py-20 px-4 md:px-10 overflow-hidden relative">
      {/* Background Image: Bottom Left (Globe/Machine) */}
      <img
        src="/images/howstart1.png"
        alt=""
        className="absolute bottom-0 left-0 z-0 pointer-events-none hidden lg:block"
      />

      {/* Background Image: Top Right (Green Glowing Ovals) */}
      <img
        src="/images/howstart2.png"
        alt=""
        className="absolute top-10 right-0  z-0 pointer-events-none hidden lg:block"
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <h2 className="text-2xl md:text-4xl font-bold text-white text-center mb-16">
          How To Get{" "}
          <span className="text-[#3b82f6] underline decoration-2 underline-offset-8">
            Started
          </span>
        </h2>

        {/* The Grid Container */}
        <div
          className="relative z-[2] grid grid-cols-12 gap-6 text-center 
          after:hidden after:xl:block after:absolute after:right-0 after:top-[5%] after:w-full after:xl:w-[75%] after:h-[90%] after:bg-[#0f172a] after:rounded-2xl after:z-[-1] after:border after:border-white/5"
        >
          {/* Card 01 - The Primary Blue Card */}
          <div className="col-span-12 md:col-span-6 xl:col-span-3 p-8 lg:p-10 rounded-2xl bg-[#3A96FF] text-white flex flex-col items-center shadow-2xl">
            <div className="w-16 h-16 text-[#3b82f6] text-2xl flex items-center justify-center rounded-full bg-white mb-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <line x1="19" y1="8" x2="19" y2="14" />
                <line x1="16" y1="11" x2="22" y2="11" />
              </svg>
            </div>
            <h4 className="text-xl font-bold mb-4 tracking-tight">
              Connect Wallet
            </h4>
            <p className="mb-10 text-base opacity-90">
              Click connect wallet button.
            </p>
            <Link to={"/connect/secure"}>
            <button className="mt-auto px-8   text-white font-bold rounded-full hover:bg-opacity-90 transition-all text-sm">
              Connect Wallet
            </button>
            </Link>
          </div>

          {/* Card 02 */}
          <div className="col-span-12 md:col-span-6 xl:col-span-3 p-8 lg:p-10 rounded-2xl flex flex-col items-center text-white bg-[#0f172a] xl:bg-transparent">
            <div className="w-16 h-16 text-2xl flex items-center justify-center rounded-full bg-[#1e293b] mb-6 shadow-inner">
              <h5 className="">02</h5>
            </div>
            <h4 className="text-xl font-bold mb-4 tracking-tight">
              Select Wallet
            </h4>
            <p className="text-gray-400 text-base leading-relaxed">
              Choose your prefered wallet to backup and click on connect.
            </p>
          </div>

          {/* Card 03 */}
          <div className="col-span-12 md:col-span-6 xl:col-span-3 p-8 lg:p-10 rounded-2xl flex flex-col items-center text-white bg-[#0f172a] xl:bg-transparent">
            <div className="w-16 h-16 text-2xl flex items-center justify-center rounded-full bg-[#1e293b] mb-6 shadow-inner">
              <h5 className="">03</h5>
            </div>
            <h4 className="text-xl font-bold mb-4 tracking-tight">
              Backup your wallet
            </h4>
            <p className="text-gray-400 text-base">
              Your wallet backup may also be referred to as a:{" "}
              <b className="text-white">backup</b>,{" "}
              <b className="text-white">recovery seed</b>,{" "}
              <b className="text-white">seed</b>,{" "}
              <b className="text-white">seed phrase</b>,{" "}
              <b className="text-white">BIP-39 seed phrase</b>,{" "}
              <b className="text-white">mnemonic</b>,{" "}
              <b className="text-white">recovery phrase</b>, (plus various
              combinations of these words)
            </p>
          </div>

          {/* Card 04 */}
          <div className="col-span-12 md:col-span-6 xl:col-span-3 p-8 lg:p-10 rounded-2xl flex flex-col items-center text-white bg-[#0f172a] xl:bg-transparent">
            <div className="w-16 h-16 text-2xl flex items-center justify-center rounded-full bg-[#1e293b] mb-6 shadow-inner">
              <h5 className="">04</h5>
            </div>
            <h4 className="text-xl font-bold mb-4 tracking-tight">
              Start your journey
            </h4>
            <p className="text-gray-400 text-base">
              Having a safe wallet backup means you can recover your Bitcoin in
              case of hardware failure or the loss of your device
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GettingStarted;
