import type React from 'react';
import type { BootcampCohortCore } from './cohort';

/** 幻灯片页面布局类型（100% 跨期数通用） */
export type SlideLayout =
  | 'cover'
  | 'concept'
  | 'split_code'
  | 'comparison'
  | 'steps'
  | 'prompt_template'
  | 'exercise'
  | 'summary';

/** 单张 slide 的内容模型（不含样式） */
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

/** 一天（Day N）完整的幻灯片课包 meta：标题 / 时长 / 教学目标 / 产出成果等 */
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

/**
 * 每日幻灯片渲染器封装：meta 供外层播放器/导航/缩略图使用，
 * Render prop 组件由期数在 slides/day-<n>/index.tsx 内实现专属的动效/视觉风格，
 * 避免期数专属幻灯片样式污染共享组件层。
 */
export interface DayDeckRenderer {
  meta: DayCourseDeck;
  Render: React.FC<{ slideIndex: number }>;
}

/**
 * 期数专属幻灯片聚合渲染器的标准 Props（CohortMaterialsCore.slidesDeckRenderer 的入参约定）。
 * 期数 renderer 负责：① 按 selectedDay 找到 deck → ② 按 currentSlideIndex 调 deck.Render(slideIndex)
 * 外围播放控制（全屏/键盘/进度条/自动连播/缩略图网格）统一由 shells/workshop 层提供，跨期复用。
 */
export interface SlidesDeckRendererProps<TMetaExtra = {}> {
  meta: BootcampCohortCore<TMetaExtra>;
  decks: DayDeckRenderer[];
  selectedDay: number;
  currentSlideIndex: number;
}

