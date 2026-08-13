// day-04 视觉主题常量（工程蓝图风格：深蓝底 + 琥珀金/青蓝/翠绿标注）

export const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

export const SPRING = { type: 'spring', stiffness: 260, damping: 22 } as const;

export const COLORS = {
  // 蓝图底
  blueprintBg: '#0F172A',
  // 蓝图线
  blueprintLine: '#334155',
  blueprintLineLight: '#475569',
  // 建筑标注色
  amber: '#F59E0B',
  amberLight: '#FCD34D',
  // 数据/代码色
  cyan: '#22D3EE',
  cyanLight: '#67E8F9',
  // 状态成功色
  emerald: '#34D399',
  emeraldLight: '#6EE7B7',
  // 文字
  white: '#F8FAFC',
  muted: '#94A3B8',
  dim: '#64748B',
} as const;

// 文字主渐变（琥珀金 → 青蓝 → 翠绿）
export const TEXT_GRADIENT =
  'bg-gradient-to-r from-amber-200 via-cyan-200 to-emerald-200 bg-clip-text text-transparent';