'use client';

import React from 'react';
import type {
  BootcampCohortCore,
  PlanSection,
} from '@/lib';
import type { WinterMetaExtra, WinterPlanEnrichment } from '../types';

export interface WinterPlanLayoutProps {
  meta: BootcampCohortCore<WinterMetaExtra>;
  planData: PlanSection<WinterPlanEnrichment>[];
  printViewId?: string;
  printViewRef?: React.RefObject<HTMLDivElement | null>;
}

/**
 * 2026 寒假方案布局（策划中占位）。
 * 类型签名严格按 workshop 约定（meta / planData / printViewRef / printViewId），
 * 未来方案写好时，把占位 UI 替换为真实章节渲染即可，共享 workshop 层零改动。
 */
export const WinterPlanLayout: React.FC<WinterPlanLayoutProps> = ({
  meta,
  planData,
  printViewId = 'printable-plan-document',
  printViewRef,
}) => {
  return (
    <div
      id={printViewId}
      ref={printViewRef as any}
      className="printable-document bg-white rounded-2xl p-10 sm:p-16 border border-slate-200 shadow-xs space-y-8 relative overflow-hidden"
    >
      <div className="text-center space-y-4">
        <div className="text-[11px] uppercase tracking-[0.35em] text-sky-500 font-bold">
          2026 Winter · {meta.id}
        </div>
        <h1 className="text-3xl md:text-4xl font-black text-slate-800">
          {meta.title} · 方案文档策划中
        </h1>
        <p className="text-slate-500 max-w-2xl mx-auto">
          完整方案结构（{planData.length} 个章节）正在紧张筹备中，
          发布后将在此处以 PDF 规范排版呈现，并支持一键导出。
        </p>
        <div className="inline-block px-4 py-1.5 rounded-full bg-sky-50 border border-sky-200 text-sky-700 text-xs font-bold">
          {meta.statusText}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
        {Array.from({ length: Math.max(1, planData.length) }).map((_, i) => {
          const s = planData[i];
          return (
            <div
              key={s?.id || i}
              className="p-4 rounded-2xl border border-dashed border-sky-200 bg-sky-50/40 space-y-1"
            >
              <div className="text-[10px] font-bold text-sky-500 uppercase tracking-wider">
                CH. {String(i + 1).padStart(2, '0')}
              </div>
              <div className="text-sm font-bold text-slate-800">
                {s?.title || '章节占位'}
              </div>
              <div className="text-[11px] text-slate-500 leading-relaxed">
                {s?.content?.slice(0, 60) || '详细内容筹备中…'}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default WinterPlanLayout;
