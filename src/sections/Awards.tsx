import { useEffect, useRef, useState } from 'react';
import { Award, Medal, Plane, BookOpen, Trophy, Code, Users, FileText } from 'lucide-react';

const awardsData = [
  {
    id: 1,
    title: 'Gold Medal',
    organization: 'Bahria University, Islamabad',
    period: '2007 - 2010',
    description: 'BS (Hons) Professional Exam',
    icon: Medal,
    color: 'from-amber-400 to-amber-500',
  },
  {
    id: 2,
    title: 'MS-PhD Fully Funded Scholarship',
    organization: 'Higher Education Commission, Pakistan',
    period: '2014 - 2018',
    description: 'Government of Pakistan scholarship for graduate studies',
    icon: BookOpen,
    color: 'from-blue-400 to-blue-500',
  },
  {
    id: 3,
    title: 'Disaster Resilience Countries Course Grant',
    organization: 'Kyoto University, Japan',
    period: 'Aug 2015',
    description: 'Awarded by the Government of Japan through JASSO',
    icon: Plane,
    color: 'from-rose-400 to-rose-500',
  },
  {
    id: 4,
    title: 'Erasmus Mundus Research Mobility',
    organization: 'University of Granada, Spain',
    period: 'Apr 2017 - Jul 2017',
    description: 'Research mobility award for PhD research',
    icon: Plane,
    color: 'from-indigo-400 to-indigo-500',
  },
  {
    id: 5,
    title: 'World Data System Conference Grant',
    organization: 'Asia-Oceania Conference',
    period: 'Sep 2017',
    description: 'Awarded by the World Data System to present research paper',
    icon: Award,
    color: 'from-teal-400 to-teal-500',
  },
  {
    id: 6,
    title: 'Best Student Research Award',
    organization: 'World Social Science Forum 2018',
    period: 'Fukuoka, Japan',
    description: 'Security and Equality for Sustainable Futures',
    icon: Trophy,
    color: 'from-purple-400 to-purple-500',
  },
];

const technicalSkills = [
  { name: 'Questionnaire Designing', level: 95 },
  { name: 'Qualitative & Quantitative Data Analysis', level: 90 },
  { name: 'Report Writing & Grant Writing', level: 92 },
  { name: 'Data Visualization (SPSS, R, Flourish)', level: 88 },
  { name: 'Action Planning for SDG Targets', level: 85 },
  { name: 'Multi-stakeholder Consultation', level: 90 },
];

const facilitationSkills = [
  'Workshop Facilitation',
  'Virtual & In-person Training',
  'Gender & Equity Integration',
  'Policy Brief Drafting',
  'Roadmap Development',
  'Stakeholder Engagement',
];

const Awards = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [visibleAwards, setVisibleAwards] = useState<number[]>([]);
  const [skillProgress, setSkillProgress] = useState<number[]>(technicalSkills.map(() => 0));
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          
          // Stagger award animations
          awardsData.forEach((_, index) => {
            setTimeout(() => {
              setVisibleAwards(prev => [...prev, index]);
            }, 200 + index * 100);
          });

          // Animate skill bars
          setTimeout(() => {
            technicalSkills.forEach((skill, index) => {
              setTimeout(() => {
                setSkillProgress(prev => {
                  const newProgress = [...prev];
                  newProgress[index] = skill.level;
                  return newProgress;
                });
              }, index * 100);
            });
          }, 500);

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
      id="awards"
      className="section-padding bg-white relative overflow-hidden"
    >
      {/* Background Decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-40 right-0 w-96 h-96 rounded-full bg-amber-400/5 blur-3xl" />
        <div className="absolute bottom-20 left-0 w-80 h-80 rounded-full bg-blue-400/5 blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div 
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
          style={{ transitionTimingFunction: 'var(--ease-expo-out)' }}
        >
          <span className="text-blue-500 font-semibold text-sm uppercase tracking-wider">Recognition</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mt-2">
            Awards <span className="gradient-text">& Skills</span>
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Recognitions for academic excellence and a diverse skill set developed over years of research and practice.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Awards Column */}
          <div>
            <h3 
              className={`text-xl font-bold text-gray-900 mb-6 flex items-center gap-2 transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
              style={{ transitionTimingFunction: 'var(--ease-smooth)', transitionDelay: '100ms' }}
            >
              <Trophy className="w-6 h-6 text-amber-500" />
              Awards & Honors
            </h3>

            <div className="space-y-4">
              {awardsData.map((award, index) => {
                const Icon = award.icon;
                const isAwardVisible = visibleAwards.includes(index);

                return (
                  <div
                    key={award.id}
                    className={`flex gap-4 p-4 bg-gray-50 rounded-xl border border-gray-100 hover:shadow-lg hover:border-blue-200 transition-all duration-300 group ${
                      isAwardVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
                    }`}
                    style={{ transitionTimingFunction: 'var(--ease-spring)', transitionDelay: `${index * 100}ms` }}
                  >
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${award.color} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-2 mb-1">
                        <h4 className="font-bold text-gray-900">{award.title}</h4>
                        <span className="text-xs text-gray-500">{award.period}</span>
                      </div>
                      <p className="text-sm text-gray-600">{award.organization}</p>
                      <p className="text-xs text-gray-500 mt-1">{award.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Skills Column */}
          <div>
            {/* Technical Skills */}
            <div 
              className={`mb-8 transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
              style={{ transitionTimingFunction: 'var(--ease-smooth)', transitionDelay: '200ms' }}
            >
              <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <Code className="w-6 h-6 text-blue-500" />
                Technical Skills
              </h3>

              <div className="space-y-4">
                {technicalSkills.map((skill, index) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="font-medium text-gray-700">{skill.name}</span>
                      <span className="text-gray-500">{skillProgress[index]}%</span>
                    </div>
                    <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-blue-500 to-teal-500 rounded-full transition-all duration-1000"
                        style={{ 
                          width: `${skillProgress[index]}%`,
                          transitionTimingFunction: 'var(--ease-expo-out)'
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Facilitation Skills */}
            <div 
              className={`transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
              style={{ transitionTimingFunction: 'var(--ease-smooth)', transitionDelay: '400ms' }}
            >
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Users className="w-6 h-6 text-teal-500" />
                Facilitation Skills
              </h3>

              <div className="flex flex-wrap gap-2">
                {facilitationSkills.map((skill, index) => (
                  <span
                    key={skill}
                    className={`px-4 py-2 bg-gradient-to-r from-blue-50 to-teal-50 text-gray-700 text-sm font-medium rounded-full border border-blue-100 hover:border-blue-300 hover:shadow-md transition-all duration-300 ${
                      isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
                    }`}
                    style={{ 
                      transitionTimingFunction: 'var(--ease-elastic)', 
                      transitionDelay: `${500 + index * 60}ms` 
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Additional Info */}
            <div 
              className={`mt-8 p-4 bg-gradient-to-r from-blue-50 to-teal-50 rounded-xl border border-blue-100 transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
              style={{ transitionTimingFunction: 'var(--ease-smooth)', transitionDelay: '600ms' }}
            >
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-teal-500 flex items-center justify-center flex-shrink-0">
                  <FileText className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Grant Writing Success</h4>
                  <p className="text-sm text-gray-600">
                    Written several successful projects worth <span className="font-semibold text-gray-800">US$ 10.5 million</span> during the last couple of years.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Awards;
