/**
 * 期数物料统一注册表（app/ 路由层的唯一数据源）。
 *
 * 单向依赖：
 *   registry → cohorts/* (只 import 期数自包含包 + lib/ 骨架)
 *   registry → lib/constants (站点配置)
 *   绝不反向 import 任何 app/* 或 components/* 中的东西，避免循环依赖。
 *
 * 新增期数流程：
 *   1. 在 src/cohorts/ 下新建 <cohort-id>/ 子包（内含 types.ts + data/ + slides/ + renderers/）
 *   2. 在下方 import 该期数的 cohort_x_y 对象，并加到 COHORTS_REGISTRY 记录里
 *   3. 不用改 components 或 app 路由：它们会通过 registry 自动发现新期数。
 */
import type { BootcampCohort, CohortMaterials } from '@/lib';
import { SITE_CONFIG } from '@/lib/constants/site';
import type { SiteConfig } from '@/lib/constants/site';

import { cohort_2026_summer } from '../cohorts/2026-summer';
import { cohort_2026_winter } from '../cohorts/2026-winter';

/** 所有期数物料的完整注册表（以 cohort id 为 key） */
export const COHORTS_REGISTRY: Record<string, CohortMaterials> = {
  '2026-summer': cohort_2026_summer as CohortMaterials,
  '2026-winter': cohort_2026_winter as CohortMaterials,
};

/** 门户首页展示用的期数卡片基础信息列表（仅 meta，不含 plan/slides 大 payload） */
export const COHORTS_LIST: BootcampCohort[] = Object.values(COHORTS_REGISTRY).map((c) => c.meta);

/** 动态路由页用：按 cohort id 取完整物料（含 enrichmentRenderers） */
export function getCohortMaterials(id: string): CohortMaterials | undefined {
  return COHORTS_REGISTRY[id];
}

/** 门户全局配置（从 lib 常量中转手导出，避免 app 层直接依赖 lib 的内部路径细节） */
export { SITE_CONFIG };
export type { SiteConfig };
