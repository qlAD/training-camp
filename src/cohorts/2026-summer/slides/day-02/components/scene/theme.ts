// day-02 视觉主题常量（网络主题：深海蓝青 + 数据脉冲）
// 独立于 day01，全篇组件统一从这里取色与缓动

// Apple 风平滑缓出曲线（Wide easing）
export const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

// 卡片/徽章弹入专用轻弹簧
export const SPRING = { type: 'spring', stiffness: 260, damping: 22 } as const;

export const COLORS = {
  sky: '#38BDF8',
  teal: '#2DD4BF',
  lime: '#A3E635',
  amber: '#FBBF24',
  white: '#F8FAFC',
} as const;

// 文字主渐变（亮青系，压住深空舞台）
export const TEXT_GRADIENT =
  'bg-gradient-to-r from-sky-200 via-teal-200 to-lime-200 bg-clip-text text-transparent';

export const FONT_MONO = 'font-mono';
