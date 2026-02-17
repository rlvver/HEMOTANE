import React from 'react';
import { X, FolderTree, Code2, Layers } from 'lucide-react';
import { RoadmapModule } from '../types';
import { useLanguage } from '../contexts/LanguageContext';
import ScoreCard from './ScoreCard'; // Reusing the visual component

interface RoadmapModalProps {
  module: RoadmapModule;
  onClose: () => void;
}

const RoadmapModal: React.FC<RoadmapModalProps> = ({ module, onClose }) => {
  const { t } = useLanguage();

  // Mock score for the preview if needed
  const mockScores = {
    technical: 9.5,
    user: 8.8,
    reliability: 9.2,
    brand: 9.0,
    final: 9.1
  };

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
      <div 
        className="absolute inset-0 bg-mv-black/90 backdrop-blur-sm"
        onClick={onClose}
      ></div>
      
      <div className="relative bg-mv-panel border border-mv-steel/20 w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-2xl shadow-2xl animate-fade-in-up">
        
        {/* Header */}
        <div className="sticky top-0 bg-mv-panel/95 backdrop-blur z-10 border-b border-white/5 p-6 flex justify-between items-center">
          <div>
            <span className="text-xs text-mv-steel font-bold uppercase tracking-widest block mb-1">Module Architecture</span>
            <h2 className="text-3xl font-serif font-bold text-white">{t(module.titleKey)}</h2>
          </div>
          <button 
            onClick={onClose}
            className="p-2 hover:bg-white/10 rounded-full transition-colors text-white"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="p-8 grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Left Column: Details */}
          <div className="space-y-8">
            <div>
              <h3 className="text-lg font-medium text-white mb-4 flex items-center gap-2">
                <Layers className="w-5 h-5 text-mv-wine" /> 
                Technical Objectives
              </h3>
              <ul className="space-y-3">
                {module.techGoals.map((goal, index) => (
                  <li key={index} className="flex items-start gap-3 text-mv-silver text-sm">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-mv-steel flex-shrink-0"></span>
                    {goal}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-medium text-white mb-4 flex items-center gap-2">
                <FolderTree className="w-5 h-5 text-mv-wine" /> 
                Structure
              </h3>
              <div className="bg-mv-black/50 border border-white/5 rounded-lg p-4 font-mono text-xs text-mv-smoke overflow-x-auto">
                <pre>{module.folderStructure}</pre>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Preview */}
          <div className="bg-mv-dark rounded-xl border border-white/5 p-6 relative min-h-[400px] flex flex-col">
            <div className="absolute top-4 right-4 flex gap-1">
              <div className="w-2 h-2 rounded-full bg-red-500/20"></div>
              <div className="w-2 h-2 rounded-full bg-yellow-500/20"></div>
              <div className="w-2 h-2 rounded-full bg-green-500/20"></div>
            </div>
            
            <h3 className="text-xs text-mv-smoke font-bold uppercase tracking-widest mb-6 flex items-center gap-2">
              <Code2 className="w-4 h-4" /> Interface Preview
            </h3>

            <div className="flex-1 flex items-center justify-center">
              {module.mockupType === 'ui' && (
                 <div className="w-full space-y-3 opacity-80">
                   <div className="h-8 bg-mv-panel rounded w-full animate-pulse"></div>
                   <div className="flex gap-3">
                     <div className="h-32 bg-mv-panel rounded w-1/3 animate-pulse"></div>
                     <div className="h-32 bg-mv-panel rounded w-2/3 animate-pulse"></div>
                   </div>
                   <div className="h-16 bg-mv-panel rounded w-full animate-pulse"></div>
                 </div>
              )}

              {module.mockupType === 'code' && (
                <div className="w-full font-mono text-xs text-green-400/80 leading-relaxed">
                  <span className="text-purple-400">import</span> {`{ Module }`} <span className="text-purple-400">from</span> <span className="text-yellow-200">'@core/architecture'</span>;<br/><br/>
                  <span className="text-purple-400">class</span> <span className="text-blue-400">{module.titleKey.split('.')[1].toUpperCase()}Controller</span> <span className="text-purple-400">extends</span> Base <span className="text-purple-400">{`{`}</span><br/>
                  &nbsp;&nbsp;<span className="text-purple-400">async</span> <span className="text-blue-300">execute</span>(params) <span className="text-purple-400">{`{`}</span><br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-gray-500">// Modular execution logic</span><br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-purple-400">return</span> <span className="text-purple-400">await</span> <span className="text-blue-400">this</span>.service.process(params);<br/>
                  &nbsp;&nbsp;<span className="text-purple-400">{`}`}</span><br/>
                  <span className="text-purple-400">{`}`}</span>
                </div>
              )}

              {module.mockupType === 'schema' && (
                 <div className="w-full flex flex-col items-center gap-4 opacity-80">
                   <div className="w-32 h-12 border-2 border-mv-steel rounded flex items-center justify-center text-mv-steel font-mono text-xs font-bold">User</div>
                   <div className="h-8 w-px bg-mv-smoke/20"></div>
                   <div className="flex gap-8">
                      <div className="w-32 h-12 border-2 border-mv-wine rounded flex items-center justify-center text-mv-wine font-mono text-xs font-bold">Motorcycle</div>
                      <div className="w-32 h-12 border-2 border-green-500/50 rounded flex items-center justify-center text-green-500/50 font-mono text-xs font-bold">Review</div>
                   </div>
                   <div className="h-8 w-px bg-mv-smoke/20"></div>
                   <div className="w-32 h-12 border-2 border-mv-silver/50 rounded flex items-center justify-center text-mv-silver font-mono text-xs font-bold">Score</div>
                 </div>
              )}

              {module.mockupType === 'score' && (
                <div className="w-full transform scale-90">
                   <ScoreCard scores={mockScores} />
                </div>
              )}
            </div>
            
            <div className="mt-6 pt-4 border-t border-white/5 text-center">
              <span className="text-[10px] text-mv-smoke uppercase tracking-wider">Visual Representation</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoadmapModal;
