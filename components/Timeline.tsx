import React from 'react';
import { ROADMAP_PHASES } from '../services/roadmapData';
import { RoadmapStatus } from '../types';
import { useLanguage } from '../contexts/LanguageContext';
import { CheckCircle2, Circle, Clock } from 'lucide-react';

const Timeline: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="relative">
      {/* Horizontal Line (Desktop) */}
      <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-mv-dark/50 -translate-y-1/2"></div>
      
      {/* Progress Line */}
      <div className="hidden md:block absolute top-1/2 left-0 h-0.5 bg-gradient-to-r from-mv-wine via-mv-steel to-transparent w-2/3 -translate-y-1/2"></div>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
        {ROADMAP_PHASES.map((phase) => (
          <div key={phase.id} className="relative group">
            
            {/* Dot Indicator */}
            <div className="hidden md:flex absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-8 h-8 rounded-full bg-mv-panel border-2 border-mv-steel items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
               {phase.status === RoadmapStatus.COMPLETED ? (
                 <CheckCircle2 className="w-4 h-4 text-green-500" />
               ) : phase.status === RoadmapStatus.IN_PROGRESS ? (
                 <div className="w-2.5 h-2.5 bg-mv-highlight rounded-full animate-pulse"></div>
               ) : (
                 <Circle className="w-4 h-4 text-mv-smoke" />
               )}
            </div>

            {/* Content Card */}
            <div className={`
               relative mt-0 md:mt-12 p-6 rounded-lg border transition-all duration-300
               ${phase.status === RoadmapStatus.IN_PROGRESS ? 'bg-mv-panel border-mv-wine/40 shadow-mv-wine/10 shadow-lg' : 'bg-mv-panel/50 border-white/5 opacity-80 hover:opacity-100'}
            `}>
              <div className="flex justify-between items-start mb-2">
                <span className="text-xs font-mono text-mv-steel font-bold">{phase.date}</span>
                {phase.status === RoadmapStatus.IN_PROGRESS && (
                  <span className="flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-2 w-2 rounded-full bg-red-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
                  </span>
                )}
              </div>
              <h4 className="text-white font-serif font-bold mb-2">{t(phase.titleKey)}</h4>
              <p className="text-xs text-mv-silver leading-relaxed">{t(phase.descriptionKey)}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
