import { useEffect, useRef, useState } from 'react';
import { GraduationCap, Award, Plane, BookOpen } from 'lucide-react';

const educationData = [
  {
    id: 1,
    degree: 'Postdoctoral Fellow',
    institution: 'Zhejiang University',
    location: 'Hangzhou, China',
    period: '2023 - Present',
    description: 'School of Public Affairs',
    achievement: 'QS World Ranking #47',
    icon: Award,
    color: 'from-blue-500 to-blue-600',
  },
  {
    id: 2,
    degree: 'PhD in Disaster Preparedness, Mitigation, and Management',
    institution: 'Asian Institute of Technology',
    location: 'Bangkok, Thailand',
    period: '2016 - 2019',
    description: 'Doctoral research in disaster management',
    achievement: 'QS World Subject Ranking #50',
    icon: GraduationCap,
    color: 'from-teal-500 to-teal-600',
  },
  {
    id: 3,
    degree: 'MSc in Disaster Preparedness, Mitigation, and Management',
    institution: 'Asian Institute of Technology',
    location: 'Bangkok, Thailand',
    period: '2014 - 2015',
    description: 'Master\'s degree with scholarship',
    achievement: 'QS World Subject Ranking #50',
    icon: BookOpen,
    color: 'from-indigo-500 to-indigo-600',
  },
  {
    id: 4,
    degree: 'PhD Research Candidate (Exchange)',
    institution: 'Universidad de Granada',
    location: 'Granada, Spain',
    period: 'Apr 2017 - Jul 2017',
    description: 'Erasmus Mundus Mobility Program',
    achievement: 'Research Exchange Grant',
    icon: Plane,
    color: 'from-amber-500 to-amber-600',
  },
  {
    id: 5,
    degree: 'PhD Exchange Student',
    institution: 'Kyoto University',
    location: 'Kyoto, Japan',
    period: 'Aug 2015',
    description: 'Disaster Prevention Research Institute',
    achievement: 'JASSO Grant',
    icon: Plane,
    color: 'from-rose-500 to-rose-600',
  },
];

const Education = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Stagger card animations
          educationData.forEach((_, index) => {
            setTimeout(() => {
              setVisibleCards(prev => [...prev, index]);
            }, 200 + index * 150);
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
      id="education"
      className="section-padding bg-gray-50 relative overflow-hidden"
    >
      {/* Background Decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-blue-400/5 blur-3xl" />
        <div className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-teal-400/5 blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div 
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
          style={{ transitionTimingFunction: 'var(--ease-expo-out)' }}
        >
          <span className="text-blue-500 font-semibold text-sm uppercase tracking-wider">Academic Journey</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mt-2">
            <span className="gradient-text">Education</span>
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            A global academic journey spanning prestigious institutions across Asia, Europe, and beyond.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-400 via-teal-400 to-blue-400 md:-translate-x-1/2" />

          {/* Education Cards */}
          <div className="space-y-12">
            {educationData.map((edu, index) => {
              const Icon = edu.icon;
              const isEven = index % 2 === 0;
              const isCardVisible = visibleCards.includes(index);

              return (
                <div
                  key={edu.id}
                  className={`relative flex items-start md:items-center ${
                    isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Timeline Node */}
                  <div 
                    className={`absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-gradient-to-br ${edu.color} border-4 border-white shadow-lg z-10 md:-translate-x-1/2 transition-all duration-500 ${
                      isCardVisible ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
                    }`}
                    style={{ 
                      animation: isCardVisible ? 'nodePulse 2s ease-in-out infinite' : 'none',
                      animationDelay: `${index * 0.3}s`
                    }}
                  />

                  {/* Content Card */}
                  <div 
                    className={`ml-12 md:ml-0 md:w-5/12 ${isEven ? 'md:pr-12' : 'md:pl-12'} transition-all duration-700 ${
                      isCardVisible 
                        ? 'opacity-100 translate-x-0' 
                        : `opacity-0 ${isEven ? '-translate-x-12' : 'translate-x-12'}`
                    }`}
                    style={{ transitionTimingFunction: 'var(--ease-spring)' }}
                  >
                    <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl hover:border-blue-200 transition-all duration-300 group">
                      {/* Header */}
                      <div className="flex items-start gap-4 mb-4">
                        <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${edu.color} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <span className="inline-block px-3 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded-full mb-2">
                            {edu.period}
                          </span>
                          <h3 className="text-lg font-bold text-gray-900 leading-tight">
                            {edu.degree}
                          </h3>
                        </div>
                      </div>

                      {/* Institution */}
                      <div className="mb-3">
                        <p className="font-semibold text-gray-800">{edu.institution}</p>
                        <p className="text-sm text-gray-500">{edu.location}</p>
                      </div>

                      {/* Description */}
                      <p className="text-sm text-gray-600 mb-4">{edu.description}</p>

                      {/* Achievement Badge */}
                      <div className="flex items-center gap-2 px-3 py-2 bg-gradient-to-r from-blue-50 to-teal-50 rounded-lg border border-blue-100">
                        <Award className="w-4 h-4 text-blue-500" />
                        <span className="text-xs font-medium text-blue-700">{edu.achievement}</span>
                      </div>
                    </div>
                  </div>

                  {/* Empty space for alternating layout */}
                  <div className="hidden md:block md:w-5/12" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
