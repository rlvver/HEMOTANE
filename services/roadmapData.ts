import { RoadmapModule, RoadmapPhase, RoadmapStatus } from "../types";

export const ROADMAP_MODULES: RoadmapModule[] = [
  {
    id: 'frontend',
    titleKey: 'module.frontend.title',
    descriptionKey: 'module.frontend.desc',
    icon: 'Layout',
    status: RoadmapStatus.IN_PROGRESS,
    techGoals: [
      'Implement Hybrid SSR/SPA',
      'Optimize Core Web Vitals',
      'Strict TypeScript implementation',
      'Component Isolation'
    ],
    folderStructure: '/frontend\n  /components\n  /pages\n  /hooks\n  /services\n  /styles\n  /types',
    mockupType: 'ui'
  },
  {
    id: 'backend',
    titleKey: 'module.backend.title',
    descriptionKey: 'module.backend.desc',
    icon: 'Server',
    status: RoadmapStatus.PLANNED,
    techGoals: [
      'REST + GraphQL Endpoints',
      'Rate Limiting & Security',
      'JWT Authentication',
      'Microservices ready'
    ],
    folderStructure: '/backend\n  /api\n  /controllers\n  /middleware\n  /models\n  /routes\n  /utils',
    mockupType: 'code'
  },
  {
    id: 'database',
    titleKey: 'module.database.title',
    descriptionKey: 'module.database.desc',
    icon: 'Database',
    status: RoadmapStatus.PLANNED,
    techGoals: [
      'Normalized Schema',
      'Indexing Strategy',
      'Data Partitioning',
      'Automated Backups'
    ],
    folderStructure: '/database\n  /migrations\n  /seeds\n  /schemas\n  /queries\n  /procedures',
    mockupType: 'schema'
  },
  {
    id: 'ai',
    titleKey: 'module.ai.title',
    descriptionKey: 'module.ai.desc',
    icon: 'Cpu',
    status: RoadmapStatus.IN_PROGRESS,
    techGoals: [
      'Gemini API Integration',
      'Context-aware Prompting',
      'Response Caching',
      'Sentiment Analysis'
    ],
    folderStructure: '/ai-engine\n  /prompts\n  /parsers\n  /cache\n  /models\n  /evaluators',
    mockupType: 'code'
  },
  {
    id: 'scoring',
    titleKey: 'module.scoring.title',
    descriptionKey: 'module.scoring.desc',
    icon: 'Activity',
    status: RoadmapStatus.PLANNED,
    techGoals: [
      'Weighted Algorithm',
      'Historical Normalization',
      'Outlier Detection',
      'Real-time Recalculation'
    ],
    folderStructure: '/ai-engine\n  /scoring\n    /technical\n    /user\n    /reliability\n    /brand',
    mockupType: 'score'
  },
  {
    id: 'scraper',
    titleKey: 'module.scraper.title',
    descriptionKey: 'module.scraper.desc',
    icon: 'Globe',
    status: RoadmapStatus.PLANNED,
    techGoals: [
      'Headless Browser Cluster',
      'Proxy Rotation',
      'DOM Parsing Logic',
      'Error Recovery'
    ],
    folderStructure: '/scraper\n  /workers\n  /parsers\n  /proxies\n  /queue\n  /storage',
    mockupType: 'code'
  },
  {
    id: 'i18n',
    titleKey: 'module.i18n.title',
    descriptionKey: 'module.i18n.desc',
    icon: 'Languages',
    status: RoadmapStatus.COMPLETED,
    techGoals: [
      'Context Provider',
      'Dictionary Optimization',
      'Dynamic Loading',
      'SEO Hreflang support'
    ],
    folderStructure: '/shared\n  /locales\n    /en\n    /es\n    /fr\n    /de',
    mockupType: 'code'
  },
  {
    id: 'dealer',
    titleKey: 'module.dealer.title',
    descriptionKey: 'module.dealer.desc',
    icon: 'Building2',
    status: RoadmapStatus.FUTURE,
    techGoals: [
      'Inventory API Sync',
      'Lead Generation Pipeline',
      'Analytics Dashboard',
      'Secure B2B Portal'
    ],
    folderStructure: '/modules\n  /dealer\n    /dashboard\n    /inventory\n    /leads',
    mockupType: 'ui'
  }
];

export const ROADMAP_PHASES: RoadmapPhase[] = [
  {
    id: 1,
    titleKey: 'phase.1.title',
    descriptionKey: 'phase.1.desc',
    status: RoadmapStatus.COMPLETED,
    date: 'Q1 2024'
  },
  {
    id: 2,
    titleKey: 'phase.2.title',
    descriptionKey: 'phase.2.desc',
    status: RoadmapStatus.IN_PROGRESS,
    date: 'Q2 2024'
  },
  {
    id: 3,
    titleKey: 'phase.3.title',
    descriptionKey: 'phase.3.desc',
    status: RoadmapStatus.PLANNED,
    date: 'Q3 2024'
  },
  {
    id: 4,
    titleKey: 'phase.4.title',
    descriptionKey: 'phase.4.desc',
    status: RoadmapStatus.FUTURE,
    date: 'Q4 2024'
  },
  {
    id: 5,
    titleKey: 'phase.5.title',
    descriptionKey: 'phase.5.desc',
    status: RoadmapStatus.FUTURE,
    date: '2025'
  }
];
