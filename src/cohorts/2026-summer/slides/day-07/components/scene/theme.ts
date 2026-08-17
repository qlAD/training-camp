// day-07 视觉主题常量（接口契约风格：深墨蓝底 + HTTP 动词四色 + 契约青蓝）

export const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

export const SPRING = { type: 'spring', stiffness: 260, damping: 22 } as const;

export const COLORS = {
  // 契约底
  contractBg: '#0B1220',
  // 规格书表单线
  specLine: '#1E2A3F',
  specLineLight: '#334155',
  // HTTP 动词色
  getBlue: '#3B82F6',
  getBlueLight: '#93C5FD',
  postEmerald: '#10B981',
  postEmeraldLight: '#6EE7B7',
  putAmber: '#F59E0B',
  putAmberLight: '#FCD34D',
  deleteRose: '#F43F5E',
  deleteRoseLight: '#FDA4AF',
  // 契约/数据流转色（青蓝）
  contractCyan: '#22D3EE',
  contractCyanLight: '#67E8F9',
  // 文字
  white: '#F8FAFC',
  muted: '#94A3B8',
  dim: '#64748B',
} as const;

// 文字主渐变（GET 蓝 → POST 翠 → PUT 琥珀 · HTTP 动词光谱）
export const TEXT_GRADIENT =
  'bg-gradient-to-r from-blue-200 via-emerald-200 to-amber-200 bg-clip-text text-transparent';
