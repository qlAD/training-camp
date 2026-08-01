import type { PosterConfig } from '@/lib';

export const POSTER_DATA_2026_SUMMER: PosterConfig = {
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
  contactTitle: '软件学院指导老师 · 营长',
  contactPhone: '19537178744',
  organizer: '软件学院 · AI 创新应用社',
  headlineBadge: {
    text: 'Vibe Coding 全新范式',
    icon: 'sparkles',
  },
  highlights: [
    { title: '零基础友好', desc: '不讲繁琐语法，从环境到上线全程带练' },
    { title: '双项目驱动', desc: '个人作品集主页 + 「此刻」兴趣图文社区' },
    { title: '国产工具链', desc: 'TRAE CN + 豆包/DeepSeek + Gitee + 阿里云' },
    { title: 'Vibe Coding', desc: '独创"复制→对话→引导"，AI 写代码人做决策' },
  ],
  projects: [
    { name: '项目一：个人作品集', tag: 'Day 1-4', desc: '快速打造个人名片与全栈作品载体' },
    { name: '项目二：「此刻」兴趣社区', tag: 'Day 5-14', desc: 'Vue 3 + Spring Boot + MySQL 完整全栈' },
  ],
};
