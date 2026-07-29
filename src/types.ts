export interface BootcampCohort {
  id: string;
  year: string;
  season: '暑期' | '寒假' | '秋季' | '春季';
  title: string;
  subtitle: string;
  status: 'active' | 'upcoming' | 'archived' | 'planning';
  statusText: string;
  dateRange: string;
  materialsCount: number;
  tags: string[];
  description: string;
  highlights: string[];
  bgGradient: string;
  accentColor: string;
}

export type MaterialType = 'plan' | 'poster' | 'slides';

export interface BootcampMaterial {
  id: string;
  type: MaterialType;
  dayNumber?: number;
  title: string;
  subtitle: string;
  description: string;
  iconName: string;
  badgeText: string;
  exportFormat: 'PDF' | 'PNG' | 'PPT / Interactive';
}

export interface PlanSection {
  id: string;
  title: string;
  icon: string;
  content: string;
  subsections?: {
    title: string;
    content: string;
    table?: {
      headers: string[];
      rows: string[][];
    };
    bullets?: string[];
  }[];
}

export interface PosterConfig {
  theme: 'tech' | 'academic' | 'modern';
  logoStyle?: 'color' | 'sketch' | 'hybrid';
  showSketchWatermark?: boolean;
  customQrUrl?: string;
  customAvatarUrl?: string;
  qrLabel?: string;
  title: string;
  subtitle: string;
  slogan: string;
  targetAudience: string;
  timeLocation: string;
  contactName: string;
  contactTitle?: string;
  contactPhone: string;
  organizer: string;
  highlights: { title: string; desc: string }[];
  projects: { name: string; tag: string; desc: string }[];
}

export type SlideLayout = 
  | 'cover'
  | 'concept'
  | 'split_code'
  | 'comparison'
  | 'steps'
  | 'prompt_template'
  | 'exercise'
  | 'summary';

export interface SlideContent {
  id: string;
  title: string;
  subtitle?: string;
  layout: SlideLayout;
  bullets?: string[];
  codeBlock?: {
    language: string;
    code: string;
    filename?: string;
  };
  comparison?: {
    leftTitle: string;
    leftItems: string[];
    rightTitle: string;
    rightItems: string[];
  };
  steps?: {
    stepNumber: number;
    title: string;
    desc: string;
  }[];
  promptBox?: {
    role: string;
    task: string;
    stack: string;
    template: string;
  };
  instructorNotes?: string;
  keyTakeaway?: string;
}

export interface DayCourseDeck {
  day: number;
  stageName: string;
  title: string;
  subtitle: string;
  duration: string;
  target: string;
  output: string;
  aiPractice: string;
  slides: SlideContent[];
}
