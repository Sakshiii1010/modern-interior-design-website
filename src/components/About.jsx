import React, { useEffect, useRef, useState } from 'react';
import { Award, Users, Building2, Shield } from 'lucide-react';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const features = [
    {
      icon: Award,
      title: 'Premium Quality',
      description: 'Nearly two decades of experience delivering superior quality and workmanship with the finest materials.'
    },
    {
      icon: Users,
      title: '100% Customisation',
      description: 'Personalized designs tailored to your lifestyle, preferences, and budget with complete flexibility.'
    },
    {
      icon: Building2,
      title: 'Own Factory',
      description: '1,25,000 sq. ft. state-of-the-art production facility with German machinery ensuring quality control.'
    },
    {
      icon: Shield,
      title: '10-Year Warranty',
      description: 'Comprehensive warranty on all furniture and fittings with lifetime service support and maintenance.'
    }
  ];

  return (
    <section id="about" ref={sectionRef} className="py-24 bg-gradient-to-b from-white to-purple-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transform transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Why Choose <span className="bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent">D'LIFE</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Mumbai's most trusted interior design company transforming ordinary spaces into extraordinary living environments
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Image */}
          <div
            className={`relative transform transition-all duration-1000 delay-200 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1581784878214-8d5596b98a01"
                alt="Luxury Interior"
                className="w-full h-[500px] object-cover transform hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-purple-900/50 to-transparent"></div>
            </div>
            {/* Floating Card */}
            <div className="absolute -bottom-8 -right-8 bg-white rounded-2xl shadow-2xl p-6 max-w-xs">
              <div className="text-5xl font-bold bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent mb-2">
                35-40
              </div>
              <div className="text-gray-600 font-medium">Days Project Completion</div>
            </div>
          </div>

          {/* Text Content */}
          <div
            className={`transform transition-all duration-1000 delay-400 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}
          >
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Creating Lifestyles, Not Just Homes
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              D'LIFE Mumbai brings your dream home to life with unparalleled interior design services. Our experienced interior designers transform ordinary spaces into extraordinary living environments personalized for you.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              We blend aesthetics, comfort and functionality into one-of-a-kind designs. At D'LIFE Mumbai, we don't just create homes, we create lifestyles.
            </p>
            <p className="text-gray-600 leading-relaxed">
              With nearly two decades of experience, we have established a reputation for superior quality and workmanship. We use only the finest materials and construction methods to ensure durability and longevity.
            </p>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className={`bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 group ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${600 + index * 100}ms` }}
              >
                <div className="w-14 h-14 bg-gradient-to-br from-purple-100 to-purple-200 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="text-purple-600" size={28} />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h4>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;

