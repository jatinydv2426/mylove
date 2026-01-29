import { useState, useRef } from 'react';
import { Heart, Play, Pause } from 'lucide-react';

export default function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="fixed bottom-8 left-8 z-40">
      <button
        onClick={togglePlay}
        className="group relative bg-gradient-to-br from-romantic-darkpink to-romantic-lavender rounded-full p-4 shadow-2xl hover:scale-110 transition-all duration-300"
      >
        <div className="absolute inset-0 bg-romantic-darkpink rounded-full blur-xl opacity-50 animate-pulse-soft" />

        <div className="relative">
          {isPlaying ? (
            <Pause size={24} className="text-white" fill="white" />
          ) : (
            <Play size={24} className="text-white" fill="white" />
          )}
        </div>

        <div className="absolute -top-1 -right-1">
          <Heart
            size={16}
            className="text-romantic-peach animate-heartbeat"
            fill="currentColor"
          />
        </div>
      </button>

      <div className="absolute bottom-full left-0 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        <div className="bg-romantic-darkpink text-white px-4 py-2 rounded-lg text-sm whitespace-nowrap shadow-lg">
          {isPlaying ? 'Pause music' : 'Play music'}
        </div>
      </div>

      <audio
        ref={audioRef}
        loop
        src="src/components/khat.mp3"
      />
    </div>
  );
}
