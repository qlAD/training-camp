import type { PosterConfig } from '@/lib';
import type { SummerPosterConfigExtra } from '../renderers/posterLayout';

export const POSTER_DATA_2026_SUMMER: PosterConfig & SummerPosterConfigExtra = {
  theme: 'tech',
  logoStyle: 'hybrid',
  showSketchWatermark: true,
  qrLabel: '扫码进群 · 抢先报名',
  title: 'AI 赋能下的全栈开发',
  subtitle: '暑期训练营 · 招募热烈开启',
  slogan: '14 天，用 AI 做出你的第一个线上项目',
  targetAudience: '软件学院 2025 级本科生 · 零基础友好',
  timeLocation: '暑期连续 14 天 每晚 19:00 - 20:30 (企微直播)',
  contactName: '乔林',
  contactTitle: '软件学院助教 · 营长',
  contactPhone: '19537178744',
  organizer: '软件学院 · AI 创新应用社',
  headlineBadge: {
    text: 'Vibe Coding 全新范式',
    icon: 'sparkles',
  },
  highlights: [
    { title: '零基础友好', desc: '不讲繁琐语法，从环境到上线全程带练' },
    { title: '双项目驱动', desc: '个人作品集主页 + 「此刻」兴趣图文社区' },
    { title: '国产工具链', desc: 'TRAE IDE + DeepSeek + Gitee + 阿里云' },
    { title: 'Vibe Coding', desc: '复制→对话→引导，AI 写代码人做决策' },
  ],
  projects: [
    { name: '项目一：个人作品集', tag: 'Day 1-4', desc: '快速打造个人名片与全栈作品载体' },
    { name: '项目二：「此刻」兴趣社区', tag: 'Day 5-14', desc: 'Vue 3 + Spring Boot + MySQL 完整全栈' },
  ],
  stagesRoadmap: [
    { index: 1, title: '开场与准备', range: 'Day 1' },
    { index: 2, title: '环境与原理', range: 'Day 2' },
    { index: 3, title: '前端基础', range: 'Day 3' },
    { index: 4, title: '现代前端', range: 'Day 4 - 5' },
    { index: 5, title: '初始后端', range: 'Day 6 - 7' },
    { index: 6, title: '生态力量', range: 'Day 8 - 10' },
    { index: 7, title: '部署运维', range: 'Day 11 - 12' },
    { index: 8, title: '完结路演', range: 'Day 13 - 14' },
  ],
};
