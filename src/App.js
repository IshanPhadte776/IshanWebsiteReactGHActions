import logo from './logo.svg';
import { useState, useEffect } from "react";
import TechnologyUsed from "./technology/TechnologyUsed";
import VerticalComponent from "./sideBar/VerticalComponent";
import Hero from './hero/Hero';
import Header from './header/Header';

import './App.css';
import ScrollToTopButton from './ScrollToTopButton';

function App() {
  const [language, setLanguage] = useState("English");

  const scrollToTop = () => {
    const scrollDuration = 500; // Duration of the scroll animation in milliseconds
    const easing = (t) => t * t * t; // Easing function for gradual acceleration
    let currentTime = 0;

    const animateScroll = () => {
      currentTime += 15; // Time increment for each interval
      const progress = currentTime / scrollDuration;
      const scrollStep = -window.scrollY * easing(progress);

      if (progress < 1) {
        window.scrollBy(0, scrollStep);
        requestAnimationFrame(animateScroll);
      } else {
        window.scrollTo(0, 0); // Scroll to the exact top when animation completes
      }
    };

    requestAnimationFrame(animateScroll);
  };

  return (
    <div className="App">
      <header className="App-header">
        
        <Header> </Header>
       

        <Hero> </Hero>
        <TechnologyUsed language={language}> </TechnologyUsed>

        <ScrollToTopButton> </ScrollToTopButton>
      </header>
    </div>
  );
}

export default App;
