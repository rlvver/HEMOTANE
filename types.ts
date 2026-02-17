export enum Language {
  EN = 'en',
  ES = 'es',
}

export interface TranslationDictionary {
  [key: string]: {
    [key: string]: string;
  };
}

export interface ScoringSystem {
  technical: number;
  user: number;
  reliability: number;
  brand: number;
  final: number; // Calculated aggregate
}

export interface MotorcycleSpec {
  engine: string;
  power: string;
  torque: string;
  weight: string;
  seatHeight: string;
  price: string;
}

export interface Motorcycle {
  id: string;
  make: string;
  model: string;
  year: number;
  image: string;
  category: string;
  scores: ScoringSystem;
  specs: MotorcycleSpec;
  description: string;
}

export interface AIAnalysisResult {
  summary: string;
  pros: string[];
  cons: string[];
  riderProfile: string;
}

export enum RoadmapStatus {
  PLANNED = 'planned',
  IN_PROGRESS = 'in_progress',
  COMPLETED = 'completed',
  FUTURE = 'future'
}

export interface RoadmapModule {
  id: string;
  titleKey: string;
  descriptionKey: string;
  icon: string; // Icon name
  status: RoadmapStatus;
  techGoals: string[];
  folderStructure: string;
  mockupType: 'ui' | 'code' | 'schema' | 'score';
}

export interface RoadmapPhase {
  id: number;
  titleKey: string;
  descriptionKey: string;
  status: RoadmapStatus;
  date: string;
}
