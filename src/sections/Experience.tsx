import { useEffect, useRef, useState } from 'react';
import { Briefcase, Users, FileText, GraduationCap, Globe } from 'lucide-react';

const experienceData = [
  {
    id: 1,
    title: 'Postdoctoral Fellow',
    organization: 'Zhejiang University',
    location: 'Hangzhou, China',
    period: 'Sep 2023 - Present',
    description: 'Conduct independent and collaborative research on disaster risk reduction, resilience, social welfare innovation, and policy evaluation using mixed methods and big data analytics.',
    achievements: [
      'Publications in IJDRR, Technology in Society, Review of Policy Research',
      'Mentored 8+ master\'s and doctoral students',
      'Design and deliver graduate courses',
    ],
    icon: GraduationCap,
    color: 'from-blue-500 to-blue-600',
    stats: { label: 'Publications', value: '5+' },
  },
  {
    id: 2,
    title: 'Associate Editor',
    organization: 'Journal of Public Health Research',
    location: 'SAGE Publisher',
    period: 'Aug 2025 - Present',
    description: 'Managing editorial workflow and maintaining high standards of academic publishing.',
    achievements: [
      'Managing 50+ submissions annually',
      '21-day average turnaround time',
      'Improved journal Cite Score by 15%',
      'Moved journal from Q3 to Q2 in Scimago',
    ],
    icon: FileText,
    color: 'from-teal-500 to-teal-600',
    stats: { label: 'Submissions', value: '50+' },
  },
  {
    id: 3,
    title: 'Associate Professor',
    organization: 'Peshawar Medical College',
    location: 'Riphah International University, Pakistan',
    period: 'Sep 2019 - Aug 2023',
    description: 'Led multidisciplinary research on public health emergencies, health system resilience, and disaster medicine.',
    achievements: [
      '25+ peer-reviewed articles published',
      'Secured grants totaling PKR 18 million',
      'Supervised 60 students (30 MBBS + 30 BSN)',
      'Student satisfaction scores over 90%',
    ],
    icon: Users,
    color: 'from-indigo-500 to-indigo-600',
    stats: { label: 'Students', value: '60+' },
  },
  {
    id: 4,
    title: 'Country Coordinator',
    organization: 'Regional Integrated Multi-Hazard Early Warning System (RIMES)',
    location: 'Bangkok, Thailand (Pakistan Operations)',
    period: 'Apr 2020 - Mar 2022',
    description: 'Served as the sole in-country representative for RIMES, orchestrating a 12-ministry stakeholder network.',
    achievements: [
      'Orchestrated 12-ministry stakeholder network',
      'Unlocked USD 4.8 million in co-financing',
      'Guided 40+ international/national experts',
      '100% on-time deliverables for World Bank',
    ],
    icon: Globe,
    color: 'from-amber-500 to-amber-600',
    stats: { label: 'Co-financing', value: '$4.8M' },
  },
  {
    id: 5,
    title: 'Medical Education Coordinator',
    organization: 'Eli Lilly',
    location: 'USA (Pakistan Operations)',
    period: 'Jun 2011 - Feb 2013',
    description: 'Designed and executed nationwide diabetes-education initiative covering 130+ healthcare centers.',
    achievements: [
      'Reached 4,200+ Health Care Professionals',
      'Improved physician confidence by 38%',
      '98% attendee satisfaction rate',
      'Managed 1,100+ medical inquiries',
    ],
    icon: Briefcase,
    color: 'from-rose-500 to-rose-600',
    stats: { label: 'HCPs Reached', value: '4,200+' },
  },
];

const Experience = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          experienceData.forEach((_, index) => {
            setTimeout(() => {
              setVisibleCards(prev => [...prev, index]);
            }, 200 + index * 120);
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
      id="experience"
      className="section-padding bg-white relative overflow-hidden"
    >
      {/* Background Decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-40 right-0 w-96 h-96 rounded-full bg-blue-400/5 blur-3xl" />
        <div className="absolute bottom-20 left-0 w-80 h-80 rounded-full bg-teal-400/5 blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div 
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
          style={{ transitionTimingFunction: 'var(--ease-expo-out)' }}
        >
          <span className="text-blue-500 font-semibold text-sm uppercase tracking-wider">Career Path</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mt-2">
            Professional <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Over a decade of experience in academia, research, and international organizations.
          </p>
        </div>

        {/* Experience Cards */}
        <div className="grid lg:grid-cols-2 gap-8">
          {experienceData.map((exp, index) => {
            const Icon = exp.icon;
            const isCardVisible = visibleCards.includes(index);

            return (
              <div
                key={exp.id}
                className={`transition-all duration-700 ${
                  isCardVisible 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-12'
                }`}
                style={{ transitionTimingFunction: 'var(--ease-spring)', transitionDelay: `${index * 100}ms` }}
              >
                <div className="bg-gray-50 rounded-2xl p-6 lg:p-8 border border-gray-100 hover:shadow-xl hover:border-blue-200 transition-all duration-300 group h-full">
                  {/* Header */}
                  <div className="flex flex-col sm:flex-row sm:items-start gap-4 mb-4">
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${exp.color} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-2 mb-1">
                        <span className="px-3 py-1 bg-white text-gray-600 text-xs font-medium rounded-full border border-gray-200">
                          {exp.period}
                        </span>
                        <span className="px-3 py-1 bg-gradient-to-r from-blue-50 to-teal-50 text-blue-700 text-xs font-medium rounded-full">
                          {exp.stats.value} {exp.stats.label}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">{exp.title}</h3>
                      <p className="text-gray-600">{exp.organization}</p>
                      <p className="text-sm text-gray-500">{exp.location}</p>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 mb-4 leading-relaxed">{exp.description}</p>

                  {/* Achievements */}
                  <div className="space-y-2">
                    {exp.achievements.map((achievement, achIndex) => (
                      <div 
                        key={achIndex}
                        className="flex items-start gap-2"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2 flex-shrink-0" />
                        <span className="text-sm text-gray-600">{achievement}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience;
