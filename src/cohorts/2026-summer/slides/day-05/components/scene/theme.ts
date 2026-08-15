// day-05 视觉主题常量（设计画布风格：深紫底 + 紫罗兰/粉红/青蓝标注）

export const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

export const SPRING = { type: 'spring', stiffness: 260, damping: 22 } as const;

export const COLORS = {
  // 画布底
  canvasBg: '#13111C',
  // 画布点阵
  dotColor: 'rgba(167,139,250,0.10)',
  // 创意/设计主色
  violet: '#A78BFA',
  violetLight: '#C4B5FD',
  // UI/视觉副色
  pink: '#F472B6',
  pinkLight: '#F9A8D4',
  // 数据/交互色（跨期连续）
  cyan: '#22D3EE',
  cyanLight: '#67E8F9',
  // 状态成功色（跨期连续）
  emerald: '#34D399',
  emeraldLight: '#6EE7B7',
  // 文字
  white: '#F8FAFC',
  muted: '#94A3B8',
  dim: '#64748B',
} as const;

// 文字主渐变（紫罗兰 → 粉红 → 青蓝）
export const TEXT_GRADIENT =
  'bg-gradient-to-r from-violet-200 via-pink-200 to-cyan-200 bg-clip-text text-transparent';
