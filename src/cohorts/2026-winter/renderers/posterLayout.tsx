'use client';

import React from 'react';
import type { PosterConfig, BootcampCohortCore } from '@/lib';
import type { WinterMetaExtra } from '../types';

export interface WinterPosterLayoutProps {
  config: PosterConfig;
  meta: BootcampCohortCore<WinterMetaExtra>;
  canvasRef: React.RefObject<HTMLDivElement | null>;
  isExporting?: boolean;
}

/**
 * 2026 寒假专属海报画布（16:9 横版雪花主题）。
 * 严格按共享 PosterLayoutProps 契约：config / meta / canvasRef / isExporting?
 * canvasRef 必须挂到最外层 DOM 上（否则 html-to-image PNG 导出会失败）。
 */
export const WinterPosterLayout: React.FC<WinterPosterLayoutProps> = ({
  config,
  meta,
  canvasRef,
  isExporting = false,
}) => {
  return (
    <div
      ref={canvasRef}
      className={`relative w-full max-w-6xl mx-auto aspect-[16/9] overflow-hidden ${
        isExporting ? 'rounded-none border-0 shadow-none' : 'rounded-3xl border-4 border-white shadow-2xl'
      }`}
      style={{
        background:
          'linear-gradient(135deg, #eff6ff 0%, #e0f2fe 35%, #f0f9ff 65%, #ecfeff 100%)',
      }}
    >
      {/* 雪花装饰 */}
      {Array.from({ length: 24 }).map((_, i) => {
        const top = (i * 37) % 92;
        const left = (i * 53 + 13) % 94;
        const size = 12 + ((i * 7) % 18);
        const opacity = 0.15 + ((i * 13) % 50) / 100;
        return (
          <div
            key={i}
            className="absolute text-sky-300 font-black select-none pointer-events-none"
            style={{
              top: `${top}%`,
              left: `${left}%`,
              fontSize: size,
              opacity,
              transform: `rotate(${i * 15}deg)`,
            }}
          >
            ❄
          </div>
        );
      })}

      <div className="relative z-10 h-full grid grid-cols-12 px-10 py-10">
        {/* 左：标题 + slogan + highlights */}
        <div className="col-span-7 flex flex-col justify-between pr-6">
          <div>
            {config.headlineBadge ? (
              <div className="inline-flex items-center space-x-2 px-3 py-1.5 bg-white/80 backdrop-blur rounded-full border border-sky-200 text-sky-700 text-xs font-bold mb-4 shadow-sm">
                <span>❄</span>
                <span>{config.headlineBadge.text}</span>
              </div>
            ) : null}
            <h1 className="text-5xl font-black text-slate-800 leading-[1.05] mb-3">
              {config.title}
            </h1>
            <p className="text-xl font-semibold text-sky-700 mb-5">{config.subtitle}</p>
            <blockquote className="text-lg text-slate-700 italic border-l-4 border-sky-300 pl-4 mb-7">
              「{config.slogan}」
            </blockquote>
          </div>

          <div className="space-y-3 mb-6">
            <div className="text-[11px] uppercase tracking-[0.3em] text-slate-400 font-bold">
              本 期 三 大 亮 点
            </div>
            <div className="grid grid-cols-3 gap-3">
              {config.highlights.slice(0, 3).map((h: { title: string; desc: string }, i: number) => (
                <div
                  key={i}
                  className="bg-white/80 backdrop-blur rounded-2xl border border-sky-100 p-4 shadow-sm"
                >
                  <div className="text-[10px] text-sky-600 font-black uppercase mb-1">
                    0{i + 1}
                  </div>
                  <div className="text-sm font-bold text-slate-800 mb-1">{h.title}</div>
                  <div className="text-[11px] text-slate-500 leading-relaxed">{h.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 右：项目 + 时间地点 + 联系人 + QR */}
        <div className="col-span-5 flex flex-col justify-between pl-6">
          <div className="space-y-3">
            <div className="text-[11px] uppercase tracking-[0.3em] text-slate-400 font-bold">
              实 战 项 目
            </div>
            {config.projects.slice(0, 2).map((p: { name: string; tag: string; desc: string }, i: number) => (
              <div
                key={i}
                className="bg-white border border-slate-100 rounded-2xl p-4 shadow-sm"
              >
                <div className="flex items-center space-x-2 mb-1.5">
                  <span className="px-2 py-0.5 text-[10px] font-black bg-sky-100 text-sky-700 rounded-lg">
                    {p.tag}
                  </span>
                  <span className="text-sm font-bold text-slate-800">{p.name}</span>
                </div>
                <p className="text-[11px] text-slate-500 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>

          <div className="bg-white/90 backdrop-blur rounded-2xl border border-slate-100 p-5 shadow-sm space-y-2">
            <div className="flex items-start justify-between">
              <div>
                <div className="text-[10px] uppercase tracking-[0.25em] text-slate-400 font-bold mb-1">
                  时间地点
                </div>
                <div className="text-sm font-bold text-slate-800">{config.timeLocation}</div>
                <div className="text-[11px] text-slate-500 mt-1">
                  面向对象：{config.targetAudience}
                </div>
              </div>
              <div className="w-20 h-20 bg-gradient-to-br from-sky-500 via-sky-600 to-blue-700 rounded-xl flex items-center justify-center text-white text-[10px] font-bold text-center leading-tight shadow-md">
                <div>
                  <div className="mb-1">QR</div>
                  <div>{config.qrLabel ?? '扫码入群'}</div>
                </div>
              </div>
            </div>
            <div className="pt-3 border-t border-slate-100">
              <div className="text-[10px] uppercase tracking-[0.25em] text-slate-400 font-bold mb-1">
                联系方式 / 主办方
              </div>
              <div className="text-xs text-slate-700 font-semibold">
                {config.contactName} · {config.contactPhone}
              </div>
              <div className="text-[11px] text-slate-500">{config.organizer}</div>
            </div>
          </div>
        </div>
      </div>

      {/* 底部渐变条 + meta 文字 */}
      <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-sky-400 via-cyan-400 to-blue-500" />
      {!isExporting && (
        <div className="absolute bottom-3 right-4 text-[10px] text-sky-500/70 font-bold tracking-wider">
          {meta.season} · {meta.id} · PREVIEW MODE
        </div>
      )}
    </div>
  );
};

export default WinterPosterLayout;
