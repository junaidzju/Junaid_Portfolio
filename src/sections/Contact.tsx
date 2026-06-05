import { useEffect, useRef, useState } from 'react';
import { Mail, Phone, MapPin, MessageCircle, ExternalLink, GraduationCap, BookOpen, Quote } from 'lucide-react';

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'Junaid527@gmail.com',
    href: 'mailto:Junaid527@gmail.com',
    color: 'from-blue-500 to-blue-600',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+86 130 7365 6165',
    href: 'tel:+8613073656165',
    color: 'from-teal-500 to-teal-600',
  },
  {
    icon: MessageCircle,
    label: 'WeChat',
    value: 'JunaidZJU',
    href: '#',
    color: 'from-green-500 to-green-600',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Hangzhou, China',
    href: '#',
    color: 'from-rose-500 to-rose-600',
  },
];

const academicProfiles = [
  {
    icon: BookOpen,
    label: 'ORCID',
    value: '0000-0002-8580-7529',
    href: 'https://orcid.org/0000-0002-8580-7529',
    color: 'bg-green-500',
  },
  {
    icon: GraduationCap,
    label: 'Google Scholar',
    value: 'View Profile',
    href: 'https://scholar.google.com/citations?user=Uv9iwbEAAAAJ&hl=en',
    color: 'bg-blue-500',
  },
  {
    icon: Quote,
    label: 'Scopus',
    value: 'View Profile',
    href: 'https://www.scopus.com/authid/detail.uri?authorId=57210995951',
    color: 'bg-orange-500',
  },
  {
    icon: BookOpen,
    label: 'Web of Science',
    value: 'View Profile',
    href: 'https://www.webofscience.com/wos/author/record/M-7336-2016',
    color: 'bg-purple-500',
  },
];

const Contact = () => {
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
      id="contact"
      className="section-padding bg-gray-50 relative overflow-hidden"
    >
      {/* Background Decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 rounded-full bg-blue-400/5 blur-3xl" />
        <div className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-teal-400/5 blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div 
          className={`text-center mb-12 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
          style={{ transitionTimingFunction: 'var(--ease-expo-out)' }}
        >
          <span className="text-blue-500 font-semibold text-sm uppercase tracking-wider">Connect</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mt-2">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Open to collaborations, research partnerships, and academic discussions.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Contact Cards */}
          <div 
            className={`grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionTimingFunction: 'var(--ease-elastic)', transitionDelay: '200ms' }}
          >
            {contactInfo.map((contact, index) => {
              const Icon = contact.icon;
              return (
                <a
                  key={contact.label}
                  href={contact.href}
                  className="group bg-white rounded-xl p-5 shadow-lg border border-gray-100 hover:shadow-xl hover:border-blue-200 transition-all duration-300"
                  style={{ transitionDelay: `${index * 50}ms` }}
                >
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${contact.color} flex items-center justify-center mb-3 group-hover:scale-110 transition-transform`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-sm text-gray-500 mb-1">{contact.label}</div>
                  <div className="font-semibold text-gray-900 text-sm">{contact.value}</div>
                </a>
              );
            })}
          </div>

          {/* Academic Profiles */}
          <div 
            className={`bg-white rounded-2xl p-6 lg:p-8 shadow-lg border border-gray-100 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionTimingFunction: 'var(--ease-spring)', transitionDelay: '400ms' }}
          >
            <h3 className="text-lg font-bold text-gray-900 mb-6 text-center">
              Academic Profiles
            </h3>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {academicProfiles.map((profile, index) => {
                const Icon = profile.icon;
                return (
                  <a
                    key={profile.label}
                    href={profile.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-3 p-4 bg-gray-50 rounded-xl hover:bg-blue-50 hover:border-blue-200 border border-transparent transition-all duration-300 group ${
                      isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
                    }`}
                    style={{ 
                      transitionTimingFunction: 'var(--ease-elastic)', 
                      transitionDelay: `${500 + index * 80}ms` 
                    }}
                  >
                    <div className={`w-10 h-10 rounded-lg ${profile.color} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}>
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-sm font-semibold text-gray-900">{profile.label}</div>
                      <div className="text-xs text-gray-500 flex items-center gap-1">
                        {profile.value}
                        <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>

          {/* Closing Message */}
          <div 
            className={`mt-10 text-center transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
            style={{ transitionTimingFunction: 'var(--ease-smooth)', transitionDelay: '600ms' }}
          >
            <p className="text-gray-600 italic">
              "I'm always looking to connect with like-minded professionals, share insights, and explore collaborative opportunities that can make a difference in the world."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
