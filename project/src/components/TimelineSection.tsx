import { Calendar, Heart, Star, Sparkles } from 'lucide-react';
import { useEffect, useState } from 'react';

const timelineEvents = [
  {
    date: '10 October 2005',
    title: 'The Day My World Was Born But I was not😅',
    description: 'The universe blessed me with your existence',
    icon: Star,
  },
  {
    date: '09 December 2025',
    title: 'The Day Our Story Began',
    description: 'When two Weirdos became one',
    icon: Heart,
  },
];

export default function TimelineSection() {
  const [visibleItems, setVisibleItems] = useState<number[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute('data-index'));
            setVisibleItems((prev) => [...new Set([...prev, index])]);
          }
        });
      },
      { threshold: 0.3 }
    );

    const elements = document.querySelectorAll('.timeline-item');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-romantic-lightlavender via-romantic-pink to-romantic-peach px-6 py-20 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`,
              animationDuration: `${12 + Math.random() * 8}s`,
            }}
          >
            {i % 2 === 0 ? (
              <Heart size={15 + Math.random() * 20} fill="#FFB3C6" stroke="none" className="opacity-20 animate-pulse-soft" />
            ) : (
              <Sparkles size={12 + Math.random() * 15} stroke="#E0BBE4" className="opacity-20 animate-pulse-soft" />
            )}
          </div>
        ))}
      </div>

      <div className="max-w-3xl mx-auto relative z-10">
        <h2 className="text-5xl md:text-6xl font-serif text-pink-900 text-center mb-16 animate-slide-up drop-shadow-lg font-bold">
          Our Story
        </h2>

        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-romantic-lavender opacity-30" />

          {timelineEvents.map((event, index) => {
            const Icon = event.icon;
            const isVisible = visibleItems.includes(index);
            const isLeft = index % 2 === 0;

            return (
              <div
                key={index}
                data-index={index}
                className={`timeline-item relative mb-16 ${
                  isLeft ? 'md:text-right' : 'md:text-left'
                }`}
              >
                <div
                  className={`transition-all duration-700 ${
                    isVisible
                      ? 'opacity-100 translate-y-0'
                      : 'opacity-0 translate-y-10'
                  }`}
                >
                  <div
                    className={`md:w-1/2 ${
                      isLeft ? 'md:ml-auto md:pr-12' : 'md:ml-auto md:pl-12'
                    } relative`}
                  >
                    <div className="bg-romantic-white rounded-2xl p-8 shadow-2xl hover:shadow-2xl hover:scale-105 transition-all duration-300 border-4 border-pink-300 backdrop-blur-sm">
                      <div className="flex items-center gap-3 mb-4 justify-center md:justify-start">
                        <Calendar size={20} className="text-pink-800 font-bold" />
                        <span className="text-pink-900 font-bold text-lg">
                          {event.date}
                        </span>
                      </div>

                      <h3 className="text-3xl font-serif text-pink-900 mb-3 font-bold drop-shadow-md">
                        {event.title}
                      </h3>

                      <p className="text-pink-800 italic font-semibold text-lg">
                        {event.description}
                      </p>
                    </div>
                  </div>

                  <div className="absolute left-1/2 top-8 transform -translate-x-1/2 -translate-y-1/2 z-10">
                    <div className="w-12 h-12 bg-romantic-darkpink rounded-full flex items-center justify-center shadow-lg animate-pulse-soft">
                      <Icon size={24} className="text-white" fill="white" />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
