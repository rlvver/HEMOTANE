import React from 'react';
import { ScoringSystem } from '../types';
import { useLanguage } from '../contexts/LanguageContext';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

interface ScoreCardProps {
  scores: ScoringSystem;
}

const ScoreCard: React.FC<ScoreCardProps> = ({ scores }) => {
  const { t } = useLanguage();

  const data = [
    { name: 'Technical', value: scores.technical, color: '#4a6fa5' }, // Steel Blue
    { name: 'User', value: scores.user, color: '#ef4444' }, // Red Highlight
    { name: 'Reliability', value: scores.reliability, color: '#10b981' }, // Green
    { name: 'Brand', value: scores.brand, color: '#f59e0b' }, // Amber
  ];

  return (
    <div className="bg-mv-panel rounded-xl p-6 border border-white/5 shadow-2xl relative overflow-hidden group">
      <div className="absolute top-0 right-0 w-32 h-32 bg-mv-steel/10 rounded-full blur-3xl -mr-16 -mt-16 transition-all group-hover:bg-mv-steel/20"></div>

      <h3 className="text-lg font-serif font-semibold text-white mb-6 border-b border-white/10 pb-2">
        {t('score.final')}
      </h3>

      <div className="flex flex-col md:flex-row items-center gap-8">
        
        {/* Main Radial Score */}
        <div className="relative w-40 h-40 flex-shrink-0">
           <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={[{ value: scores.final }, { value: 10 - scores.final }]}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={75}
                startAngle={90}
                endAngle={-270}
                dataKey="value"
                stroke="none"
              >
                <Cell fill="#720e1e" /> 
                <Cell fill="#2a2a30" />
              </Pie>
            </PieChart>
          </ResponsiveContainer>
          <div className="absolute inset-0 flex items-center justify-center flex-col">
            <span className="text-4xl font-bold text-white">{scores.final}</span>
            <span className="text-[10px] uppercase tracking-widest text-mv-smoke">Index</span>
          </div>
        </div>

        {/* Breakdown Bars */}
        <div className="flex-1 w-full space-y-4">
          {data.map((item) => (
            <div key={item.name} className="w-full">
              <div className="flex justify-between text-xs uppercase tracking-wider font-semibold mb-1">
                <span className="text-mv-silver">{t(`score.${item.name.toLowerCase()}`)}</span>
                <span className="text-white">{item.value}/10</span>
              </div>
              <div className="h-1.5 w-full bg-mv-dark rounded-full overflow-hidden">
                <div 
                  className="h-full rounded-full transition-all duration-1000 ease-out"
                  style={{ width: `${item.value * 10}%`, backgroundColor: item.color }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ScoreCard;
