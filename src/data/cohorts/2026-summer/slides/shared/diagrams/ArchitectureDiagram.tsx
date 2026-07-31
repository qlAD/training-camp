import React from 'react';
import { ArrowDown, ArrowRight, Layers } from 'lucide-react';

type Tone = 'indigo' | 'emerald' | 'amber' | 'rose' | 'violet' | 'cyan';

interface ArchNode {
  label: string;
  icon?: React.ComponentType<{ className?: string }>;
  tone?: Tone;
  sublabel?: string;
}

interface ArchLayer {
  title: string;
  nodes: ArchNode[];
}

interface ArchitectureDiagramProps {
  layers: ArchLayer[];
  direction?: 'vertical' | 'horizontal';
  title?: string;
}

const TONE: Record<Tone, { ring: string; icon: string; accent: string }> = {
  indigo: { ring: 'border-indigo-500/40', icon: 'text-indigo-400', accent: 'bg-indigo-500/15' },
  emerald: { ring: 'border-emerald-500/40', icon: 'text-emerald-400', accent: 'bg-emerald-500/15' },
  amber: { ring: 'border-amber-500/40', icon: 'text-amber-400', accent: 'bg-amber-500/15' },
  rose: { ring: 'border-rose-500/40', icon: 'text-rose-400', accent: 'bg-rose-500/15' },
  violet: { ring: 'border-violet-500/40', icon: 'text-violet-400', accent: 'bg-violet-500/15' },
  cyan: { ring: 'border-cyan-500/40', icon: 'text-cyan-400', accent: 'bg-cyan-500/15' },
};

const NodeCard: React.FC<{ node: ArchNode }> = ({ node }) => {
  const tone = node.tone ?? 'indigo';
  const t = TONE[tone];
  const Icon = node.icon;
  return (
    <div className={`flex items-center gap-2.5 rounded-xl border ${t.ring} bg-slate-800/80 px-3.5 py-2.5 min-w-[140px] max-w-[220px]`}>
      {Icon && (
        <span className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-lg ${t.accent}`}>
          <Icon className={`h-4 w-4 ${t.icon}`} />
        </span>
      )}
      <div className="min-w-0">
        <div className="truncate text-xs font-bold text-white">{node.label}</div>
        {node.sublabel && <div className="truncate text-[10px] text-slate-400">{node.sublabel}</div>}
      </div>
    </div>
  );
};

// 多层架构图：按 layers 顺序分层堆叠，层间用箭头连接，支持纵向/横向
export const ArchitectureDiagram: React.FC<ArchitectureDiagramProps> = ({
  layers,
  direction = 'vertical',
  title,
}) => {
  const isHorizontal = direction === 'horizontal';
  const Arrow = isHorizontal ? ArrowRight : ArrowDown;

  return (
    <div className="w-full">
      {title && (
        <div className="mb-4 flex items-center gap-2">
          <Layers className="h-4 w-4 text-cyan-400" />
          <h3 className="text-sm font-bold text-white">{title}</h3>
        </div>
      )}
      <div className={`flex ${isHorizontal ? 'flex-row flex-wrap items-stretch' : 'flex-col'} gap-0`}>
        {layers.map((layer, i) => (
          <React.Fragment key={i}>
            <div className={`flex-1 ${isHorizontal ? 'min-w-[180px]' : ''}`}>
              <div className={`mb-2 ${isHorizontal ? '' : ''}`}>
                <span className="inline-flex items-center rounded-md bg-slate-700/60 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-slate-300">
                  {layer.title}
                </span>
              </div>
              <div className={`flex ${isHorizontal ? 'flex-col' : 'flex-row flex-wrap'} gap-2.5 ${isHorizontal ? '' : 'justify-center'}`}>
                {layer.nodes.map((node, j) => (
                  <NodeCard key={j} node={node} />
                ))}
              </div>
            </div>
            {i < layers.length - 1 && (
              <div className={`flex items-center justify-center ${isHorizontal ? 'px-1 self-center' : 'py-2'}`}>
                <Arrow className="h-5 w-5 text-slate-600" />
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};
