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

function App() {
  const location = useLocation();

    useEffect(() => {
        if (location.state?.scrollTo) {
            const section = document.querySelector(location.state.scrollTo);
            if (section) {
                section.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }, [location]);

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
