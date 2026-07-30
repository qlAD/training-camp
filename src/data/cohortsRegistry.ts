import { CohortMaterials, BootcampCohort } from '../types';
import { cohort_2026_summer } from './cohorts/2026-summer';
import { cohort_2026_winter } from './cohorts/2026-winter';

// 统一注册表 —— 新增期数时在此处加一行 import + 注册即可，无需改动任何组件。
export const COHORTS_REGISTRY: Record<string, CohortMaterials> = {
  '2026-summer': cohort_2026_summer,
  '2026-winter': cohort_2026_winter,
};

export const COHORTS_LIST: BootcampCohort[] = Object.values(COHORTS_REGISTRY).map((c) => c.meta);

export function getCohortMaterials(id: string): CohortMaterials | undefined {
  return COHORTS_REGISTRY[id];
}
