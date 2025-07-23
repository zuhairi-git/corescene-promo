'use client';

import { useState, useEffect, useRef } from 'react';
import { Zap, Target, RotateCcw, Palette, TrendingUp, Users, Quote } from 'lucide-react';

export default function WhyCoreSceneSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const benefits = [
    {
      title: 'Save Time',
      description: 'Streamline repetitive tasks across all your favorite platforms with intelligent automation.',
      icon: Zap,
      color: 'from-yellow-400 to-orange-500'
    },
    {
      title: 'AI Consistency',
      description: 'Maintain your brand voice and design standards with AI that learns your preferences.',
      icon: Target,
      color: 'from-blue-400 to-purple-500'
    },
    {
      title: 'Better Workflow',
      description: 'Connect your tools and data for seamless collaboration between teams.',
      icon: RotateCcw,
      color: 'from-green-400 to-cyan-500'
    }
  ];

  const audiences = [
    {
      role: 'Designers',
      description: 'Accelerate your creative process with smart design suggestions and automated workflows.',
      icon: Palette,
      color: 'from-purple-500 to-pink-500',
      bgColor: 'bg-purple-500/10',
      borderColor: 'border-purple-500/20'
    },
    {
      role: 'Marketers',
      description: 'Generate compelling content and optimize campaigns with data-driven AI insights.',
      icon: TrendingUp,
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-blue-500/10',
      borderColor: 'border-blue-500/20'
    },
    {
      role: 'Content Teams',
      description: 'Scale your content production while maintaining quality and brand consistency.',
      icon: Users,
      color: 'from-green-500 to-teal-500',
      bgColor: 'bg-green-500/10',
      borderColor: 'border-green-500/20'
    }
  ];

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
    <section ref={sectionRef} className="relative py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-800 to-slate-900 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-0 w-96 h-96 bg-blue-500/3 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-0 w-96 h-96 bg-purple-500/3 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-20">
          <div className="overflow-hidden mb-6">
            <h2 className={`text-4xl sm:text-5xl lg:text-6xl font-black text-white transition-all duration-800 ease-out ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}>
              Why Choose{' '}
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                CoreScene?
              </span>
            </h2>
          </div>
          <p className={`text-xl sm:text-2xl text-gray-400 max-w-4xl mx-auto leading-relaxed transition-all duration-800 ease-out delay-200 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
          }`}>
            Experience the power of{' '}
            <span className="text-blue-400 font-semibold">unified AI tools</span>{' '}
            that work together to transform your workflow.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <div
                key={index}
                className={`group relative bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-8 text-center hover:bg-white/8 transition-all duration-500 transform hover:scale-[1.02] hover:-translate-y-1 ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
                }`}
                style={{ transitionDelay: `${400 + index * 100}ms` }}
              >
                {/* Gradient border on hover */}
                <div className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${benefit.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 blur-sm`}></div>
                
                <div className="relative z-10">
                  <div className="flex justify-center mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-r ${benefit.color} rounded-2xl flex items-center justify-center transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-3`}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 transition-all duration-500">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-500 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Audience Types */}
        <div className={`bg-gradient-to-r from-slate-800/50 to-slate-700/50 backdrop-blur-lg rounded-3xl p-12 border border-white/10 transition-all duration-800 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
        }`} style={{ transitionDelay: '800ms' }}>
          <h3 className="text-3xl sm:text-4xl font-bold text-white mb-12 text-center">
            Built for{' '}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Every Team
            </span>
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {audiences.map((audience, index) => {
              const IconComponent = audience.icon;
              return (
                <div
                  key={index}
                  className={`group relative bg-white/5 backdrop-blur-lg ${audience.bgColor} border ${audience.borderColor} rounded-2xl p-8 hover:bg-white/8 transition-all duration-500 transform hover:scale-[1.02] hover:-translate-y-1`}
                >
                  {/* Animated gradient background */}
                  <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${audience.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                  
                  <div className="relative z-10">
                    <div className="flex items-center space-x-4 mb-6">
                      <div className={`w-12 h-12 bg-gradient-to-r ${audience.color} rounded-xl flex items-center justify-center transform transition-transform duration-300 group-hover:scale-110`}>
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <span className={`text-lg font-bold bg-gradient-to-r ${audience.color} bg-clip-text text-transparent`}>
                        {audience.role}
                      </span>
                    </div>
                    <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-500 leading-relaxed">
                      {audience.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Enhanced testimonial */}
        <div className={`mt-20 text-center bg-gradient-to-r from-blue-500/8 via-purple-500/8 to-cyan-500/8 backdrop-blur-lg rounded-3xl p-12 border border-white/10 transition-all duration-800 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
        }`} style={{ transitionDelay: '1000ms' }}>
          <div className="relative">
            {/* Quote icon */}
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                <Quote className="w-8 h-8 text-white" />
              </div>
            </div>
            
            <blockquote className="text-2xl sm:text-3xl italic text-gray-300 mb-8 relative z-10 leading-relaxed">
              CoreScene has{' '}
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent font-semibold">
                transformed
              </span>{' '}
              how our team collaborates. The AI consistency across platforms is incredible.
            </blockquote>
            <cite className="text-gray-400 text-lg">
              <span className="text-white font-semibold">— Sarah Chen</span>, Creative Director at TechCorp
            </cite>
          </div>
        </div>
      </div>
    </section>
  );
}
