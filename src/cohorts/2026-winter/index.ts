/**
 * =============================================================
 * 2026 寒假集训营 · 完整物料聚合出口（严格按 src 级标准架构 7 件套齐全）
 * =============================================================
 *
 * 【新建一期集训营 · 标准 4 步 SOP（与用户理想开发流程 1:1 对齐）】
 *
 * Step 1 · 新建期数目录：
 *   复制整个 src/cohorts/2026-winter/ 文件夹 → 重命名为 cohorts/<新期数-id>/
 *   例：2027-spring / 2027-summer / 2027-winter
 *
 * Step 2 · 写宣传信息（改期数 meta）：
 *   编辑本文件（index.ts）中的「meta」对象：
 *   - 必填：id / year / season / title / subtitle / status / dateRange / tags /
 *          description / highlights / bgGradient / accentColor / materialsCount
 *   - 可选扩展：在 ../types.ts 的 WinterMetaExtra 新增专属字段（不会污染全局）
 *
 * Step 3 · 制作物料（本期 data + renderers 闭环，绝不污染共享层）：
 *   ┌─────────────────────────────────────────────────────────────┐
 *   │  data/                  纯数据（无 React/TSX）
 *   │    ├─ planData.ts       → 方案 sections + enrichments 结构化数据
 *   │    ├─ posterData.ts     → 海报标题、slogan、QR、联系方式、高亮、项目
 *   │    └─ slidesData.ts     → 引用 slides/day-<N>/index.tsx 的数组（DayDeckRenderer[]）
 *   │
 *   │  renderers/             期数专属完整渲染组件（TSX，自己 import 自己 data）
 *   │    ├─ planLayout.tsx    → ★ 完整方案渲染（含 enrichment 查表，直接内联，不单独出 planEnrichments.tsx）
 *   │    ├─ posterLayout.tsx  → ★ 完整海报画布（任意比例/装饰，可自定义，不受共享组件约束）
 *   │    └─ slidesDeck.tsx    → ★ 完整幻灯片聚合（读 slidesData.ts → 实例化 day 组件）
 *   │
 *   │  slides/                每日课件（每个 day 是独立的大 React 组件，自包含：scenes/fx/kinetic/visual）
 *   │    ├─ day-01/index.tsx  → 直接把 Day 01 的所有 scene 写在这里（或拆 scenes/ 子目录）
 *   │    └─ ...               → day-N/index.tsx
 *   └─────────────────────────────────────────────────────────────┘
 *
 * Step 4 · 聚合到门户网站（仅需 2 行代码，共享门户零改动）：
 *   打开 src/registry/index.ts：
 *     ① import { cohort_<id> } from '../cohorts/<id>';
 *     ② 在 COHORTS_REGISTRY 对象中加一行：'<id>': cohort_<id>,
 *   门户首页自动出现新期数卡片，/cohort/<id> 工坊路由自动加载本期 3 大物料。
 *
 * =============================================================
 * 【单向依赖硬约束】每期必须遵守，否则架构会被破坏：
 *   ✅ 本期目录 import 路径顺序：./data → ./renderers → ./slides → @/components/{ui,shells} → @/lib
 *   ❌ 禁止：import 其他期数（from '../2026-summer/...' 或 from '../2027-spring/...'）
 *   ❌ 禁止：@/components/ 或 @/lib/ 反向 import 到本目录下的任何内容
 * =============================================================
 */
import { WINTER_PLAN_DATA } from './data/planData';
import { POSTER_DATA_2026_WINTER } from './data/posterData';
import { ALL_COURSE_DECKS_WINTER } from './data/slidesData';
import { WinterPlanLayout } from './renderers/planLayout';
import { WinterPosterLayout } from './renderers/posterLayout';
import { WinterSlidesDeck } from './renderers/slidesDeck';
import type {
  WinterCohortMaterials,
  WinterMetaExtra,
  WinterPlanEnrichment,
} from './types';
import type { CohortMaterialsCore } from '@/lib';

/** 2026 寒假完整物料聚合体（强类型：WinterCohortMaterials） */
export const cohort_2026_winter: WinterCohortMaterials = {
  meta: {
    id: '2026-winter',
    year: '2027',
    season: '寒假',
    title: '2026 寒假 AI 应用开发集训营',
    subtitle: '《Agent 时代的前端工程》5 天沉浸式实战',
    status: 'planning',
    statusText: '策划中 · 5 项物料占位齐全',
    dateRange: '2027.01.15 - 2027.01.19',
    materialsCount: 5,
    tags: ['Agent 工程', 'RAG 实战', '5天冲刺', '完整模板'],
    description:
      'AI 创新应用社寒假实战集训。5 天，以 Agent 协作编程范式完成两个真实项目：个人智能日程助手（LLM 编排）+ 课件问答知识库（RAG 工程），覆盖从环境到部署的真实工程链路。',
    highlights: [
      '完整 PDF 方案文档占位',
      '16:9 横版雪花主题专属海报（非共享默认布局）',
      'Day 1-5 课件占位组件齐全，直接替换即可',
    ],
    bgGradient: 'from-sky-500 via-blue-600 to-indigo-700',
    accentColor: 'sky',
    target: '全校同学 · 零基础友好',
  } satisfies CohortMaterialsCore<any, WinterMetaExtra>['meta'],
  planData: WINTER_PLAN_DATA,
  posterConfig: POSTER_DATA_2026_WINTER,
  slidesData: ALL_COURSE_DECKS_WINTER,
  /** ★ 三大渲染器聚合（期数自包含）：CohortWorkshop shell 取到后直接实例化，无需再共享视图组件 prop 注入 */
  enrichmentRenderers: {},
  posterLayoutRenderer: WinterPosterLayout as any,
  planLayoutRenderer: WinterPlanLayout as any,
  slidesDeckRenderer: WinterSlidesDeck as any,
};

// ---- 期数专属类型完整性断言（即使是占位，类型约束模板要齐全，保证未来增量不回退） ----
type _WinterEnrichmentTypes = WinterPlanEnrichment['type'];
// WinterPlanEnrichment 当前 = never：Exclude<never, never> = never → 通过
type _WinterRendererKeys = keyof typeof cohort_2026_winter.enrichmentRenderers;
type _assertCover =
  Exclude<_WinterEnrichmentTypes, _WinterRendererKeys> extends never ? true : never;
const _ASSERT_COVER: _assertCover = true;
void _ASSERT_COVER;
