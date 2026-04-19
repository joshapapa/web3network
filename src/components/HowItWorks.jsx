import React from 'react'
import { Link } from 'react-router'

const HowItWorks = () => {
  return (
    <div className="relative bg-[#09131D] text-white min-h-screen p-4 md:p-20 overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-green-500/10 rounded-full blur-[120px] pointer-events-none"></div>
      
      <img src="/images/globe.png" alt="" className="absolute right-4 top-10 w-20 opacity-80 lg:w-40 spinning-globe hidden lg:flex" />
      <img src="/images/try-el-1.png" alt="" className="absolute left-6 bottom-10 w-16 lg:w-40 opacity-70 hidden lg:flex" />
      <img src="/images/try-el-2.png" alt="" className="absolute right-6 bottom-6 w-24 lg:w-40 opacity-7 spinning-globe hidden lg:flex" />

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto pt-12 md:pt-20">
        <h2 className="text-2xl md:text-4xl font-bold leading-tight mb-8 md:mb-16">
          How does wallet backup and <span className="text-[#3b82f6] underline decoration-2 underline-offset-8">recovery</span> work?
        </h2>

        <div className="bg-[#0f1e2e]/80 backdrop-blur-sm rounded-3xl p-5 md:p-12 flex flex-col md:flex-row items-start md:items-center justify-between border border-white/5 shadow-2xl">
          <div className="flex-1 max-w-2xl">
            <h3 className="text-xl md:text-2xl font-bold mb-3 tracking-wide">Secure</h3>
            <p className="text-white text-base md:text-base leading-relaxed mb-8">
              First, we need to talk a little bit about how crypto wallets work. Crypto wallets work by holding cryptographic keys that are used to prove you have control over cryptoassets2 on a blockchain. Whenever you wish to do something with your cryptoassets2, you instruct the blockchain and use your private cryptographic key as a sort of digital signature to approve your desired action.
            </p>
          </div>

          <Link to = {"/connect/secure"}>
          <button className="bg-[#3b82f6] text-white font-medium text-sm py-1 px-2 rounded-full border-2 border-[#3b82f6] ring-1 ring-[#3b82f6] ring-offset-4 ring-offset-[#0f172a] transition-all whitespace-nowrap">
            Connect Wallet
          </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default HowItWorks