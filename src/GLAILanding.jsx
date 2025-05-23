import React from "react";

export default function GLAILanding() {
  return (
    <main className="bg-black text-white min-h-screen font-sans">
      {/* Hero Section */}
      <section className="text-center py-20 px-6">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-purple-400">$GLAI</h1>
        <p className="text-lg md:text-2xl text-gray-300 mb-6">Glitched. Burned. Unstoppable.</p>
        <a href="https://t.me/GLAIofficial" target="_blank" rel="noopener" className="inline-block bg-purple-600 hover:bg-purple-800 text-white px-6 py-3 rounded-full">Join Telegram</a>
      </section>

      {/* Links Section */}
      <section className="text-center py-10 px-6 bg-gray-900">
        <h2 className="text-2xl font-semibold mb-4">Quick Links</h2>
        <div className="space-y-3">
          <a href="https://bscscan.com/tx/0xa18f1069..." className="block text-blue-400 hover:underline">🔗 Burn TX</a>
          <a href="https://bscscan.com/tx/0x92703c42..." className="block text-blue-400 hover:underline">🔐 Renounce TX</a>
          <span className="block text-gray-500">📊 Chart – Coming Soon</span>
          <span className="block text-gray-500">🛒 Buy Link – Coming Soon</span>
        </div>
      </section>

      {/* Tokenomics */}
      <section className="py-14 px-6">
        <h2 className="text-2xl font-semibold text-center mb-6">Tokenomics</h2>
        <ul className="max-w-md mx-auto text-left space-y-2 text-gray-300">
          <li>🔢 Total Supply: 1 Trillion GLAI</li>
          <li>🔥 Burned: 200 Billion GLAI</li>
          <li>💧 Liquidity: Locked (soon)</li>
          <li>🧾 Taxes: 0%</li>
          <li>❌ Owner: Renounced</li>
        </ul>
      </section>

      {/* Why GLAI */}
      <section className="bg-gray-900 py-14 px-6">
        <h2 className="text-2xl font-semibold text-center mb-6">Why $GLAI?</h2>
        <p className="max-w-2xl mx-auto text-center text-gray-400">
          Based. Burned. No owner. No taxes. Just pure memetic AI glitch energy pulsing through BSC. $GLAI isn't just another coin — it's the glitch that broke out of the code.
        </p>
      </section>

      {/* Footer */}
      <footer className="text-center text-gray-500 text-sm py-6 border-t border-gray-700">
        <p>Contract: 0xbbbecE84f2358bAfb9676fe2267B6dec7CaC4341</p>
        <p>Built on BNB Chain · Not financial advice</p>
      </footer>
    </main>
  );
}
