import React from 'react';
import { Layout, Server, Database, Globe, Cpu, Activity, Languages, Building2, ArrowUpRight } from 'lucide-react';
import { RoadmapModule, RoadmapStatus } from '../types';
import { useLanguage } from '../contexts/LanguageContext';

const icons: { [key: string]: React.ElementType } = {
  Layout, Server, Database, Globe, Cpu, Activity, Languages, Building2
};

const statusColors = {
  [RoadmapStatus.COMPLETED]: 'bg-green-500/20 text-green-500 border-green-500/50',
  [RoadmapStatus.IN_PROGRESS]: 'bg-mv-steel/20 text-mv-steel border-mv-steel/50',
  [RoadmapStatus.PLANNED]: 'bg-mv-wine/20 text-mv-wine border-mv-wine/50',
  [RoadmapStatus.FUTURE]: 'bg-mv-smoke/10 text-mv-smoke border-mv-smoke/30',
};

interface RoadmapCardProps {
  module: RoadmapModule;
  onClick: (module: RoadmapModule) => void;
}

const RoadmapCard: React.FC<RoadmapCardProps> = ({ module, onClick }) => {
  const { t } = useLanguage();
  const Icon = icons[module.icon] || Layout;

  return (
    <div 
      onClick={() => onClick(module)}
      className="group relative bg-mv-panel border border-white/5 p-6 rounded-xl hover:border-mv-steel/50 transition-all duration-300 cursor-pointer overflow-hidden hover:shadow-2xl hover:shadow-mv-steel/10"
    >
      <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity">
        <ArrowUpRight className="w-5 h-5 text-mv-steel" />
      </div>

      <div className="mb-6 inline-flex p-3 rounded-lg bg-white/5 group-hover:bg-mv-steel/20 transition-colors">
        <Icon className="w-6 h-6 text-mv-silver group-hover:text-white transition-colors" />
      </div>

      <h3 className="text-xl font-serif font-bold text-white mb-2">{t(module.titleKey)}</h3>
      <p className="text-sm text-mv-smoke mb-6 min-h-[40px] leading-relaxed">{t(module.descriptionKey)}</p>

      <div className="flex items-center justify-between mt-auto">
        <span className={`text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded border ${statusColors[module.status]}`}>
          {t(`module.status.${module.status}`)}
        </span>
        <span className="text-xs text-mv-steel opacity-0 group-hover:opacity-100 transition-opacity translate-y-2 group-hover:translate-y-0 duration-300">
          View Specs
        </span>
      </div>
    </div>
  );
};

export default RoadmapCard;
