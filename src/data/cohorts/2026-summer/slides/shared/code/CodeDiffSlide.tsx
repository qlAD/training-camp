import React from 'react';
import { FileCode, Sparkles } from 'lucide-react';

interface CodeSide {
  code: string;
  filename?: string;
  label?: string;
}

interface CodeDiffSlideProps {
  title: string;
  subtitle?: string;
  before: CodeSide;
  after: CodeSide;
  language?: string;
  /** 关键结论 */
  takeaway?: string;
  /** 高亮行号列表（从 1 开始），同时应用于前后两段 */
  highlightLines?: number[];
}

// 代码前后对比页：左（灰/反例） vs 右（emerald/修复后） 双栏代码块，可带行号与高亮行
export const CodeDiffSlide: React.FC<CodeDiffSlideProps> = ({
  title,
  subtitle,
  before,
  after,
  language = 'text',
  takeaway,
  highlightLines = [],
}) => {
  const hl = new Set(highlightLines);

  const renderLines = (code: string, accent: 'slate' | 'emerald') => {
    const lines = code.split('\n');
    return lines.map((line, i) => {
      const n = i + 1;
      const isHi = hl.has(n);
      const hiClass =
        accent === 'emerald'
          ? '-mx-4 px-4 bg-emerald-500/15 border-l-2 border-emerald-400'
          : '-mx-4 px-4 bg-rose-500/10 border-l-2 border-rose-400/70';
      return (
        <div key={i} className={`flex ${isHi ? hiClass : ''}`}>
          <span className="select-none text-slate-600 w-8 shrink-0 text-right pr-3">{n}</span>
          <span className={isHi ? 'text-white' : 'text-slate-300'}>{line || ' '}</span>
        </div>
      );
    });
  };

  const ext = language === 'text' ? 'txt' : language;

  return (
    <div className="space-y-4 max-w-5xl">
      <div>
        <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">{title}</h2>
        {subtitle && <p className="text-xs sm:text-sm text-indigo-300 mt-1">{subtitle}</p>}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* before */}
        <div className="rounded-2xl border border-slate-800 bg-slate-950 overflow-hidden text-xs">
          <div className="px-4 py-2 bg-slate-900 border-b border-slate-800 flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <FileCode className="h-4 w-4 text-slate-400" />
              <span className="font-mono text-slate-300 font-bold">{before.filename || `before.${ext}`}</span>
            </div>
            <span className="text-[10px] px-2 py-0.5 rounded bg-rose-500/20 text-rose-300 font-bold uppercase tracking-wider">
              {before.label || 'Before'}
            </span>
          </div>
          <pre className="p-4 font-mono text-xs leading-relaxed overflow-x-auto">
            <code>{renderLines(before.code, 'slate')}</code>
          </pre>
        </div>
        {/* after */}
        <div className="rounded-2xl border border-emerald-800/60 bg-slate-950 overflow-hidden text-xs">
          <div className="px-4 py-2 bg-slate-900 border-b border-emerald-800/60 flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <FileCode className="h-4 w-4 text-emerald-400" />
              <span className="font-mono text-emerald-200 font-bold">{after.filename || `after.${ext}`}</span>
            </div>
            <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-bold uppercase tracking-wider">
              {after.label || 'After'}
            </span>
          </div>
          <pre className="p-4 font-mono text-xs leading-relaxed overflow-x-auto">
            <code>{renderLines(after.code, 'emerald')}</code>
          </pre>
        </div>
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
