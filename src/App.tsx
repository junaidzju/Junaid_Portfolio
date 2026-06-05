import './App.css';
import Navigation from './sections/Navigation';
import Hero from './sections/Hero';
import About from './sections/About';
import Education from './sections/Education';
import Experience from './sections/Experience';
import Publications from './sections/Publications';
import Awards from './sections/Awards';
import Contact from './sections/Contact';
import Footer from './sections/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Education />
        <Experience />
        <Publications />
        <Awards />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
