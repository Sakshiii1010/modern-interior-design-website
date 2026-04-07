import React, { useEffect, useRef, useState } from 'react';
import { gallery } from '../data/mockData';
import { Button } from './ui/button';

const Gallery = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeFilter, setActiveFilter] = useState('All');
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

  const filters = ['All', 'Living Room', 'Kitchen', 'Bedroom', 'Dining'];

  const filteredGallery = activeFilter === 'All'
    ? gallery
    : gallery.filter(item => item.category === activeFilter);

  return (
    <section id="gallery" ref={sectionRef} className="py-24 bg-gradient-to-b from-purple-50/30 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          className={`text-center mb-12 transform transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our <span className="bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent">Portfolio</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Explore our stunning collection of completed projects showcasing excellence in design
          </p>
        </div>

        {/* Filter Buttons */}
        <div
          className={`flex flex-wrap justify-center gap-4 mb-12 transform transition-all duration-1000 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {filters.map((filter) => (
            <Button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              variant={activeFilter === filter ? 'default' : 'outline'}
              className={`transition-all duration-300 ${
                activeFilter === filter
                  ? 'bg-gradient-to-r from-purple-600 to-purple-700 text-white shadow-lg scale-105'
                  : 'border-purple-300 text-purple-700 hover:border-purple-600'
              }`}
            >
              {filter}
            </Button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredGallery.map((item, index) => (
            <div
              key={item.id}
              className={`group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer transform hover:-translate-y-2 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${400 + index * 100}ms` }}
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-purple-900/90 via-purple-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
                <span className="text-purple-300 text-sm font-medium mb-1">{item.category}</span>
                <h3 className="text-white text-xl font-bold">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div
          className={`text-center mt-12 transform transition-all duration-1000 delay-800 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <Button
            size="lg"
            className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            View Complete Portfolio
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Gallery;

