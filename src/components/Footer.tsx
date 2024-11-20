import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8 mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-sm text-gray-400">
            © {new Date().getFullYear()} Szakitsunk.hu - Minden jog fenntartva
          </div>
          <div className="flex space-x-6">
            <a href="https://promnet.hu" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition">
              promnet.hu
            </a>
            <a href="https://promnetszerviz.hu" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition">
              promnetszerviz.hu
            </a>
            <a href="https://csumpinet.hu" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition">
              csumpinet.hu
            </a>
            <a href="https://creatify.hu" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition">
              creatify.hu
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}