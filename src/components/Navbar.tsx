
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'py-4 bg-white/95 backdrop-blur-lg shadow-md' : 'py-6 bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <a href="/" className="text-2xl font-bold text-festival-red">
            Festival Frenzy
          </a>

          {/* Mobile menu button */}
          <button
            className="lg:hidden text-festival-gray hover:text-festival-red transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Desktop menu */}
          <div className="hidden lg:flex items-center space-x-8">
            <a href="#tournament" className="nav-link">Tournament</a>
            <a href="#party" className="nav-link">Party</a>
            <a href="#schedule" className="nav-link">Schedule</a>
            <a href="#tickets" className="nav-link">Tickets</a>
            <button className="button-primary">Register Now</button>
          </div>
        </div>

        {/* Mobile menu */}
        <div className={`lg:hidden ${isMenuOpen ? 'block' : 'hidden'} pt-4`}>
          <div className="flex flex-col space-y-4">
            <a href="#tournament" className="nav-link">Tournament</a>
            <a href="#party" className="nav-link">Party</a>
            <a href="#schedule" className="nav-link">Schedule</a>
            <a href="#tickets" className="nav-link">Tickets</a>
            <button className="button-primary w-full">Register Now</button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
