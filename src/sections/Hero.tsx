import { useEffect, useRef, useState } from 'react';
import { ChevronDown, BookOpen, Quote, Award } from 'lucide-react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [counters, setCounters] = useState({ hIndex: 0, citations: 0, publications: 0 });
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    setIsVisible(true);
    
    // Animate counters
    const duration = 2000;
    const steps = 60;
    const interval = duration / steps;
    
    let step = 0;
    const timer = setInterval(() => {
      step++;
      const progress = 1 - Math.pow(1 - step / steps, 3);
      setCounters({
        hIndex: Math.floor(21 * progress),
        citations: Math.floor(1977 * progress),
        publications: Math.floor(52 * progress),
      });
      
      if (step >= steps) clearInterval(timer);
    }, interval);
    
    return () => clearInterval(timer);
  }, []);

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      ref={heroRef}
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-white via-gray-50 to-blue-50/30"
    >
      {/* Floating Background Orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div 
          className="absolute top-20 left-10 w-72 h-72 rounded-full bg-blue-400/5 blur-3xl animate-float"
          style={{ animationDelay: '0s', animationDuration: '20s' }}
        />
        <div 
          className="absolute top-40 right-20 w-96 h-96 rounded-full bg-teal-400/5 blur-3xl animate-float"
          style={{ animationDelay: '5s', animationDuration: '25s' }}
        />
        <div 
          className="absolute bottom-20 left-1/3 w-80 h-80 rounded-full bg-blue-500/5 blur-3xl animate-float"
          style={{ animationDelay: '10s', animationDuration: '22s' }}
        />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="order-2 lg:order-1 text-center lg:text-left">
            {/* Name with character animation */}
            <h1 
              className={`text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionTimingFunction: 'var(--ease-expo-out)', transitionDelay: '200ms' }}
            >
              Dr. <span className="gradient-text">Junaid Ahmad</span>
            </h1>
            
            {/* Subtitle */}
            <p 
              className={`text-lg sm:text-xl text-gray-600 mb-2 transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
              style={{ transitionTimingFunction: 'var(--ease-smooth)', transitionDelay: '400ms' }}
            >
              Postdoctoral Fellow | Researcher | Public Health Expert
            </p>
            
            {/* Current Position */}
            <p 
              className={`text-base text-gray-500 mb-8 transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
              style={{ transitionTimingFunction: 'var(--ease-smooth)', transitionDelay: '500ms' }}
            >
              School of Public Affairs, Zhejiang University, China
            </p>

            {/* Research Metrics Cards */}
            <div 
              className={`grid grid-cols-3 gap-4 mb-8 transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionTimingFunction: 'var(--ease-elastic)', transitionDelay: '600ms' }}
            >
              <div className="bg-white rounded-xl p-4 shadow-lg border border-gray-100 animate-pulse-glow">
                <div className="flex items-center justify-center mb-2">
                  <Award className="w-5 h-5 text-blue-500" />
                </div>
                <div className="text-2xl sm:text-3xl font-bold text-gray-900">
                  {counters.hIndex}
                </div>
                <div className="text-xs text-gray-500">H-Index</div>
              </div>
              
              <div className="bg-white rounded-xl p-4 shadow-lg border border-gray-100 animate-pulse-glow" style={{ animationDelay: '1s' }}>
                <div className="flex items-center justify-center mb-2">
                  <Quote className="w-5 h-5 text-teal-500" />
                </div>
                <div className="text-2xl sm:text-3xl font-bold text-gray-900">
                  {counters.citations.toLocaleString()}
                </div>
                <div className="text-xs text-gray-500">Citations</div>
              </div>
              
              <div className="bg-white rounded-xl p-4 shadow-lg border border-gray-100 animate-pulse-glow" style={{ animationDelay: '2s' }}>
                <div className="flex items-center justify-center mb-2">
                  <BookOpen className="w-5 h-5 text-blue-500" />
                </div>
                <div className="text-2xl sm:text-3xl font-bold text-gray-900">
                  {counters.publications}
                </div>
                <div className="text-xs text-gray-500">Publications</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div 
              className={`flex flex-wrap gap-4 justify-center lg:justify-start transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
              style={{ transitionTimingFunction: 'var(--ease-expo-out)', transitionDelay: '800ms' }}
            >
              <a
                href="#publications"
                className="px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-full font-medium shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                View Publications
              </a>
              <a
                href="#contact"
                className="px-6 py-3 bg-white text-gray-700 border-2 border-gray-200 rounded-full font-medium hover:border-blue-400 hover:text-blue-600 transition-all duration-300"
              >
                Get in Touch
              </a>
            </div>
          </div>

          {/* Right Content - Profile Image */}
          <div 
            className={`order-1 lg:order-2 flex justify-center transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
            }`}
            style={{ transitionTimingFunction: 'var(--ease-spring)', transitionDelay: '300ms' }}
          >
            <div className="relative">
              {/* Decorative Ring */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-400/20 to-teal-400/20 animate-float" style={{ transform: 'scale(1.1)' }} />
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500/10 to-teal-500/10 animate-float" style={{ transform: 'scale(1.2)', animationDelay: '2s' }} />
              
              {/* Profile Image */}
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden shadow-2xl border-4 border-white animate-float">
                <img
                  src="/profile.jpg"
                  alt="Dr. Junaid Ahmad"
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Floating Badge */}
              <div 
                className={`absolute -bottom-4 -right-4 bg-white rounded-xl px-4 py-3 shadow-lg border border-gray-100 transition-all duration-700 ${
                  isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
                }`}
                style={{ transitionTimingFunction: 'var(--ease-elastic)', transitionDelay: '1000ms' }}
              >
                <div className="text-sm font-semibold text-gray-900">38 Q1 Papers</div>
                <div className="text-xs text-gray-500">High Impact Journals</div>
              </div>
              
              {/* Another Floating Badge */}
              <div 
                className={`absolute -top-4 -left-4 bg-gradient-to-r from-blue-500 to-teal-500 rounded-xl px-4 py-3 shadow-lg transition-all duration-700 ${
                  isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
                }`}
                style={{ transitionTimingFunction: 'var(--ease-elastic)', transitionDelay: '1200ms' }}
              >
                <div className="text-sm font-semibold text-white">ZJU #42</div>
                <div className="text-xs text-white/80">QS Ranking</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={scrollToAbout}
        className={`absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center text-gray-400 hover:text-blue-500 transition-all duration-500 cursor-pointer ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}
        style={{ transitionDelay: '1500ms' }}
      >
        <span className="text-sm mb-2">Scroll to explore</span>
        <ChevronDown className="w-6 h-6 animate-bounce" />
      </button>
    </section>
  );
};

export default Hero;
