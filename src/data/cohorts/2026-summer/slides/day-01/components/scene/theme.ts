// day-01 视觉主题常量（AE 动效风：深空底 + 渐变霓虹 + 平滑缓动）

// Apple 风平滑缓出曲线（Wide easing）
export const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

// 趣味元素（徽章弹入等）专用轻弹簧
export const SPRING = { type: 'spring', stiffness: 260, damping: 22 } as const;

export const COLORS = {
  indigo: '#6366F1',
  cyan: '#22D3EE',
  magenta: '#E879F9',
  amber: '#FBBF24',
  green: '#34D399',
} as const;

// 文字主渐变（亮色，压住深空背景）
export const TEXT_GRADIENT =
  'bg-gradient-to-r from-cyan-200 via-indigo-200 to-fuchsia-200 bg-clip-text text-transparent';

// 流体光带配色（Wonderful Tools 风）
export const RIBBON_A = ['rgba(99,102,241,0.65)', 'rgba(34,211,238,0.5)', 'rgba(232,121,249,0.45)'];
export const RIBBON_B = ['rgba(232,121,249,0.5)', 'rgba(251,191,36,0.35)', 'rgba(99,102,241,0.55)'];
export const RIBBON_C = ['rgba(34,211,238,0.5)', 'rgba(52,211,153,0.4)', 'rgba(99,102,241,0.5)'];

export const FONT_MONO = 'font-mono';
