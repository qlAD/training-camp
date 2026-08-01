import type React from 'react';

/** 所有 enrichment 可视化区块的基底约束：必须有 type 字符串字段供渲染器查表分派 */
export interface BaseEnrichment {
  type: string;
  [k: string]: unknown;
}

/**
 * 期数专属 enrichment 渲染器注册表。
 * 用法：在 cohorts/<期数>/renderers/planEnrichments.tsx 内定义：
 *   export const RENDERERS: EnrichmentRendererMap<MyEnrichmentUnion> = {
 *     myType: MyTypeBlock,
 *     ...
 *   };
 * 然后在 cohorts/<期数>/index.ts 导出时挂到 enrichmentRenderers 字段上即可。
 */
export type EnrichmentRendererMap<T extends BaseEnrichment = BaseEnrichment> = {
  [K in T['type']]?: React.FC<{ enc: Extract<T, { type: K }> }>;
};
