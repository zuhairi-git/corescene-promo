'use client';

import { useEffect, useState } from 'react';
import { Play, ChevronDown, Sparkles, Zap, Target, RotateCcw } from 'lucide-react';

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900 overflow-hidden flex items-center">
      {/* Subtle background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse-soft"></div>
        <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse-soft" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-cyan-500/5 rounded-full blur-2xl animate-pulse-soft" style={{ animationDelay: '1s' }}></div>
      </div>

      {/* Subtle floating particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/10 rounded-full animate-float"
            style={{
              left: `${20 + Math.random() * 60}%`,
              top: `${20 + Math.random() * 60}%`,
              animationDelay: `${Math.random() * 8}s`,
              animationDuration: `${8 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Main heading with gentle reveal animation */}
        <div className="overflow-hidden mb-8">
          <h1 
            className={`text-5xl sm:text-6xl lg:text-8xl font-black text-white mb-6 transition-all duration-1000 ease-out ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}
          >
            Your Smartest Tools.
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent animate-gradient">
              One Ecosystem.
            </span>
          </h1>
        </div>
        
        {/* Subtitle with stagger animation */}
        <div className="overflow-hidden mb-12">
          <p 
            className={`text-xl sm:text-2xl lg:text-3xl text-gray-300 max-w-4xl mx-auto leading-relaxed transition-all duration-1000 ease-out delay-200 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
            }`}
          >
            Supercharge your workflow with CoreScene's{' '}
            <span className="text-blue-400 font-semibold">unified AI suite</span>.
            <br />
            Seamlessly integrated tools for design, content, and marketing teams.
          </p>
        </div>
        
        {/* CTA buttons with enhanced hover effects */}
        <div 
          className={`flex flex-col sm:flex-row gap-6 justify-center items-center mb-16 transition-all duration-1000 ease-out delay-400 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
          }`}
        >
          <button className="group relative bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-10 py-4 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-[1.02] hover:shadow-xl hover:shadow-blue-500/20 min-w-[220px] overflow-hidden">
            <span className="relative z-10 flex items-center justify-center space-x-3">
              <span>Explore Products</span>
              <Sparkles className="w-5 h-5 transition-transform duration-300 group-hover:rotate-12" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-cyan-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
          
          <button className="group relative border-2 border-gray-400/50 hover:border-white/80 text-gray-300 hover:text-white px-10 py-4 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-[1.02] min-w-[220px] overflow-hidden backdrop-blur-sm">
            <span className="relative z-10 flex items-center justify-center space-x-3">
              <Play className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
              <span>Watch Demo</span>
            </span>
            <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
        </div>
        
        {/* Platform indicators with icons */}
        <div 
          className={`flex flex-wrap justify-center gap-8 text-gray-400 transition-all duration-1000 ease-out delay-600 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-3 opacity-0'
          }`}
        >
          {[
            { name: 'Figma', icon: Target },
            { name: 'WordPress', icon: Zap },
            { name: 'HubSpot', icon: RotateCcw }
          ].map((platform, index) => {
            const IconComponent = platform.icon;
            return (
              <div key={platform.name} className="flex items-center space-x-3 group cursor-pointer">
                <div className="w-10 h-10 bg-gradient-to-r from-gray-700/50 to-gray-800/50 rounded-xl flex items-center justify-center group-hover:from-blue-500/20 group-hover:to-purple-500/20 transition-all duration-300 backdrop-blur-sm border border-gray-700/30 group-hover:border-blue-500/30">
                  <IconComponent className="w-5 h-5 text-gray-400 group-hover:text-blue-400 transition-colors duration-300" />
                </div>
                <span className="text-lg font-medium group-hover:text-white transition-colors duration-300">
                  {platform.name}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Refined scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/40 animate-bounce">
        <div className="flex flex-col items-center space-y-3">
          <span className="text-sm font-medium tracking-wide">Scroll to explore</span>
          <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center relative overflow-hidden">
            <div className="w-1 h-3 bg-white/40 rounded-full mt-2 animate-pulse"></div>
            <ChevronDown className="w-4 h-4 text-white/30 absolute bottom-1 animate-pulse" style={{ animationDelay: '0.5s' }} />
          </div>
        </div>
      </div>
    </section>
  );
}
