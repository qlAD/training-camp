import React from 'react';
import { FolderGit2, Sparkles, CheckCircle2 } from 'lucide-react';

type Tone = 'indigo' | 'emerald' | 'amber' | 'rose' | 'violet' | 'cyan';

interface ProjectItem {
  name: string;
  tag: string;
  desc: string;
  techStack?: string[];
  tone?: Tone;
  highlights?: string[];
}

interface ProjectShowcaseWallProps {
  projects: ProjectItem[];
  title?: string;
}

const toneStyles: Record<Tone, { border: string; chip: string; glow: string; tag: string }> = {
  indigo: { border: 'hover:border-indigo-500/50', chip: 'bg-indigo-500/15 text-indigo-300', glow: 'shadow-indigo-900/20', tag: 'bg-indigo-500/20 text-indigo-200' },
  emerald: { border: 'hover:border-emerald-500/50', chip: 'bg-emerald-500/15 text-emerald-300', glow: 'shadow-emerald-900/20', tag: 'bg-emerald-500/20 text-emerald-200' },
  amber: { border: 'hover:border-amber-500/50', chip: 'bg-amber-500/15 text-amber-300', glow: 'shadow-amber-900/20', tag: 'bg-amber-500/20 text-amber-200' },
  rose: { border: 'hover:border-rose-500/50', chip: 'bg-rose-500/15 text-rose-300', glow: 'shadow-rose-900/20', tag: 'bg-rose-500/20 text-rose-200' },
  violet: { border: 'hover:border-violet-500/50', chip: 'bg-violet-500/15 text-violet-300', glow: 'shadow-violet-900/20', tag: 'bg-violet-500/20 text-violet-200' },
  cyan: { border: 'hover:border-cyan-500/50', chip: 'bg-cyan-500/15 text-cyan-300', glow: 'shadow-cyan-900/20', tag: 'bg-cyan-500/20 text-cyan-200' },
};

// 项目成果墙：多项目卡片墙，带技术栈徽章与亮点
export const ProjectShowcaseWall: React.FC<ProjectShowcaseWallProps> = ({ projects, title }) => {
  return (
    <div className="space-y-4">
      <style>{`
        @keyframes project-showcase-rise {
          0% { transform: translateY(12px); opacity: 0; }
          100% { transform: translateY(0); opacity: 1; }
        }
      `}</style>
      {title && (
        <div className="flex items-center space-x-2">
          <FolderGit2 className="h-4 w-4 text-indigo-400" />
          <h3 className="text-sm font-bold text-white">{title}</h3>
        </div>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {projects.map((p, i) => {
          const tone = toneStyles[p.tone || 'indigo'];
          return (
            <div
              key={`${p.name}-${i}`}
              className={`group p-5 rounded-2xl bg-slate-800/60 border border-slate-700/80 ${tone.border} transition-all duration-300 hover:shadow-xl ${tone.glow}`}
              style={{ animation: `project-showcase-rise 0.5s ease-out ${i * 0.08}s both` }}
            >
              <div className="flex items-start justify-between gap-2 mb-2">
                <div className="flex items-center space-x-2 min-w-0">
                  <span className={`h-9 w-9 rounded-xl ${tone.chip} flex items-center justify-center text-sm font-black shrink-0`}>
                    {p.name.charAt(0)}
                  </span>
                  <div className="min-w-0">
                    <div className="text-sm font-bold text-white truncate">{p.name}</div>
                    <div className="text-[10px] text-slate-500">{p.tag}</div>
                  </div>
                </div>
                <span className={`text-[10px] font-bold px-2 py-0.5 rounded ${tone.tag} shrink-0`}>
                  项目
                </span>
              </div>

              <p className="text-xs text-slate-300 leading-relaxed mb-3">{p.desc}</p>

              {p.highlights && p.highlights.length > 0 && (
                <ul className="space-y-1 mb-3">
                  {p.highlights.map((h, hi) => (
                    <li key={hi} className="flex items-start space-x-1.5">
                      <CheckCircle2 className="h-3 w-3 text-emerald-400 shrink-0 mt-0.5" />
                      <span className="text-[11px] text-slate-400">{h}</span>
                    </li>
                  ))}
                </ul>
              )}

              {p.techStack && p.techStack.length > 0 && (
                <div className="flex flex-wrap items-center gap-1.5 pt-2 border-t border-slate-700/50">
                  <Sparkles className="h-3 w-3 text-slate-500" />
                  {p.techStack.map((t, ti) => (
                    <span
                      key={ti}
                      className={`text-[10px] font-mono font-bold px-1.5 py-0.5 rounded ${tone.chip}`}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
