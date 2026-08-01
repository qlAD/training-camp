import type { ComponentType, RefObject } from 'react';
import type { BootcampCohort } from './cohort';

/**
 * 海报配置核心类型（跨期数通用）。
 * 注意：headlineBadge.icon 故意放宽为 string，而非固定字面量——
 * 每期可自定义新图标而不需要改动全局类型，共享组件层做「已知图标映射 + 未知图标默认显示 sparkles」即可。
 */
export interface PosterConfigCore {
  theme: 'tech' | 'academic' | 'modern';
  logoStyle?: 'color' | 'sketch' | 'hybrid';
  showSketchWatermark?: boolean;
  customQrUrl?: string;
  customAvatarUrl?: string;
  qrLabel?: string;
  title: string;
  subtitle: string;
  slogan: string;
  targetAudience: string;
  timeLocation: string;
  contactName: string;
  contactTitle?: string;
  contactPhone: string;
  organizer: string;
  highlights: { title: string; desc: string }[];
  projects: { name: string; tag: string; desc: string }[];
  /**
   * 海报主标题上方高亮徽章（期数专属的主题 slogan badge）。
   * 例：2026-summer 用 "Vibe Coding 全新范式"，其他期数自由定义。
   * 当某期不需要时，置为 undefined 即可，共享组件会隐藏该区域。
   */
  headlineBadge?: {
    text: string;
    icon?: string;
  };
}

/**
 * 海报画布布局组件的 Props（期数专属渲染器签名）。
 *
 * ⚠️ 约定：期数自定义 posterLayoutRenderer 必须把 canvasRef 挂到画布的最外层 DOM 元素上，
 * 否则 html-to-image 导出 PNG 时会找不到截图目标，导出功能将失效。
 */
export interface PosterLayoutProps {
  config: PosterConfigCore;
  meta: BootcampCohort;
  canvasRef: RefObject<HTMLDivElement | null>;
  isExporting?: boolean;
}

/**
 * 海报画布布局渲染器类型（期数可选注入）。
 * 使用 ComponentType 而非 FC，兼容函数组件、React.memo 包裹组件、forwardRef 组件等多种形式。
 */
export type PosterLayoutRenderer = ComponentType<PosterLayoutProps>;

