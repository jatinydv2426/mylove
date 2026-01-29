import { Heart, Sparkles } from 'lucide-react';
import { useState } from 'react';

const photos = [
  {
    id: 1,
    url: "https://img.sanishtech.com/u/b8a09680a0cedf21eb18f7c1a2c85f35.png",
    caption: "Every moment of you",
  },
  {
    id: 2,
    url: "https://img.sanishtech.com/u/f29e0eb2d1c65967dcbb335a5200f5f8.png",
    caption: "Is a beautiful memory",
  },
  {
    id: 3,
    url: "https://img.sanishtech.com/u/c252784d9a2599e379609a1e87920f0f.png",
    caption: "Your smile lights up my world",
  },
  {
    id: 4,
    url: "https://img.sanishtech.com/u/3e648ae6caab3acac5e34978446d5fe2.png",
    caption: "Together forever",
  },
];


export default function PhotoGallery() {
  const [hoveredPhoto, setHoveredPhoto] = useState<number | null>(null);

  return (
    <section className="relative min-h-screen bg-gradient-to-b from-romantic-peach to-romantic-pink px-6 py-20 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 18 }).map((_, i) => (
          <div
            key={i}
            className="absolute animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${10 + Math.random() * 6}s`,
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

      <h2 className="text-5xl md:text-6xl font-serif text-pink-900 text-center mb-16 animate-slide-up drop-shadow-lg font-bold relative z-10">
        Our Moments
      </h2>

      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
        {photos.map((photo) => (
          <div
            key={photo.id}
            className="relative group cursor-pointer overflow-hidden rounded-3xl border-4 border-pink-300 shadow-2xl hover:shadow-2xl transition-all duration-500 hover:scale-105 animate-fade-in"
            onMouseEnter={() => setHoveredPhoto(photo.id)}
            onMouseLeave={() => setHoveredPhoto(null)}
            onTouchStart={() => setHoveredPhoto(photo.id)}
            onTouchEnd={() => setHoveredPhoto(null)}
          >
            <div className="aspect-square overflow-hidden bg-romantic-lightlavender">
              <img
                src={photo.url}
                alt={photo.caption}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>

            <div
              className={`absolute inset-0 bg-romantic-darkpink bg-opacity-0 group-hover:bg-opacity-70 transition-all duration-500 flex items-center justify-center ${
                hoveredPhoto === photo.id ? 'bg-opacity-70' : ''
              }`}
            >
              <div
                className={`transition-all duration-500 ${
                  hoveredPhoto === photo.id
                    ? 'opacity-100 scale-100'
                    : 'opacity-0 scale-75'
                }`}
              >
                <Heart
                  size={60}
                  className="text-white mx-auto mb-4 animate-heartbeat"
                  fill="white"
                />
                <p className="text-white text-2xl font-handwritten text-center px-4 font-bold drop-shadow-lg">
                  {photo.caption}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <p className="text-center text-pink-900 font-handwritten text-3xl mt-12 italic drop-shadow-md font-bold relative z-10">
        Each photograph holds a piece of our hearts
      </p>
    </section>
  );
}
