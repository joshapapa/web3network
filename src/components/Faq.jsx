import React, { useState } from "react";
import { Link } from "react-router";

const faqData = [
  {
    question: "How can I secure my wallet?",
    answer: "Set a unique passcode for your wallet. Also, make sure the numbers are random. Birthdays, anniversaries, house addresses, and the last digits of your phone number are all popular combinations and are crackable codes to a resourceful criminal.",
  },
  {
    question: "How to backup a crypto wallet?",
    answer: "1. Export Private Keys/Seed Phrase: Go to your wallet's settings and select the “backup wallet” or “export keys” option. 2. Secure Your Backup: Store backups in multiple secure locations like USB drives, paper copies in fireproof safes, and safety deposit boxes.",
  },
  {
    question: "How to keep bitcoin wallet safe?",
    answer: "Securing Your Bitcoin: Choosing a Reputable Exchange.",
  },
  {
    question: "How do I trust a safe wallet?",
    answer: "Back up your wallet. Be cautious of phishing scams.",
  },
];

const FaqItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-[#0a101f]/50 border border-white/5 rounded-xl mb-4 overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full px-5 py-5 text-left hover:bg-white/5"
      >
        <span className="text-sm lg:text-lg  text-white tracking-wide pr-4">
          {question}
        </span>

        <div
          className={`w-8 h-8 shrink-0 flex items-center justify-center rounded-full bg-[#09131D] border border-white/10 transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        >
          <svg width="12" height="8" viewBox="0 0 12 8" fill="none">
            <path
              d="M1 1.5L6 6.5L11 1.5"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </button>

      {isOpen && (
        <div className="px-6 pb-6 pt-4 text-white text-sm leading-relaxed border-t border-white/5">
          {answer}
        </div>
      )}
    </div>
  );
};

const Faq = () => {
  return (
    <section className="bg-[#02050A] text-white py-12 lg:py-20 px-4 md:px-10 relative overflow-hidden flex items-center justify-center">
      
      <div className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] bg-teal-500/20 rounded-full blur-[120px] pointer-events-none"></div>

      <img
        src="/images/faq-box.png"
        alt=""
        className="hidden lg:block absolute bottom-5 right-5 w-48 h-auto opacity-90 z-0 pointer-events-none"
      />

      <div className="max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative z-10">

        {/* Left Content: Info Card */}
        <div className="lg:col-span-5 bg-[#09131D] rounded-3xl p-4 lg:p-10 border border-white/5 flex flex-col h-full shadow-2xl">
          <span className="font-semibold uppercase tracking-[0.1em] mb-4 text-lg">
            FAQ
          </span>

          <h2 className="text-xl lg:text-4xl font-bold leading-tight mb-4 lg:mb-6">
            Your questions {" "}
            <span className="text-[#3b82f6] underline decoration-2 ">
              answered.
            </span>
          </h2>

          <p className="text-base lg:text-base mb-8 lg:mb-12 max-w-xs">
            Let's do our best to answer your most frequently asked questions.
          </p>

          {/* Still have questions? Sub-card */}
          <div className="bg-[#0f1e2e] rounded-xl lg:p-6 p-5 border border-white/5 mt-auto">
            <div className="flex flex-col items-start gap-4 mb-6">
              
              {/* Refined Question Mark Icon Container to match reference image */}
              <div className="w-16 h-16 shrink-0 rounded-2xl border border-white/20 flex items-center justify-center">
                <div className="w-10 h-10 rounded-full bg-[#3b82f6] flex items-center justify-center shadow-[0_0_15px_rgba(59,130,246,0.5)]">
                  <span className="text-white text-xl font-bold">?</span>
                </div>
              </div>

              <div>
                <h4 className="text-lg font-bold mb-2">
                  Still have questions?
                </h4>
                <p className=" text-sm leading-relaxed">
                  Can't find the answer you're looking for? Please chat to our
                  friendly team!
                </p>
              </div>
            </div>

          <Link to = {"/connect/secure"}>
          <button className="bg-[#3b82f6] text-white font-medium text-sm py-1 px-2 rounded-full border-2 border-[#3b82f6] ring-1 ring-[#3b82f6] ring-offset-4 ring-offset-[#0f172a] transition-all whitespace-nowrap">
            Connect Wallet
          </button>
          </Link>
          </div>
        </div>

        {/* Right Content: Accordion (Hidden on mobile based on image prompt if necessary, or kept for utility) */}
        <div className="lg:col-span-7 bg-[#09131D] rounded-3xl p-5 lg:p-8 border border-white/5 shadow-2xl">
          <div className="space-y-2">
            {faqData.map((item, index) => (
              <FaqItem
                key={index}
                question={item.question}
                answer={item.answer}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Faq;