import Header from './Header';
import About from './About';
import Projects from './Projects';
import Footer from './Footer';
import pixelBanner from '../../assets/Pixel-banner.png';
export default function Home() {
  return (
  <div className="min-h-screen bg-pixel bg-repeat text-white font-pixel">
    <Header />
    <main className="bannel">
      <img className="w-full" src={pixelBanner} alt="Pixel Art Background" />
      <Projects />
    </main>
    <About />
    <Footer />
  </div>);
      };