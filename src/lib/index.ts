// base types
export type { BaseEnrichment, EnrichmentRendererMap } from './types/base';

// plan
export type { PlanSection, PlanSubsection, PlanLayoutProps } from './types/plan';

// poster
export type { PosterConfigCore as PosterConfig, PosterLayoutProps, PosterLayoutRenderer } from './types/poster';

// slides
export type {
  SlideLayout,
  SlideContent,
  DayCourseDeck,
  DayDeckRenderer,
} from './types/slides';

// material
export type { MaterialType, BootcampMaterial } from './types/material';

// cohort
// 放松版（registry / app 路由层使用，不携带泛型）：BootcampCohort / CohortMaterials
// 泛型版（期数自包含目录内部使用，强类型化 enrichment + meta 扩展）：BootcampCohortCore / CohortMaterialsCore
export type {
  BootcampCohort,
  CohortMaterials,
  BootcampCohortCore,
  CohortMaterialsCore,
} from './types/cohort';

// site constants
export { SITE_CONFIG } from './constants/site';
export type { SiteConfig } from './constants/site';
