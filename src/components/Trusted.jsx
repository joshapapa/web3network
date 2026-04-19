import React from "react";

const Trusted = () => {
  const logos = [
    { name: "Prismic", src: "/images/logos/item-1.png" },
    { name: "Jotform", src: "/images/logos/item-2.png" },
    { name: "Voiceflow", src: "/images/logos/item-3.png" },
    { name: "Dropbox", src: "/images/logos/item-4.png" },
    { name: "GitLab", src: "/images/logos/item-5.png" },
    { name: "Krisp", src: "/images/logos/item-6.png" },
    { name: "Lattice", src: "/images/logos/item-7.png" },
    { name: "Monday", src: "/images/logos/item-8.png" },
    { name: "Figma", src: "/images/logos/item-9.png" },
    { name: "Stripe", src: "/images/logos/item-10.png" },
  ];

  // Randomize logos for second row
  const shuffledLogos = [...logos].sort(() => Math.random() - 0.5);

  return (
    <section className="bg-[#020617] py-20 overflow-hidden relative">
      <div className="absolute top-0 right-0 w-72 h-72 bg-blue-500/10 blur-[120px]"></div>
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-blue-500/10 blur-[120px]"></div>

      <div className="max-w-7xl mx-auto text-center px-6 relative z-10">
        <h2 className="text-2xl md:text-3xl font-semibold text-white mb-14">
          Trusted by
        </h2>

        {/* Row 1 - Left direction */}
        <div className="relative w-full overflow-hidden mb-10">
          <div className="flex animate-marquee hover:[animation-play-state:paused]">
            {[...logos, ...logos].map((logo, index) => (
              <div
                key={index}
                className="flex items-center justify-center mx-10 min-w-[120px]"
              >
                <div className="w-[110px] h-[40px] flex items-center justify-center">
                  <img
                    src={logo.src}
                    alt={logo.name}
                    className="max-w-full max-h-full object-contain opacity-70 hover:opacity-100 transition duration-300"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Row 2 - Right direction */}
        <div className="relative w-full overflow-hidden">
          <div className="flex animate-marquee-reverse hover:[animation-play-state:paused]">
            {[...shuffledLogos, ...shuffledLogos].map((logo, index) => (
              <div
                key={index}
                className="flex items-center justify-center mx-10 min-w-[120px]"
              >
                <div className="w-[110px] h-[40px] flex items-center justify-center">
                  <img
                    src={logo.src}
                    alt={logo.name}
                    className="max-w-full max-h-full object-contain opacity-70 hover:opacity-100 transition duration-300"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }

        @keyframes marquee-reverse {
          from {
            transform: translateX(-50%);
          }
          to {
            transform: translateX(0);
          }
        }

        .animate-marquee {
          width: max-content;
          animation: marquee 30s linear infinite;
        }

        .animate-marquee-reverse {
          width: max-content;
          animation: marquee-reverse 30s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default Trusted;
