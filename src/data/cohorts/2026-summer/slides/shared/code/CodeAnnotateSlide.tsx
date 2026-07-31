import React from 'react';
import { FileCode, Sparkles } from 'lucide-react';

interface Annotation {
  /** 行号（从 1 开始） */
  line: number;
  text: string;
  tone?: 'info' | 'warning' | 'success';
}

interface CodeAnnotateSlideProps {
  title: string;
  subtitle?: string;
  code: string;
  language?: string;
  filename?: string;
  annotations: Annotation[];
  /** 关键结论 */
  takeaway?: string;
}

const toneMap: Record<NonNullable<Annotation['tone']>, { border: string; bg: string; badge: string }> = {
  info: { border: 'border-cyan-400', bg: 'bg-cyan-500/10', badge: 'bg-cyan-500/20 text-cyan-300' },
  warning: { border: 'border-amber-400', bg: 'bg-amber-500/10', badge: 'bg-amber-500/20 text-amber-300' },
  success: { border: 'border-emerald-400', bg: 'bg-emerald-500/10', badge: 'bg-emerald-500/20 text-emerald-300' },
};

// 代码带行标注页：高亮指定行 + 右侧/下方按行号分组的旁注说明
export const CodeAnnotateSlide: React.FC<CodeAnnotateSlideProps> = ({
  title,
  subtitle,
  code,
  language = 'text',
  filename,
  annotations,
  takeaway,
}) => {
  const lines = code.split('\n');
  const annByLine = new Map<number, Annotation>();
  annotations.forEach((a) => annByLine.set(a.line, a));
  const ext = language === 'text' ? 'txt' : language;

  return (
    <div className="space-y-4 max-w-5xl">
      <div>
        <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">{title}</h2>
        {subtitle && <p className="text-xs sm:text-sm text-indigo-300 mt-1">{subtitle}</p>}
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="rounded-2xl border border-slate-800 bg-slate-950 overflow-hidden text-xs">
          <div className="px-4 py-2 bg-slate-900 border-b border-slate-800 flex items-center space-x-2">
            <FileCode className="h-4 w-4 text-indigo-400" />
            <span className="font-mono text-slate-300 font-bold">{filename || `code.${ext}`}</span>
          </div>
          <pre className="p-4 font-mono text-xs leading-relaxed overflow-x-auto">
            <code>
              {lines.map((line, i) => {
                const n = i + 1;
                const ann = annByLine.get(n);
                const t = ann ? toneMap[ann.tone || 'info'] : null;
                return (
                  <div key={i} className={`flex ${t ? `-mx-4 px-4 ${t.bg} border-l-2 ${t.border}` : ''}`}>
                    <span className="select-none text-slate-600 w-8 shrink-0 text-right pr-3">{n}</span>
                    <span className={t ? 'text-white' : 'text-slate-300'}>{line || ' '}</span>
                  </div>
                );
              })}
            </code>
          </pre>
        </div>
        <div className="space-y-2">
          <div className="text-[11px] text-slate-400 font-bold uppercase tracking-wider">行标注</div>
          {annotations.map((a, i) => {
            const t = toneMap[a.tone || 'info'];
            return (
              <div key={i} className="p-3 rounded-xl border border-slate-700/80 bg-slate-800/80 flex items-start space-x-3">
                <span className={`shrink-0 px-2 py-0.5 rounded ${t.badge} font-mono font-bold text-[10px]`}>L{a.line}</span>
                <span className="text-xs text-slate-200 leading-snug">{a.text}</span>
              </div>
            );
          })}
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
