import { useState, useEffect } from 'react';
import { Quote } from 'lucide-react';

const quotes = [
  "In your smile, I found my forever.",
  "You are my today, my tomorrow, my always.",
  "With you, every moment feels amazing", 
  "Mmm how do I explain it to you that how much i Love you.",
];

export default function LoveQuotesSection() {
  const [currentQuote, setCurrentQuote] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentQuote((prev) => (prev + 1) % quotes.length);
        setIsVisible(true);
      }, 500);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-romantic-peach to-romantic-pink px-6 py-20">
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 25 }).map((_, i) => (
          <div
            key={i}
            className="absolute animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`,
              animationDuration: `${10 + Math.random() * 6}s`,
            }}
          >
            {i % 2 === 0 ? (
              <Quote size={20 + Math.random() * 20} stroke="#E0BBE4" className="opacity-20 animate-pulse-soft" />
            ) : (
              <Quote size={15 + Math.random() * 15} stroke="#FFB3C6" className="opacity-15 animate-pulse-soft" />
            )}
          </div>
        ))}
      </div>

      <div className="relative z-10 max-w-2xl mx-auto text-center">
        <div
          className={`transition-all duration-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <Quote size={40} className="text-pink-800 mx-auto mb-6 animate-pulse-soft" />
          <p className="text-3xl md:text-5xl font-serif text-pink-900 leading-relaxed italic drop-shadow-lg font-bold">
            {quotes[currentQuote]}
          </p>
          <Quote
            size={40}
            className="text-pink-800 mx-auto mt-6 transform rotate-180 animate-pulse-soft"
          />
        </div>

        <div className="flex justify-center gap-2 mt-12">
          {quotes.map((_, index) => (
            <div
              key={index}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentQuote
                  ? 'bg-romantic-darkpink w-6'
                  : 'bg-romantic-lavender opacity-50'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
