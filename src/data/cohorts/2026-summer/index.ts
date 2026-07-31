import { CohortMaterials } from '../../../types';
import { BOOTCAMP_PLAN_DATA } from './planData';
import { ALL_COURSE_DECKS } from './slidesData';
import { POSTER_CONFIG_2026_SUMMER } from './posterConfig';

export const cohort_2026_summer: CohortMaterials = {
  meta: {
    id: '2026-summer',
    year: '2026',
    season: '暑期',
    title: '2026 暑期全栈 AI 交付集训营',
    subtitle: '《AI 赋能下的全栈开发》14 天高强度攻坚',
    status: 'active',
    statusText: '资料全量开放 · 16 项交付物',
    dateRange: '2026.07.01 - 2026.07.14',
    materialsCount: 16,
    tags: ['AI 全栈', 'Agent 导学', '14天实战', '完整课件'],
    description: '软件学院核心集训营。配套完整训练营策划案 (PDF)、高清宣发海报 (PNG) 及 Day 1-3 AE 动效版交互式教学 Slide（其余各天逐日产出中）。',
    highlights: ['包含 1 个完整 PDF 策划案', '1 个 4K 宣传海报生成器', 'Day 1-3 AE 动效版演示幻灯片（逐日产出中）'],
    bgGradient: 'from-indigo-600 via-indigo-700 to-violet-800',
    accentColor: 'indigo',
    target: '全校低年级 / 零基础',
  },
  planData: BOOTCAMP_PLAN_DATA,
  slidesData: ALL_COURSE_DECKS,
  posterConfig: POSTER_CONFIG_2026_SUMMER,
};
