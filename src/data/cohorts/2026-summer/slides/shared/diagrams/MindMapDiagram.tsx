import React from 'react';
import { Brain } from 'lucide-react';

type Tone = 'indigo' | 'emerald' | 'amber' | 'rose' | 'violet' | 'cyan';

interface MindLeaf {
  label: string;
}

interface MindBranch {
  label: string;
  children?: MindLeaf[];
}

interface MindMapRoot {
  label: string;
  children: MindBranch[];
}

interface MindMapDiagramProps {
  root: MindMapRoot;
  title?: string;
  direction?: 'right' | 'radial';
}

const BRANCH_TONES: Tone[] = ['indigo', 'emerald', 'amber', 'rose', 'violet', 'cyan'];

const TONE_PILL: Record<Tone, { border: string; bg: string; text: string; dot: string; stroke: string }> = {
  indigo: { border: 'border-indigo-500/50', bg: 'bg-indigo-950/50', text: 'text-indigo-200', dot: 'bg-indigo-400', stroke: '#818cf8' },
  emerald: { border: 'border-emerald-500/50', bg: 'bg-emerald-950/50', text: 'text-emerald-200', dot: 'bg-emerald-400', stroke: '#34d399' },
  amber: { border: 'border-amber-500/50', bg: 'bg-amber-950/50', text: 'text-amber-200', dot: 'bg-amber-400', stroke: '#fbbf24' },
  rose: { border: 'border-rose-500/50', bg: 'bg-rose-950/50', text: 'text-rose-200', dot: 'bg-rose-400', stroke: '#fb7185' },
  violet: { border: 'border-violet-500/50', bg: 'bg-violet-950/50', text: 'text-violet-200', dot: 'bg-violet-400', stroke: '#a78bfa' },
  cyan: { border: 'border-cyan-500/50', bg: 'bg-cyan-950/50', text: 'text-cyan-200', dot: 'bg-cyan-400', stroke: '#22d3ee' },
};

// 射线与矩形边界交点
function borderPoint(cx: number, cy: number, tx: number, ty: number, hw: number, hh: number) {
  const dx = tx - cx;
  const dy = ty - cy;
  if (dx === 0 && dy === 0) return { x: cx, y: cy };
  const sx = dx === 0 ? Infinity : hw / Math.abs(dx);
  const sy = dy === 0 ? Infinity : hh / Math.abs(dy);
  const s = Math.min(sx, sy);
  return { x: cx + dx * s, y: cy + dy * s };
}

