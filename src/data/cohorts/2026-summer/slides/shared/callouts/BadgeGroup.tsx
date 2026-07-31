import React from 'react';
import { Tag } from 'lucide-react';

type BadgeTone = 'default' | 'indigo' | 'emerald' | 'amber' | 'rose';

interface BadgeItem {
  label: string;
  icon?: React.ComponentType<{ className?: string }>;
  tone?: BadgeTone;
}

interface BadgeGroupProps {
  badges: BadgeItem[];
  title?: string;
  /** 列数：2/3/4，默认 3 */
  columns?: 2 | 3 | 4;
}

const badgeTone: Record<BadgeTone, { wrap: string; iconWrap: string; iconColor: string; label: string }> = {
  default: { wrap: 'border-slate-700/80 bg-slate-800/80', iconWrap: 'bg-slate-700', iconColor: 'text-slate-300', label: 'text-slate-100' },
  indigo: { wrap: 'border-indigo-500/40 bg-indigo-500/10', iconWrap: 'bg-indigo-500/20', iconColor: 'text-indigo-300', label: 'text-indigo-100' },
  emerald: { wrap: 'border-emerald-500/40 bg-emerald-500/10', iconWrap: 'bg-emerald-500/20', iconColor: 'text-emerald-300', label: 'text-emerald-100' },
  amber: { wrap: 'border-amber-500/40 bg-amber-500/10', iconWrap: 'bg-amber-500/20', iconColor: 'text-amber-300', label: 'text-amber-100' },
  rose: { wrap: 'border-rose-500/40 bg-rose-500/10', iconWrap: 'bg-rose-500/20', iconColor: 'text-rose-300', label: 'text-rose-100' },
};

// 徽章标签组：一组彩色徽章卡片，可带图标与多色调
export const BadgeGroup: React.FC<BadgeGroupProps> = ({ badges, title, columns = 3 }) => {
  const cols = columns === 2 ? 'sm:grid-cols-2' : columns === 4 ? 'sm:grid-cols-2 lg:grid-cols-4' : 'sm:grid-cols-2 lg:grid-cols-3';
  return (
    <div className="space-y-3 max-w-5xl">
      {title && <div className="text-[11px] text-indigo-300 font-bold uppercase tracking-wider">{title}</div>}
      <div className={`grid grid-cols-1 ${cols} gap-3`}>
        {badges.map((b, i) => {
          const t = badgeTone[b.tone || 'default'];
          const Icon = b.icon || Tag;
          return (
            <div key={i} className={`p-3 rounded-xl border ${t.wrap} flex items-center space-x-3`}>
              <div className={`h-8 w-8 rounded-lg ${t.iconWrap} flex items-center justify-center shrink-0`}>
                <Icon className={`h-4 w-4 ${t.iconColor}`} />
              </div>
              <span className={`text-xs font-bold ${t.label}`}>{b.label}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};
