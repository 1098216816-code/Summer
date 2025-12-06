import React from 'react';
import { Hero } from './components/Hero';
import { LogoAnalysis } from './components/LogoAnalysis';
import { ColorPalette } from './components/ColorPalette';
import { Typography } from './components/Typography';
import { Pattern } from './components/Pattern';
import { GoldenWave } from './components/GoldenWave';

const App: React.FC = () => {
  return (
    <div className="bg-[#F5F5F7] min-h-screen text-[#1D1D1F] selection:bg-[#0071EB] selection:text-white">
      
      {/* Floating Minimal Nav */}
      <div className="fixed right-6 top-1/2 -translate-y-1/2 z-50 hidden lg:flex flex-col gap-4">
          {['Logo', 'Color', 'Type', 'Graph', 'Core'].map((item, index) => (
             <a 
               key={item} 
               href={`#${item.toLowerCase() === 'graph' ? 'pattern' : item.toLowerCase() === 'core' ? 'golden-wave' : item.toLowerCase()}`}
               className="w-2 h-2 rounded-full bg-gray-300 hover:bg-[#0071EB] hover:scale-150 transition-all duration-300"
               title={item}
             ></a>
          ))}
      </div>

      <main>
        <Hero />
        <LogoAnalysis />
        <ColorPalette />
        <Typography />
        <Pattern />
        <GoldenWave />
        
        <footer className="bg-white py-24 px-6 border-t border-gray-100">
           <div className="max-w-7xl mx-auto flex flex-col items-center">
              <h2 className="font-display text-[#0071EB] text-6xl mb-8">Aeicoi</h2>
              <p className="font-sc text-gray-400 mb-8 text-center max-w-lg">
                 Design for pets with love and science.<br/>
                 Brand Visual Identity System
              </p>
              <p className="text-xs text-gray-300 font-mono">© 2024 Aeicoi VIS.</p>
           </div>
        </footer>
      </main>
    </div>
  );
};

export default App;