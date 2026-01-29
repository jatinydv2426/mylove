import { useState } from 'react';
import { Heart, Sparkles, X } from 'lucide-react';

export default function HiddenSurprise() {
  const [isRevealed, setIsRevealed] = useState(false);

  const surpriseLines = [
    "I'm sorry for every time I hurt you,",
    "even when I never meant to.",
    "",
    "You deserve love that feels safe,",
    "warm, and true.",
    "",
    "And I promise…",
    "I will be the one you truly deserve.",
  ];

  return (
    <>
      <div className="fixed bottom-8 right-8 z-40 cursor-pointer group">
        <div
          onClick={() => setIsRevealed(true)}
          className="relative"
        >
          <div className="absolute inset-0 bg-romantic-darkpink rounded-full blur-xl opacity-50 animate-pulse-soft" />
          <div className="relative bg-gradient-to-br from-romantic-darkpink to-romantic-lavender rounded-full p-4 shadow-2xl hover:scale-110 transition-transform duration-300">
            <Heart size={32} className="text-white animate-heartbeat" fill="white" />
          </div>

          <div className="absolute -top-2 -right-2">
            <Sparkles
              size={20}
              className="text-romantic-lavender animate-pulse"
              fill="currentColor"
            />
          </div>
        </div>

        <div className="absolute bottom-full right-0 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          <div className="bg-romantic-darkpink text-white px-4 py-2 rounded-lg text-sm whitespace-nowrap shadow-lg">
            Click me😉
          </div>
        </div>
      </div>

      {isRevealed && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center px-6 animate-fade-in"
          style={{ backdropFilter: 'blur(10px)' }}
        >
          <div className="absolute inset-0 bg-romantic-darkpink bg-opacity-30" />

          <div className="relative bg-gradient-to-br from-romantic-white to-romantic-pink rounded-3xl p-8 md:p-12 max-w-2xl w-full shadow-2xl border-4 border-romantic-lavender overflow-hidden">
            <button
              onClick={() => setIsRevealed(false)}
              className="absolute top-4 right-4 text-romantic-darkpink hover:scale-110 transition-transform z-10"
            >
              <X size={28} />
            </button>

            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              {Array.from({ length: 15 }).map((_, i) => (
                <div
                  key={i}
                  className="absolute animate-float"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    animationDelay: `${Math.random() * 2}s`,
                    animationDuration: `${4 + Math.random() * 3}s`,
                  }}
                >
                  <Sparkles
                    size={10 + Math.random() * 10}
                    className="text-romantic-lavender opacity-30"
                    fill="currentColor"
                  />
                </div>
              ))}
            </div>

            <div className="relative z-10 text-center">
              <Heart
                size={60}
                className="text-romantic-darkpink mx-auto mb-8 animate-heartbeat"
                fill="currentColor"
              />

              <div className="space-y-4">
                {surpriseLines.map((line, index) => (
                  <p
                    key={index}
                    className={`text-xl md:text-2xl font-handwritten text-romantic-darkpink leading-relaxed animate-fade-in ${
                      line === '' ? 'h-2' : ''
                    }`}
                    style={{
                      animationDelay: `${index * 0.3}s`,
                      animationFillMode: 'backwards',
                    }}
                  >
                    {line}
                  </p>
                ))}
              </div>

              <p
                className="text-3xl font-handwritten text-romantic-lavender mt-8 animate-fade-in flex items-center justify-center gap-2"
                style={{ animationDelay: '2.4s', animationFillMode: 'backwards' }}
              >
                — Bhondu Billa
                <Heart size={24} fill="currentColor" className="inline animate-heartbeat" />
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
