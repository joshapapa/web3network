import React, { useState, useEffect, useCallback } from 'react'
import { Link } from 'react-router';

const ExploreWeb3 = () => {
  const cards = [
    {
      title: "Spot Trading",
      desc: "Trade crypto with out comprehensive set of powerful tools to maximize your earnings",
      icon: "/images/spot-trading.png"
    },
    {
      title: "Margin Trading",
      desc: "Borrow, trade, and repay. Leverage your assets2 with margin trading.",
      icon: "/images/margin.png"
    },
    {
      title: "Crypto Derivatives",
      desc: "We are the best crypto exchange for trading crypto futures.",
      icon: "/images/derivative.png"
    },
    {
      title: "QFSEarn",
      desc: "Invest and earn steady income with the help of a professional asset manager.",
      icon: "/images/earn.png"
    },
    {
      title: "Buy Crypto",
      desc: "Purchase crypto easily on out popular and industry-leading platform.",
      icon: "/images/buy.png"
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) setVisibleCards(1);
      else if (window.innerWidth < 1024) setVisibleCards(2);
      else setVisibleCards(3);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const maxIndex = cards.length - visibleCards;

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  }, [maxIndex]);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  const progressSegments = 5;
  const activeSegments = Math.round(((currentIndex + visibleCards) / cards.length) * progressSegments);

  return (
    <div className="relative bg-[#09131D] text-white p-6 md:p-20  overflow-hidden">
      <div className='max-w-7xl mx-auto'>
        <div className="absolute top-[-10%] right-[-5%] w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-green-500/10 rounded-full blur-[80px] md:blur-[120px] pointer-events-none"></div>
        <div className="absolute bottom-[-10%] left-[-5%] w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-blue-600/10 rounded-full blur-[80px] md:blur-[120px] pointer-events-none"></div>
        
        <img src="/images/bitcoin-3.png" alt="" className="absolute left-4 md:left-10 top-1/2 -translate-y-1/2 w-8 md:w-20 opacity-50 md:opacity-100 spinning-globe" />
        <img src="/images/globe.png" alt="" className="absolute right-4 md:right-10 top-10 md:top-20 w-16 md:w-32 spinning-globe hidden lg:flex" />
        <img src="/images/element-1.png" alt="" className="absolute right-0 bottom-0 w-40 md:w-72 " />

        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 md:mb-16 relative z-10 gap-6">
          <div className="space-y-4">
            <h2 className="text-2xl md:text-4xl font-bold">
              Explore <span className="text-[#3b82f6] underline decoration-2 underline-offset-8">Web3</span>
            </h2>
            <p className="text-gray-400 max-w-md text-base md:text-sm">
              It is the easiest, safest, and fastest way to secure & backup crypto asset.
            </p>
          </div>
          <Link to={"/connect/web3"}>
          <button className="md:w-auto bg-[#3b82f6] text-white text-sm py-1 px-2 lg:py-3 lg:px-8 rounded-full ring-1 ring-[#3b82f6] ring-offset-4 ring-offset-[#020617] transition-all hover:scale-105">
            View More
          </button>
          </Link>
        </div>

        <div className="relative z-10 mb-12 md:mb-20 overflow-hidden">
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{ 
              transform: `translateX(-${currentIndex * (100 / visibleCards)}%)`,
              gap: '2rem'
            }}
          >
            {cards.map((card, index) => (
              <div 
                key={index} 
                className="bg-[#0f172a]/40 border border-white/5 rounded-2xl p-6 md:p-10 flex flex-col items-center text-center space-y-4 md:space-y-6 hover:bg-[#0f172a]/60 transition-all group"
                style={{ minWidth: `calc(${100 / visibleCards}% - ${(visibleCards - 1) * 2 / visibleCards}rem)` }}
              >
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-full border border-blue-500/50 flex items-center justify-center p-3 md:p-4">
                  <img src={card.icon} alt="" className="w-8 h-8 md:w-10 md:h-10 object-contain" />
                </div>
                <h3 className="text-lg md:text-xl font-bold">{card.title}</h3>
                <p className="text-gray-400 text-xs md:text-sm leading-relaxed">{card.desc}</p>
                <button className="text-white font-bold text-xs md:text-sm pt-2 md:pt-4 hover:text-[#3b82f6] transition-colors">
                  View Details
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-6 relative z-10">
          <div className="flex gap-4 order-2 md:order-1">
            <button 
              onClick={prevSlide}
              className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-gray-700 flex items-center justify-center hover:bg-white/5 transition-all active:scale-95"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
            </button>
            <button 
              onClick={nextSlide}
              className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-gray-700 flex items-center justify-center shadow-lg transition-all active:scale-95 bg-transparent hover:bg-white/5"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
            </button>
          </div>
          
          <div className="flex-1 flex items-center gap-1 w-full order-1 md:order-2">
            {[...Array(progressSegments)].map((_, index) => (
              <div 
                key={index} 
                className={`flex-1 h-[2px] rounded-full transition-all duration-300 ${index < activeSegments ? 'bg-[#3b82f6] shadow-[0_0_10px_#3b82f6]' : 'bg-white/10'}`}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ExploreWeb3