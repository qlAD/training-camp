'use client';
import React, { useCallback, useEffect, useState } from 'react';
import { Play, Pause, RotateCcw, ChevronLeft, ChevronRight } from 'lucide-react';

interface TableStep {
  label: string;
  highlight: 'table' | 'row' | 'column' | 'cell';
  desc?: string;
}

interface TableStructureAnimationProps {
  columns: string[];
  /** 二维数据行：每行为单元格数组（与 columns 对齐） */
  rows: (string | number)[][];
  tableName?: string;
  steps: TableStep[];
}

const MODE_BADGE: Record<TableStep['highlight'], string> = {
  table: 'bg-indigo-500/15 border-indigo-500/30 text-indigo-200',
  row: 'bg-emerald-500/15 border-emerald-500/30 text-emerald-200',
  column: 'bg-amber-500/15 border-amber-500/30 text-amber-200',
  cell: 'bg-violet-500/15 border-violet-500/30 text-violet-200',
};

export const TableStructureAnimation: React.FC<TableStructureAnimationProps> = ({ columns, rows, tableName, steps }) => {
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
    const t = setTimeout(() => setStep((s) => s + 1), 1700);
    return () => clearTimeout(t);
  }, [playing, step, total]);

  const current = steps[step];
  const mode = current?.highlight ?? 'table';

  const tableBorder = mode === 'table' ? 'border-indigo-400 shadow-lg shadow-indigo-500/20' : 'border-slate-700/70';
  const rowBorder = mode === 'row';
  const colMode = mode === 'column';
  const cellMode = mode === 'cell';

  return (
    <div className="w-full">
      <style>{`
        @keyframes ts-scan-h { 0%{ transform: translateY(0); opacity: 0.6;} 100%{ transform: translateY(100%); opacity: 0;} }
        @keyframes ts-scan-v { 0%{ transform: translateX(0); opacity: 0.6;} 100%{ transform: translateX(100%); opacity: 0;} }
        @keyframes ts-pulse { 0%,100%{ opacity: 0.5;} 50%{ opacity: 1;} }
      `}</style>
      <div className="h-1 bg-slate-800 rounded-full overflow-hidden mb-4">
        <div
          className="h-full bg-gradient-to-r from-indigo-500 via-amber-500 to-violet-500 transition-all duration-500"
          style={{ width: `${((step + 1) / (total || 1)) * 100}%` }}
        />
      </div>

      <div className="rounded-2xl bg-slate-950/60 border border-slate-700/60 p-5">
        {tableName && <div className="text-xs text-slate-400 mb-2 font-mono">📋 {tableName}</div>}
        <div className={`relative overflow-hidden rounded-xl border-2 transition-all duration-300 ${tableBorder}`}>
          <table className="w-full text-xs">
            <thead>
              <tr>
                {columns.map((c, ci) => (
                  <th
                    key={ci}
                    className={`px-3 py-2 text-left font-bold border-b border-slate-700/70 transition-colors ${
                      colMode ? 'bg-amber-500/20 text-amber-200 border-r-2 border-amber-400/60 last:border-r-0' : 'bg-slate-800/80 text-slate-300'
                    }`}
                    style={{ animation: colMode ? 'ts-pulse 1.3s ease-in-out infinite' : undefined }}
                  >
                    {c}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row, ri) => (
                <tr key={ri} className={rowBorder ? 'border-l-4 border-l-emerald-400' : ''}>
                  {row.map((cell, ci) => (
                    <td
                      key={ci}
                      className={`px-3 py-2 border-b border-slate-800/70 transition-colors ${
                        cellMode
                          ? 'border border-violet-400/50 bg-violet-500/10 text-violet-100'
                          : rowBorder
                          ? 'bg-emerald-500/5 text-slate-200'
                          : 'text-slate-300'
                      }`}
                      style={{ animation: cellMode ? 'ts-pulse 1.3s ease-in-out infinite' : undefined }}
                    >
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
          {/* scan overlay */}
          {mode === 'row' && (
            <div className="pointer-events-none absolute inset-0 overflow-hidden">
              <div className="absolute left-0 right-0 h-6 bg-emerald-400/20" style={{ animation: 'ts-scan-h 1.6s ease-in-out infinite' }} />
            </div>
          )}
          {mode === 'column' && (
            <div className="pointer-events-none absolute inset-0 overflow-hidden">
              <div className="absolute top-0 bottom-0 w-8 bg-amber-400/20" style={{ animation: 'ts-scan-v 1.6s ease-in-out infinite' }} />
            </div>
          )}
        </div>

        <div className="mt-4 text-center">
          <div className={`inline-block px-3 py-1 rounded-md text-xs font-bold border ${MODE_BADGE[mode]}`}>
            高亮层级：{mode}
          </div>
          <div className="block mt-1 text-[11px] text-slate-400 font-bold">{current?.label}</div>
          {current?.desc && (
            <p className="text-[11px] text-slate-400 mt-1 leading-snug max-w-md mx-auto">{current.desc}</p>
          )}
        </div>
      </div>

      <div className="flex items-center justify-between gap-2 pt-3 mt-3 border-t border-slate-700/60">
        <span className="text-[11px] text-slate-400 font-mono">Step {step + 1}/{total}</span>
        <div className="flex items-center gap-1.5">
          <button onClick={prev} disabled={step === 0} className="px-2.5 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-white text-xs font-medium disabled:opacity-40 disabled:cursor-not-allowed flex items-center gap-1"><ChevronLeft className="h-3.5 w-3.5" />上一步</button>
          <button onClick={toggle} className="px-3 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-medium flex items-center gap-1">{playing ? <Pause className="h-3.5 w-3.5" /> : <Play className="h-3.5 w-3.5" />}{playing ? '暂停' : step >= total - 1 ? '重播' : '播放'}</button>
          <button onClick={next} disabled={step >= total - 1} className="px-2.5 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-white text-xs font-medium disabled:opacity-40 disabled:cursor-not-allowed flex items-center gap-1">下一步<ChevronRight className="h-3.5 w-3.5" /></button>
          <button onClick={reset} className="px-2.5 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-white text-xs font-medium flex items-center gap-1"><RotateCcw className="h-3.5 w-3.5" />重置</button>
        </div>
      </div>
    </div>
  );
};
