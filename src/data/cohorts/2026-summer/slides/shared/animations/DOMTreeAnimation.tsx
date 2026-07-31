'use client';
import React, { useCallback, useEffect, useState } from 'react';
import { Play, Pause, RotateCcw, ChevronLeft, ChevronRight } from 'lucide-react';

interface TreeNode {
  tag: string;
  attrs?: { key: string; value: string }[];
  children?: TreeNode[];
}

interface DOMStep {
  label: string;
  /** 当前步骤可见的标签名列表 */
  visibleTags: string[];
  desc?: string;
}

interface DOMTreeAnimationProps {
  tree: TreeNode[];
  steps: DOMStep[];
}

export const DOMTreeAnimation: React.FC<DOMTreeAnimationProps> = ({ tree, steps }) => {
  const [step, setStep] = useState(0);
  const [playing, setPlaying] = useState(false);
  const total = steps.length;

  const next = useCallback(() => setStep((s) => Math.min(s + 1, total - 1)), [total]);
  const prev = useCallback(() => setStep((s) => Math.max(s - 1, 0)), []);
  const reset = useCallback(() => {
    setStep(0);
    setPlaying(false);
  }, []);
  const toggle = useCallback(() => {
    if (step >= total - 1) setStep(0);
    setPlaying((p) => !p);
  }, [step, total]);

  useEffect(() => {
    if (!playing) return;
    if (step >= total - 1) {
      setPlaying(false);
      return;
    }
    const t = setTimeout(() => setStep((s) => s + 1), 1600);
    return () => clearTimeout(t);
  }, [playing, step, total]);

  const current = steps[step];
  const visible = new Set(current?.visibleTags ?? []);

  const renderNode = (node: TreeNode, depth: number, path: string): React.ReactNode => {
    if (!visible.has(node.tag)) {
      return (node.children ?? []).map((c, i) => renderNode(c, depth, `${path}.${i}`));
    }
    return (
      <div key={path} className="dom-node" style={{ marginLeft: depth * 18 }}>
        <div className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg border border-emerald-500/40 bg-emerald-500/10 mb-1.5">
          <span className="text-emerald-300 font-mono text-xs font-bold">&lt;{node.tag}&gt;</span>
          {node.attrs?.map((a) => (
            <span key={a.key} className="text-[10px] text-amber-300 font-mono">
              {a.key}=<span className="text-slate-300">&quot;{a.value}&quot;</span>
            </span>
          ))}
        </div>
        {(node.children ?? []).map((c, i) => renderNode(c, depth + 1, `${path}.${i}`))}
      </div>
    );
  };

  return (
    <div className="w-full">
      <style>{`
        @keyframes dom-fade { from { opacity: 0; transform: translateY(-4px) scale(0.96);} to { opacity: 1; transform: none; } }
        .dom-node { animation: dom-fade 0.4s ease-out both; }
      `}</style>
      <div className="h-1 bg-slate-800 rounded-full overflow-hidden mb-4">
        <div
          className="h-full bg-gradient-to-r from-emerald-500 to-cyan-500 transition-all duration-500"
          style={{ width: `${((step + 1) / (total || 1)) * 100}%` }}
        />
      </div>

      <div className="rounded-2xl bg-slate-950/60 border border-slate-700/60 p-5 min-h-[200px]">
        <div className="flex flex-col">
          {tree.map((n, i) => renderNode(n, 0, `${i}`))}
        </div>
        <div className="mt-3 text-center">
          <div className="inline-block px-3 py-1 rounded-md bg-emerald-500/15 border border-emerald-500/30 text-emerald-200 text-xs font-bold">
            {current?.label}
          </div>
          {current?.desc && (
            <p className="text-[11px] text-slate-400 mt-2 leading-snug max-w-md mx-auto">{current.desc}</p>
          )}
        </div>
      </div>

      <div className="flex items-center justify-between gap-2 pt-3 mt-3 border-t border-slate-700/60">
        <span className="text-[11px] text-slate-400 font-mono">
          Step {step + 1}/{total}
        </span>
        <div className="flex items-center gap-1.5">
          <button
            onClick={prev}
            disabled={step === 0}
            className="px-2.5 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-white text-xs font-medium disabled:opacity-40 disabled:cursor-not-allowed flex items-center gap-1"
          >
            <ChevronLeft className="h-3.5 w-3.5" />上一步
          </button>
          <button
            onClick={toggle}
            className="px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-medium flex items-center gap-1"
          >
            {playing ? <Pause className="h-3.5 w-3.5" /> : <Play className="h-3.5 w-3.5" />}
            {playing ? '暂停' : step >= total - 1 ? '重播' : '播放'}
          </button>
          <button
            onClick={next}
            disabled={step >= total - 1}
            className="px-2.5 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-white text-xs font-medium disabled:opacity-40 disabled:cursor-not-allowed flex items-center gap-1"
          >
            下一步<ChevronRight className="h-3.5 w-3.5" />
          </button>
          <button
            onClick={reset}
            className="px-2.5 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-white text-xs font-medium flex items-center gap-1"
          >
            <RotateCcw className="h-3.5 w-3.5" />重置
          </button>
        </div>
      </div>
    </div>
  );
};
