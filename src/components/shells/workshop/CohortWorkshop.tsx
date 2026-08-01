'use client';

import React, { useState, useRef, useEffect, useMemo } from 'react';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'motion/react';
import {
  ArrowLeft,
  Bookmark,
  ChevronRight,
  Printer,
  Download,
  ChevronLeft,
  Maximize2,
  Minimize2,
  BookOpen,
  Grid,
  Play,
  Pause,
  ZoomIn,
  ZoomOut,
  RotateCcw,
} from 'lucide-react';

import { Navbar } from '@/components/shells/portal/Navbar';
import { MaterialOverview } from '@/components/shells/workshop/MaterialOverview';
import { PosterConfigPanel } from '@/components/shells/workshop/PosterConfigPanel';
import { SlideDaySelector } from '@/components/shells/workshop/SlideDaySelector';
import {
  DualSketchWatermark,
  MedalHeaderBar,
  ControlStatusBar,
} from '@/components/ui/slide-deck';
import {
  exportPlanPdf,
  exportPosterPng,
} from '@/components/shells/workshop/utils';
import type { CohortMaterials, PosterConfig, DayCourseDeck } from '@/lib';

interface CohortWorkshopProps {
  materials: CohortMaterials;
}

/** 幻灯片设计稿基准尺寸：舞台按 1280x720 整体等比缩放 */
const SLIDE_DESIGN_W = 1280;
const SLIDE_DESIGN_H = 720;
const SLIDE_STAGE_BG =
  'linear-gradient(160deg, #05060f 0%, #0b0e24 55%, #0e0a22 100%)';
const AUTO_ADVANCE_MS = 9000;

/* ============================================================
 * CohortWorkshop：共享工坊壳（期数交互逻辑都在这里，跨期复用）
 *   - 期数专属"内容"：materials.planLayoutRenderer / posterLayoutRenderer / slidesDeckRenderer
 *   - 工坊提供"交互"：Tab 切换、TOC、Day 选择、全屏、自动连播、键盘、导出、配置面板
 * ============================================================ */
