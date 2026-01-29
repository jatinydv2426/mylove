import { Heart, Sparkles } from 'lucide-react';

export default function FinalSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-t from-romantic-lavender via-romantic-pink to-romantic-peach">
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 45 }).map((_, i) => (
          <div
            key={i}
            className="absolute opacity-50"
            style={{
              left: `${Math.random() * 100}%`,
              bottom: '-50px',
              animation: `float ${12 + Math.random() * 10}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 6}s`,
            }}
          >
            {i % 3 === 0 ? (
              <Heart
                size={18 + Math.random() * 28}
                fill="#FFB3C6"
                stroke="none"
                className="animate-pulse-soft"
              />
            ) : i % 3 === 1 ? (
              <Sparkles
                size={12 + Math.random() * 18}
                stroke="#E0BBE4"
                className="animate-pulse-soft"
              />
            ) : (
              <Heart
                size={14 + Math.random() * 18}
                fill="#E0BBE4"
                stroke="none"
                className="animate-pulse-soft"
              />
            )}
          </div>
        ))}
      </div>

      <div className="relative z-10 text-center px-6 animate-fade-in">
        <div className="mb-8 animate-bounce">
          <Heart
            size={100}
            className="text-pink-800 mx-auto animate-heartbeat"
            fill="currentColor"
          />
        </div>

        <h2 className="text-6xl md:text-8xl font-serif text-pink-900 mb-8 leading-tight drop-shadow-lg font-bold">
          Forever Yours
        </h2>

        <div className="flex items-center justify-center gap-4 mb-10">
          <Sparkles size={40} className="text-pink-800 animate-pulse-soft" />
          <p className="text-4xl md:text-6xl font-handwritten text-pink-900 drop-shadow-lg font-bold">
            Bhondu Billa
          </p>
          <Sparkles size={40} className="text-pink-800 animate-pulse-soft" />
        </div>

        <div className="mt-12 space-y-6">
          <p className="text-2xl md:text-3xl font-handwritten text-pink-900 italic drop-shadow-md font-bold">
            Thank you for being my everything
          </p>
          <p className="text-xl md:text-2xl font-handwritten text-pink-800 italic drop-shadow-md font-bold">
            I love you more than you can ever imagine
          </p>
        </div>

        <div className="mt-16 flex justify-center gap-2">
          {Array.from({ length: 5 }).map((_, i) => (
            <Heart
              key={i}
              size={20}
              className="text-romantic-darkpink animate-heartbeat"
              fill="currentColor"
              style={{ animationDelay: `${i * 0.2}s` }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
