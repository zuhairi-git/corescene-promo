'use client';

import { Product } from '../data/products';
import { useState, useEffect, useRef } from 'react';
import { ArrowRight, Clock, CheckCircle, Figma, FileText, BarChart3 } from 'lucide-react';

const platformIcons = {
  'Figma': Figma,
  'WordPress': FileText,
  'HubSpot': BarChart3
};

interface ProductCardProps {
  product: Product;
  index: number;
}

export function ProductCard({ product, index }: ProductCardProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const isAvailable = product.status === 'available';
  const PlatformIcon = platformIcons[product.platform as keyof typeof platformIcons] || FileText;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), index * 100);
        }
      },
      { threshold: 0.2 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, [index]);

  return (
    <div
      ref={cardRef}
      className={`group relative bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl shadow-xl hover:shadow-blue-500/10 transition-all duration-500 p-8 overflow-hidden transform ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
      } ${isHovered ? 'scale-[1.02] -translate-y-1' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/3 via-purple-500/3 to-cyan-500/3 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      {/* Animated border */}
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm"></div>

      <div className="relative z-10 flex flex-col h-full">
        {/* Header with animated status badge */}
        <div className="flex justify-between items-start mb-6">
          <h3 className="text-2xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 transition-all duration-300">
            {product.name}
          </h3>
          <div className={`flex items-center space-x-2 px-3 py-1 rounded-full text-sm font-medium transform transition-all duration-300 ${
            isAvailable 
              ? 'bg-green-500/20 text-green-400 border border-green-500/30 group-hover:bg-green-500/30'
              : 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30 group-hover:bg-yellow-500/30'
          } ${isHovered ? 'scale-105' : ''}`}>
            {isAvailable ? (
              <>
                <CheckCircle className="w-4 h-4" />
                <span>Available</span>
              </>
            ) : (
              <>
                <Clock className="w-4 h-4" />
                <span>Coming Soon</span>
              </>
            )}
          </div>
        </div>
        
        {/* Platform indicator with icon */}
        <div className="mb-4">
          <div className="inline-flex items-center space-x-3 bg-gray-800/40 backdrop-blur-sm px-4 py-2 rounded-xl border border-gray-700/40 group-hover:border-blue-500/40 transition-all duration-300">
            <PlatformIcon className="w-5 h-5 text-blue-400 group-hover:text-blue-300 transition-colors duration-300" />
            <span className="text-gray-300 font-medium group-hover:text-white transition-colors duration-300">
              {product.platform}
            </span>
          </div>
        </div>
        
        {/* Tagline */}
        <p className="text-xl font-semibold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4 group-hover:from-cyan-400 group-hover:to-pink-400 transition-all duration-300">
          {product.tagline}
        </p>
        
        {/* Description */}
        <p className="text-gray-400 group-hover:text-gray-300 mb-8 flex-grow leading-relaxed transition-colors duration-300">
          {product.description}
        </p>
        
        {/* Enhanced action button */}
        <div className="mt-auto">
          {isAvailable ? (
            <button 
              className="group/btn relative w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-4 px-6 rounded-2xl font-bold transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg hover:shadow-blue-500/20 overflow-hidden"
              onClick={() => product.actionUrl && window.open(product.actionUrl, '_blank')}
            >
              <span className="relative z-10 flex items-center justify-center space-x-2">
                <span>{product.actionText || 'Try Now'}</span>
                <ArrowRight className="w-5 h-5 transform transition-transform duration-300 group-hover/btn:translate-x-1" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-cyan-600 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
            </button>
          ) : (
            <button 
              className="relative w-full bg-gray-700/40 border-2 border-gray-600/40 text-gray-400 py-4 px-6 rounded-2xl font-bold cursor-not-allowed backdrop-blur-sm overflow-hidden"
              disabled
            >
              <span className="relative z-10 flex items-center justify-center space-x-2">
                <span>{product.actionText || 'Coming Soon'}</span>
                <Clock className="w-5 h-5 animate-pulse" />
              </span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

interface ProductShowcaseProps {
  products: Product[];
}

export default function ProductShowcase({ products }: ProductShowcaseProps) {
  const [titleVisible, setTitleVisible] = useState(false);
  const titleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTitleVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (titleRef.current) {
      observer.observe(titleRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-900 to-slate-800 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div ref={titleRef} className="text-center mb-20">
          <div className="overflow-hidden mb-6">
            <h2 className={`text-4xl sm:text-5xl lg:text-6xl font-black text-white transition-all duration-1000 ${
              titleVisible ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
            }`}>
              Our{' '}
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                AI Tools Suite
              </span>
            </h2>
          </div>
          <p className={`text-xl sm:text-2xl text-gray-400 max-w-4xl mx-auto leading-relaxed transition-all duration-1000 delay-300 ${
            titleVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            Discover powerful AI-driven tools designed to{' '}
            <span className="text-blue-400 font-semibold">enhance your workflow</span>{' '}
            across different platforms.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {products.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
