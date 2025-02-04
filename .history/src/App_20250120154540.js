import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Banner from './components/Banner';
import About from './components/About';
import Features from './components/Features';
import TouristSpot from './components/Touristspot';
import AboutDetails from './components/AboutDetails';
import Footer from './components/Footer';
import Touristdetail from './components/TouristDetail';
import FAQ from './components/FAQ';
import News from './components/News';
import GetInTouch from './components/GetInTouch';
import Tours from './components/Package';
import RegistrationForm from "./RegistrationForm";

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
        <Route path="/faq" element={<FAQ />} />
        <Route path="/News" element={<News />} />
        <Route path="/GetInTouch" element={<GetInTouch />} />
        <Route path="/tours" element={<Tours />} />
        <Route path="/registration-form" element={<RegistrationForm />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
