'use client';

import React, { useState } from 'react';
import { FileCode, Sparkles } from 'lucide-react';

interface CodeTab {
  filename: string;
  language?: string;
  code: string;
  label?: string;
}

interface CodeTabsSlideProps {
  title: string;
  subtitle?: string;
  tabs: CodeTab[];
  /** 初始激活的 tab 索引（从 0 开始），默认 0 */
  activeIndex?: number;
  /** 关键结论 */
  takeaway?: string;
  /** 是否显示行号，默认 true */
  showLineNumbers?: boolean;
}

// 多文件代码 Tab 切换页：可点击 Tab 头 + 当前 tab 代码内容（带行号）
export const CodeTabsSlide: React.FC<CodeTabsSlideProps> = ({
  title,
  subtitle,
  tabs,
  activeIndex = 0,
  takeaway,
  showLineNumbers = true,
}) => {
  const [active, setActive] = useState(Math.min(activeIndex, tabs.length - 1));
  const safeActive = Math.max(0, Math.min(active, tabs.length - 1));
  const tab = tabs[safeActive];
  const lines = (tab?.code || '').split('\n');

  return (
    <div className="space-y-4 max-w-5xl">
      <div>
        <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">{title}</h2>
        {subtitle && <p className="text-xs sm:text-sm text-indigo-300 mt-1">{subtitle}</p>}
      </div>
      <div className="rounded-2xl border border-slate-800 bg-slate-950 overflow-hidden text-xs">
        <div className="flex items-center gap-1 px-2 py-2 bg-slate-900 border-b border-slate-800 overflow-x-auto">
          {tabs.map((t, i) => {
            const isActive = i === safeActive;
            return (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`cursor-pointer flex items-center space-x-1.5 px-3 py-1.5 rounded-lg text-[11px] font-mono font-bold whitespace-nowrap transition-all border ${
                  isActive
                    ? 'bg-indigo-500/20 text-indigo-200 border-indigo-400/40'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800 border-transparent'
                }`}
              >
                <FileCode className="h-3.5 w-3.5" />
                <span>{t.filename}</span>
                {t.label && (
                  <span className="text-[9px] px-1 py-0.5 rounded bg-slate-700 text-slate-300 uppercase">{t.label}</span>
                )}
              </button>
            );
          })}
        </div>
        <pre key={safeActive} className="p-4 text-emerald-300 font-mono text-xs leading-relaxed overflow-x-auto" style={{ animation: 'cds-fade-in 0.25s ease both' }}>
          <code>
            {lines.map((line, i) => {
              const n = i + 1;
              return (
                <div key={i} className="flex">
                  {showLineNumbers && (
                    <span className="select-none text-slate-600 w-8 shrink-0 text-right pr-3">{n}</span>
                  )}
                  <span>{line || ' '}</span>
                </div>
              );
            })}
          </code>
        </pre>
      </div>
      {takeaway && (
        <div className="p-3 rounded-xl bg-indigo-950/60 border border-indigo-800/60 text-xs text-indigo-200 flex items-center space-x-2">
          <Sparkles className="h-4 w-4 text-indigo-400 shrink-0" />
          <span><strong>关键结论：</strong>{takeaway}</span>
        </div>
      )}
    </div>
  );
};
