import { useEffect } from 'react';
import HeroSection from './components/HeroSection';
import LoveQuotesSection from './components/LoveQuotesSection';
import TimelineSection from './components/TimelineSection';
import PhotoGallery from './components/PhotoGallery';
import LoveLetterSection from './components/LoveLetterSection';
import SpecialMomentsSection from './components/SpecialMomentsSection';
import FinalSection from './components/FinalSection';
import FloatingHearts from './components/FloatingHearts';
import MusicPlayer from './components/MusicPlayer';
import HiddenSurprise from './components/HiddenSurprise';

function App() {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <div className="relative overflow-x-hidden">
      <FloatingHearts />
      <MusicPlayer />
      <HiddenSurprise />

      <HeroSection />
      <LoveQuotesSection />
      <TimelineSection />
      <PhotoGallery />
      <LoveLetterSection />
      <SpecialMomentsSection />
      <FinalSection />
    </div>
  );
}

export default App;
