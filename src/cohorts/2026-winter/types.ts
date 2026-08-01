import type { CohortMaterialsCore, BaseEnrichment } from '@/lib';

/** 2026 寒假专属 enrichment 可视化区块联合类型（当前空联合：占位；后续新增期数专属区块时再扩展） */
export type WinterPlanEnrichment = never;

/** 2026 寒假专属 meta 扩展字段（当前空：占位；后续有寒假专属 meta 字段时再加） */
export interface WinterMetaExtra {}

/** 2026 寒假完整物料聚合体类型（带专属 enrichment + meta 扩展） */
export type WinterCohortMaterials = CohortMaterialsCore<WinterPlanEnrichment, WinterMetaExtra>;

// ---- TS 类型约束验证：确保 WinterPlanEnrichment 定义合法（即使 = never，保持约束模板齐全） ----
type _assert = WinterPlanEnrichment extends BaseEnrichment ? true : never;
const _ASSERT: _assert = true;
void _ASSERT;