const RightMindMap: React.FC<{ root: MindMapRoot }> = ({ root }) => (
  <div className="flex items-center">
    <div className="inline-flex shrink-0 items-center gap-2 rounded-xl border border-indigo-400/60 bg-indigo-600/30 px-4 py-2.5">
      <Brain className="h-4 w-4 text-indigo-300" />
      <span className="text-sm font-bold text-white">{root.label}</span>
    </div>
    <div className="h-px w-6 shrink-0 bg-slate-600" />
    <div className="relative flex-1 space-y-3 border-l border-slate-600 py-2 pl-6">
      {root.children.map((branch, i) => {
        const tone = BRANCH_TONES[i % BRANCH_TONES.length];
        const tp = TONE_PILL[tone];
        return (
          <div key={i} className="relative">
            <span className="absolute -left-6 top-1/2 h-px w-6 bg-slate-600" />
            <div className="flex items-start gap-3">
              <div className={`inline-flex shrink-0 items-center gap-1.5 rounded-lg border ${tp.border} ${tp.bg} px-3 py-1.5`}>
                <span className={`h-2 w-2 rounded-full ${tp.dot}`} />
                <span className={`text-xs font-bold ${tp.text}`}>{branch.label}</span>
              </div>
              {branch.children && branch.children.length > 0 && (
                <div className="border-l border-slate-700 pl-4">
                  <div className="space-y-1">
                    {branch.children.map((leaf, j) => (
                      <div key={j} className="relative">
                        <span className="absolute -left-4 top-1/2 h-px w-4 bg-slate-700" />
                        <span className="inline-block rounded-md bg-slate-800/80 px-2 py-0.5 text-[11px] text-slate-300">
                          {leaf.label}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  </div>
);

const RadialMindMap: React.FC<{ root: MindMapRoot }> = ({ root }) => {
  const VB_W = 1000;
  const VB_H = 720;
  const centerX = VB_W / 2;
  const centerY = VB_H / 2;
  const R = 290;
  const branches = root.children;
  const n = Math.max(branches.length, 1);
  const centerHW = 80;
  const centerHH = 30;

  const branchPos = branches.map((_, i) => {
    const angle = (-90 + (i * 360) / n) * (Math.PI / 180);
    return { x: centerX + R * Math.cos(angle), y: centerY + R * Math.sin(angle) };
  });
  const branchHW = 85;
  const branchHH = (b: MindBranch) => 22 + (b.children?.length ?? 0) * 15;

  return (
    <svg viewBox={`0 0 ${VB_W} ${VB_H}`} className="h-auto w-full" preserveAspectRatio="xMidYMid meet">
      {/* 连线 */}
      {branchPos.map((p, i) => {
        const start = borderPoint(centerX, centerY, p.x, p.y, centerHW, centerHH);
        const end = borderPoint(p.x, p.y, centerX, centerY, branchHW, branchHH(branches[i]));
        const tone = BRANCH_TONES[i % BRANCH_TONES.length];
        return (
          <path
            key={`l-${i}`}
            d={`M ${start.x} ${start.y} L ${end.x} ${end.y}`}
            fill="none"
            stroke={TONE_PILL[tone].stroke}
            strokeWidth={1.6}
            strokeLinecap="round"
          />
        );
      })}

      {/* 中心节点 */}
      <foreignObject x={centerX - centerHW} y={centerY - centerHH} width={centerHW * 2} height={centerHH * 2}>
        <div
          className="flex h-full w-full items-center justify-center gap-2 rounded-xl border border-indigo-400/60 bg-indigo-600/30 px-3"
        >
          <Brain className="h-[18px] w-[18px] text-indigo-300" />
          <span className="text-[15px] font-bold text-white">{root.label}</span>
        </div>
      </foreignObject>

      {/* 分支节点 */}
      {branchPos.map((p, i) => {
        const branch = branches[i];
        const tone = BRANCH_TONES[i % BRANCH_TONES.length];
        const tp = TONE_PILL[tone];
        const hh = branchHH(branch);
        return (
          <foreignObject key={`b-${i}`} x={p.x - branchHW} y={p.y - hh} width={branchHW * 2} height={hh * 2}>
            <div
              className="flex h-full w-full flex-col items-center rounded-lg border bg-slate-800/80 px-3 py-1.5"
            >
              <div className="flex items-center gap-1.5">
                <span className={`h-2 w-2 rounded-full ${tp.dot}`} />
                <span className={`text-[13px] font-bold ${tp.text}`}>{branch.label}</span>
              </div>
              {branch.children && branch.children.length > 0 && (
                <div className="mt-1 flex flex-col items-center gap-0.5">
                  {branch.children.map((leaf, j) => (
                    <span key={j} className="text-[10px] text-slate-400">
                      {leaf.label}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </foreignObject>
        );
      })}
    </svg>
  );
};

// 知识体系思维导图：中心节点 + 多分支放射，支持 right（水平展开）/ radial（环形放射）
export const MindMapDiagram: React.FC<MindMapDiagramProps> = ({ root, title, direction = 'right' }) => (
  <div className="w-full">
    {title && (
      <div className="mb-4 flex items-center gap-2">
        <Brain className="h-4 w-4 text-cyan-400" />
        <h3 className="text-sm font-bold text-white">{title}</h3>
      </div>
    )}
    {direction === 'radial' ? <RadialMindMap root={root} /> : <RightMindMap root={root} />}
  </div>
);
