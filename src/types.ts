export type ProjectCategory = 
  | 'All'
  | 'Watches & Accessories' 
  | 'Mobility & EV' 
  | 'Consumer Hardware' 
  | 'Office Supplies and Stationery'
  | 'Bespoke Lighting & CMF'
  | string;

export interface SketchItem {
  title: string;
  image: string;
  text: string;
}

export interface CadItem {
  title: string;
  image: string;
  text: string;
}

export interface PrototypeItem {
  title: string;
  image: string;
  text: string;
}

export interface CmfDetail {
  title: string;
  materials: string[];
  finishes: string[];
  swatches: { name: string; hex: string; finish: string }[];
  image: string;
  text: string;
}

export interface PollutionStat {
  country: string;
  value: string | number;
}

export interface DeathStat {
  country: string;
  deaths: string | number;
}

export interface MarketCompetitorProduct {
  brand: string;
  model: string;
  type: string;
  area: string;
  power: string;
  warranty: string;
  filters: string;
  dimensions: string;
  weight: string;
  price: string;
}

export interface UserResearchProfile {
  name: string;
  age: number;
  gender: string;
  location: string;
  family: string;
  occupation: string;
  productUsed: string;
  feedback: string;
  usagePattern: string;
  issues: string;
}

export interface UserPersonaData {
  name: string;
  age: number;
  role: string;
  location: string;
  salary: string;
  family: string;
  incomeGroup: string;
  about: string;
  goals: string[];
  frustrations: string[];
}

export interface EvaluationConceptScore {
  designNumber: number;
  score: number;
  status: 'top' | 'low' | 'normal';
}

export interface ProjectTimelineItem {
  weeks: string;
  dates: string;
  work: string;
}

export interface Project {
  id: string;
  title: string;
  tagline: string;
  shortDescription: string;
  category: ProjectCategory;
  year: string;
  client: string;
  university?: string;
  faculty_advisor?: string;
  designers?: string;
  project_guide?: string;
  role: string;
  tools: string[];
  awards?: string[];
  featured: boolean;
  passwordProtected?: boolean;
  password?: string;
  heroImage: string;
  overview: string;
  challenge: string;
  research: string;
  keyInsights: string[];
  ideation: string;
  sketchDevelopment: SketchItem[];
  cadDevelopment: CadItem[];
  prototyping: PrototypeItem[];
  cmfExploration: CmfDetail;
  manufacturing: string;
  finalOutcome: string;
  gallery: string[];
  learnings: string[];
  // Extended fields for P2 Air Purifier thesis details
  pollutionContext?: {
    pm25Stats: PollutionStat[];
    deathStats: DeathStat[];
    indiaVsWhoStandard: string;
    summary: string;
  };
  marketContext?: {
    cagrRevenue: string;
    cagrUnits: string;
    marketStage: string;
    basisOfCompetition: string;
    averageSpend: string;
    keyFeatures: string[];
    competitorBrands: string[];
    incomePyramid: { segment: string; households: string; population: string; income: string }[];
  };
  competitorMatrix?: MarketCompetitorProduct[];
  userResearchProfiles?: UserResearchProfile[];
  taskAnalysisObservations?: string[];
  personas?: UserPersonaData[];
  visualControlsStudy?: {
    knobsRef: string[];
    buttonsRef: string[];
    indicatorsRef: string[];
    grillRef: string[];
    handleRef: string[];
    controlsResults: string[];
    handleResults: string[];
    ventResults: string[];
  };
  designDirections?: { direction: string; detail: string; status: string }[];
  conceptEvaluationScores?: EvaluationConceptScore[];
  physicalControlsRationale?: { quote: string; points: string[] };
  programTimeline?: ProjectTimelineItem[];
  stageJuryDetails?: { stage1: string; stage2: string; preJury: string; jury: string };
  // Additional optional fields for ebike design & other projects
  clientOrContext?: string;
  location?: string;
  statusBadge?: string;
  oneLineDesc?: string;
  fullDesc?: string;
  awardsCount?: number;
  image?: string;
  projectSchedule?: any;
  aqiAnalysis?: any;
  technicalSpecs?: any;
  formStudy?: any;
  conceptSketchWall?: any;
  structuralAnalysis?: any;
  teamMembers?: any;
  companyWebsite?: string;
  cmfSpecs?: any;
  highlights?: string[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  description: string;
  deliverables?: string[];
}

export interface EducationItem {
  id: string;
  institution: string;
  degree: string;
  period: string;
  location?: string;
  highlights?: string;
}

export interface SkillItem {
  name: string;
  type: 'software' | 'core';
  logoType: string; // lucide icon or SVG brand identifier
  category: '3D & CAD' | 'Rendering & Visuals' | 'Adobe Suite' | 'Design & Strategy';
  proficiency?: string;
  description?: string;
}

export interface AwardItem {
  id: string;
  title: string;
  organization: string;
  year: string;
  project: string;
  badgeText: string;
  certificateUrl?: string;
  description: string;
}

export interface SiteSettings {
  accentColorHex: string;
  designerName: string;
  headlineTitle: string;
  taglineBio: string;
  email: string;
  phone: string;
  location: string;
  linkedin?: string;
  redDotWinner: boolean;
  projectOrder: string[];
  sectionVisibility: {
    hero: boolean;
    featured: boolean;
    cmfTeaser: boolean;
    about: boolean;
    awards: boolean;
    skills: boolean;
    experience: boolean;
    contact: boolean;
  };
}
