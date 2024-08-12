import TechnologyUsed from "./technology/TechnologyUsed";
import Hero from './hero/Hero';
import Header from './header/Header';

import './App.css';
import ScrollToTopButton from './ScrollToTopButton';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        
        <Header> </Header>
       

        <Hero> </Hero>
        <TechnologyUsed> </TechnologyUsed>

        <ScrollToTopButton> </ScrollToTopButton>
      </header>
    </div>
  );
}

export default App;
