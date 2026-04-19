import React from 'react'

const FindCrypto = () => {
  return (
    <div className="bg-[#02050A] text-white p-6 md:p-20 min-h-screen">
      <div className='max-w-7xl mx-auto'>
        <div className="flex flex-col md:flex-row justify-between items-start mb-12 gap-6 md:gap-8">
          <h2 className="text-2xl md:text-4xl font-bold leading-tight">
            Find & Secure <span className="text-[#3A96FF] underline decoration-2 underline-offset-4">crypto </span> 
            Now!
          </h2>
          <p className="text-gray-400 max-w-sm text-sm leading-relaxed">
            Our comprehensive cybersecurity platform, driven by artificial intelligence, not only safeguards your organization.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:row-span-2 bg-[#0F1E2E] rounded-xl p-6 md:p-8  pb-0 flex flex-col justify-between relative overflow-hidden min-h-[450px] md:min-h-[600px]">
            <div>
              <h3 className="text-xl md:text-2xl font-bold mb-4">Connect to Dapps</h3>
              <p className="text-gray-400 text-sm leading-relaxed max-w-[200px]">
                Connect decentralized apps to mobile wallets and enable DAPP.
              </p>
            </div>
            <div className="flex justify-center mt-auto">
              <img src="/images/globe-2.png" alt="Globe with coins" className="w-full max-w-[280px] md:max-w-none h-auto object-contain" />
            </div>
          </div>

          <div className="bg-[#0F1E2E] rounded-xl p-6 md:p-8 pb-0 flex flex-col relative overflow-hidden min-h-[200px] md:min-h-[240px]">
            <h3 className="text-xl md:text-2xl font-bold mb-2">Missing Funds</h3>
            <p className="text-gray-400 text-sm mb-4">Lost access to funds or missing funds? Click here.</p>
            <img src="/images/trade.png" alt="Phone lock" className="absolute lg:top-24 top-20 md:top-20 right-4 h-36 md:h-auto" />
          </div>

          <div className="bg-[#0F1E2E] rounded-xl p-6 md:p-8 flex flex-col relative overflow-hidden min-h-[200px] md:min-h-[240px]">
            <h3 className="text-xl md:text-2xl font-bold mb-2">High Fee</h3>
            <p className="text-gray-400 text-sm mb-4">Transaction fees too high? Click here.</p>
            <img src="/images/spot.png" alt="Chart with magnifier" className="absolute lg:top-28 top-20 md:top-24 right-4 h-36 md:h-auto" />
          </div>

          <div className="bg-[#0F1E2E] rounded-xl p-6 md:p-8 flex flex-col relative overflow-hidden min-h-[200px] md:min-h-[240px]">
            <h3 className="text-xl md:text-2xl font-bold mb-2">24/7 Support</h3>
            <p className="text-gray-400 text-sm mb-4 max-w-[70%] md:max-w-none">Count on us for round-the-clock support, help whenever you need it.</p>
            <img src="/images/support.png" alt="Support headset" className="absolute right-4 lg:top-28 top-24 md:top-28 h-36 md:h-auto" />
            <img src="/images/bitcoin-2.png" alt="Small coin" className="hidden lg:flex absolute bottom-6 md:bottom-8 left-6 md:left-8 h-12 md:h-auto" />
          </div>

          <div className="bg-[#0F1E2E] rounded-xl p-6 md:p-8 flex flex-col relative overflow-hidden min-h-[200px] md:min-h-[240px]">
            <h3 className="text-xl md:text-2xl font-bold mb-2">Trusted & Secure</h3>
            <p className="text-gray-400 text-sm mb-4">Your assets2. On your terms. At your fingertips.</p>
            <div className="mt-auto flex justify-center">
              <img src="/images/trusted.png" alt="Hands holding shield" className="absolute top-28 md:top-24 right-4 h-36 md:h-auto" />
            </div>
            <img src="/images/coins.png" alt="Floating coins" className="hidden lg:flex absolute bottom-6 md:bottom-8 left-6 md:left-8 h-12 md:h-auto" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default FindCrypto