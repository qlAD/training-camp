// day-03 视觉主题常量（代码编辑器主题：深紫蓝编辑区 + 语法高亮）
// 独立于 day01/day02，全篇组件统一从这里取色与缓动

// Apple 风平滑缓出曲线
export const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

// 卡片/徽章弹入专用轻弹簧
export const SPRING = { type: 'spring', stiffness: 260, damping: 22 } as const;

export const COLORS = {
  // 编辑器底（近似 VSCode 深色主题）
  editorBg: '#1E1E2E',
  // 语法高亮：HTML 橙红 / CSS 天蓝 / JS 金黄 / 注释灰 / 成功绿
  html: '#F97316',
  css: '#38BDF8',
  js: '#FBBF24',
  comment: '#8B93A7',
  ok: '#A3E635',
} as const;

// 文字主渐变（暖橙→天蓝→金黄，呼应编辑器高亮）
export const TEXT_GRADIENT =
  'bg-gradient-to-r from-orange-200 via-sky-200 to-amber-200 bg-clip-text text-transparent';
