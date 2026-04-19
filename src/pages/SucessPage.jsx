import React from 'react';
import { Link } from 'react-router';

const SucessPage = () => {
  return (
    <div className=" bg-white flex flex-col items-center justify-center px-6 py-24 text-center">
      {/* Icon Container */}
      <div className="mb-8 flex flex-col items-center justify-center">
        <div className=" flex flex-col items-center">
          {/* Green Checkmark Circle */}

          
          {/* Stars */}
          <div className="flex flex-col items-center gap-1">
            <img className='w-28 heartbeat' src="/images/success.jpg" alt="" />
          </div>
        </div>
      </div>

      {/* Text Content */}
      <h1 className="text-[#1B5E79] text-4xl md:text-5xl font-bold mb-4">
        Backup Successful
      </h1>
      
      <p className="text-gray-600 font-medium text-base mb-8">
        UID: wu233382872262
      </p>

      <p className="text-gray-500 text-base md:text-lg max-w-md mb-12">
        Your wallet data has been successfully backed up! We've securely stored your 
        information, ensuring your assets remain protected. Feel free to continue 
        managing your wallet or explore additional features.
      </p>

      {/* Button */}
      <Link 
        to="/" 
        className="bg-[#1B5E79] hover:bg-[#154a60] text-white font-medium py-4 px-10 rounded-full text-lg transition-all shadow-md active:scale-95"
      >
        Return To Home Page
      </Link>

      <style>{`
        @keyframes heartbeat {
          0% { transform: scale(1); }
          25% { transform: scale(1.08); }
          50% { transform: scale(1); }
          75% { transform: scale(1.08); }
          100% { transform: scale(1); }
        }

        .heartbeat {
          animation: heartbeat 3s ease-in-out infinite;
        }
      `}</style>

    </div>
  );
};

export default SucessPage;