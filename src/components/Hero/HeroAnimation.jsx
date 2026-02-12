import { useState, useEffect, useRef } from 'react';
import TypedText from './TypedText';
import styles from './HeroAnimation.module.css';

const HeroAnimation = () => {
  const [currentFrame, setCurrentFrame] = useState(0);
  const [showText, setShowText] = useState(false);
  const [framesLoaded, setFramesLoaded] = useState(false);
  const heroRef = useRef(null);
  const framesRef = useRef([]);

  const TOTAL_FRAMES = 150; // Reduced from 192 to 150

  // Preload all frames using Vite's import.meta.glob
  useEffect(() => {
    const loadFrames = async () => {
      try {
        // Import all frames at once using glob pattern
        const frameModules = import.meta.glob('../../assets/hero-frames/*.jpg', { eager: true });

        // Sort frames by filename to ensure correct order
        const sortedFrames = Object.keys(frameModules)
          .sort()
          .map(path => frameModules[path].default)
          .slice(0, TOTAL_FRAMES); // Only use first 150 frames

        framesRef.current = sortedFrames;
        setFramesLoaded(true);
      } catch (error) {
        console.error('Error loading frames:', error);
      }
    };

    loadFrames();
  }, []);

  // Scroll-based frame progression
  useEffect(() => {
    if (!framesLoaded) return;

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const maxScroll = window.innerHeight * 2; // Scroll through TWO viewport heights for full animation

      // Calculate which frame to show based on scroll position
      const scrollProgress = Math.min(scrollPosition / maxScroll, 1);
      const frameIndex = Math.floor(scrollProgress * (TOTAL_FRAMES - 1));

      setCurrentFrame(frameIndex);

      // Show text when scroll reaches 70% or more (gives more time to read)
      if (scrollProgress >= 0.7) {
        setShowText(true);
      } else {
        setShowText(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [framesLoaded]);

  if (!framesLoaded) {
    return (
      <div className={styles.hero}>
        <div className={styles.loading}>
          <div className={styles.loadingSpinner}></div>
          <p>Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.hero} ref={heroRef}>
      <div className={styles.animationContainer}>
        <img
          src={framesRef.current[currentFrame]}
          alt="Manoranjan Lassi Shop Animation"
          className={styles.frame}
        />
      </div>

      {showText && <TypedText />}

      <div
        className={styles.scrollIndicator}
        style={{
          cursor: 'pointer',
          opacity: showText ? 0 : 1,
          transition: 'opacity 0.3s ease'
        }}
      >
        <span>Scroll down to open</span>
        <div className={styles.arrow}>↓</div>
      </div>
    </div>
  );
};

export default HeroAnimation;
