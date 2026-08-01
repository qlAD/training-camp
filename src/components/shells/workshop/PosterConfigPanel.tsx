'use client';

import React from 'react';
import { Palette, Upload, Download } from 'lucide-react';
import type { PosterConfig } from '@/lib';
import { ExportButton } from '@/components/ui/buttons/ExportButton';

/** 海报配置面板（共享交互壳：左侧所有输入控件 + 顶部主题切换）。
 *  严格受控模式：config/setConfig 由上层 shell 持有 state，面板只做 UI 与回调。 */
export interface PosterConfigPanelProps {
  /** 当前期数海报 meta（用于导出文件名生成：<year>-<season>_宣传海报_<theme>.png） */
  meta: { id: string; year: string; season: string; title: string };
  config: PosterConfig;
  setConfig: (updater: (prev: PosterConfig) => PosterConfig) => void;
  /** 是否正在导出（导出按钮 loading 态） */
  isExporting?: boolean;
  /** 点导出按钮触发（shell 层接：调用 exportPng(canvasRef, meta, config) → setIsExporting 开关） */
  onExport: () => void;
  className?: string;
}

/** 3 种海报主题（通用配色，期数专属主题由期数 posterLayout 自定义） */
const THEME_OPTIONS: Array<{ value: NonNullable<PosterConfig['theme']>; label: string; activeClass: string }> = [
  { value: 'tech', label: '🌌 极光黑金', activeClass: 'bg-slate-900 text-amber-300 shadow-xs' },
  { value: 'academic', label: '🎓 学院蓝', activeClass: 'bg-indigo-600 text-white shadow-xs' },
  { value: 'modern', label: '⚡ 极简白', activeClass: 'bg-white text-slate-900 border border-slate-300 shadow-xs' },
];

