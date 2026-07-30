import { CohortMaterials } from '../../../types';

// 占位：非活跃期数，物料待筹备。新增物料时在同级目录新建 planData/slidesData/posterConfig 并聚合至此。
export const cohort_2026_winter: CohortMaterials = {
  meta: {
    id: '2026-winter',
    year: '2026',
    season: '寒假',
    title: '2026 寒假 AI Agent 专修营',
    subtitle: '自主智能体架构与 Multi-Agent 协作实践',
    status: 'upcoming',
    statusText: '筹备中 · 预计 2026.12 开启',
    dateRange: '2026.12.20 - 2027.01.05',
    materialsCount: 0,
    tags: ['Multi-Agent', 'LangGraph', 'RAG 深度检索'],
    description: '聚焦于多智能体协同、LangChain/LangGraph 编排与大模型微调工程，目前大纲策划中。',
    highlights: ['Multi-Agent 复杂系统设计', '向量数据库与混合检索', 'AI 驱动自动化测试'],
    bgGradient: 'from-blue-600 to-cyan-700',
    accentColor: 'blue',
  },
  planData: [],
  slidesData: [],
  posterConfig: {} as CohortMaterials['posterConfig'],
};
