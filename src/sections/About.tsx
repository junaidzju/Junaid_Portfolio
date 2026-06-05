import { useEffect, useRef, useState } from 'react';
import { Globe, HeartPulse, Shield, Target, Building2, BookOpen } from 'lucide-react';

const researchAreas = [
  { icon: Globe, label: 'Global Health', color: 'bg-blue-500' },
  { icon: HeartPulse, label: 'Public Health', color: 'bg-teal-500' },
  { icon: Shield, label: 'Disaster Risk Reduction', color: 'bg-indigo-500' },
  { icon: Target, label: 'Emergency Management', color: 'bg-amber-500' },
  { icon: Building2, label: 'Public Administration', color: 'bg-rose-500' },
  { icon: BookOpen, label: 'Sustainable Development Goals', color: 'bg-emerald-500' },
];

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="section-padding bg-white relative overflow-hidden"
    >
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-blue-50/50 to-transparent pointer-events-none" />
      
      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Column - Image */}
          <div 
            className={`relative transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
            }`}
            style={{ transitionTimingFunction: 'var(--ease-spring)' }}
          >
            <div className="relative">
              {/* Main Image */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/profile.jpg"
                  alt="Dr. Junaid Ahmad"
                  className="w-full aspect-[4/5] object-cover"
                />
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute -top-6 -left-6 w-24 h-24 border-4 border-blue-200 rounded-xl -z-10" />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-blue-400/20 to-teal-400/20 rounded-xl -z-10" />
              
              {/* Stats Card */}
              <div 
                className={`absolute -bottom-8 -right-4 lg:right-8 bg-white rounded-xl p-5 shadow-xl border border-gray-100 transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionTimingFunction: 'var(--ease-elastic)', transitionDelay: '400ms' }}
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-teal-500 rounded-full flex items-center justify-center">
                    <Globe className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-900">12+</div>
                    <div className="text-sm text-gray-500">Countries</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div>
            {/* Section Title */}
            <div 
              className={`transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
              style={{ transitionTimingFunction: 'var(--ease-expo-out)', transitionDelay: '100ms' }}
            >
              <span className="text-blue-500 font-semibold text-sm uppercase tracking-wider">About Me</span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mt-2 mb-6">
                Dedicated to <span className="gradient-text">Research Excellence</span>
              </h2>
            </div>

            {/* Bio Text */}
            <div 
              className={`space-y-4 text-gray-600 leading-relaxed transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
              style={{ transitionTimingFunction: 'var(--ease-smooth)', transitionDelay: '200ms' }}
            >
              <p>
                Welcome to my academic journey! I'm Dr. Junaid Ahmad, a passionate Postdoctoral Research Fellow at 
                <span className="font-semibold text-gray-800"> Zhejiang University (#42 QS World Rankings)</span>. 
                I earned my MSc and Ph.D. from the Asian Institute of Technology, Thailand (Top 50 in Development Studies).
              </p>
              <p>
                My academic pursuits have taken me across the globe — from coursework and research at 
                <span className="font-semibold text-gray-800"> Hong Kong Polytechnic University</span>, 
                <span className="font-semibold text-gray-800"> Kyoto University Japan</span>, 
                <span className="font-semibold text-gray-800"> University of Granada Spain</span>, to 
                <span className="font-semibold text-gray-800"> University of Hawaii USA</span> and 
                <span className="font-semibold text-gray-800"> Kasetsart University Thailand</span>.
              </p>
              <p>
                With <span className="font-semibold text-gray-800">52 papers</span> in high-impact journals 
                (<span className="font-semibold text-gray-800">38 in Q1/Tier-1</span>), my work has earned over 
                <span className="font-semibold text-gray-800"> 1,700 citations</span> and an 
                <span className="font-semibold text-gray-800"> H-Index of 21</span>, reflecting the global impact of my research.
              </p>
            </div>

            {/* Research Focus Areas */}
            <div 
              className={`mt-8 transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
              style={{ transitionTimingFunction: 'var(--ease-smooth)', transitionDelay: '400ms' }}
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Research Focus Areas</h3>
              <div className="flex flex-wrap gap-3">
                {researchAreas.map((area, index) => (
                  <div
                    key={area.label}
                    className={`flex items-center gap-2 px-4 py-2 bg-gray-50 rounded-full border border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition-all duration-300 cursor-default group ${
                      isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
                    }`}
                    style={{ 
                      transitionTimingFunction: 'var(--ease-elastic)', 
                      transitionDelay: `${500 + index * 80}ms` 
                    }}
                  >
                    <area.icon className={`w-4 h-4 ${area.color.replace('bg-', 'text-')} group-hover:scale-110 transition-transform`} />
                    <span className="text-sm font-medium text-gray-700">{area.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div 
              className={`mt-8 transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
              style={{ transitionTimingFunction: 'var(--ease-expo-out)', transitionDelay: '600ms' }}
            >
              <a
                href="#experience"
                className="inline-flex items-center gap-2 text-blue-600 font-medium hover:text-blue-700 transition-colors group"
              >
                View My Experience
                <svg 
                  className="w-5 h-5 group-hover:translate-x-1 transition-transform" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
