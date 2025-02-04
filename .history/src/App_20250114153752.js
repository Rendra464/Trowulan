import './App.css';
import Header from './components/Header';
import Banner from './components/Banner';
import About from './components/About';
import Features from './components/Features';
import Spot from './components/TouristSpot';
import Footer from './components/Footer';

function App() {
  return (
      <div>
          <Header />
          <Banner />
          <About />
          <Features />
          <Spot />
          <Footer />
      </div>
  );
}

export default App;
