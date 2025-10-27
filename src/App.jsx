import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Divisions from './components/Divisions';
import GlobalPresence from './components/GlobalPresence';
import SocialResponsibility from './components/SocialResponsibility';
import Devocation from './components/Devocation';
import FounderMessage from './components/FounderMessage';
import Footer from './components/Footer';
import Sam from './components/sam';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
   <Sam/>

      <About />
      <Divisions />
      <GlobalPresence />
      <SocialResponsibility />
      <Devocation />
      <FounderMessage />
      <Footer />
    </div>
  );
}

export default App;
