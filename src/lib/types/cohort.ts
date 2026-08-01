import type { ComponentType } from 'react';
import type { BaseEnrichment, EnrichmentRendererMap } from './base';
import type { PlanSection, PlanLayoutProps } from './plan';
import type { PosterConfigCore, PosterLayoutProps } from './poster';
import type { DayDeckRenderer, SlidesDeckRendererProps } from './slides';

/** 期数基础元信息：跨期数 100% 共享骨架字段（不含期数专属扩展） */
export interface BootcampCohortCoreBase {
  id: string;
  year: string;
  season: '暑期' | '寒假' | '秋季' | '春季';
  title: string;
  subtitle: string;
  status: 'active' | 'upcoming' | 'archived' | 'planning';
  statusText: string;
  dateRange: string;
  materialsCount: number;
  tags: string[];
  description: string;
  highlights: string[];
  bgGradient: string;
  accentColor: string;
  target?: string;
}

/**
 * 门户展示用的期数基础元信息（放松版类型，不携带期数专属 TMetaExtra 泛型）。
 * 仅 app/registry 层使用；期数内部请用 BootcampCohortCore<TMetaExtra>。
 */
export type BootcampCohort = BootcampCohortCoreBase;

/**
 * 期数基础元信息（支持泛型扩展）
 * TMetaExtra 用于注入某一期专属的 meta 字段（如 2026-summer 的 officialPublishDate）
 */
export type BootcampCohortCore<TMetaExtra = {}> = BootcampCohortCoreBase & TMetaExtra;

/**
 * 期数物料聚合体（支持泛型扩展）
 * - TEnrichment：期数专属 enrichment 可视化区块联合类型
 * - TMetaExtra：期数专属 meta 字段扩展
 */
export interface CohortMaterialsCore<
  TEnrichment extends BaseEnrichment = BaseEnrichment,
  TMetaExtra = {},
> {
  meta: BootcampCohortCore<TMetaExtra>;
  planData: PlanSection<TEnrichment>[];
  slidesData: DayDeckRenderer[];
  posterConfig: PosterConfigCore;
  /**
   * 期数专属 enrichment 渲染器注册表。
   * 由期数目录的 renderers/planEnrichments.tsx 提供，最终通过 prop 注入 PlanDocumentView 查表分派。
   * 共享组件层绝不应出现任何期数专属的 case 分支。
   */
  enrichmentRenderers?: EnrichmentRendererMap<TEnrichment>;
  /**
   * ★ 期数专属海报画布布局组件（OCP 关键：新增期数海报结构时，无需改共享 PosterGeneratorView）。
   *
   * ⚠️ 函数跨 RSC 边界约束：此 props 是 React 组件（函数），跨 RSC 边界会序列化失败，
   * 因此使用此 prop 的路由页必须保持为 Client Component。
   *
   * 类型放宽为 ComponentType<any> 是有意为之：
   *   每期的 renderer 契约（props）由期数 renderer 与 workshop 层私下约定，
   *   不需要在共享 lib 层强约束，这样新增期数需要扩展 props 时无需修改共享类型（OCP）。
   */
  posterLayoutRenderer?: ComponentType<any>;
  /**
   * ★ 期数专属方案文档整体布局组件（可选）。
   * 类型放宽为 ComponentType<any>（理由同上）。
   */
  planLayoutRenderer?: ComponentType<any>;
  /**
   * ★ 期数专属幻灯片聚合渲染器（可选）。
   * 类型放宽为 ComponentType<any>（理由同上）。
   */
  slidesDeckRenderer?: ComponentType<any>;
}

/**
 * 放松版物料类型（用于 registry 和 app 路由层）。
 * 这些层不需要强类型的 enrichment payload，只需要把渲染器 prop 透传给视图组件。
 * 期数目录内部请继续使用 SummerCohortMaterials / CohortMaterialsCore<T, U> 强类型。
 */
export type CohortMaterials = CohortMaterialsCore<any, any>;
