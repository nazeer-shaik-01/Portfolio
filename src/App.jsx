import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Achievements from './components/Achievements';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <div className="min-h-screen bg-dark text-white">
      <Toaster position="top-right" toastOptions={{ duration: 3000 }} />
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Achievements />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;