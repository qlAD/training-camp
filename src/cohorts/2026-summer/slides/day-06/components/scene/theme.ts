// day-06 视觉主题常量（机房机架风格：深蓝黑底 + 翠绿/蓝/琥珀标注）

export const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

export const SPRING = { type: 'spring', stiffness: 260, damping: 22 } as const;

export const COLORS = {
  // 机房底
  serverBg: '#0A0F1C',
  // 机架网格线
  rackLine: '#1E293B',
  rackLineLight: '#334155',
  // 后端色（SpringBoot 绿）
  emerald: '#10B981',
  emeraldLight: '#6EE7B7',
  // 数据库色（MySQL 蓝）
  blue: '#3B82F6',
  blueLight: '#93C5FD',
  // 工具色（琥珀/橙）
  amber: '#F59E0B',
  amberLight: '#FCD34D',
  // 数据流转色（青蓝）
  cyan: '#22D3EE',
  cyanLight: '#67E8F9',
  // 警示色
  rose: '#F43F5E',
  roseLight: '#FDA4AF',
  // 文字
  white: '#F8FAFC',
  muted: '#94A3B8',
  dim: '#64748B',
} as const;

// 文字主渐变（翠绿 → 青蓝 → 琥珀）
export const TEXT_GRADIENT =
  'bg-gradient-to-r from-emerald-200 via-cyan-200 to-amber-200 bg-clip-text text-transparent';
