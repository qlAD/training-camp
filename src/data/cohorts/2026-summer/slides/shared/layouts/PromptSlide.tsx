'use client';

import React, { useState } from 'react';
import { Check, Copy, Terminal, Wand2 } from 'lucide-react';

interface PromptSlideProps {
  title: string;
  subtitle?: string;
  role: string;
  task: string;
  stack: string;
  /** 约束条件，可选项 */
  constraints?: string;
  /** 输出要求，可选项 */
  outputFormat?: string;
  template: string;
  takeaway?: string;
}

// 结构化提示词卡片页：标题 + 五段式（角色/任务/栈/约束/输出）+ 模板 + 复制按钮
export const PromptSlide: React.FC<PromptSlideProps> = ({
  title,
  subtitle,
  role,
  task,
  stack,
  constraints,
  outputFormat,
  template,
  takeaway,
}) => {
  const [copied, setCopied] = useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText(template);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <div className="space-y-4 max-w-5xl">
      <div>
        <div className="inline-flex items-center space-x-1.5 px-2.5 py-1 rounded-md bg-amber-500/15 border border-amber-500/30 text-amber-300 text-[11px] font-bold mb-2">
          <Wand2 className="h-3.5 w-3.5" />
          <span>结构化提示词</span>
        </div>
        <h2 className="text-2xl font-bold text-white tracking-tight">{title}</h2>
        {subtitle && <p className="text-xs text-indigo-300 mt-1">{subtitle}</p>}
      </div>
      <div className="rounded-2xl border border-amber-500/40 bg-slate-950 overflow-hidden text-xs">
        <div className="px-4 py-2.5 bg-amber-500/10 border-b border-amber-500/30 flex items-center justify-between">
          <div className="flex items-center space-x-2 text-amber-300 font-bold">
            <Terminal className="h-4 w-4" />
            <span>AI 万能结构化提示词 (Prompt Template)</span>
          </div>
          <button
            onClick={handleCopy}
            className="flex items-center space-x-1 px-3 py-1 rounded-lg bg-amber-500 text-slate-950 font-bold text-[11px] hover:bg-amber-400"
          >
            {copied ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
            <span>{copied ? '提示词已复制' : '一键复制 Prompt'}</span>
          </button>
        </div>
        <div className="p-4 space-y-3">
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-[11px] text-slate-400 pb-2 border-b border-slate-800">
            <div><strong className="text-amber-400">角色：</strong> {role}</div>
            <div><strong className="text-amber-400">任务：</strong> {task}</div>
            <div><strong className="text-amber-400">技术栈：</strong> {stack}</div>
            {constraints && (
              <div className="col-span-2 sm:col-span-3"><strong className="text-amber-400">约束：</strong> {constraints}</div>
            )}
            {outputFormat && (
              <div className="col-span-2 sm:col-span-3"><strong className="text-amber-400">输出：</strong> {outputFormat}</div>
            )}
          </div>
          <pre className="p-3 rounded-xl bg-slate-900 text-slate-200 font-mono text-xs whitespace-pre-wrap leading-relaxed border border-slate-800">
            {template}
          </pre>
        </div>
      </div>
      {takeaway && (
        <div className="p-3 rounded-xl bg-amber-950/40 border border-amber-800/60 text-xs text-amber-200 flex items-center space-x-2">
          <Wand2 className="h-4 w-4 text-amber-400 shrink-0" />
          <span><strong>使用要点：</strong> {takeaway}</span>
        </div>
      )}
    </div>
  );
};
