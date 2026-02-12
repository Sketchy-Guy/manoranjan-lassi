import './styles/variables.css';
import './styles/global.css';
import HeroAnimation from './components/Hero/HeroAnimation';
import OurStory from './components/OurStory/OurStory';
import WhatMakesItSpecial from './components/WhatMakesItSpecial/WhatMakesItSpecial';
import OurMenu from './components/OurMenu/OurMenu';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <HeroAnimation />
      {/* Spacer to allow scroll-through animation - 2x viewport height for slower progression */}
      <div style={{ height: '200vh' }}></div>

      {/* Content sections with proper stacking */}
      <div style={{ position: 'relative', zIndex: 2, background: 'var(--color-cream)' }}>
        <OurStory />
        <WhatMakesItSpecial />
        <OurMenu />
        <Footer />
      </div>
    </div>
  );
}

export default App;
