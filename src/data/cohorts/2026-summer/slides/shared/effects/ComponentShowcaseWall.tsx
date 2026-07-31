import React from 'react';
import { Boxes } from 'lucide-react';

type Tone = 'indigo' | 'emerald' | 'amber' | 'rose' | 'violet' | 'cyan';

interface ShowcaseItem {
  name: string;
  category: string;
  desc: string;
  icon?: React.ReactNode;
  tone?: Tone;
}

interface ComponentShowcaseWallProps {
  items: ShowcaseItem[];
  title?: string;
}

const toneChip: Record<Tone, string> = {
  indigo: 'bg-indigo-500/15 text-indigo-300 border-indigo-500/30',
  emerald: 'bg-emerald-500/15 text-emerald-300 border-emerald-500/30',
  amber: 'bg-amber-500/15 text-amber-300 border-amber-500/30',
  rose: 'bg-rose-500/15 text-rose-300 border-rose-500/30',
  violet: 'bg-violet-500/15 text-violet-300 border-violet-500/30',
  cyan: 'bg-cyan-500/15 text-cyan-300 border-cyan-500/30',
};

const categoryTone: Record<Tone, string> = {
  indigo: 'text-indigo-300',
  emerald: 'text-emerald-300',
  amber: 'text-amber-300',
  rose: 'text-rose-300',
  violet: 'text-violet-300',
  cyan: 'text-cyan-300',
};

// Element Plus 组件预览墙：按 category 分组
export const ComponentShowcaseWall: React.FC<ComponentShowcaseWallProps> = ({ items, title }) => {
  const groups = items.reduce<Record<string, ShowcaseItem[]>>((acc, item) => {
    const key = item.category;
    if (!acc[key]) acc[key] = [];
    acc[key].push(item);
    return acc;
  }, {});
  const groupKeys = Object.keys(groups);

  return (
    <div className="space-y-5">
      <style>{`
        @keyframes component-showcase-in {
          0% { transform: translateY(8px); opacity: 0; }
          100% { transform: translateY(0); opacity: 1; }
        }
      `}</style>
      {title && (
        <div className="flex items-center space-x-2">
          <Boxes className="h-4 w-4 text-violet-400" />
          <h3 className="text-sm font-bold text-white">{title}</h3>
        </div>
      )}
      {groupKeys.map((group, gi) => (
        <div
          key={group}
          className="rounded-xl bg-slate-800/40 border border-slate-700/60 p-4"
          style={{ animation: `component-showcase-in 0.4s ease-out ${gi * 0.08}s both` }}
        >
          <div className="flex items-center space-x-2 mb-3">
            <span className="h-1 w-1 rounded-full bg-violet-400" />
            <h4 className="text-[11px] font-bold text-violet-300 uppercase tracking-wider">{group}</h4>
            <span className="text-[10px] text-slate-500">· {groups[group].length} 项</span>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2.5">
            {groups[group].map((item, i) => {
              const tone = item.tone || 'indigo';
              return (
                <div
                  key={`${item.name}-${i}`}
                  className="group p-3 rounded-lg bg-slate-900/60 border border-slate-700/60 hover:border-violet-500/40 hover:bg-slate-900 transition-all duration-200 hover:scale-[1.03]"
                >
                  <div className="flex items-center space-x-2 mb-1.5">
                    {item.icon ? (
                      <span className={categoryTone[tone]}>{item.icon}</span>
                    ) : (
                      <span className={`h-6 w-6 rounded-md flex items-center justify-center border text-[10px] font-bold ${toneChip[tone]}`}>
                        {item.name.charAt(0)}
                      </span>
                    )}
                    <span className="text-[11px] font-bold text-white">{item.name}</span>
                  </div>
                  <p className="text-[10px] text-slate-400 leading-snug">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
};
