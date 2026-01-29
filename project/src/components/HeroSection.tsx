import { Heart, Sparkles } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-romantic-pink via-romantic-lavender to-romantic-peach" />

      <div className="absolute inset-0 opacity-40">
        {Array.from({ length: 35 }).map((_, i) => (
          <div
            key={i}
            className="absolute animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${8 + Math.random() * 6}s`,
            }}
          >
            {i % 3 === 0 ? (
              <Heart size={18 + Math.random() * 20} fill="#FFB3C6" stroke="none" className="animate-pulse-soft" />
            ) : i % 3 === 1 ? (
              <Sparkles size={14 + Math.random() * 12} stroke="#E0BBE4" className="animate-pulse-soft" />
            ) : (
              <Heart size={12 + Math.random() * 10} fill="#E0BBE4" stroke="none" className="animate-pulse-soft" />
            )}
          </div>
        ))}
      </div>

      <div className="relative z-10 text-center px-6 animate-fade-in">
        <div className="mb-6 flex justify-center animate-bounce">
          <Heart
            size={60}
            className="text-pink-800 animate-heartbeat"
            fill="currentColor"
          />
        </div>

        <h1 className="text-5xl md:text-7xl font-serif text-pink-900 mb-6 leading-tight font-bold drop-shadow-lg">
          For Gungun❤️,<br/>
          <span className="text-4xl md:text-6xl text-pink-800 drop-shadow-md">
            the love of my life<br></br>
            Meri pyaari Aaloo bhujiya🌹
          </span>
        </h1>

        <p className="text-xl md:text-3xl text-pink-900 font-handwritten italic max-w-md mx-auto drop-shadow-md font-semibold">
          Every heartbeat whispers your name
        </p>

        <p className="mt-4 text-2xl md:text-4xl text-pink-800 font-handwritten drop-shadow-md font-bold">
          — Bhondu Billa
        </p>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-romantic-darkpink rounded-full flex justify-center">
          <div className="w-1.5 h-3 bg-romantic-darkpink rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
}
