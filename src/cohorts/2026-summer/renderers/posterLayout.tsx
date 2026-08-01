import React from 'react';
import {
  Sparkles,
  CheckCircle2,
  QrCode,
  Phone,
  Flame,
} from 'lucide-react';
import type { BootcampCohortCore, PosterConfig } from '@/lib';
import type { SummerMetaExtra } from '../types';

export interface SummerPosterLayoutProps {
  config: PosterConfig;
  meta: BootcampCohortCore<SummerMetaExtra>;
  canvasRef?: React.RefObject<HTMLDivElement | null>;
  isExporting?: boolean;
}

/**
 * 2026 暑期专属海报布局（等价于原 DefaultPosterLayout）。
 * 期数自行维护自己的主题色、排版、组件比例；新增期数想完全不同的视觉（如横版、节日风）
 * 时，只需在自己 cohorts/<id>/renderers/posterLayout.tsx 里改，不触碰共享层。
 */
export const SummerPosterLayout: React.FC<SummerPosterLayoutProps> = ({
  config,
  meta,
  canvasRef,
  isExporting = false,
}) => {
  const slidesCount = Math.max(0, meta.materialsCount - 2);

  // 避免 Tailwind 动态模板拼接（静态扫描不识别），显式枚举所有 class 字面量
  const roadmapGridClass =
    slidesCount <= 1 ? 'grid-cols-1' :
    slidesCount <= 2 ? 'grid-cols-2' :
    slidesCount <= 3 ? 'grid-cols-3' :
    slidesCount <= 4 ? 'grid-cols-4' :
    slidesCount <= 5 ? 'grid-cols-5' :
    slidesCount <= 6 ? 'grid-cols-6' :
    slidesCount <= 14 ? 'grid-cols-7' : 'grid-cols-8';

  return (
    <div
      ref={canvasRef}
      className={`w-[540px] shrink-0 ${
        isExporting ? 'rounded-none border-0 shadow-none' : 'rounded-3xl border-2'
      } overflow-hidden transition-all relative aspect-[9/16] ${
        config.theme === 'tech'
          ? 'bg-gradient-to-b from-slate-950 via-slate-900 to-indigo-950 text-white border-amber-500/30'
          : config.theme === 'academic'
          ? 'bg-gradient-to-b from-indigo-900 via-indigo-950 to-slate-900 text-white border-indigo-400/30'
          : 'bg-white text-slate-900 border-slate-200'
      }`}
    >
      {/* Background Architectural Sketch Line-art Watermarks */}
      {(config.showSketchWatermark ?? true) && (
        <>
          <div className="absolute top-12 -left-12 w-64 h-64 opacity-20 pointer-events-none select-none transform -rotate-12">
            <img
              src="/school-sketch.svg"
              alt="学院Sketch线稿水印"
              className={`w-full h-full object-contain ${config.theme !== 'modern' ? 'invert brightness-125' : 'brightness-90'}`}
            />
          </div>
          <div className="absolute bottom-20 -right-12 w-72 h-72 opacity-25 pointer-events-none select-none transform rotate-45">
            <img
              src="/club-sketch.svg"
              alt="社团Sketch线稿水印"
              className={`w-full h-full object-contain ${config.theme !== 'modern' ? 'invert brightness-125' : 'brightness-90'}`}
            />
          </div>
        </>
      )}

      <div className="p-8 space-y-6 relative z-10">
        {/* Poster Top Brand Header */}
        <div className="flex items-center justify-between border-b pb-4 border-current/15">
          <div className="flex items-center space-x-3">
            {config.logoStyle === 'sketch' ? (
              <div className={`flex items-center space-x-2 px-2.5 py-1.5 rounded-xl shadow-xs border ${
                config.theme === 'modern'
                  ? 'bg-slate-100 border-slate-200 text-slate-900'
                  : 'bg-slate-900 border-slate-700 text-white'
              }`}>
                <img
                  src="/school-sketch.svg"
                  alt="软件学院 Sketch"
                  className={`h-7 w-auto object-contain ${config.theme !== 'modern' ? 'invert' : ''}`}
                />
                <div className={`h-[18px] w-px ${config.theme === 'modern' ? 'bg-slate-300' : 'bg-slate-700'}`} />
                <img
                  src="/club-sketch.svg"
                  alt="AI创新应用社 Sketch"
                  className={`h-7 w-auto object-contain ${config.theme !== 'modern' ? 'invert' : ''}`}
                />
              </div>
            ) : (
              <div className={`flex items-center space-x-2 px-2.5 py-1.5 rounded-xl shadow-xs border transition-all ${
                config.theme === 'modern'
                  ? 'bg-slate-100 border-slate-200 text-slate-900'
                  : config.theme === 'tech'
                  ? 'bg-slate-900 border-slate-700 text-white'
                  : 'bg-indigo-950 border-indigo-700 text-white'
              }`}>
                <img src="/school-logo.svg" alt="软件学院 Logo" className="h-7 w-auto object-contain" />
                <div className={`h-4.5 w-px ${config.theme === 'modern' ? 'bg-slate-300' : 'bg-slate-600'}`} />
                <img src="/club-logo.svg" alt="AI创新应用社 Logo" className="h-7 w-auto object-contain" />
              </div>
            )}

            <div>
              <span className="text-xs font-bold tracking-wider block">{config.organizer}</span>
              <span className="text-[10px] opacity-80 font-medium">软件学院官方社团 · {meta.year} {meta.season}集训</span>
            </div>
          </div>

          <div className={`px-2.5 py-1 rounded-full text-[10px] font-bold border ${
            config.theme === 'tech' ? 'bg-amber-400/10 text-amber-300 border-amber-400/30' : 'bg-indigo-500/10 text-indigo-500 border-indigo-500/30'
          }`}>
            全程免费 · 软件学院指导
          </div>
        </div>

        {/* Main Headline */}
        <div className="space-y-2 text-center">
          {config.headlineBadge && (
            <div className={`inline-flex items-center space-x-1.5 px-3 py-1 rounded-full text-xs font-semibold ${
              config.theme === 'tech' ? 'bg-amber-400 text-slate-950' : 'bg-indigo-600 text-white'
            }`}>
              {config.headlineBadge.icon === 'sparkles' && <Sparkles className="h-3.5 w-3.5" />}
              <span>{config.headlineBadge.text}</span>
            </div>
          )}

          <h2 className="text-2xl sm:text-3xl font-black tracking-tight leading-tight">
            {config.title}
          </h2>

          <p className={`text-sm font-bold tracking-wide ${
            config.theme === 'tech' ? 'text-amber-300' : config.theme === 'academic' ? 'text-indigo-200' : 'text-indigo-600'
          }`}>
            &ldquo;{config.slogan}&rdquo;
          </p>
        </div>

        {/* Highlights 4 Cards */}
        <div className="grid grid-cols-2 gap-3">
          {config.highlights.map((h, idx) => (
            <div
              key={idx}
              className={`p-3 rounded-xl border text-left ${
                config.theme === 'modern'
                  ? 'bg-slate-50 border-slate-200'
                  : 'bg-white/5 border-white/10'
              }`}
            >
              <div className="flex items-center space-x-1.5 mb-1">
                <CheckCircle2 className={`h-4 w-4 ${
                  config.theme === 'tech' ? 'text-amber-400' : 'text-indigo-400'
                }`} />
                <span className="font-bold text-xs">{h.title}</span>
              </div>
              <p className="text-[10px] opacity-80 leading-snug">{h.desc}</p>
            </div>
          ))}
        </div>

        {/* Two Projects Overview */}
        <div className={`p-4 rounded-2xl border ${
          config.theme === 'modern' ? 'bg-slate-50 border-slate-200' : 'bg-white/5 border-white/10'
        }`}>
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-bold flex items-center space-x-1">
              <Flame className="h-3.5 w-3.5 text-orange-500" />
              <span>{slidesCount} 天项目实战演练</span>
            </span>
            <span className="text-[10px] opacity-70">结营即拥有可交付项目作品</span>
          </div>

          <div className="space-y-2 text-xs">
            {config.projects.map((p, idx) => (
              <div key={idx} className="flex items-center justify-between p-2 rounded-lg bg-black/10">
                <div>
                  <span className="font-bold block">{p.name}</span>
                  <span className="text-[10px] opacity-75">{p.desc}</span>
                </div>
                <span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-indigo-500/20 text-indigo-300">
                  {p.tag}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Days Compact Roadmap */}
        {slidesCount > 0 && (
          <div className="space-y-1.5 text-center">
            <span className="text-[10px] font-bold uppercase tracking-wider opacity-70">
              {slidesCount} 天极速进化路线图
            </span>
            <div className={`grid gap-1 text-[9px] font-semibold ${roadmapGridClass}`}>
              {Array.from({ length: slidesCount }, (_, i) => i + 1).map((day) => (
                <div
                  key={day}
                  className={`p-1.5 rounded-lg border text-center ${
                    config.theme === 'modern' ? 'bg-slate-100 border-slate-200' : 'bg-white/10 border-white/10'
                  }`}
                >
                  D{day}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Footer Contact Person Avatar Card & QR Section */}
        <div className={`pt-4 border-t border-current/10 flex items-center justify-between gap-4`}>
          <div className="flex items-center space-x-3 text-xs max-w-[280px]">
            <div className="relative shrink-0">
              {config.customAvatarUrl ? (
                <img
                  src={config.customAvatarUrl}
                  alt={config.contactName}
                  className="w-[52px] h-[52px] rounded-full object-cover border-2 border-amber-400 shadow-md"
                />
              ) : (
                <div className={`w-[52px] h-[52px] rounded-full flex items-center justify-center font-black text-base border-2 shadow-sm ${
                  config.theme === 'tech'
                    ? 'bg-amber-400 text-slate-950 border-amber-300'
                    : config.theme === 'academic'
                    ? 'bg-indigo-600 text-white border-indigo-300'
                    : 'bg-indigo-600 text-white border-indigo-200'
                }`}>
                  {config.contactName.slice(0, 1) || '乔'}
                </div>
              )}
              <span className="absolute bottom-0 right-0 w-3.5 h-3.5 rounded-full bg-emerald-500 border-2 border-slate-900" title="在线接答" />
            </div>

            <div className="space-y-0.5 overflow-hidden">
              <div className="flex items-center space-x-1.5 font-extrabold text-sm tracking-tight truncate">
                <span>{config.contactName}</span>
                <span className={`px-1.5 py-0.2 rounded text-[10px] font-bold border ${
                  config.theme === 'tech'
                    ? 'bg-amber-400/20 text-amber-300 border-amber-400/40'
                    : 'bg-indigo-500/20 text-indigo-300 border-indigo-400/40'
                }`}>
                  {config.contactTitle || '软件学院指导老师'}
                </span>
              </div>
              <div className="flex items-center space-x-1 text-[11px] opacity-90 font-medium truncate">
                <Phone className="h-3 w-3 shrink-0" />
                <span>{config.contactPhone}</span>
              </div>
              <div className="text-[10px] opacity-75 truncate">
                面向：{config.targetAudience}
              </div>
            </div>
          </div>

          <div className="text-center shrink-0">
            <div className={`w-28 h-28 sm:w-32 sm:h-32 p-2 rounded-2xl border bg-white text-slate-900 flex flex-col items-center justify-center shadow-md relative overflow-hidden transition-all ${
              config.theme === 'tech' ? 'border-amber-400 ring-2 ring-amber-400/20' : 'border-indigo-500 ring-2 ring-indigo-500/20'
            }`}>
              {config.customQrUrl ? (
                <img
                  src={config.customQrUrl}
                  alt="招募二维码"
                  className="w-full h-full object-contain rounded-xl"
                />
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-center relative bg-slate-50/80 rounded-xl p-1 border border-slate-200">
                  <QrCode className="w-full h-full text-slate-900" />
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <span className="bg-indigo-600 text-white font-black text-[9px] px-1.5 py-0.5 rounded-md shadow-xs border border-white/60">
                      AI 社
                    </span>
                  </div>
                </div>
              )}
            </div>
            <span className="text-[10px] font-bold block mt-1.5 opacity-90 tracking-tight">
              {config.qrLabel || '扫码进群 · 抢先报名'}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
