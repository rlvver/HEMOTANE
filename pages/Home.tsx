import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { ArrowRight, ChevronDown, Layers, Database, Shield } from 'lucide-react';
import { ROADMAP_MODULES } from '../services/roadmapData';
import RoadmapCard from '../components/RoadmapCard';
import RoadmapModal from '../components/RoadmapModal';
import Timeline from '../components/Timeline';
import { RoadmapModule } from '../types';

const Home: React.FC = () => {
  const { t } = useLanguage();
  const [selectedModule, setSelectedModule] = useState<RoadmapModule | null>(null);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen">
      
      {/* SECTION 1: HERO */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Abstract Background */}
        <div className="absolute inset-0 z-0 bg-mv-dark">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-mv-wine/10 rounded-full blur-[128px]"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-mv-steel/10 rounded-full blur-[128px]"></div>
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
          <div className="inline-block px-4 py-1.5 mb-6 rounded-full border border-mv-steel/30 bg-mv-steel/10 text-mv-steel text-xs font-bold tracking-[0.2em] uppercase animate-fade-in">
             System Architecture v1.0
          </div>
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-8 leading-tight animate-fade-in-up">
            {t('roadmap.hero.title')}
          </h1>
          <p className="text-xl text-mv-silver font-light mb-10 max-w-2xl mx-auto leading-relaxed animate-fade-in-up delay-100">
            {t('roadmap.hero.subtitle')}
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 animate-fade-in-up delay-200">
            <button 
              onClick={() => scrollToSection('modules')}
              className="bg-mv-wine hover:bg-red-900 text-white px-10 py-4 rounded-sm font-semibold tracking-wider transition-all hover:shadow-[0_0_20px_rgba(114,14,30,0.4)] flex items-center gap-2"
            >
              {t('roadmap.cta')} <ArrowRight className="w-4 h-4" />
            </button>
          </div>
          
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-mv-smoke/50">
            <ChevronDown className="w-6 h-6" />
          </div>
        </div>
      </section>

      {/* SECTION 2: MODULES */}
      <section id="modules" className="py-24 bg-mv-black relative">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-end justify-between mb-16 border-b border-white/5 pb-4">
            <h2 className="text-3xl font-serif text-white">
              {t('roadmap.section.modules')}
            </h2>
            <span className="hidden md:block text-mv-smoke text-sm font-mono">
              Hybrid SSR / SPA Structure
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {ROADMAP_MODULES.map((module) => (
              <RoadmapCard 
                key={module.id} 
                module={module} 
                onClick={setSelectedModule} 
              />
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: TIMELINE */}
      <section className="py-24 bg-mv-dark relative border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4">
           <h2 className="text-3xl font-serif text-white text-center mb-20">
              {t('roadmap.section.timeline')}
           </h2>
           <Timeline />
        </div>
      </section>

      {/* SECTION 4: VISION */}
      <section className="py-24 bg-mv-panel relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-mv-wine via-transparent to-mv-steel"></div>
        
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-3 gap-12">
           <div className="lg:col-span-3 text-center mb-8">
              <h2 className="text-3xl font-serif text-white">{t('roadmap.section.vision')}</h2>
           </div>

           {/* Vision Card 1 */}
           <div className="p-8 bg-mv-black/50 border border-white/5 rounded-2xl hover:bg-mv-black transition-colors group">
              <div className="w-12 h-12 bg-mv-steel/10 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Layers className="w-6 h-6 text-mv-steel" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">{t('vision.layer1.title')}</h3>
              <p className="text-mv-silver text-sm leading-relaxed">{t('vision.layer1.desc')}</p>
           </div>

           {/* Vision Card 2 */}
           <div className="p-8 bg-mv-black/50 border border-white/5 rounded-2xl hover:bg-mv-black transition-colors group">
              <div className="w-12 h-12 bg-mv-wine/10 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Database className="w-6 h-6 text-mv-wine" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">{t('vision.layer2.title')}</h3>
              <p className="text-mv-silver text-sm leading-relaxed">{t('vision.layer2.desc')}</p>
           </div>

           {/* Vision Card 3 */}
           <div className="p-8 bg-mv-black/50 border border-white/5 rounded-2xl hover:bg-mv-black transition-colors group">
              <div className="w-12 h-12 bg-green-500/10 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Shield className="w-6 h-6 text-green-500" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">{t('vision.layer3.title')}</h3>
              <p className="text-mv-silver text-sm leading-relaxed">{t('vision.layer3.desc')}</p>
           </div>
        </div>
      </section>

      {/* MODAL */}
      {selectedModule && (
        <RoadmapModal 
          module={selectedModule} 
          onClose={() => setSelectedModule(null)} 
        />
      )}
    </div>
  );
};

export default Home;
