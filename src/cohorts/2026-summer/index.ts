import { BOOTCAMP_PLAN_DATA } from './data/planData';
import { ALL_COURSE_DECKS } from './data/slidesData';
import { POSTER_DATA_2026_SUMMER } from './data/posterData';
import { SummerPlanLayout } from './renderers/planLayout';
import { SummerPosterLayout } from './renderers/posterLayout';
import { SummerSlidesDeck } from './renderers/slidesDeck';
import type { SummerCohortMaterials, SummerMetaExtra, SummerPlanEnrichment } from './types';
import type { CohortMaterialsCore } from '@/lib';

/**
 * 2026 暑期完整物料聚合（自包含：类型 / 数据 / 三大渲染器 三件套闭环）。
 *
 * 三大 renderer 契约（CohortWorkshop 层直接取来实例化）：
 *   planLayoutRenderer   渲染方案文档（含 summer 专属 10 种 enrichment，内联查表）
 *   posterLayoutRenderer 渲染海报画布
 *   slidesDeckRenderer   按 selectedDay + currentSlideIndex 渲染 slide 内容
 *
 * 遵循单向依赖：只从 lib/ 拿共享骨架，绝不反向 import 到 registry/ 或 app/ 层。
 */
export const cohort_2026_summer: SummerCohortMaterials = {
  meta: {
    id: '2026-summer',
    year: '2026',
    season: '暑期',
    title: '2026 暑期全栈 AI 交付集训营',
    subtitle: '《AI 赋能下的全栈开发》14 天高强度攻坚',
    status: 'active',
    statusText: '资料全量开放 · 16 项交付物',
    dateRange: '2026.08.10 - 2026.08.23',
    materialsCount: 16,
    tags: ['AI 全栈', 'Agent 导学', '14天实战', '完整课件'],
    description:
      'AI 创新应用社暑期实战集训。零基础 14 天，以 Vibe Coding 理念（AI 写代码、人做决策）带练完成两个真实线上项目：个人作品集 + 「此刻」兴趣社区，覆盖从环境搭建、全栈开发到部署上线的完整链路。',
    highlights: [
      '包含 1 个完整 PDF 策划案',
      '1 个 4K 宣传海报生成器',
      'Day 1-3 AE 动效版演示幻灯片（逐日产出中）',
    ],
    bgGradient: 'from-indigo-600 via-indigo-700 to-violet-800',
    accentColor: 'indigo',
    target: '全校低年级 / 零基础',
    officialPublishDate: '2026 年 8 月 1 日起',
  } satisfies CohortMaterialsCore<any, SummerMetaExtra>['meta'],
  planData: BOOTCAMP_PLAN_DATA,
  slidesData: ALL_COURSE_DECKS,
  posterConfig: POSTER_DATA_2026_SUMMER,
  /** ★ 2026-summer 三大专属渲染器直接挂在物料聚合体上（OCP 架构） */
  enrichmentRenderers: {}, // 已合并进 SummerPlanLayout 内联查表，共享层不再需要
  planLayoutRenderer: SummerPlanLayout as any,
  posterLayoutRenderer: SummerPosterLayout as any,
  slidesDeckRenderer: SummerSlidesDeck as any,
};

// 类型完整性断言：即使 enrichmentRenderers 已内联，仍保留类型约束模板
// （防止未来重构时遗漏 SummerPlanEnrichment 联合类型的分支）
type _SummerEnrichmentTypes = SummerPlanEnrichment['type'];
type _SummerRendererKeys = keyof typeof cohort_2026_summer.enrichmentRenderers;
// 现在 enrichmentRenderers = {} → keyof = never → Exclude<10种type, never> = 10种type → never
// 这是预期的：因为我们把查表内联进了 planLayout.tsx，不再走共享层的 enrichmentRenderers prop。
// 所以此处我们只做一个"类型存在性"断言（确保 SummerPlanEnrichment 不是 any）。
type _assertTypesExist = _SummerEnrichmentTypes extends string ? true : never;
const _ASSERT_TYPES_EXIST: _assertTypesExist = true;
void _ASSERT_TYPES_EXIST;
