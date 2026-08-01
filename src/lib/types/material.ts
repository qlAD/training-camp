/** 训练营物料的大类：方案 PDF / 海报 PNG / 幻灯片交互讲义 */
export type MaterialType = 'plan' | 'poster' | 'slides';

/** 单个物料卡片（用于门户页和 workshop 概览页） */
export interface BootcampMaterial {
  id: string;
  type: MaterialType;
  dayNumber?: number;
  title: string;
  subtitle: string;
  description: string;
  iconName: string;
  badgeText: string;
  exportFormat: 'PDF' | 'PNG' | 'PPT / Interactive';
}
