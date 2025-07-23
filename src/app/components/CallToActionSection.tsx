'use client';

import { useState, useEffect, useRef } from 'react';
import { ArrowRight, Send, Star, Users, Clock, TrendingUp } from 'lucide-react';

export default function CallToActionSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

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

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="relative py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 via-blue-900/20 to-purple-900/20 overflow-hidden"
    >
      {/* Subtle background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/8 rounded-full blur-3xl animate-pulse-soft"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/8 rounded-full blur-3xl animate-pulse-soft" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-3/4 left-3/4 w-64 h-64 bg-cyan-500/6 rounded-full blur-2xl animate-pulse-soft" style={{ animationDelay: '1s' }}></div>
      </div>

      {/* Subtle floating elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/20 rounded-full animate-float"
            style={{
              left: `${30 + Math.random() * 40}%`,
              top: `${20 + Math.random() * 60}%`,
              animationDelay: `${Math.random() * 8}s`,
              animationDuration: `${10 + Math.random() * 5}s`
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        {/* Main heading */}
        <div className="overflow-hidden mb-8">
          <h2 
            className={`text-4xl sm:text-5xl lg:text-6xl font-black text-white transition-all duration-800 ease-out ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
            }`}
          >
            Ready to{' '}
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent animate-gradient">
              Transform
            </span>
            <br />
            Your Workflow?
          </h2>
        </div>
        
        {/* Subtitle */}
        <p className={`text-xl sm:text-2xl lg:text-3xl text-blue-100 mb-12 max-w-4xl mx-auto leading-relaxed transition-all duration-800 ease-out delay-200 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
        }`}>
          Join thousands of teams already using CoreScene to work{' '}
          <span className="text-white font-bold">smarter</span>,{' '}
          <span className="text-white font-bold">faster</span>, and more{' '}
          <span className="text-white font-bold">efficiently</span>.
        </p>
        
        {/* CTA buttons with enhanced effects */}
        <div className={`flex flex-col sm:flex-row gap-6 justify-center items-center mb-12 transition-all duration-800 ease-out delay-400 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-3 opacity-0'
        }`}>
          <button className="group relative bg-white text-slate-900 hover:text-white px-12 py-5 rounded-2xl font-bold text-xl transition-all duration-300 transform hover:scale-[1.02] hover:shadow-xl hover:shadow-white/20 min-w-[250px] overflow-hidden">
            <span className="relative z-10 flex items-center justify-center space-x-3">
              <span>Try Our Tools</span>
              <ArrowRight className="w-6 h-6 transform transition-transform duration-300 group-hover:translate-x-1" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 blur-lg opacity-0 group-hover:opacity-30 transition-opacity duration-300 -z-10"></div>
          </button>
          
          <button className="group relative border-2 border-white/40 hover:border-white/80 text-white px-12 py-5 rounded-2xl font-bold text-xl transition-all duration-300 transform hover:scale-[1.02] min-w-[250px] overflow-hidden backdrop-blur-sm">
            <span className="relative z-10 flex items-center justify-center space-x-3">
              <Send className="w-6 h-6 transform transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12" />
              <span>Join the Waitlist</span>
            </span>
            <div className="absolute inset-0 bg-white/8 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
        </div>
        
        {/* Special announcement */}
        <div className={`flex items-center justify-center space-x-3 text-blue-200 transition-all duration-800 ease-out delay-600 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-0'
        }`}>
          <div className="flex items-center space-x-3 bg-white/8 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20">
            <Star className="w-4 h-4 text-yellow-400 animate-pulse" />
            <span className="text-lg font-medium">
              Be the first to know when{' '}
              <span className="text-white font-bold">HubSpot AI</span> launches
            </span>
          </div>
        </div>

        {/* Metrics or social proof */}
        <div className={`mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 transition-all duration-800 ease-out delay-800 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-3 opacity-0'
        }`}>
          {[
            { icon: Users, number: '10,000+', label: 'Active Users' },
            { icon: TrendingUp, number: '50+', label: 'Enterprise Clients' },
            { icon: Clock, number: '99.9%', label: 'Uptime' }
          ].map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div key={index} className="text-center group">
                <div className="flex justify-center mb-3">
                  <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center group-hover:bg-white/20 transition-all duration-300">
                    <IconComponent className="w-6 h-6 text-blue-400 group-hover:text-white transition-colors duration-300" />
                  </div>
                </div>
                <div className="text-3xl sm:text-4xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 transition-all duration-300 mb-2">
                  {stat.number}
                </div>
                <div className="text-blue-200 group-hover:text-white transition-colors duration-300">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
