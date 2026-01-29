import { useEffect, useState } from 'react';
import { Mail, Heart, Sparkles } from 'lucide-react';

const fullMessage = "My Love ❤️ Tum meri zindagi ka wo hissa ho jiske bina sab adhoora lagta hai. Tumhari smile meri har tension gayab kar deti hai, aur tumhari aankhe in me toh bas doobne ka mnn karta h. aapki aadat  lag gyi h yrr mujhe. Bas itna kehna hai — I love you, aaj bhi, kal bhi, aur hamesha. 💫";


export default function LoveLetterSection() {
  const [displayedText, setDisplayedText] = useState('');
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullMessage.length) {
        setDisplayedText(fullMessage.slice(0, currentIndex));
        currentIndex++;
      } else {
        setIsComplete(true);
        clearInterval(typingInterval);
      }
    }, 50);

    return () => clearInterval(typingInterval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-romantic-pink via-romantic-lightlavender to-romantic-peach px-6 py-20 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${12 + Math.random() * 6}s`,
            }}
          >
            {i % 2 === 0 ? (
              <Heart size={12 + Math.random() * 18} fill="#FFB3C6" stroke="none" className="opacity-20 animate-pulse-soft" />
            ) : (
              <Sparkles size={10 + Math.random() * 12} stroke="#E0BBE4" className="opacity-15 animate-pulse-soft" />
            )}
          </div>
        ))}
      </div>

      <div className="max-w-3xl mx-auto relative z-10">
        <div className="text-center mb-8 animate-slide-up">
          <Mail size={50} className="text-pink-800 mx-auto mb-4 animate-pulse-soft" />
          <h2 className="text-5xl md:text-6xl font-serif text-pink-900 mb-4 drop-shadow-lg font-bold">
            A Letter for You
          </h2>
        </div>

        <div className="bg-romantic-white rounded-3xl p-8 md:p-12 shadow-2xl border-4 border-pink-300 relative overflow-hidden backdrop-blur-sm">
          <div className="absolute top-0 right-0 w-32 h-32 bg-romantic-pink opacity-20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-romantic-lavender opacity-20 rounded-full blur-3xl" />

          <div className="relative z-10">
            <p className="text-2xl md:text-4xl font-handwritten text-pink-900 leading-relaxed text-center min-h-[120px] font-bold drop-shadow-md">
              {displayedText}
              {!isComplete && (
                <span className="inline-block w-1 h-10 bg-pink-900 ml-1 animate-pulse" />
              )}
            </p>

            {isComplete && (
              <p className="text-3xl md:text-4xl font-handwritten text-pink-800 text-right mt-8 animate-fade-in drop-shadow-md font-bold">
                — Bhondu Billa
              </p>
            )}
          </div>

          <div className="absolute -bottom-2 -right-2 opacity-10">
            <Mail size={120} className="text-romantic-lavender" />
          </div>
        </div>
      </div>
    </section>
  );
}
