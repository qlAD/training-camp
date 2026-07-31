import React from 'react';
import { LayoutGrid } from 'lucide-react';

type Tone = 'indigo' | 'emerald' | 'amber' | 'rose' | 'violet' | 'cyan';

interface Quadrant {
  label: string;
  items: string[];
  tone?: Tone;
}

interface QuadrantAxes {
  xLabel: string;
  yLabel: string;
  xPositiveLabel: string;
  yPositiveLabel: string;
}

interface QuadrantDiagramProps {
  title?: string;
  axes: QuadrantAxes;
  quadrants: Quadrant[]; // 顺序：TL, TR, BL, BR
}

const TONE: Record<Tone, { text: string; badge: string; dot: string }> = {
  indigo: { text: 'text-indigo-300', badge: 'bg-indigo-500/15 border-indigo-500/30', dot: 'bg-indigo-400' },
  emerald: { text: 'text-emerald-300', badge: 'bg-emerald-500/15 border-emerald-500/30', dot: 'bg-emerald-400' },
  amber: { text: 'text-amber-300', badge: 'bg-amber-500/15 border-amber-500/30', dot: 'bg-amber-400' },
  rose: { text: 'text-rose-300', badge: 'bg-rose-500/15 border-rose-500/30', dot: 'bg-rose-400' },
  violet: { text: 'text-violet-300', badge: 'bg-violet-500/15 border-violet-500/30', dot: 'bg-violet-400' },
  cyan: { text: 'text-cyan-300', badge: 'bg-cyan-500/15 border-cyan-500/30', dot: 'bg-cyan-400' },
};

const QuadrantCell: React.FC<{ quadrant: Quadrant }> = ({ quadrant }) => {
  const tone = quadrant.tone ?? 'indigo';
  const t = TONE[tone];
  return (
    <div className="flex min-h-[120px] flex-col gap-2 bg-slate-800/60 p-3.5">
      <span className={`inline-flex w-fit items-center rounded-md border px-2 py-0.5 text-[10px] font-bold ${t.badge} ${t.text}`}>
        {quadrant.label}
      </span>
      <ul className="space-y-1">
        {quadrant.items.map((item, i) => (
          <li key={i} className="flex items-start gap-1.5">
            <span className={`mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full ${t.dot}`} />
            <span className="text-[11px] leading-snug text-slate-300">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

// 四象限矩阵：2x2 网格 + 中心十字坐标轴，象限按 TL/TR/BL/BR 顺序
export const QuadrantDiagram: React.FC<QuadrantDiagramProps> = ({ title, axes, quadrants }) => {
  const cells = [
    quadrants[0] ?? { label: '', items: [] },
    quadrants[1] ?? { label: '', items: [] },
    quadrants[2] ?? { label: '', items: [] },
    quadrants[3] ?? { label: '', items: [] },
  ];
  return (
    <div className="w-full">
      {title && (
        <div className="mb-4 flex items-center gap-2">
          <LayoutGrid className="h-4 w-4 text-cyan-400" />
          <h3 className="text-sm font-bold text-white">{title}</h3>
        </div>
      )}
      <div className="flex flex-col">
        {/* 顶部 Y+ 标签 */}
        <div className="mb-1.5 text-center text-[10px] font-bold uppercase tracking-wider text-slate-400">
          ↑ {axes.yPositiveLabel}
        </div>
        <div className="flex items-stretch">
          {/* 左侧 X- 标签 */}
          <div className="flex w-7 shrink-0 items-center justify-center">
            <span className="rotate-180 whitespace-nowrap text-[10px] font-bold uppercase tracking-wider text-slate-400 [writing-mode:vertical-rl]">
              {axes.xLabel} ←
            </span>
          </div>
          {/* 2x2 网格，gap-px + bg 形成中心十字 */}
          <div className="grid flex-1 grid-cols-2 gap-px overflow-hidden rounded-xl border border-slate-700 bg-slate-700">
            {cells.map((q, i) => (
              <QuadrantCell key={i} quadrant={q} />
            ))}
          </div>
          {/* 右侧 X+ 标签 */}
          <div className="flex w-7 shrink-0 items-center justify-center">
            <span className="whitespace-nowrap text-[10px] font-bold uppercase tracking-wider text-slate-400 [writing-mode:vertical-rl]">
              → {axes.xPositiveLabel}
            </span>
          </div>
        </div>
        {/* 底部 Y- 标签 */}
        <div className="mt-1.5 text-center text-[10px] font-bold uppercase tracking-wider text-slate-400">
          {axes.yLabel} ↓
        </div>
      </div>
    </div>
  );
};
