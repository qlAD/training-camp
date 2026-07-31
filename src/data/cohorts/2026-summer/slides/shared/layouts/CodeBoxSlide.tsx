'use client';

import React, { useState } from 'react';
import { Check, Copy, FileCode, Sparkles } from 'lucide-react';

interface CodeBoxSlideProps {
  title: string;
  subtitle?: string;
  code: string;
  language?: string;
  filename?: string;
  /** 关键结论 */
  takeaway?: string;
  /** 是否显示行号，默认 true */
  showLineNumbers?: boolean;
  /** 高亮行号列表（从 1 开始） */
  highlightLines?: number[];
}

// 代码框页：标题 + 带行号/复制按钮/文件名的代码块 + 关键结论
export const CodeBoxSlide: React.FC<CodeBoxSlideProps> = ({
  title,
  subtitle,
  code,
  language = 'text',
  filename,
  takeaway,
  showLineNumbers = true,
  highlightLines = [],
}) => {
  const [copied, setCopied] = useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  const lines = code.split('\n');
  const highlightSet = new Set(highlightLines);

  return (
    <div className="space-y-4 max-w-5xl">
      <div>
        <h2 className="text-2xl font-bold text-white tracking-tight">{title}</h2>
        {subtitle && <p className="text-xs text-indigo-300 mt-1">{subtitle}</p>}
      </div>
      <div className="rounded-2xl border border-slate-800 bg-slate-950 overflow-hidden text-xs">
        <div className="px-4 py-2 bg-slate-900 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <FileCode className="h-4 w-4 text-indigo-400" />
            <span className="font-mono text-slate-300 font-bold">
              {filename || `code-snippet.${language === 'text' ? 'txt' : language}`}
            </span>
            {language && language !== 'text' && (
              <span className="text-[10px] px-1.5 py-0.5 rounded bg-slate-800 text-slate-400 font-mono uppercase">
                {language}
              </span>
            )}
          </div>
          <button
            onClick={handleCopy}
            className="flex items-center space-x-1 px-2.5 py-1 rounded bg-slate-800 hover:bg-slate-700 text-slate-300 text-[11px]"
          >
            {copied ? <Check className="h-3.5 w-3.5 text-emerald-400" /> : <Copy className="h-3.5 w-3.5" />}
            <span>{copied ? '已复制' : '复制代码'}</span>
          </button>
        </div>
        <div className="overflow-x-auto">
          <pre className="p-4 text-emerald-300 font-mono text-xs leading-relaxed">
            <code>
              {lines.map((line, i) => {
                const lineNo = i + 1;
                const isHi = highlightSet.has(lineNo);
                return (
                  <div
                    key={i}
                    className={`flex ${isHi ? '-mx-4 px-4 bg-indigo-500/15 border-l-2 border-indigo-400' : ''}`}
                  >
                    {showLineNumbers && (
                      <span className="select-none text-slate-600 w-8 shrink-0 text-right pr-3">
                        {lineNo}
                      </span>
                    )}
                    <span className={isHi ? 'text-white' : ''}>{line || ' '}</span>
                  </div>
                );
              })}
            </code>
          </pre>
        </div>
      </div>
      {takeaway && (
        <div className="p-3 rounded-xl bg-indigo-950/60 border border-indigo-800/60 text-xs text-indigo-200 flex items-center space-x-2">
          <Sparkles className="h-4 w-4 text-indigo-400 shrink-0" />
          <span><strong>关键结论：</strong> {takeaway}</span>
        </div>
      )}
    </div>
  );
};
