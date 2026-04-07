import React, { useEffect, useRef, useState } from 'react';
import { processSteps } from '../data/mockData';
import { Lightbulb, Palette, Eye, Wrench } from 'lucide-react';

const Process = () => {
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

  const icons = [Lightbulb, Palette, Eye, Wrench];

  return (
    <section id="process" ref={sectionRef} className="py-24 bg-gradient-to-b from-white to-purple-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          className={`text-center mb-20 transform transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Smooth Design & <span className="bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent">Implementation</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our streamlined 4-step process ensures your dream home becomes reality with precision and care
          </p>
        </div>

        {/* Process Steps */}
        <div className="relative">
          {/* Connecting Line */}
          <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 top-20 bottom-20 w-1 bg-gradient-to-b from-purple-200 via-purple-400 to-purple-200"></div>

          {processSteps.map((step, index) => {
            const Icon = icons[index];
            const isEven = index % 2 === 0;

            return (
              <div
                key={step.id}
                className={`relative mb-16 lg:mb-24 transform transition-all duration-1000 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${200 + index * 200}ms` }}
              >
                <div className={`lg:grid lg:grid-cols-2 gap-12 items-center ${
                  isEven ? '' : 'lg:grid-flow-dense'
                }`}>
                  {/* Content */}
                  <div className={`${isEven ? 'lg:text-right' : 'lg:col-start-2'} mb-8 lg:mb-0`}>
                    <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                      <div className={`flex items-center gap-4 mb-4 ${
                        isEven ? 'lg:flex-row-reverse lg:justify-end' : ''
                      }`}>
                        <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-purple-800 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg">
                          <Icon className="text-white" size={32} />
                        </div>
                        <span className="text-6xl font-bold text-purple-200">{step.number}</span>
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">{step.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{step.description}</p>
                    </div>
                  </div>

                  {/* Image */}
                  <div className={`${isEven ? 'lg:col-start-2' : ''}`}>
                    <div className="relative rounded-3xl overflow-hidden shadow-2xl group">
                      <img
                        src={[
                          'https://images.unsplash.com/photo-1621293954908-907159247fc8',
                          'https://images.unsplash.com/photo-1564078516393-cf04bd966897',
                          'https://images.unsplash.com/photo-1618220179428-22790b461013',
                          'https://images.pexels.com/photos/279648/pexels-photo-279648.jpeg'
                        ][index]}
                        alt={step.title}
                        className="w-full h-80 object-cover transform group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-purple-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    </div>
                  </div>
                </div>

                {/* Step Indicator Circle for Desktop */}
                <div className="hidden lg:block absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="w-8 h-8 bg-white border-4 border-purple-600 rounded-full shadow-lg"></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Process;