export default function CohortWorkshop({ materials }: CohortWorkshopProps) {
  const router = useRouter();

  /* ---------- 全局视图 & 滚动位置管理 ---------- */
  const [currentView, setCurrentView] = useState<
    'overview' | 'plan' | 'poster' | 'slides'
  >('overview');
  const scrollPositions = useRef<Record<string, number>>({});
  const prevViewRef = useRef(currentView);
  useEffect(() => {
    const prev = prevViewRef.current;
    if (prev !== currentView) {
      scrollPositions.current[prev] = window.scrollY;
      const saved = scrollPositions.current[currentView] ?? 0;
      requestAnimationFrame(() => window.scrollTo(0, saved));
      prevViewRef.current = currentView;
    }
  }, [currentView]);

  /* ---------- 导出工具（方案 PDF / 海报 PNG） ---------- */
  const planPdfRef = useRef<HTMLDivElement | null>(null);
  const posterCanvasRef = useRef<HTMLDivElement | null>(null);
  const [isPosterExporting, setIsPosterExporting] = useState(false);

  /* ============================================================
   * 1) 📘 方案视图专属状态
   * ============================================================ */
  const [activePlanSectionId, setActivePlanSectionId] = useState<string | null>(
    null
  );
  const scrollToPlanSection = (id: string) => {
    const el = document.getElementById(`plan-section-${id}`);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setActivePlanSectionId(id);
    }
  };
  // IntersectionObserver 自动高亮 TOC
  useEffect(() => {
    if (currentView !== 'plan') return;
    const sections = materials.planData
      .map((s: any) => document.getElementById(`plan-section-${s.id}`))
      .filter(Boolean) as HTMLElement[];
    if (sections.length === 0) return;
    const io = new IntersectionObserver(
      (entries) => {
        const vis = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (vis[0]) {
          setActivePlanSectionId(vis[0].target.id.replace('plan-section-', ''));
        }
      },
      { rootMargin: '-80px 0px -40% 0px', threshold: [0, 0.2, 0.6, 1] }
    );
    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, [currentView, materials.planData]);

  /* ============================================================
   * 2) 🎨 海报视图专属状态
   * ============================================================ */
  const [posterConfig, setPosterConfig] = useState<PosterConfig>(
    materials.posterConfig
  );
  const [posterZoom, setPosterZoom] = useState<number>(1);
  useEffect(() => {
    // 切期数时重置为初始配置
    setPosterConfig(materials.posterConfig);
    setPosterZoom(1);
  }, [materials]);

  /* ============================================================
   * 3) 🎬 幻灯片视图专属状态（从旧 SlideDeckView 搬共享交互）
   * ============================================================ */
  const [selectedDay, setSelectedDay] = useState<number>(1);
  const [prevSelectedDay, setPrevSelectedDay] = useState(selectedDay);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showNotes, setShowNotes] = useState(true);
  const [showGridModal, setShowGridModal] = useState(false);
  const [isBlackout, setIsBlackout] = useState(false);
  const [autoPlay, setAutoPlay] = useState(false);
  const [fsScale, setFsScale] = useState(1);
  const stageRef = useRef<HTMLDivElement | null>(null);

  // 切 day 时重置 slide index 到 0
  if (prevSelectedDay !== selectedDay) {
    setPrevSelectedDay(selectedDay);
    setCurrentSlideIndex(0);
  }

  // 根据 day 找到 deck
  const currentDeck = useMemo(() => {
    const decks = materials.slidesData;
    return decks.find((d: any) => d.meta.day === selectedDay) || decks[0];
  }, [materials.slidesData, selectedDay]);
  const slidesLength: number = currentDeck?.meta?.slides?.length ?? 0;
  const maxDay = useMemo(() => {
    const days = materials.slidesData.map((d: any) => d.meta.day as number);
    return days.length > 0 ? Math.max(...days) : 1;
  }, [materials.slidesData]);
  const currentSlide: DayCourseDeck['slides'][number] | undefined =
    currentDeck?.meta?.slides?.[currentSlideIndex];
  const slideReadyMap = useMemo(
    () => materials.slidesData.map((d: any) => !!d.Render),
    [materials.slidesData]
  );

  // --- 全屏 & 等比缩放 ---
  const toggleFullscreen = async () => {
    const el = stageRef.current;
    if (!el) return;
    try {
      if (!document.fullscreenElement) await el.requestFullscreen();
      else await document.exitFullscreen();
    } catch (e) {
      console.warn('全屏切换失败:', e);
    }
  };
  useEffect(() => {
    const onFsChange = () => setIsFullscreen(!!document.fullscreenElement);
    document.addEventListener('fullscreenchange', onFsChange);
    return () => document.removeEventListener('fullscreenchange', onFsChange);
  }, []);
  useEffect(() => {
    if (!isFullscreen) return;
    let raf = 0;
    const compute = () => {
      raf = requestAnimationFrame(() => {
        setFsScale(
          Math.min(window.innerWidth / SLIDE_DESIGN_W, window.innerHeight / SLIDE_DESIGN_H)
        );
      });
    };
    compute();
    window.addEventListener('resize', compute);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', compute);
    };
  }, [isFullscreen]);

  // --- 自动连播 ---
  useEffect(() => {
    if (!autoPlay) return;
    if (currentSlideIndex >= slidesLength - 1) {
      const t = setTimeout(() => setAutoPlay(false), 400);
      return () => clearTimeout(t);
    }
    const t = setTimeout(
      () =>
        setCurrentSlideIndex((p) => Math.min(slidesLength - 1, p + 1)),
      AUTO_ADVANCE_MS
    );
    return () => clearTimeout(t);
  }, [autoPlay, currentSlideIndex, slidesLength]);

  // --- 键盘导航 ---
  useEffect(() => {
    if (currentView !== 'slides') return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (showGridModal) {
          e.preventDefault();
          setShowGridModal(false);
        }
        return;
      }
      if (showGridModal) return;
      if (e.key === 'ArrowRight' || e.key === ' ') {
        e.preventDefault();
        if (currentSlideIndex < slidesLength - 1)
          setCurrentSlideIndex((p) => p + 1);
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        if (currentSlideIndex > 0) setCurrentSlideIndex((p) => p - 1);
      } else if (e.key === 'f' || e.key === 'F') {
        e.preventDefault();
        toggleFullscreen();
      } else if (e.key === 'b' || e.key === 'B') {
        e.preventDefault();
        setIsBlackout((p) => !p);
      } else if (e.key === 'o' || e.key === 'O') {
        e.preventDefault();
        setShowGridModal((p) => !p);
      } else if (e.key === 'p' || e.key === 'P') {
        e.preventDefault();
        setAutoPlay((v) => !v);
      }
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [currentView, currentSlideIndex, slidesLength, showGridModal]);

  /* ---------- 导出 handlers 给 Navbar / PosterConfigPanel 用 ---------- */
  const handleExportPDF = () => {
    const run = () => {
      window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
      exportPlanPdf({
        onAfterPrint: () => {
          const saved = scrollPositions.current.plan ?? 0;
          if (saved > 0) requestAnimationFrame(() => window.scrollTo(0, saved));
        },
      });
    };
    if (currentView !== 'plan') {
      setCurrentView('plan');
      setTimeout(run, 200);
    } else {
      run();
    }
  };
  const handleExportPosterPNG = () => {
    const run = () => exportPosterPng({
      canvasRef: posterCanvasRef,
      meta: materials.meta,
      config: posterConfig,
      setIsExporting: setIsPosterExporting,
    });
    if (currentView !== 'poster') {
      setCurrentView('poster');
      setTimeout(run, 200);
    } else {
      run();
    }
  };

  /* ============================================================
   *                          RENDER
   * ============================================================ */
  const PlanRenderer = materials.planLayoutRenderer;
  const PosterRenderer = materials.posterLayoutRenderer;
  const SlidesRenderer = materials.slidesDeckRenderer;

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-800 antialiased font-sans print-reset">
      {/* ========= 顶栏 ========= */}
      <Navbar
        currentView={currentView}
        setCurrentView={setCurrentView}
        selectedDay={selectedDay}
        setSelectedDay={setSelectedDay}
        onExportPDF={handleExportPDF}
        onExportPNG={handleExportPosterPNG}
        onBackToPortal={() => router.push('/')}
        meta={materials.meta}
        slidesCount={materials.slidesData.length}
      />

      <main className="flex-1">
        {/* ========= 视图 0：概览 ========= */}
        {currentView === 'overview' && (
          <MaterialOverview
            meta={materials.meta}
            decks={materials.slidesData}
            onSelectPlan={() => setCurrentView('plan')}
            onSelectPoster={() => setCurrentView('poster')}
            onSelectSlideDay={(day) => {
              setSelectedDay(day);
              setCurrentView('slides');
            }}
          />
        )}

        {/* ========= 视图 1：📘 方案 ========= */}
        {currentView === 'plan' && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 print-reset">
            {/* 方案固定背景水印（PDF 多页打印） */}
            <div className="hidden print-page-watermark-top pointer-events-none select-none rotate-12">
              <img src="/school-sketch.svg" alt="" className="w-full h-full object-contain" />
            </div>
            <div className="hidden print-page-watermark-bottom pointer-events-none select-none -rotate-12">
              <img src="/club-sketch.svg" alt="" className="w-full h-full object-contain" />
            </div>

            {/* 顶部操作栏 (no-print) */}
            <div className="no-print bg-white p-4 sm:p-6 rounded-2xl border border-slate-200 shadow-xs mb-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <div>
                <div className="flex items-center space-x-2 mb-1">
                  <span className="px-2.5 py-0.5 rounded-md text-xs font-bold bg-indigo-50 text-indigo-700 border border-indigo-200">
                    物料 #1 · 方案
                  </span>
                  <span className="text-xs text-slate-400">
                    文件版本 v3.5 · 期数专属 Layout 直接渲染
                  </span>
                </div>
                <h1 className="text-2xl font-extrabold text-slate-900">
                  {materials.meta.title} · 完整方案
                </h1>
                <p className="text-xs text-slate-500 mt-0.5">
                  软件学院实战型集训官方策划案 · 支持一键排版导出为高清 PDF
                </p>
              </div>
              <button
                type="button"
                onClick={handleExportPDF}
                className="inline-flex items-center space-x-2 px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-800 text-white text-xs font-bold rounded-xl shadow-md transition-all active:scale-95 cursor-pointer"
              >
                <Printer className="h-4 w-4" />
                <span>导出 PDF 文档</span>
              </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 print-reset">
              {/* TOC 侧栏 (no-print) */}
              <aside className="no-print hidden lg:block lg:col-span-1">
                <div className="sticky top-24 bg-white rounded-2xl p-4 border border-slate-200 shadow-xs space-y-3">
                  <div className="flex items-center space-x-2 text-xs font-bold text-slate-900 border-b border-slate-100 pb-2">
                    <Bookmark className="h-4 w-4 text-indigo-600" />
                    <span>方案目录 (TOC)</span>
                  </div>
                  <nav className="space-y-1 max-h-[calc(100vh-220px)] overflow-y-auto pr-1">
                    {materials.planData.map((s: any) => (
                      <button
                        key={s.id}
                        onClick={() => scrollToPlanSection(s.id)}
                        className={`w-full text-left px-3 py-2 rounded-xl text-xs font-medium transition-all flex items-center justify-between ${
                          activePlanSectionId === s.id
                            ? 'bg-indigo-50 text-indigo-700 font-bold border-l-4 border-indigo-600'
                            : 'text-slate-600 hover:bg-slate-100'
                        }`}
                      >
                        <span className="truncate">{s.title}</span>
                        <ChevronRight className="h-3 w-3 shrink-0 opacity-50" />
                      </button>
                    ))}
                  </nav>
                  <div className="pt-3 border-t border-slate-100 text-[11px] text-slate-400">
                    点击方案章节可滚动跳转 · 导出时 TOC 会自动隐藏
                  </div>
                </div>
              </aside>

              {/* 方案主体：期数专属 planLayoutRenderer 直接渲染 */}
              <div className="lg:col-span-3 print-reset">
                {PlanRenderer ? (
                  <PlanRenderer
                    meta={materials.meta}
                    planData={materials.planData}
                    printViewRef={planPdfRef}
                    printViewId="printable-plan-document"
                  />
                ) : (
                  <div className="rounded-2xl border border-dashed border-slate-300 bg-white p-10 text-center text-slate-400 text-sm">
                    本期未配置 planLayoutRenderer（请在 cohorts/{materials.meta.id}/renderers/planLayout.tsx 实现）
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* ========= 视图 2：🎨 海报 ========= */}
        {currentView === 'poster' && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            {/* 顶部操作栏 */}
            <div className="no-print bg-white p-4 sm:p-6 rounded-2xl border border-slate-200 shadow-xs mb-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <div>
                <div className="flex items-center space-x-2 mb-1">
                  <span className="px-2.5 py-0.5 rounded-md text-xs font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">
                    物料 #2 · 招募海报
                  </span>
                  <span className="text-xs text-slate-400">
                    期数专属 Layout + 共享配置面板实时联动
                  </span>
                </div>
                <h1 className="text-2xl font-extrabold text-slate-900">
                  {materials.meta.title} · 宣传海报
                </h1>
                <p className="text-xs text-slate-500 mt-0.5">
                  左侧实时调整 slogan/QR/联系方式 · 右侧预览 · 支持 2x 高清 PNG 导出
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-2">
                {/* 海报 3 种主题切换（从旧 PosterConfigPanel 搬过来，顶部操作栏宽度足够横向展示） */}
                <div className="flex items-center space-x-1 bg-slate-100 p-1 rounded-xl text-xs">
                  {[
                    { value: 'tech', label: '🌌 极光黑金', activeClass: 'bg-slate-900 text-amber-300 shadow-xs' },
                    { value: 'academic', label: '🎓 学院蓝', activeClass: 'bg-indigo-600 text-white shadow-xs' },
                    { value: 'modern', label: '⚡ 极简白', activeClass: 'bg-white text-slate-900 border border-slate-300 shadow-xs' },
                  ].map((opt) => (
                    <button
                      key={opt.value}
                      type="button"
                      onClick={() => setPosterConfig((prev) => ({ ...prev, theme: opt.value as any }))}
                      className={`px-3 py-1.5 rounded-lg font-semibold transition-all ${
                        posterConfig.theme === opt.value ? opt.activeClass : 'text-slate-600'
                      }`}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
                <div className="flex items-center space-x-1 bg-slate-100 p-1 rounded-xl">
                  <button
                    onClick={() => setPosterZoom((z) => Math.max(0.5, +(z - 0.1).toFixed(2)))}
                    className="p-1.5 rounded-lg text-slate-600 hover:text-slate-900 transition-all"
                    title="缩小"
                  >
                    <ZoomOut className="h-4 w-4" />
                  </button>
                  <span className="px-2 text-xs font-bold text-slate-800 tabular-nums w-12 text-center">
                    {Math.round(posterZoom * 100)}%
                  </span>
                  <button
                    onClick={() => setPosterZoom((z) => Math.min(2, +(z + 0.1).toFixed(2)))}
                    className="p-1.5 rounded-lg text-slate-600 hover:text-slate-900 transition-all"
                    title="放大"
                  >
                    <ZoomIn className="h-4 w-4" />
                  </button>
                  <button
                    onClick={() => setPosterZoom(1)}
                    className="p-1.5 rounded-lg text-slate-600 hover:text-slate-900 transition-all"
                    title="恢复 100%"
                  >
                    <RotateCcw className="h-4 w-4" />
                  </button>
                </div>
                <button
                  onClick={handleExportPosterPNG}
                  className="inline-flex items-center space-x-2 px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white text-xs font-bold rounded-xl shadow-md transition-all active:scale-95 cursor-pointer"
                >
                  <Download className="h-4 w-4" />
                  <span>导出高清 PNG</span>
                </button>
              </div>
            </div>

            {/* 海报主体：左配置面板 + 右画布（lg 以上 2:3 分栏，更符合配置面板 vs 海报内容比例） */}
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 lg:gap-8">
              <aside className="no-print lg:col-span-2 xl:col-span-2">
                <PosterConfigPanel
                  meta={{
                    id: materials.meta.id,
                    year: materials.meta.year,
                    season: materials.meta.season,
                    title: materials.meta.title,
                  }}
                  config={posterConfig}
                  setConfig={(updater) => setPosterConfig((prev) => updater(prev))}
                  isExporting={isPosterExporting}
                  onExport={handleExportPosterPNG}
                />
              </aside>

              <div className="lg:col-span-3 xl:col-span-3 w-full flex flex-col items-center justify-start py-2 overflow-x-auto pb-8">
                {/* scale 包装器：用 mx-auto + origin-top 保证居中且从顶开始缩放，
                    transform scale 不占 DOM 空间，外层加 pb-8/overflow-x-auto 兜底 */}
                <div
                  className="origin-top mx-auto transition-transform w-full flex justify-center"
                  style={{ transform: `scale(${posterZoom})` }}
                >
                  {PosterRenderer ? (
                    <PosterRenderer
                      config={posterConfig}
                      meta={materials.meta}
                      canvasRef={posterCanvasRef}
                      isExporting={false}
                    />
                  ) : (
                    <div
                      ref={posterCanvasRef}
                      className="w-[540px] rounded-3xl border-2 border-dashed border-slate-300 bg-white aspect-[9/16] flex items-center justify-center text-slate-400 text-sm"
                    >
                      本期未配置 posterLayoutRenderer
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ========= 视图 3：🎬 幻灯片 ========= */}
        {currentView === 'slides' && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
            {/* 顶部操作栏 */}
            <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-xs flex flex-col md:flex-row items-start md:items-center justify-between gap-4 no-print">
              <div>
                <div className="flex items-center space-x-2 mb-1">
                  <span className="px-2.5 py-0.5 rounded-md text-xs font-bold bg-amber-50 text-amber-700 border border-amber-200">
                    物料 #3 · Day {selectedDay} / {maxDay} 演示幻灯片
                  </span>
                  <span className="text-xs text-indigo-600 font-semibold">
                    {currentDeck?.meta?.stageName ?? '—'}
                  </span>
                </div>
                <h1 className="text-xl font-extrabold text-slate-900">
                  {currentDeck?.meta?.title ?? materials.meta.title}
                </h1>
                <p className="text-xs text-slate-500 mt-0.5">
                  {currentDeck?.meta?.subtitle ?? materials.meta.subtitle}
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-2">
                <div className="flex items-center space-x-1 bg-slate-100 p-1 rounded-xl">
                  <button
                    onClick={() => setSelectedDay(Math.max(1, selectedDay - 1))}
                    disabled={selectedDay === 1}
                    className="p-1.5 rounded-lg text-slate-600 hover:text-slate-900 disabled:opacity-40 transition-all"
                    title="上一课 Day"
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </button>
                  <span className="px-2 text-xs font-bold text-slate-800 tabular-nums">
                    Day {selectedDay} / {maxDay}
                  </span>
                  <button
                    onClick={() => setSelectedDay(Math.min(maxDay, selectedDay + 1))}
                    disabled={selectedDay === maxDay}
                    className="p-1.5 rounded-lg text-slate-600 hover:text-slate-900 disabled:opacity-40 transition-all"
                    title="下一课 Day"
                  >
                    <ChevronRight className="h-4 w-4" />
                  </button>
                </div>

                <button
                  onClick={() => setShowGridModal(true)}
                  className="p-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl text-xs font-medium transition-all"
                  title="查看所有 Slide 缩略图 (O)"
                >
                  <Grid className="h-4 w-4" />
                </button>
                <button
                  onClick={() => setShowNotes((v) => !v)}
                  className={`p-2 rounded-xl text-xs font-medium transition-all ${
                    showNotes
                      ? 'bg-indigo-50 text-indigo-700 border border-indigo-200'
                      : 'bg-slate-100 text-slate-700'
                  }`}
                  title="显示/隐藏讲师备注"
                >
                  <BookOpen className="h-4 w-4" />
                </button>
                <button
                  onClick={() => setAutoPlay((v) => !v)}
                  className={`inline-flex items-center space-x-1.5 px-3.5 py-2 rounded-xl text-xs font-bold transition-all ${
                    autoPlay
                      ? 'bg-emerald-600 hover:bg-emerald-700 text-white'
                      : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                  }`}
                  title="自动连播 (P)"
                >
                  {autoPlay ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
                  <span>{autoPlay ? '暂停连播' : '自动连播 (P)'}</span>
                </button>
                <button
                  onClick={toggleFullscreen}
                  className="inline-flex items-center space-x-1.5 px-3.5 py-2 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold rounded-xl shadow-xs transition-all"
                >
                  {isFullscreen ? <Minimize2 className="h-4 w-4" /> : <Maximize2 className="h-4 w-4" />}
                  <span>{isFullscreen ? '退出全屏' : '全屏演示 (F)'}</span>
                </button>
              </div>
            </div>

            {/* 主体：左 DaySelector + 右舞台 */}
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
              <aside className="no-print hidden lg:block lg:col-span-1">
                <SlideDaySelector
                  maxDay={maxDay}
                  selectedDay={selectedDay}
                  setSelectedDay={(d: number) => {
                    setSelectedDay(d);
                    setCurrentSlideIndex(0);
                  }}
                  readyMap={slideReadyMap}
                  headerText="Day 课程选择"
                />
              </aside>

              <div className="lg:col-span-3">
                {/* 舞台 */}
                <div
                  ref={stageRef}
                  className={`relative w-full ${
                    isFullscreen
                      ? 'fixed inset-0 z-50 bg-black overflow-hidden flex items-center justify-center'
                      : ''
                  }`}
                >
                  <div
                    className={`stage-scroll-scope w-full aspect-video ${
                      isFullscreen ? 'rounded-none border-none shadow-none' : 'max-h-[720px]'
                    } text-white rounded-3xl shadow-2xl border border-slate-800 overflow-clip flex flex-col relative`}
                    style={{
                      background: SLIDE_STAGE_BG,
                      ...(isFullscreen
                        ? {
                            width: SLIDE_DESIGN_W,
                            height: SLIDE_DESIGN_H,
                            transform: `scale(${fsScale})`,
                          }
                        : {}),
                    }}
                  >
                    {isBlackout ? (
                      <div
                        onClick={() => setIsBlackout(false)}
                        className="w-full h-full bg-black flex items-center justify-center text-slate-600 text-sm cursor-pointer select-none"
                      >
                        屏幕暂停中 (按 B 键恢复)
                      </div>
                    ) : (
                      <>
                        <DualSketchWatermark />
                        <MedalHeaderBar
                          selectedDay={selectedDay}
                          currentSlideIndex={currentSlideIndex}
                          slidesLength={slidesLength}
                          stageName={currentDeck?.meta?.stageName ?? ''}
                          output={currentDeck?.meta?.output ?? ''}
                        />
                        <div className="relative flex-1 min-h-0 overflow-hidden">
                          {SlidesRenderer && currentDeck ? (
                            <AnimatePresence mode="wait" initial={false}>
                              <motion.div
                                key={currentSlideIndex}
                                className="h-full"
                                initial={{ opacity: 0, scale: 0.985 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 1.015 }}
                                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                              >
                                <SlidesRenderer
                                  meta={materials.meta}
                                  decks={materials.slidesData}
                                  selectedDay={selectedDay}
                                  currentSlideIndex={currentSlideIndex}
                                />
                              </motion.div>
                            </AnimatePresence>
                          ) : (
                            <div className="h-full flex items-center justify-center text-slate-400 text-sm">
                              本期未配置 slidesDeckRenderer 或 Day {selectedDay} 暂无课件
                            </div>
                          )}
                        </div>
                        <ControlStatusBar
                          currentSlideIndex={currentSlideIndex}
                          slidesLength={slidesLength}
                          onPrev={() => setCurrentSlideIndex((p) => Math.max(0, p - 1))}
                          onNext={() =>
                            setCurrentSlideIndex((p) => Math.min(slidesLength - 1, p + 1))
                          }
                          autoPlay={autoPlay}
                          onTogglePlay={() => setAutoPlay((v) => !v)}
                        />
                      </>
                    )}
                  </div>
                </div>

                {/* 讲师备注 */}
                {!autoPlay && showNotes && currentSlide?.instructorNotes && (
                  <div className="bg-amber-50/90 rounded-2xl p-4 border border-amber-200/80 shadow-xs space-y-2 no-print mt-6">
                    <div className="flex items-center space-x-2 text-xs font-bold text-amber-900">
                      <BookOpen className="h-4 w-4 text-amber-600" />
                      <span>讲师教学要点与提示</span>
                    </div>
                    <p className="text-xs text-amber-800 leading-relaxed font-medium">
                      {currentSlide.instructorNotes}
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* 缩略图网格 Modal */}
            {showGridModal && (
              <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-6">
                <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 max-w-4xl w-full max-h-[80vh] overflow-y-auto space-y-4 text-white">
                  <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                    <h3 className="font-bold text-base flex items-center space-x-2">
                      <Grid className="h-4 w-4 text-indigo-400" />
                      <span>Day {selectedDay} Slide 缩略图大纲 (点击跳转)</span>
                    </h3>
                    <button
                      onClick={() => setShowGridModal(false)}
                      className="px-3 py-1 rounded-lg bg-slate-800 text-xs hover:bg-slate-700"
                    >
                      关闭 (Esc)
                    </button>
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                    {currentDeck?.meta?.slides?.map((s: any, idx: number) => (
                      <div
                        key={s.id || idx}
                        onClick={() => {
                          setCurrentSlideIndex(idx);
                          setShowGridModal(false);
                        }}
                        className={`p-3 rounded-xl border text-left cursor-pointer transition-all ${
                          currentSlideIndex === idx
                            ? 'bg-indigo-600 border-indigo-400 text-white font-bold'
                            : 'bg-slate-800 border-slate-700 text-slate-300 hover:border-slate-500'
                        }`}
                      >
                        <span className="text-[10px] opacity-70 block mb-1">
                          Slide #{idx + 1}
                        </span>
                        <p className="text-xs truncate">{s.title}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
      </main>

      {/* ========= 底栏 ========= */}
      <footer className="no-print border-t border-slate-200 bg-white py-6 mt-12 text-center text-xs text-slate-500">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center space-x-3">
            <div className="flex items-center space-x-1.5 px-2 py-1 bg-slate-100 rounded-lg border border-slate-200 shadow-2xs">
              <img src="/school-logo.svg" alt="软件学院" className="h-5 w-auto object-contain" />
              <div className="h-3 w-px bg-slate-300" />
              <img src="/club-logo.svg" alt="AI创新应用社" className="h-5 w-auto object-contain" />
            </div>
            <button
              onClick={() => router.push('/')}
              className="font-semibold text-indigo-600 hover:text-indigo-800 hover:underline flex items-center space-x-1"
            >
              <ArrowLeft className="h-3 w-3" />
              <span>返回训练营门户</span>
            </button>
            <span className="text-slate-300">|</span>
            <span className="font-semibold text-slate-700">
              {materials.meta.title} · {materials.meta.materialsCount} 项交付物在线物料库
            </span>
          </div>
          <div className="flex items-center space-x-4 text-slate-400 font-medium">
            <span>软件学院 · AI 创新应用社</span>
            <span>·</span>
            <span>
              {materials.meta.year} {materials.meta.season}
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}
