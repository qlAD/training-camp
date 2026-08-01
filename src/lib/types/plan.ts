import type { ComponentType } from 'react';
import type { BaseEnrichment, EnrichmentRendererMap } from './base';
import type { BootcampCohort } from './cohort';

/** 方案章节里的子小节（结构化文本 + 可选表/列表） */
export interface PlanSubsection {
  title: string;
  content: string;
  table?: {
    headers: string[];
    rows: string[][];
  };
  bullets?: string[];
}

/**
 * 方案章节：跨期数通用骨架。
 * TEnrichment 泛型参数用于注入某一期数专属的 enrichment 可视化区块联合类型，
 * 避免全局 types 被某一期的专属字段污染。
 */
export interface PlanSection<TEnrichment extends BaseEnrichment = BaseEnrichment> {
  id: string;
  title: string;
  icon: string;
  content: string;
  subsections?: PlanSubsection[];
  /**
   * 章节专属可视化区块数组（表格/卡片/网格/对比看板等非通用段落/表格的高级 UI）。
   * 完全由期数自定义，共享 PlanDocumentView 不硬编码任何类型，
   * 仅通过 enrichmentRenderers prop 查表渲染。
   */
  enrichments?: TEnrichment[];
}

/**
 * 方案文档整体布局组件的 Props（期数专属渲染器签名，可选定制）。
 * 期数如果对默认的 PDF 排版 / 页眉页脚 / section 包裹样式有强定制需求时，
 * 可通过 materials.planLayoutRenderer 注入自己的 Layout 组件，
 * 否则共享组件会使用内置的通用 DefaultPlanLayout（向后兼容）。
 */
export interface PlanLayoutProps<TEnrichment extends BaseEnrichment = BaseEnrichment> {
  meta: BootcampCohort;
  planData: PlanSection<TEnrichment>[];
  enrichmentRenderers?: EnrichmentRendererMap<TEnrichment>;
  onExportPDF?: () => void;
  /**
   * 暴露「渲染具体章节内容」的通用渲染器给自定义 Layout。
   * 期数自定义 Layout 只需要决定「排版骨架」，
   * 真正的 section 内容（subsections/enrichments 查表渲染）交给这个内置渲染器。
   */
  renderSectionBody?: (section: PlanSection<TEnrichment>, index: number) => React.ReactNode;
}