export const PosterConfigPanel: React.FC<PosterConfigPanelProps> = ({
  meta,
  config,
  setConfig,
  isExporting,
  onExport,
  className = '',
}) => {
  const update = <K extends keyof PosterConfig>(k: K, v: PosterConfig[K]) => {
    setConfig((prev) => ({ ...prev, [k]: v }));
  };

  // ---- Custom QR / Avatar Upload ----
  const handleUpload = (cb: (dataUrl: string) => void) =>
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = (ev) => {
        const dataUrl = ev.target?.result;
        if (typeof dataUrl === 'string') cb(dataUrl);
      };
      reader.readAsDataURL(file);
    };

  const handleQrUpload = handleUpload((url) => update('customQrUrl', url as any));
  const handleAvatarUpload = handleUpload((url) => update('customAvatarUrl', url as any));

  return (
    <div className={`space-y-4 ${className}`}>
      {/* 左：在线定制面板（所有输入控件，不含重复的标题/主题/导出 — 这些已在工坊顶部操作栏统一提供） */}
      <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs space-y-4 text-xs">
        <div className="flex items-center space-x-2 font-bold text-slate-900 border-b border-slate-100 pb-2">
          <Palette className="h-4 w-4 text-indigo-600" />
          <span>海报在线定制面板</span>
        </div>

        <div className="space-y-3">
          {/* Logo 呈现模式 + 水印开关 */}
          <div className="p-3 bg-indigo-50/60 border border-indigo-100 rounded-xl space-y-2">
            <label className="block text-indigo-900 font-bold">海报徽标呈现模式</label>
            <div className="grid grid-cols-2 gap-2 text-xs">
              <button
                type="button"
                onClick={() => update('logoStyle', 'color' as any)}
                className={`py-1.5 px-3 rounded-lg font-medium border text-center transition-all flex items-center justify-center space-x-1 ${
                  config.logoStyle !== 'sketch'
                    ? 'bg-indigo-600 text-white border-indigo-600 shadow-xs'
                    : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
                }`}
              >
                <span>🎨 彩色 Logo</span>
              </button>
              <button
                type="button"
                onClick={() => update('logoStyle', 'sketch' as any)}
                className={`py-1.5 px-3 rounded-lg font-medium border text-center transition-all flex items-center justify-center space-x-1 ${
                  config.logoStyle === 'sketch'
                    ? 'bg-indigo-600 text-white border-indigo-600 shadow-xs'
                    : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
                }`}
              >
                <span>✏️ 白描 Sketch</span>
              </button>
            </div>
            <label className="flex items-center space-x-2 pt-1 text-slate-700 cursor-pointer">
              <input
                type="checkbox"
                checked={config.showSketchWatermark ?? true}
                onChange={(e) => update('showSketchWatermark', e.target.checked as any)}
                className="rounded text-indigo-600 focus:ring-indigo-500 h-3.5 w-3.5"
              />
              <span className="font-medium text-[11px]">显示清晰背景 Sketch 线稿水印</span>
            </label>
          </div>

          {/* QR 设置 */}
          <div className="p-3 bg-indigo-50/70 border border-indigo-100 rounded-xl space-y-2">
            <label className="block text-indigo-950 font-bold flex items-center justify-between">
              <span>企微/招募二维码设置</span>
              {config.customQrUrl ? (
                <span className="text-[10px] text-emerald-600 font-bold bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-200">
                  已加载自定义图
                </span>
              ) : null}
            </label>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <label className="flex-1 px-3 py-1.5 bg-white hover:bg-slate-50 border border-slate-300 rounded-lg text-slate-700 font-medium text-center cursor-pointer transition-all flex items-center justify-center space-x-1.5 shadow-2xs">
                  <Upload className="h-3.5 w-3.5 text-indigo-600" />
                  <span>{config.customQrUrl ? '更换二维码图片' : '点击上传二维码图片'}</span>
                  <input type="file" accept="image/*" onChange={handleQrUpload} className="hidden" />
                </label>
                {config.customQrUrl ? (
                  <button
                    type="button"
                    onClick={() => update('customQrUrl', undefined as any)}
                    className="px-2.5 py-1.5 bg-red-50 text-red-600 border border-red-200 rounded-lg font-medium hover:bg-red-100 transition-all text-center"
                    title="重置为默认矢量二维码"
                  >
                    重置
                  </button>
                ) : null}
              </div>
              <div>
                <label className="block text-[11px] text-slate-500 font-medium mb-1">二维码下方引导语</label>
                <input
                  type="text"
                  value={config.qrLabel || '扫码进群 · 抢先报名'}
                  onChange={(e) => update('qrLabel', e.target.value as any)}
                  className="w-full px-3 py-1.5 bg-white border border-slate-200 rounded-lg focus:ring-2 focus:ring-indigo-500 text-xs"
                  placeholder="如：扫码进企微群"
                />
              </div>
            </div>
          </div>

          {/* Slogan / 招生对象 */}
          <div>
            <label className="block text-slate-600 font-medium mb-1">主标题 Slogan</label>
            <input
              type="text"
              value={config.slogan}
              onChange={(e) => update('slogan', e.target.value)}
              className="w-full px-3 py-1.5 bg-slate-50 border border-slate-200 rounded-lg focus:bg-white focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          <div>
            <label className="block text-slate-600 font-medium mb-1">招生对象与说明</label>
            <input
              type="text"
              value={config.targetAudience}
              onChange={(e) => update('targetAudience', e.target.value)}
              className="w-full px-3 py-1.5 bg-slate-50 border border-slate-200 rounded-lg focus:bg-white focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* 联系人头像设置 */}
          <div className="p-3 bg-amber-50/70 border border-amber-200 rounded-xl space-y-2">
            <label className="block text-slate-900 font-bold flex items-center justify-between">
              <span>联系人头像设置</span>
              {config.customAvatarUrl ? (
                <span className="text-[10px] text-amber-700 font-bold bg-amber-100 px-1.5 py-0.5 rounded border border-amber-300">
                  已加载头像
                </span>
              ) : null}
            </label>
            <div className="flex items-center space-x-2">
              <label className="flex-1 px-3 py-1.5 bg-white hover:bg-slate-50 border border-slate-300 rounded-lg text-slate-700 font-medium text-center cursor-pointer transition-all flex items-center justify-center space-x-1.5 shadow-2xs">
                <Upload className="h-3.5 w-3.5 text-amber-600" />
                <span>{config.customAvatarUrl ? '更换联系人头像' : '上传联系人头像照片'}</span>
                <input type="file" accept="image/*" onChange={handleAvatarUpload} className="hidden" />
              </label>
              {config.customAvatarUrl ? (
                <button
                  type="button"
                  onClick={() => update('customAvatarUrl', undefined as any)}
                  className="px-2.5 py-1.5 bg-red-50 text-red-600 border border-red-200 rounded-lg font-medium hover:bg-red-100 transition-all text-center"
                  title="重置为默认矢量头像"
                >
                  重置
                </button>
              ) : null}
            </div>
          </div>

          <div>
            <label className="block text-slate-600 font-medium mb-1">联系人姓名</label>
            <input
              type="text"
              value={config.contactName}
              onChange={(e) => update('contactName', e.target.value)}
              className="w-full px-3 py-1.5 bg-slate-50 border border-slate-200 rounded-lg focus:bg-white focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          <div>
            <label className="block text-slate-600 font-medium mb-1">联系人头衔 / 身份</label>
            <input
              type="text"
              value={config.contactTitle || ''}
              onChange={(e) => update('contactTitle', e.target.value as any)}
              className="w-full px-3 py-1.5 bg-slate-50 border border-slate-200 rounded-lg focus:bg-white focus:ring-2 focus:ring-indigo-500"
              placeholder="如：集训营组委会"
            />
          </div>
          <div>
            <label className="block text-slate-600 font-medium mb-1">联系电话 / 微信号</label>
            <input
              type="text"
              value={config.contactPhone}
              onChange={(e) => update('contactPhone', e.target.value)}
              className="w-full px-3 py-1.5 bg-slate-50 border border-slate-200 rounded-lg focus:bg-white focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          <div>
            <label className="block text-slate-600 font-medium mb-1">时间地点</label>
            <input
              type="text"
              value={config.timeLocation}
              onChange={(e) => update('timeLocation', e.target.value)}
              className="w-full px-3 py-1.5 bg-slate-50 border border-slate-200 rounded-lg focus:bg-white focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          <div>
            <label className="block text-slate-600 font-medium mb-1">主办方</label>
            <input
              type="text"
              value={config.organizer}
              onChange={(e) => update('organizer', e.target.value)}
              className="w-full px-3 py-1.5 bg-slate-50 border border-slate-200 rounded-lg focus:bg-white focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          <div>
            <label className="block text-slate-600 font-medium mb-1">主标题（海报顶部大字）</label>
            <input
              type="text"
              value={config.title}
              onChange={(e) => update('title', e.target.value)}
              className="w-full px-3 py-1.5 bg-slate-50 border border-slate-200 rounded-lg focus:bg-white focus:ring-2 focus:ring-indigo-500 font-semibold"
            />
          </div>
          <div>
            <label className="block text-slate-600 font-medium mb-1">副标题</label>
            <input
              type="text"
              value={config.subtitle}
              onChange={(e) => update('subtitle', e.target.value)}
              className="w-full px-3 py-1.5 bg-slate-50 border border-slate-200 rounded-lg focus:bg-white focus:ring-2 focus:ring-indigo-500"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PosterConfigPanel;
