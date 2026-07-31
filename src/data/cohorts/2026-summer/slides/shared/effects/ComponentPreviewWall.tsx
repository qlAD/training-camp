import React from 'react';
import { LayoutGrid } from 'lucide-react';

type Tone = 'indigo' | 'emerald' | 'amber' | 'rose' | 'violet' | 'cyan';

interface PreviewItem {
  name: string;
  desc: string;
  tone?: Tone;
  preview?: React.ReactNode;
}

interface ComponentPreviewWallProps {
  components: PreviewItem[];
  title?: string;
  columns?: 2 | 3 | 4;
}

const toneStyles: Record<Tone, { ring: string; chip: string; dot: string }> = {
  indigo: { ring: 'hover:border-indigo-500/60', chip: 'bg-indigo-500/15 text-indigo-300', dot: 'bg-indigo-400' },
  emerald: { ring: 'hover:border-emerald-500/60', chip: 'bg-emerald-500/15 text-emerald-300', dot: 'bg-emerald-400' },
  amber: { ring: 'hover:border-amber-500/60', chip: 'bg-amber-500/15 text-amber-300', dot: 'bg-amber-400' },
  rose: { ring: 'hover:border-rose-500/60', chip: 'bg-rose-500/15 text-rose-300', dot: 'bg-rose-400' },
  violet: { ring: 'hover:border-violet-500/60', chip: 'bg-violet-500/15 text-violet-300', dot: 'bg-violet-400' },
  cyan: { ring: 'hover:border-cyan-500/60', chip: 'bg-cyan-500/15 text-cyan-300', dot: 'bg-cyan-400' },
};

const colClass = (columns: number) =>
  columns === 4 ? 'sm:grid-cols-2 lg:grid-cols-4' : columns === 3 ? 'sm:grid-cols-2 lg:grid-cols-3' : 'sm:grid-cols-2';

// 组件化效果墙：一组组件预览卡片网格
export const ComponentPreviewWall: React.FC<ComponentPreviewWallProps> = ({ components, title, columns = 3 }) => {
  return (
    <div className="space-y-4">
      <style>{`
        @keyframes component-preview-rise {
          0% { transform: translateY(12px); opacity: 0; }
          100% { transform: translateY(0); opacity: 1; }
        }
      `}</style>
      {title && (
        <div className="flex items-center space-x-2">
          <LayoutGrid className="h-4 w-4 text-indigo-400" />
          <h3 className="text-sm font-bold text-white">{title}</h3>
        </div>
      )}
      <div className={`grid grid-cols-1 ${colClass(columns)} gap-3`}>
        {components.map((c, i) => {
          const tone = toneStyles[c.tone || 'indigo'];
          return (
            <div
              key={`${c.name}-${i}`}
              className={`group p-4 rounded-xl bg-slate-800/60 border border-slate-700/80 ${tone.ring} transition-all duration-300 hover:scale-[1.02] hover:-translate-y-0.5`}
              style={{ animation: `component-preview-rise 0.5s ease-out ${i * 0.06}s both` }}
            >
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center space-x-2">
                  <span className={`h-2 w-2 rounded-full ${tone.dot}`} />
                  <span className="text-xs font-bold text-white">{c.name}</span>
                </div>
                <span className={`text-[10px] font-bold px-2 py-0.5 rounded ${tone.chip}`}>组件</span>
              </div>
              <div className="rounded-lg bg-slate-950/60 border border-slate-700/50 p-3 min-h-[80px] flex items-center justify-center mb-2">
                {c.preview ? (
                  <div className="w-full text-center">{c.preview}</div>
                ) : (
                  <div className="text-[10px] text-slate-600 font-mono">preview</div>
                )}
              </div>
              <p className="text-[11px] text-slate-400 leading-relaxed">{c.desc}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
