import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import ProductShowcase from './components/ProductShowcase';
import WhyCoreSceneSection from './components/WhyCoreSceneSection';
import CallToActionSection from './components/CallToActionSection';
import { getVisibleProducts } from './data/products';
import { Twitter, Linkedin, Github } from 'lucide-react';

export default function Home() {
  const visibleProducts = getVisibleProducts();

  return (
    <div className="min-h-screen bg-slate-900">
      {/* Navigation */}
      <Navigation />
      
      {/* Hero Section */}
      <HeroSection />
      
      {/* Product Showcase Grid */}
      <ProductShowcase products={visibleProducts} />
      
      {/* Why CoreScene Section */}
      <WhyCoreSceneSection />
      
      {/* Call to Action Section */}
      <CallToActionSection />
      
      {/* Enhanced Footer */}
      <footer className="relative bg-gradient-to-b from-slate-900 to-black py-16 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            {/* Logo and description */}
            <div className="col-span-1 md:col-span-2">
              <h3 className="text-2xl font-black text-white mb-4">CoreScene</h3>
              <p className="text-gray-400 leading-relaxed mb-6 max-w-md">
                Empowering teams with unified AI tools that transform workflows across design, content, and marketing platforms.
              </p>
              <div className="flex space-x-4">
                {/* Social links with Lucide icons */}
                {[
                  { name: 'Twitter', icon: Twitter, href: '#twitter' },
                  { name: 'LinkedIn', icon: Linkedin, href: '#linkedin' },
                  { name: 'GitHub', icon: Github, href: '#github' }
                ].map((social) => {
                  const IconComponent = social.icon;
                  return (
                    <a
                      key={social.name}
                      href={social.href}
                      className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300 backdrop-blur-sm group"
                    >
                      <IconComponent className="w-5 h-5 transform transition-transform duration-300 group-hover:scale-110" />
                    </a>
                  );
                })}
              </div>
            </div>
            
            {/* Quick links */}
            <div>
              <h4 className="text-white font-bold mb-4">Product</h4>
              <ul className="space-y-2">
                {['Figma Plugin', 'WordPress Plugin', 'HubSpot Plugin', 'Pricing'].map((link) => (
                  <li key={link}>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Company links */}
            <div>
              <h4 className="text-white font-bold mb-4">Company</h4>
              <ul className="space-y-2">
                {['About Us', 'Blog', 'Careers', 'Contact'].map((link) => (
                  <li key={link}>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          {/* Bottom bar */}
          <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2025 CoreScene. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-300">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
