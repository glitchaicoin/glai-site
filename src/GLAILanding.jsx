import React from 'react';

export default function GLAILanding() {
  return (
    <div className="min-h-screen bg-black text-white font-mono px-6 py-16">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-6xl md:text-7xl font-extrabold glitch-text mb-4 tracking-tight">$GLAI</h1>
        <p className="text-lg md:text-xl text-gray-300 max-w-xl mx-auto">GlitchAI — The deflationary BSC memecoin built to burn, break trends, and fuel a community-led uprising.</p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a href="https://pancakeswap.finance/swap?outputCurrency=0xbbbecE84f2358bAfb9676fe2267B6dec7CaC4341" className="bg-green-500 hover:bg-green-600 text-black px-6 py-3 rounded-full font-semibold transition">Buy on PancakeSwap</a>
          <a href="https://bscscan.com/token/0xbbbecE84f2358bAfb9676fe2267B6dec7CaC4341" className="bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition">View Contract</a>
        </div>
      </div>

      {/* Token Stats */}
      <div className="grid md:grid-cols-3 gap-6 text-sm md:text-base max-w-4xl mx-auto">
        <div className="bg-white text-black p-5 rounded-lg shadow">🔥 <strong>200B GLAI Burned</strong><br />30% of total supply destroyed</div>
        <div className="bg-white text-black p-5 rounded-lg shadow">🔐 <strong>Ownership Renounced</strong><br />No admin control, forever</div>
        <div className="bg-white text-black p-5 rounded-lg shadow">🔒 <strong>99% LP Locked</strong><br />Via UNCX until May 2026</div>
        <div className="bg-white text-black p-5 rounded-lg shadow">⚖️ <strong>Fixed Tax</strong><br />2% Buy / 1.9% Sell — cannot be changed</div>
        <div className="bg-white text-black p-5 rounded-lg shadow">🛡️ <strong>Anti-Whale & Whitelist Logic</strong><br />Permanently disabled by renounce</div>
        <div className="bg-white text-black p-5 rounded-lg shadow">💬 <strong>Telegram:</strong> <a href="https://t.me/GLAIofficial" className="underline">@GLAIofficial</a></div>
      </div>

      {/* Footer & Disclaimers */}
      <div className="mt-20 text-center text-xs text-gray-400 max-w-2xl mx-auto">
        <p>$GLAI is a decentralized, community-run memecoin. There is no dev wallet, no presale, and no roadmap — just memes, momentum, and smart execution.</p>
        <p className="mt-3">CoinGecko/CMC Note: The contract contains anti-whale and whitelist logic used only for initial safety. Ownership has been renounced, and these features are permanently inactive.</p>
        <p className="mt-2">Visit: <a href="https://glai-site.vercel.app" className="underline">glai-site.vercel.app</a></p>
      </div>

      {/* Glitch Effect */}
      <style>{`
        .glitch-text {
          position: relative;
          color: white;
        }
        .glitch-text::before, .glitch-text::after {
          content: '$GLAI';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          overflow: hidden;
          z-index: -1;
        }
        .glitch-text::before {
          left: 2px;
          text-shadow: -2px 0 red;
        }
        .glitch-text::after {
          left: -2px;
          text-shadow: 2px 0 blue;
        }
      `}</style>
    </div>
  );
}
Deploy glitch landing
