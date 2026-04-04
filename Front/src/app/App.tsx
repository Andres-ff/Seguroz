import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Features } from './components/Features';
import { InsuranceTypes } from './components/InsuranceTypes';
import { Stats } from './components/Stats';
import { Testimonials } from './components/Testimonials';
import { CTA } from './components/CTA';
import { Footer } from './components/Footer';
import { Assistant } from './components/Assistant';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Features />
        <InsuranceTypes />
        <Stats />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
      <Assistant />
    </div>
  );
}
