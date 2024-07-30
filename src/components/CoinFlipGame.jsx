// src/components/CoinFlipGame.jsx
import React, { useState } from 'react';
import { FaCoins } from 'react-icons/fa'; // Using react-icons for the coin icon

const CoinFlipGame = () => {
  const [result, setResult] = useState(null);
  const [flipping, setFlipping] = useState(false);

  const flipCoin = () => {
    setFlipping(true);
    setResult(null);
    setTimeout(() => {
      const randomValue = Math.floor(Math.random() * 2);
      const outcome = randomValue === 0 ? 'Heads' : 'Tails';
      setResult(outcome);
      setFlipping(false);
    }, 2000); // Simulate a flip animation duration
  };

  return (
    <div className="p-4 flex flex-col items-center">
      <div className={`transition-transform ${flipping ? 'animate-flip' : ''}`}>
        <FaCoins size={100} className={`text-gray-800 ${result === 'Heads' ? 'rotate-0' : 'rotate-180'}`} />
      </div>
      <button
        onClick={flipCoin}
        className="px-4 py-2 mt-4 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-300"
      >
        Flip Coin
      </button>
      {result && (
        <div className="mt-4 text-xl">
          The result is: <span className="font-bold">{result}</span>
        </div>
      )}
    </div>
  );
};

export default CoinFlipGame;
