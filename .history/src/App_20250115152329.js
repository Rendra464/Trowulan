import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import React Router
import Header from './components/Header';
import Banner from './components/Banner';
import About from './components/About';
import Features from './components/Features';
import TouristSpot from './components/Touristspot';
import Footer from './components/Footer';
import TouristDetail from './components/TouristDetail';

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
        
        <Route path="/details/:name" element={<TouristDetail />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
