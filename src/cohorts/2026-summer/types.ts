import type { CohortMaterialsCore, BaseEnrichment } from '@/lib';

/** 2026 暑期专属 enrichment 可视化区块联合类型（10 种，仅 summer 期使用） */
export type SummerPlanEnrichment =
  | {
      type: 'techStackMatrix';
      tag?: string;
      items: Array<{ label: string; value: string; tone?: string }>;
    }
  | {
      type: 'paradigmCompare';
      tag?: string;
      items: Array<{ title: string; kpi: string; tone?: string; desc: string }>;
    }
  | {
      type: 'milestoneGrid';
      items: Array<{ phase: string; tag: string; tone?: string; desc: string }>;
    }
  | {
      type: 'deliverablesChecklist';
      tag?: string;
      items: string[];
    }
  | {
      type: 'teamCards';
      items: Array<{ name: string; role: string; desc: string; tone?: string }>;
    }
  | {
      type: 'personaGrid';
      items: Array<{ title: string; desc: string }>;
    }
  | {
      type: 'supportCards';
      items: Array<{ title: string; tone?: string; desc: string }>;
    }
  | {
      type: 'faqList';
      items: Array<{ q: string; a: string }>;
    }
  | {
      type: 'assistanceFlow';
      desc: string;
    }
  | {
      type: 'enrollmentBox';
      tag?: string;
      items: Array<{ title: string; desc: string }>;
    };

/** 2026 暑期专属 meta 扩展字段（不污染共享 BootcampCohort 骨架） */
export interface SummerMetaExtra {
  /** 方案官方发布日期（PDF 尾部签章用） */
  officialPublishDate: string;
}

/** 2026 暑期完整物料聚合体类型（带专属 enrichment + meta 扩展） */
export type SummerCohortMaterials = CohortMaterialsCore<SummerPlanEnrichment, SummerMetaExtra>;

// ---- TS 类型约束验证：确保 SummerPlanEnrichment 满足 BaseEnrichment 基底 ----
// （若新增的 summer enrichment 忘记带 type 字段，此处会编译报错，提前防止运行时渲染器查表失败）
type _assert = SummerPlanEnrichment extends BaseEnrichment ? true : never;
const _ASSERT: _assert = true;
void _ASSERT;
