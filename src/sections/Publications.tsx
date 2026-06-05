import { useEffect, useRef, useState } from 'react';
import { BookOpen, Quote, Star, ExternalLink, TrendingUp } from 'lucide-react';

const metrics = [
  { label: 'Total Publications', value: 52, suffix: '', icon: BookOpen },
  { label: 'Q1/Tier-1 Journals', value: 38, suffix: '', icon: Star },
  { label: 'Total Citations', value: 1977, suffix: '', icon: Quote },
  { label: 'H-Index', value: 21, suffix: '', icon: TrendingUp },
];

const featuredPublications = [
  {
    id: 1,
    title: 'Forecasting the human cost of disasters under Sustainable Development Goal: A time series analysis using the Facebook Prophet model',
    authors: 'Ahmad, J., Ahmad, I., Miao, Q., & Su, Z.',
    journal: 'Technology in Society',
    publisher: 'Elsevier',
    year: '2025',
    impact: 'SSCI/Q1 - IF 12.5',
    doi: '10.1016/j.techsoc.2025.102992',
    featured: true,
  },
  {
    id: 2,
    title: 'Shaping the Crisis Management‐Public Administration Nexus: A Systematic Review and Future Research Agenda',
    authors: 'Miao, Q., Ahmad, J., & Villadsen, A. R.',
    journal: 'Review of Policy Research',
    publisher: 'Wiley',
    year: '2025',
    impact: 'SSCI/Q1 - IF 3.2',
    doi: '10.1111/ropr.70039',
    featured: true,
  },
  {
    id: 3,
    title: 'A systematic analysis of worldwide disasters, epidemics, and pandemics associated mortality of 210 countries for 15 years (2001-2015)',
    authors: 'Ahmad J., Ahmad MM., Su Z., Rana IA., Rehman A., Sadia H.',
    journal: 'International Journal of Disaster Risk Reduction',
    publisher: 'Elsevier',
    year: '2022',
    impact: 'SCI/Q1 - IF 5.0',
    doi: '10.1016/j.ijdrr.2022.103001',
    featured: true,
  },
  {
    id: 4,
    title: 'Navigating Diphtheria Resurgence in Pakistan\'s Conflict-Ridden and Disaster-Prone Areas',
    authors: 'Ahmad, J., Shah, M. Y., Latif, A., Sulaiman, M., & Khan, K.',
    journal: 'Disaster Medicine and Public Health Preparedness',
    publisher: 'Cambridge',
    year: '2024',
    impact: 'SSCI/Q2',
    doi: '10.1017/dmp.2024.266',
    featured: false,
  },
  {
    id: 5,
    title: 'Association of PPE Availability, Training, and Practices with COVID-19 Sero-Prevalence in Nurses and Paramedics',
    authors: 'Ahmad J., Anwar S., Latif A., Haq NU., Sharif M., Nauman AA',
    journal: 'Disaster Medicine and Public Health Preparedness',
    publisher: 'Cambridge',
    year: '2020',
    impact: 'SSCI/Q2 - IF 5.56',
    doi: '10.1017/dmp.2020.438',
    featured: false,
  },
  {
    id: 6,
    title: 'Earthquake-Induced Injuries: Retrospective Epidemiological Analysis of the 2015 Hindu Kush Earthquake in Pakistan',
    authors: 'Ahmad J., Ahmad MM., Rodríguez EE',
    journal: 'Disaster Medicine and Public Health Preparedness',
    publisher: 'Cambridge',
    year: '2018',
    impact: 'SSCI/Q2',
    doi: '10.1017/dmp.2018.134',
    featured: false,
  },
];

