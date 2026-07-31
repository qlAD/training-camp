'use client';

import React, { useState } from 'react';
import { Layers } from 'lucide-react';

interface SwitcherTab {
  label: string;
  icon?: React.ComponentType<{ className?: string }>;
  content: React.ReactNode;
}

interface TabsSwitcherProps {
  title?: string;
  tabs: SwitcherTab[];
  initialIndex?: number;
}

// 多视角 Tab 切换：Tab 头 + 内容区，切换带淡入过渡
export const TabsSwitcher: React.FC<TabsSwitcherProps> = ({ title, tabs, initialIndex = 0 }) => {
  const [idx, setIdx] = useState(Math.min(initialIndex, tabs.length - 1));
  const safeIdx = Math.max(0, Math.min(idx, tabs.length - 1));
  const tab = tabs[safeIdx];

  return (
    <div className="space-y-4 max-w-4xl">
      {title && (
        <div className="text-sm font-bold text-white flex items-center space-x-2">
          <Layers className="h-4 w-4 text-indigo-400" />
          <span>{title}</span>
        </div>
      )}
      <div className="flex flex-wrap gap-1 p-1 rounded-xl bg-slate-800/80 border border-slate-700/80">
        {tabs.map((t, i) => {
          const active = i === safeIdx;
          const Icon = t.icon;
          return (
            <button
              key={i}
              onClick={() => setIdx(i)}
              className={`cursor-pointer flex items-center space-x-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                active
                  ? 'bg-indigo-600 text-white shadow'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-700/60'
              }`}
            >
              {Icon && <Icon className="h-3.5 w-3.5" />}
              <span>{t.label}</span>
            </button>
          );
        })}
      </div>
      <div
        key={safeIdx}
        className="rounded-2xl bg-slate-800/80 border border-slate-700/80 p-5"
        style={{ animation: 'cds-fade-in 0.3s ease both' }}
      >
        {tab?.content}
      </div>
    </div>
  );
};
