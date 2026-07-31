import React from 'react';

type AnnTone = 'info' | 'warning' | 'success' | 'default';

interface ScreenshotAnnotation {
  /** 横向位置百分比 0-100 */
  x: number;
  /** 纵向位置百分比 0-100 */
  y: number;
  num: number;
  label: string;
  tone?: AnnTone;
}

interface AnnotatedScreenshotProps {
  title?: string;
  imageUrl: string;
  alt: string;
  annotations: ScreenshotAnnotation[];
}

const annTone: Record<AnnTone, { dot: string; ring: string }> = {
  default: { dot: 'bg-indigo-500', ring: 'bg-indigo-400/40' },
  info: { dot: 'bg-cyan-500', ring: 'bg-cyan-400/40' },
  warning: { dot: 'bg-amber-500', ring: 'bg-amber-400/40' },
  success: { dot: 'bg-emerald-500', ring: 'bg-emerald-400/40' },
};

// 带标注截图：图片 + 编号圆点标注（带脉冲动画）+ 旁注列表
export const AnnotatedScreenshot: React.FC<AnnotatedScreenshotProps> = ({ title, imageUrl, alt, annotations }) => (
  <div className="space-y-3 max-w-5xl">
    {title && <div className="text-sm font-bold text-white">{title}</div>}
    <div className="relative rounded-2xl overflow-hidden border border-slate-700/80 bg-slate-950">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={imageUrl} alt={alt} className="w-full h-auto block" />
      {annotations.map((a, i) => {
        const t = annTone[a.tone || 'default'];
        return (
          <div
            key={i}
            className="absolute -translate-x-1/2 -translate-y-1/2"
            style={{ left: `${a.x}%`, top: `${a.y}%` }}
          >
            <div className="relative h-6 w-6">
              <span
                className={`absolute inset-0 rounded-full ${t.ring}`}
                style={{ animation: 'cds-pulse-ring 1.8s ease-out infinite' }}
              />
              <span
                className={`relative flex h-6 w-6 rounded-full ${t.dot} border-2 border-white text-white text-[10px] font-bold items-center justify-center shadow-lg`}
              >
                {a.num}
              </span>
            </div>
          </div>
        );
      })}
    </div>
    {annotations.length > 0 && (
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
        {annotations.map((a, i) => {
          const t = annTone[a.tone || 'default'];
          return (
            <div key={i} className="flex items-center space-x-2 p-2 rounded-lg bg-slate-800/60 border border-slate-700/60">
              <span className={`h-5 w-5 rounded-full ${t.dot} text-white text-[10px] font-bold flex items-center justify-center shrink-0`}>
                {a.num}
              </span>
              <span className="text-xs text-slate-200">{a.label}</span>
            </div>
          );
        })}
      </div>
    )}
  </div>
);