const Publications = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [counterValues, setCounterValues] = useState(metrics.map(() => 0));
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          
          // Animate counters
          const duration = 2000;
          const steps = 60;
          const interval = duration / steps;
          let step = 0;
          
          const timer = setInterval(() => {
            step++;
            const progress = 1 - Math.pow(1 - step / steps, 3);
            setCounterValues(metrics.map(m => Math.floor(m.value * progress)));
            
            if (step >= steps) clearInterval(timer);
          }, interval);

          // Stagger card animations
          featuredPublications.forEach((_, index) => {
            setTimeout(() => {
              setVisibleCards(prev => [...prev, index]);
            }, 400 + index * 100);
          });

          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="publications"
      className="section-padding bg-gray-50 relative overflow-hidden"
    >
      {/* Background Decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 rounded-full bg-blue-400/5 blur-3xl" />
        <div className="absolute bottom-40 right-20 w-96 h-96 rounded-full bg-teal-400/5 blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div 
          className={`text-center mb-12 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
          style={{ transitionTimingFunction: 'var(--ease-expo-out)' }}
        >
          <span className="text-blue-500 font-semibold text-sm uppercase tracking-wider">Research Output</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mt-2">
            <span className="gradient-text">Publications</span>
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Peer-reviewed research in high-impact journals focusing on disaster risk reduction, public health, and policy.
          </p>
        </div>

        {/* Metrics Grid */}
        <div 
          className={`grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mb-12 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionTimingFunction: 'var(--ease-elastic)', transitionDelay: '200ms' }}
        >
          {metrics.map((metric, index) => {
            const Icon = metric.icon;
            return (
              <div 
                key={metric.label}
                className="bg-white rounded-xl p-5 lg:p-6 shadow-lg border border-gray-100 hover:shadow-xl hover:border-blue-200 transition-all duration-300 group"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-teal-500 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <div className="text-xs text-gray-400 font-medium">{metric.label}</div>
                </div>
                <div className="text-2xl lg:text-3xl font-bold text-gray-900">
                  {counterValues[index].toLocaleString()}{metric.suffix}
                </div>
              </div>
            );
          })}
        </div>

        {/* Featured Publications */}
        <div 
          className={`mb-8 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
          style={{ transitionTimingFunction: 'var(--ease-smooth)', transitionDelay: '300ms' }}
        >
          <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <Star className="w-5 h-5 text-amber-500" />
            Featured Publications
          </h3>
        </div>

        {/* Publications Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredPublications.map((pub, index) => {
            const isCardVisible = visibleCards.includes(index);
            
            return (
              <div
                key={pub.id}
                className={`transition-all duration-600 ${
                  isCardVisible 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-12'
                }`}
                style={{ transitionTimingFunction: 'var(--ease-spring)', transitionDelay: `${index * 80}ms` }}
              >
                <div className={`bg-white rounded-xl p-5 border hover:shadow-xl transition-all duration-300 group h-full flex flex-col ${
                  pub.featured 
                    ? 'border-blue-200 shadow-lg relative overflow-hidden' 
                    : 'border-gray-100'
                }`}>
                  {/* Featured Badge */}
                  {pub.featured && (
                    <div className="absolute top-0 right-0 w-20 h-20 overflow-hidden">
                      <div className="absolute top-3 right-[-35px] w-[140px] bg-gradient-to-r from-blue-500 to-teal-500 text-white text-xs font-medium py-1 text-center transform rotate-45">
                        Featured
                      </div>
                    </div>
                  )}

                  {/* Impact Factor Badge */}
                  <div className="flex items-center gap-2 mb-3">
                    <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                      pub.impact.includes('Q1') 
                        ? 'bg-green-100 text-green-700' 
                        : 'bg-blue-100 text-blue-700'
                    }`}>
                      {pub.impact}
                    </span>
                    <span className="text-xs text-gray-500">{pub.year}</span>
                  </div>

                  {/* Title */}
                  <h4 className="text-base font-bold text-gray-900 mb-2 line-clamp-3 group-hover:text-blue-600 transition-colors">
                    {pub.title}
                  </h4>

                  {/* Authors */}
                  <p className="text-sm text-gray-600 mb-2 line-clamp-1">{pub.authors}</p>

                  {/* Journal */}
                  <p className="text-sm text-gray-500 mb-4">
                    <span className="font-medium">{pub.journal}</span> ({pub.publisher})
                  </p>

                  {/* DOI Link */}
                  <div className="mt-auto pt-3 border-t border-gray-100">
                    <a
                      href={`https://doi.org/${pub.doi}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-sm text-blue-600 hover:text-blue-700 font-medium group/link"
                    >
                      View Publication
                      <ExternalLink className="w-4 h-4 group-hover/link:translate-x-0.5 transition-transform" />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* View All Link */}
        <div 
          className={`text-center mt-10 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
          style={{ transitionTimingFunction: 'var(--ease-expo-out)', transitionDelay: '800ms' }}
        >
          <a
            href="https://scholar.google.com/citations?user=Uv9iwbEAAAAJ&hl=en"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-full font-medium shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
          >
            <BookOpen className="w-5 h-5" />
            View All Publications on Google Scholar
          </a>
        </div>
      </div>
    </section>
  );
};

export default Publications;
