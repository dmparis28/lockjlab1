// Filename: app/components/HeroVisuals.jsx
import React from 'react';

const HeroVisuals = () => {
  return (
    <div className="relative h-full w-full flex items-center justify-center">
      {/* Video Container */}
      <div className="relative w-full aspect-video rounded-xl shadow-2xl overflow-hidden backdrop-blur-sm bg-dark-card/50 border border-white/10">
        {/* Placeholder for video - using gradient animation instead */}
        <div className="w-full h-full bg-gradient-to-br from-sky-900/50 via-blue-900/30 to-purple-900/50 flex items-center justify-center">
          <div className="text-center">
            <div className="w-20 h-20 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-sky-500 to-blue-600 flex items-center justify-center">
              <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <p className="text-gray-400 text-sm">Product Showcase Reel</p>
          </div>
        </div>
      </div>
      
      {/* Glow behind the video */}
      <div className="absolute inset-0 bg-sky-900/20 blur-3xl opacity-50 transform scale-110 -z-10" />
    </div>
  );
};

export default HeroVisuals;
