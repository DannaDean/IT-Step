import './App.scss';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Program from './components/Program';
import Format from './components/Format';
import Company from './components/Company';
import About from './components/About';
import Faqs from './components/Faqs';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero></Hero>
      <Program />
      <Format />
      <Company />
      <About />
      <Faqs />
      <Footer />
    </div>
  );
}

export default App;
