import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/Sections/About';
import Divisions from './components/Divisions';
import GlobalPresence from './components/GlobalPresence';
import SocialResponsibility from './components/SocialResponsibility';
import Devocation from './components/Devocation';
import FounderMessage from './components/FounderMessage';
import Footer from './components/Footer'; 
import Production from './components/Divisions/Production';
import RealEstate from './components/Divisions/RealEstate';
import Infrastructure from './components/Divisions/Infrastructure';
import Contact from './components/Contact';
import AboutUs from './components/AboutUs';
import { MultiFormModalProvider } from './components/Context/ModalContext';
import MultiFormModal from './components/Context/Modal';
import AnandReality from './components/Divisions/RealEstate';

// Layout Component
function Layout() {
  return (
    <div className="min-h-screen">
     

      <Header />
    
      <main className='pt-20 '>
        
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

// Home Page Component
function HomePage() {
  return (
    <>
      <Hero />
      {/* <Divisions /> */}
      <GlobalPresence />
      <SocialResponsibility />
      <About />
      
      <FounderMessage />
    </>
  );
}

// 404 Page
function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-navy mb-4">404 - Page Not Found</h1>
        <Link to="/" className="text-gold hover:underline">Go back home</Link>
      </div>
    </div>
  );
}

function App() {
  return (
    <MultiFormModalProvider>
        <Router>
      <Routes>
        {/* All routes share the same layout */}
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path='about' element={<AboutUs/> } />
          <Route path="production" element={<Production />} />
          <Route path="real-estate" element={<AnandReality />} />
          <Route path="infrastructure" element={<Infrastructure />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
      <MultiFormModal/>
    </Router>

    </MultiFormModalProvider>
  
  );
}

export default App;