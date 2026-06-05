import { Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Education', href: '#education' },
    { label: 'Experience', href: '#experience' },
    { label: 'Publications', href: '#publications' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container-custom">
        <div className="flex flex-col items-center">
          {/* Name */}
          <div className="text-2xl font-bold mb-6">
            Dr. <span className="text-blue-400">Junaid Ahmad</span>
          </div>

          {/* Navigation */}
          <nav className="flex flex-wrap justify-center gap-6 mb-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Divider */}
          <div className="w-full max-w-md h-px bg-gray-800 mb-8" />

          {/* Copyright */}
          <div className="flex items-center gap-2 text-gray-500 text-sm">
            <span>&copy; {currentYear} Dr. Junaid Ahmad. All rights reserved.</span>
          </div>

          {/* Made with */}
          <div className="flex items-center gap-1 text-gray-600 text-xs mt-4">
            <span>Made with</span>
            <Heart className="w-3 h-3 text-rose-500 fill-rose-500" />
            <span>for academic excellence</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
