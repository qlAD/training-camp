import React from 'react';
import { Key } from 'lucide-react';

type KVTone = 'default' | 'indigo' | 'emerald' | 'amber' | 'rose' | 'cyan' | 'violet';

interface KVItem {
  key: string;
  value: React.ReactNode;
  icon?: React.ComponentType<{ className?: string }>;
  tone?: KVTone;
}

interface KeyValueGridProps {
  title?: string;
  items: KVItem[];
  /** 列数：2/3/4，默认 3 */
  columns?: 2 | 3 | 4;
}

const kvTone: Record<KVTone, { iconWrap: string; iconColor: string; value: string }> = {
  default: { iconWrap: 'bg-slate-700', iconColor: 'text-slate-300', value: 'text-white' },
  indigo: { iconWrap: 'bg-indigo-500/20', iconColor: 'text-indigo-300', value: 'text-indigo-100' },
  emerald: { iconWrap: 'bg-emerald-500/20', iconColor: 'text-emerald-300', value: 'text-emerald-100' },
  amber: { iconWrap: 'bg-amber-500/20', iconColor: 'text-amber-300', value: 'text-amber-100' },
  rose: { iconWrap: 'bg-rose-500/20', iconColor: 'text-rose-300', value: 'text-rose-100' },
  cyan: { iconWrap: 'bg-cyan-500/20', iconColor: 'text-cyan-300', value: 'text-cyan-100' },
  violet: { iconWrap: 'bg-violet-500/20', iconColor: 'text-violet-300', value: 'text-violet-100' },
};

// 键值网格：卡片网格，键为标签，值为高亮文字，可带图标与多色调
export const KeyValueGrid: React.FC<KeyValueGridProps> = ({ title, items, columns = 3 }) => {
  const cols = columns === 2 ? 'sm:grid-cols-2' : columns === 4 ? 'sm:grid-cols-2 lg:grid-cols-4' : 'sm:grid-cols-2 lg:grid-cols-3';
  return (
    <div className="space-y-3 max-w-5xl">
      {title && (
        <div className="text-sm font-bold text-white flex items-center space-x-2">
          <Key className="h-4 w-4 text-indigo-400" />
          <span>{title}</span>
        </div>
      )}
      <div className={`grid grid-cols-1 ${cols} gap-3`}>
        {items.map((it, i) => {
          const t = kvTone[it.tone || 'default'];
          const Icon = it.icon || Key;
          return (
            <div key={i} className="p-4 rounded-2xl bg-slate-800/80 border border-slate-700/80 flex items-start space-x-3">
              <div className={`h-9 w-9 rounded-lg ${t.iconWrap} flex items-center justify-center shrink-0`}>
                <Icon className={`h-4 w-4 ${t.iconColor}`} />
              </div>
              <div className="min-w-0">
                <div className="text-[11px] text-slate-400 font-bold uppercase tracking-wider">{it.key}</div>
                <div className={`text-sm font-bold ${t.value} mt-0.5 break-words`}>{it.value}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
