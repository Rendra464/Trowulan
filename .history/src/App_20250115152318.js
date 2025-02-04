import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import React Router
import Header from './components/Header';
import Banner from './components/Banner';
import About from './components/About';
import Features from './components/Features';
import TouristSpot from './components/Touristspot';
import Footer from './components/Footer';
import TouristDetail from './components/TouristDetail'; // Import halaman detail

function App() {
  return (
    <Router>
      {/* Header dan Footer tetap di semua halaman */}
      <Header />
      
      <Routes>
        {/* Rute untuk halaman utama */}
        <Route path="/" element={
          <>
            <Banner />
            <About />
            <Features />
            <TouristSpot />
          </>
        } />
        
        {/* Rute untuk halaman detail berdasarkan nama candi */}
        <Route path="/details/:name" element={<TouristDetail />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
