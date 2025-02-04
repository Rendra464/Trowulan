import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Banner from './components/Banner';
import About from './components/About';
import Features from './components/Features';
import TouristSpot from './components/Touristspot';
import Footer from './components/Footer';
import Touristdetail from './components/TouristDetail';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={
          <>
            <Banner />
            <About />
            <Features />
            <TouristSpot />
          </>
        } />
        <Route path="/about-details" element={<AboutDetails />} />
        <Route path="/details/:name" element={<Touristdetail />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
