import type { PosterConfig } from '@/lib';

/** 2026 寒假海报配置数据（最小默认配置：待设计时自定义覆盖） */
export const POSTER_DATA_2026_WINTER: PosterConfig = {
  theme: 'modern',
  logoStyle: 'hybrid',
  showSketchWatermark: true,
  customQrUrl: '',
  customAvatarUrl: '',
  qrLabel: '扫码入群报名',
  title: '2026 寒假 AI 应用开发集训营',
  subtitle: '《Agent 时代的前端工程》5 天沉浸式实战',
  slogan: '让 Agent 帮你写代码，人只做架构决策',
  targetAudience: '全校同学 · 零基础友好',
  timeLocation: '2027.01.15 - 2027.01.19 · 软件学院',
  contactName: 'AI 创新应用社 · 集训营项目组',
  contactTitle: '组委会',
  contactPhone: '见入群 QR 码',
  organizer: '软件学院 · AI 创新应用社',
  highlights: [
    { title: '5 天集中实战', desc: 'Day1-Day5 每日完整课件与配套项目' },
    { title: '双项目闭环', desc: '产品思维 Agent 协作 + 真实线上部署交付' },
    { title: '完整物料', desc: 'PDF 方案 / 宣传海报 / 教学幻灯片 三册全配套' },
  ],
  projects: [
    { name: '项目 A：智能日程助手', tag: 'LLM 编排', desc: '个人日程规划 Agent + 自动提醒 + 同步手机日历' },
    { name: '项目 B：课件问答知识库', tag: 'RAG 工程', desc: '上传寒假课件 → 生成精准问答机器人 + 出处溯源' },
  ],
  headlineBadge: {
    text: 'Agent 工程实践全新主题',
    icon: 'snowflake',
  },
};
