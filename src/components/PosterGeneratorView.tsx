import React, { useState, useRef } from 'react';
import { 
  Download, 
  Sparkles, 
  Palette, 
  CheckCircle2, 
  QrCode, 
  Phone, 
  User, 
  Building2, 
  Calendar, 
  Zap, 
  Code,
  Award,
  Layers,
  Flame,
  Globe,
  Upload,
  RefreshCw
} from 'lucide-react';
import { toPng } from 'html-to-image';
import confetti from 'canvas-confetti';
import { BootcampCohort, PosterConfig } from '../types';

interface PosterGeneratorViewProps {
  meta: BootcampCohort;
  initialConfig: PosterConfig;
  onExportSuccess?: () => void;
}

export const PosterGeneratorView: React.FC<PosterGeneratorViewProps> = ({ meta, initialConfig }) => {
  const slidesCount = Math.max(0, meta.materialsCount - 2);
  const posterRef = useRef<HTMLDivElement>(null);
  const [isExporting, setIsExporting] = useState(false);

  // Poster state configuration
  const [config, setConfig] = useState<PosterConfig>(initialConfig);

  // Handle Custom QR Image File Upload
  const handleQrUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target?.result) {
          setConfig(prev => ({ ...prev, customQrUrl: event.target?.result as string }));
        }
      };
      reader.readAsDataURL(file);
    }
  };

  // Handle Contact Avatar File Upload
  const handleAvatarUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target?.result) {
          setConfig(prev => ({ ...prev, customAvatarUrl: event.target?.result as string }));
        }
      };
      reader.readAsDataURL(file);
    }
  };

  // Handle PNG Export (Full-size rectangular straight corners on outermost canvas only)
  const handleExportPNG = async () => {
    if (!posterRef.current) return;
    try {
      setIsExporting(true);
      await new Promise((resolve) => setTimeout(resolve, 120));
      
      // Generate High Resolution PNG
      const dataUrl = await toPng(posterRef.current, { cacheBust: true, pixelRatio: 2 });
      
      // Trigger browser download
      const link = document.createElement('a');
      link.download = `${meta.year}-${meta.season}_宣传海报_${config.theme}.png`;
      link.href = dataUrl;
      link.click();

      // Trigger Celebration Confetti
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 }
      });
    } catch (err) {
      console.error('Failed to generate poster PNG:', err);
      alert('海报导出失败，请重试或截屏保存。');
    } finally {
      setIsExporting(false);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      
      {/* Top Header & Theme Controls */}
      <div className="bg-white p-4 sm:p-6 rounded-2xl border border-slate-200 shadow-xs flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center space-x-2">
            <span className="px-2.5 py-0.5 rounded-md text-xs font-bold bg-pink-50 text-pink-700 border border-pink-200">
              物料 #2 · 宣传海报
            </span>
            <span className="text-xs text-slate-400">适配 9:16 / 朋友圈招募海报</span>
          </div>
          <h1 className="text-2xl font-extrabold text-slate-900 mt-1">
            {meta.title} · 招募海报
          </h1>
          <p className="text-xs text-slate-500 mt-0.5">
            支持 3 种视觉调色风格，一键保存导出为高清 PNG 图片文件
          </p>
        </div>

        {/* Action & Theme Switcher */}
        <div className="flex flex-wrap items-center gap-3">
          {/* Theme Selector */}
          <div className="flex items-center space-x-1 bg-slate-100 p-1 rounded-xl text-xs">
            <button
              onClick={() => setConfig({ ...config, theme: 'tech' })}
              className={`px-3 py-1.5 rounded-lg font-semibold transition-all ${
                config.theme === 'tech' ? 'bg-slate-900 text-amber-300 shadow-xs' : 'text-slate-600'
              }`}
            >
              🌌 极光黑金
            </button>
            <button
              onClick={() => setConfig({ ...config, theme: 'academic' })}
              className={`px-3 py-1.5 rounded-lg font-semibold transition-all ${
                config.theme === 'academic' ? 'bg-indigo-600 text-white shadow-xs' : 'text-slate-600'
              }`}
            >
              🎓 学院蓝
            </button>
            <button
              onClick={() => setConfig({ ...config, theme: 'modern' })}
              className={`px-3 py-1.5 rounded-lg font-semibold transition-all ${
                config.theme === 'modern' ? 'bg-white text-slate-900 border border-slate-300 shadow-xs' : 'text-slate-600'
              }`}
            >
              ⚡ 极简白
            </button>
          </div>

          <button
            onClick={handleExportPNG}
            disabled={isExporting}
            className="inline-flex items-center space-x-2 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 disabled:bg-slate-400 text-white text-xs font-semibold rounded-xl shadow-xs transition-all active:scale-95"
          >
            <Download className="h-4 w-4" />
            <span>{isExporting ? '海报生成中...' : '保存为 PNG 图片'}</span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Customizer Sidebar (4 cols) */}
        <div className="lg:col-span-4 bg-white p-5 rounded-2xl border border-slate-200 shadow-xs space-y-4 text-xs">
          <div className="flex items-center space-x-2 font-bold text-slate-900 border-b border-slate-100 pb-2">
            <Palette className="h-4 w-4 text-indigo-600" />
            <span>海报在线定制面板</span>
          </div>

          <div className="space-y-3">
            {/* Logo Style Options */}
            <div className="p-3 bg-indigo-50/60 border border-indigo-100 rounded-xl space-y-2">
              <label className="block text-indigo-900 font-bold">海报徽标呈现模式</label>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <button
                  type="button"
                  onClick={() => setConfig({ ...config, logoStyle: 'color' })}
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
                  onClick={() => setConfig({ ...config, logoStyle: 'sketch' })}
                  className={`py-1.5 px-3 rounded-lg font-medium border text-center transition-all flex items-center justify-center space-x-1 ${
                    config.logoStyle === 'sketch'
                      ? 'bg-indigo-600 text-white border-indigo-600 shadow-xs'
                      : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
                  }`}
                >
                  <span>✏️ 白描 Sketch</span>
                </button>
              </div>

              {/* Watermark Toggle */}
              <label className="flex items-center space-x-2 pt-1 text-slate-700 cursor-pointer">
                <input
                  type="checkbox"
                  checked={config.showSketchWatermark ?? true}
                  onChange={(e) => setConfig({ ...config, showSketchWatermark: e.target.checked })}
                  className="rounded text-indigo-600 focus:ring-indigo-500 h-3.5 w-3.5"
                />
                <span className="font-medium text-[11px]">显示清晰背景 Sketch 线稿水印</span>
              </label>
            </div>

            {/* Custom QR Code Upload Control */}
            <div className="p-3 bg-indigo-50/70 border border-indigo-100 rounded-xl space-y-2">
              <label className="block text-indigo-950 font-bold flex items-center justify-between">
                <span>企微/招募二维码设置</span>
                {config.customQrUrl && (
                  <span className="text-[10px] text-emerald-600 font-bold bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-200">
                    已加载自定义图
                  </span>
                )}
              </label>

              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <label className="flex-1 px-3 py-1.5 bg-white hover:bg-slate-50 border border-slate-300 rounded-lg text-slate-700 font-medium text-center cursor-pointer transition-all flex items-center justify-center space-x-1.5 shadow-2xs">
                    <Upload className="h-3.5 w-3.5 text-indigo-600" />
                    <span>{config.customQrUrl ? '更换二维码图片' : '点击上传二维码图片'}</span>
                    <input type="file" accept="image/*" onChange={handleQrUpload} className="hidden" />
                  </label>
                  {config.customQrUrl && (
                    <button
                      type="button"
                      onClick={() => setConfig(prev => ({ ...prev, customQrUrl: undefined }))}
                      className="px-2.5 py-1.5 bg-red-50 text-red-600 border border-red-200 rounded-lg font-medium hover:bg-red-100 transition-all text-center"
                      title="重置为默认矢量二维码"
                    >
                      重置
                    </button>
                  )}
                </div>

                <div>
                  <label className="block text-[11px] text-slate-500 font-medium mb-1">二维码下方引导语</label>
                  <input
                    type="text"
                    value={config.qrLabel || '扫码进群 · 抢先报名'}
                    onChange={(e) => setConfig({ ...config, qrLabel: e.target.value })}
                    className="w-full px-3 py-1.5 bg-white border border-slate-200 rounded-lg focus:ring-2 focus:ring-indigo-500 text-xs"
                    placeholder="如：扫码进企微群"
                  />
                </div>
              </div>
            </div>

            <div>
              <label className="block text-slate-600 font-medium mb-1">主标题 Slogan</label>
              <input
                type="text"
                value={config.slogan}
                onChange={(e) => setConfig({ ...config, slogan: e.target.value })}
                className="w-full px-3 py-1.5 bg-slate-50 border border-slate-200 rounded-lg focus:bg-white focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div>
              <label className="block text-slate-600 font-medium mb-1">招生对象与说明</label>
              <input
                type="text"
                value={config.targetAudience}
                onChange={(e) => setConfig({ ...config, targetAudience: e.target.value })}
                className="w-full px-3 py-1.5 bg-slate-50 border border-slate-200 rounded-lg focus:bg-white focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            {/* Contact Person Avatar Upload Control */}
            <div className="p-3 bg-amber-50/70 border border-amber-200 rounded-xl space-y-2">
              <label className="block text-slate-900 font-bold flex items-center justify-between">
                <span>联系人头像设置</span>
                {config.customAvatarUrl && (
                  <span className="text-[10px] text-amber-700 font-bold bg-amber-100 px-1.5 py-0.5 rounded border border-amber-300">
                    已加载头像
                  </span>
                )}
              </label>

              <div className="flex items-center space-x-2">
                <label className="flex-1 px-3 py-1.5 bg-white hover:bg-slate-50 border border-slate-300 rounded-lg text-slate-700 font-medium text-center cursor-pointer transition-all flex items-center justify-center space-x-1.5 shadow-2xs">
                  <Upload className="h-3.5 w-3.5 text-amber-600" />
                  <span>{config.customAvatarUrl ? '更换联系人头像' : '上传联系人头像照片'}</span>
                  <input type="file" accept="image/*" onChange={handleAvatarUpload} className="hidden" />
                </label>
                {config.customAvatarUrl && (
                  <button
                    type="button"
                    onClick={() => setConfig(prev => ({ ...prev, customAvatarUrl: undefined }))}
                    className="px-2.5 py-1.5 bg-red-50 text-red-600 border border-red-200 rounded-lg font-medium hover:bg-red-100 transition-all text-center"
                    title="重置为默认矢量头像"
                  >
                    重置
                  </button>
                )}
              </div>
            </div>

            <div>
              <label className="block text-slate-600 font-medium mb-1">联系人姓名</label>
              <input
                type="text"
                value={config.contactName}
                onChange={(e) => setConfig({ ...config, contactName: e.target.value })}
                className="w-full px-3 py-1.5 bg-slate-50 border border-slate-200 rounded-lg focus:bg-white focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div>
              <label className="block text-slate-600 font-medium mb-1">联系人头衔 / 身份</label>
              <input
                type="text"
                value={config.contactTitle || '软件学院指导老师 · 营长'}
                onChange={(e) => setConfig({ ...config, contactTitle: e.target.value })}
                className="w-full px-3 py-1.5 bg-slate-50 border border-slate-200 rounded-lg focus:bg-white focus:ring-2 focus:ring-indigo-500"
                placeholder="如：软件学院指导老师"
              />
            </div>

            <div>
              <label className="block text-slate-600 font-medium mb-1">联系电话 / 微信号</label>
              <input
                type="text"
                value={config.contactPhone}
                onChange={(e) => setConfig({ ...config, contactPhone: e.target.value })}
                className="w-full px-3 py-1.5 bg-slate-50 border border-slate-200 rounded-lg focus:bg-white focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div>
              <label className="block text-slate-600 font-medium mb-1">主办单位</label>
              <input
                type="text"
                value={config.organizer}
                onChange={(e) => setConfig({ ...config, organizer: e.target.value })}
                className="w-full px-3 py-1.5 bg-slate-50 border border-slate-200 rounded-lg focus:bg-white focus:ring-2 focus:ring-indigo-500"
              />
            </div>
          </div>

          <div className="pt-3 border-t border-slate-100 text-[11px] text-slate-500 space-y-1">
            <p>💡 提示：点击右上角 "保存为 PNG 图片" 即可导出高清海报用于社交媒体群发招募。</p>
          </div>
        </div>

        {/* Poster Canvas Preview Stage (8 cols) */}
        <div className="lg:col-span-8 flex justify-center bg-slate-100/80 p-6 rounded-3xl border border-slate-200">
          
          {/* Main Printable Poster Canvas Element */}
          <div
            ref={posterRef}
            className={`w-full max-w-[540px] ${isExporting ? 'rounded-none border-0 shadow-none' : 'rounded-3xl shadow-2xl border-2'} overflow-hidden transition-all relative ${
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
              
              {/* Poster Top Brand Header (Dynamic Theme-adapted Logo vs Sketch Style) */}
              <div className="flex items-center justify-between border-b pb-4 border-current/15">
                <div className="flex items-center space-x-3">
                  {/* Logo Display Pill with Solid Opaque Background (Prevents export translucency rectangle) */}
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
                      <div className={`h-4.5 w-px ${config.theme === 'modern' ? 'bg-slate-300' : 'bg-slate-700'}`} />
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
                <div className={`inline-flex items-center space-x-1.5 px-3 py-1 rounded-full text-xs font-semibold ${
                  config.theme === 'tech' ? 'bg-amber-400 text-slate-950' : 'bg-indigo-600 text-white'
                }`}>
                  <Sparkles className="h-3.5 w-3.5" />
                  <span>Vibe Coding 全新范式</span>
                </div>

                <h2 className="text-2xl sm:text-3xl font-black tracking-tight leading-tight">
                  {config.title}
                </h2>
                
                <p className={`text-sm font-bold tracking-wide ${
                  config.theme === 'tech' ? 'text-amber-300' : config.theme === 'academic' ? 'text-indigo-200' : 'text-indigo-600'
                }`}>
                  “{config.slogan}”
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
                  <div className={`grid gap-1 text-[9px] font-semibold ${slidesCount <= 7 ? 'grid-cols-' + slidesCount : slidesCount <= 14 ? 'grid-cols-7' : 'grid-cols-8'}`}>
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
                
                {/* Contact Person Avatar & Details Badge */}
                <div className="flex items-center space-x-3 text-xs max-w-[280px]">
                  {/* Avatar Container */}
                  <div className="relative shrink-0">
                    {config.customAvatarUrl ? (
                      <img
                        src={config.customAvatarUrl}
                        alt={config.contactName}
                        className="w-13 h-13 rounded-full object-cover border-2 border-amber-400 shadow-md"
                      />
                    ) : (
                      <div className={`w-13 h-13 rounded-full flex items-center justify-center font-black text-base border-2 shadow-sm ${
                        config.theme === 'tech'
                          ? 'bg-amber-400 text-slate-950 border-amber-300'
                          : config.theme === 'academic'
                          ? 'bg-indigo-600 text-white border-indigo-300'
                          : 'bg-indigo-600 text-white border-indigo-200'
                      }`}>
                        {config.contactName.slice(0, 1) || '乔'}
                      </div>
                    )}
                    {/* Status Badge Dot */}
                    <span className="absolute bottom-0 right-0 w-3.5 h-3.5 rounded-full bg-emerald-500 border-2 border-slate-900" title="在线接答" />
                  </div>

                  {/* Contact Info Text */}
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

                {/* Enlarged Prominent QR Code Section */}
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

        </div>

      </div>

    </div>
  );
};
