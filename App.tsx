
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import Services from './components/Services';
import BookingPage from './components/BookingPage';
import AdminPanel from './components/AdminPanel';
import Gallery from './components/Gallery';
import About from './components/About';
import Reviews from './components/Reviews';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedServiceId, setSelectedServiceId] = useState<string | undefined>();

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home onBookNow={() => setCurrentPage('booking')} />;
      case 'services':
        return (
          <Services 
            onBook={(id) => {
              setSelectedServiceId(id);
              setCurrentPage('booking');
            }} 
          />
        );
      case 'booking':
        return (
          <BookingPage 
            initialServiceId={selectedServiceId} 
            onSuccess={() => {
              setSelectedServiceId(undefined);
              setCurrentPage('home');
            }}
          />
        );
      case 'gallery':
        return <Gallery />;
      case 'about':
        return <About />;
      case 'reviews':
        return <Reviews />;
      case 'admin':
        return <AdminPanel />;
      default:
        return <Home onBookNow={() => setCurrentPage('booking')} />;
    }
  };

  const handleNavigate = (page: string) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar onNavigate={handleNavigate} currentPage={currentPage} />
      <main className="flex-grow">
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
};

export default App;
