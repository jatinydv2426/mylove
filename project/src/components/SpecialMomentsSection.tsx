import { useEffect, useState } from 'react';
import { Calendar, Gift, Heart, Sparkles } from 'lucide-react';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const specialDates = [
  {
    name: "Gungun's Birthday",
    date: new Date('2026-10-10'),
    icon: Gift,
  },
  {
    name: 'Our Anniversary',
    date: new Date('2026-12-09'),
    icon: Calendar,
  },
];

function getNextOccurrence(targetDate: Date): Date {
  const now = new Date();
  const year = now.getFullYear();
  let nextDate = new Date(year, targetDate.getMonth(), targetDate.getDate());

  if (nextDate < now) {
    nextDate = new Date(year + 1, targetDate.getMonth(), targetDate.getDate());
  }

  return nextDate;
}

function calculateTimeLeft(targetDate: Date): TimeLeft {
  const now = new Date();
  const nextOccurrence = getNextOccurrence(targetDate);
  const difference = nextOccurrence.getTime() - now.getTime();

  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((difference / 1000 / 60) % 60),
    seconds: Math.floor((difference / 1000) % 60),
  };
}

export default function SpecialMomentsSection() {
  const [timers, setTimers] = useState<TimeLeft[]>(
    specialDates.map((date) => calculateTimeLeft(date.date))
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setTimers(specialDates.map((date) => calculateTimeLeft(date.date)));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-romantic-pink to-romantic-lightlavender px-6 py-20 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`,
              animationDuration: `${10 + Math.random() * 8}s`,
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

      <div className="max-w-4xl mx-auto w-full relative z-10">
        <h2 className="text-5xl md:text-6xl font-serif text-pink-900 text-center mb-6 animate-slide-up drop-shadow-lg font-bold">
          Counting Down to Joy
        </h2>

        <p className="text-2xl md:text-3xl font-handwritten text-pink-900 text-center mb-16 italic drop-shadow-md font-bold">
          Every moment with you is worth waiting for
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {specialDates.map((event, index) => {
            const Icon = event.icon;
            const timeLeft = timers[index];

            return (
              <div
                key={index}
                className="bg-gradient-to-br from-romantic-white to-romantic-pink rounded-3xl p-10 shadow-2xl border-4 border-pink-300 hover:scale-105 transition-transform duration-300 backdrop-blur-sm animate-fade-in"
              >
                <div className="flex items-center justify-center gap-3 mb-8">
                  <Icon size={36} className="text-pink-800 animate-pulse-soft" />
                  <h3 className="text-3xl font-serif text-pink-900 text-center font-bold drop-shadow-md">
                    {event.name}
                  </h3>
                </div>

                <div className="grid grid-cols-4 gap-4">
                  {[
                    { value: timeLeft.days, label: 'Days' },
                    { value: timeLeft.hours, label: 'Hours' },
                    { value: timeLeft.minutes, label: 'Mins' },
                    { value: timeLeft.seconds, label: 'Secs' },
                  ].map((item, i) => (
                    <div key={i} className="text-center">
                      <div className="bg-pink-800 text-white rounded-xl p-4 mb-2 shadow-lg">
                        <span className="text-3xl font-bold block">
                          {String(item.value).padStart(2, '0')}
                        </span>
                      </div>
                      <span className="text-sm text-pink-900 font-bold">
                        {item.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
