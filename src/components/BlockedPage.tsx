import { useState } from 'react';

const BlockedPage = () => {
  const [isSpinning, setIsSpinning] = useState(false);

  const handleLearnMore = () => {
    setIsSpinning(true);
  };

  return (
    <div className={`min-h-screen flex flex-col items-center justify-center bg-black text-white p-4 text-center ${isSpinning ? 'spin-infinite' : ''}`}>
      <div className="max-w-md w-full p-8 pika-box">
        <h1 className="text-9xl font-bold mb-4">404</h1>
        <h2 className="text-2xl font-semibold mb-6">Site Inaccessible</h2>
        <p className="text-gray-400 mb-8">
          The website you are trying to reach is currently unavailable or your access has been restricted.
        </p>
        <button
          onClick={handleLearnMore}
          className="px-6 py-3 bg-white text-black rounded-full font-medium transition-transform hover:scale-105 active:scale-95"
          disabled={isSpinning}
        >
          {isSpinning ? 'Processing...' : 'Click here to learn more'}
        </button>
      </div>
      
      {isSpinning && (
        <div className="mt-8 text-white font-mono animate-pulse">
           INITIALIZING INFINITE LOOP...
        </div>
      )}
    </div>
  );
};

export default BlockedPage;
