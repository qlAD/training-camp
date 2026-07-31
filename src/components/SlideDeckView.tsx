'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  ChevronLeft,
  ChevronRight,
  Maximize2,
  Minimize2,
  BookOpen,
  Grid,
  Play,
  Pause,
} from 'lucide-react';
import { BootcampCohort, DayDeckRenderer } from '../types';
import { DualSketchWatermark } from './slide-deck/DualSketchWatermark';
import { MedalHeaderBar } from './slide-deck/MedalHeaderBar';
import { ControlStatusBar } from './slide-deck/ControlStatusBar';

interface SlideDeckViewProps {
  meta: BootcampCohort;
  decks: DayDeckRenderer[];
  selectedDay: number;
  setSelectedDay: (day: number) => void;
}

/** 自动连播：每个镜头停留时长（ms），模拟视频镜头节奏 */
const AUTO_ADVANCE_MS = 9000;

/** 全屏设计尺寸：舞台按 1280x720 基准绘制，全屏时整体等比缩放，保证所有字体/组件比例一致 */
const DESIGN_W = 1280;
const DESIGN_H = 720;

/** 舞台统一深空渐变背景：顶部信息栏、内容区、底部工具状态栏共用同一底色（三者一体） */
const STAGE_BG_GRADIENT = 'linear-gradient(160deg, #05060f 0%, #0b0e24 55%, #0e0a22 100%)';

export const SlideDeckView: React.FC<SlideDeckViewProps> = ({
  meta,
  decks,
  selectedDay,
  setSelectedDay,
}) => {
  const slidesCount = decks.length;
  const maxDay = slidesCount > 0 ? Math.max(...decks.map((d) => d.meta.day)) : 1;
  const currentDeck: DayDeckRenderer =
    decks.find((d) => d.meta.day === selectedDay) || decks[0];
  const currentDeckIdx = currentDeck
    ? decks.findIndex((d) => d.meta.day === currentDeck.meta.day)
    : 0;
  const materialNo = currentDeckIdx >= 0 ? currentDeckIdx + 3 : 3;
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [prevSelectedDay, setPrevSelectedDay] = useState(selectedDay);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showNotes, setShowNotes] = useState(true);
  const [showGridModal, setShowGridModal] = useState(false);
  const [isBlackout, setIsBlackout] = useState(false);
  const [autoPlay, setAutoPlay] = useState(false);
  // 全屏时的等比缩放比例（相对 1280x720 设计尺寸）
  const [fsScale, setFsScale] = useState(1);

  // 舞台区域 ref：只针对舞台（slide 渲染区域）调用全屏
  const stageRef = useRef<HTMLDivElement | null>(null);

  if (prevSelectedDay !== selectedDay) {
    setPrevSelectedDay(selectedDay);
    setCurrentSlideIndex(0);
  }

  const slidesLength = currentDeck.meta.slides.length;
  const currentSlide = currentDeck.meta.slides[currentSlideIndex] || currentDeck.meta.slides[0];

  // 真正的全屏切换：使用 Fullscreen API 针对舞台区域
  const toggleFullscreen = async () => {
    const stageEl = stageRef.current;
    if (!stageEl) return;

    try {
      if (!document.fullscreenElement) {
        // 进入全屏：只把舞台区域全屏
        await stageEl.requestFullscreen();
      } else {
        // 退出全屏
        await document.exitFullscreen();
      }
    } catch (err) {
      console.warn('全屏切换失败:', err);
    }
  };

  // 监听 fullscreenchange 事件，同步 isFullscreen 状态（应对按 ESC 原生退出全屏等场景）
  useEffect(() => {
    const handleFullscreenChange = () => {
      const isFs = !!document.fullscreenElement;
      setIsFullscreen(isFs);
      // 若退出全屏时处于黑屏状态，保持黑屏不变（由 B 键独立控制）
    };
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
  }, []);

  // 全屏时基于窗口尺寸计算等比缩放比例，使舞台按 1280x720 设计稿整体缩放（解决全屏字体大小不一）
  useEffect(() => {
    if (!isFullscreen) return;
    let raf = 0;
    const compute = () => {
      raf = requestAnimationFrame(() => {
        const w = window.innerWidth;
        const h = window.innerHeight;
        setFsScale(Math.min(w / DESIGN_W, h / DESIGN_H));
      });
    };
    compute();
    window.addEventListener('resize', compute);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', compute);
    };
  }, [isFullscreen]);

  // 自动连播：定时器推进镜头；手动翻页会重置计时；到尾页自动退出（setState 均在定时器回调内）
  useEffect(() => {
    if (!autoPlay) return;
    if (currentSlideIndex >= slidesLength - 1) {
      const t = setTimeout(() => setAutoPlay(false), 400);
      return () => clearTimeout(t);
    }
    const t = setTimeout(
      () => setCurrentSlideIndex((prev) => Math.min(slidesLength - 1, prev + 1)),
      AUTO_ADVANCE_MS
    );
    return () => clearTimeout(t);
  }, [autoPlay, currentSlideIndex, slidesLength]);

  // Keyboard Navigation Controls
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // ESC 键优先处理：关闭预览 / 退出全屏
      if (e.key === 'Escape') {
        // 先关预览
        if (showGridModal) {
          e.preventDefault();
          setShowGridModal(false);
          return;
        }
        // 全屏由 Fullscreen API 的原生 ESC 处理，此处不需要 setIsFullscreen(false)
        return;
      }

      // 预览打开时，允许 ESC（已在上面处理），其他按键暂时屏蔽避免误翻页
      if (showGridModal) return;

      if (e.key === 'ArrowRight' || e.key === 'Space') {
        e.preventDefault();
        if (currentSlideIndex < slidesLength - 1) {
          setCurrentSlideIndex((prev) => prev + 1);
        }
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        if (currentSlideIndex > 0) {
          setCurrentSlideIndex((prev) => prev - 1);
        }
      } else if (e.key === 'f' || e.key === 'F') {
        e.preventDefault();
        toggleFullscreen();
      } else if (e.key === 'b' || e.key === 'B') {
        e.preventDefault();
        setIsBlackout((prev) => !prev);
      } else if (e.key === 'o' || e.key === 'O') {
        e.preventDefault();
        setShowGridModal((prev) => !prev);
      } else if (e.key === 'p' || e.key === 'P') {
        e.preventDefault();
        setAutoPlay((v) => !v);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentSlideIndex, slidesLength, showGridModal]);

  const Render = currentDeck.Render;

  return (
    <div
      className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6`}
    >
      {/* Top Header Bar & Day Switcher */}
      <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-xs flex flex-col md:flex-row items-start md:items-center justify-between gap-4 no-print">
        <div>
          <div className="flex items-center space-x-2">
            <span className="px-2.5 py-0.5 rounded-md text-xs font-bold bg-amber-50 text-amber-700 border border-amber-200">
              物料 #{materialNo} · Day {selectedDay} / {maxDay} 演示幻灯片
            </span>
            <span className="text-xs text-indigo-600 font-semibold">
              {currentDeck.meta.stageName}
            </span>
          </div>
          <h1 className="text-xl font-extrabold text-slate-900 mt-1">
            {currentDeck.meta.title}
          </h1>
          <p className="text-xs text-slate-500 mt-0.5">{currentDeck.meta.subtitle}</p>
        </div>

        {/* Day Stepper & Presentation Mode Controls */}
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
            <span className="px-2 text-xs font-bold text-slate-800">
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
            title="查看所有 Slide 缩略图 (快捷键 O)"
          >
            <Grid className="h-4 w-4" />
          </button>

          <button
            onClick={() => setShowNotes(!showNotes)}
            className={`p-2 rounded-xl text-xs font-medium transition-all ${
              showNotes
                ? 'bg-indigo-50 text-indigo-700 border border-indigo-200'
                : 'bg-slate-100 text-slate-700'
            }`}
            title="显示/隐藏 讲师备注 (Speaker Notes)"
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
            title="自动连播模式：隐藏界面、镜头自动切换（快捷键 P）"
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

      {/* Main Slide Deck Canvas Stage Frame —— 这就是舞台区域，全屏只针对这里 */}
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
            // 三者一体：顶栏/内容区/底栏共用同一深空渐变底色（水印可从毛玻璃处透出）
            background: STAGE_BG_GRADIENT,
            ...(isFullscreen
              ? {
                  width: DESIGN_W,
                  height: DESIGN_H,
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
              {/* 双 SVG 建筑速写水印（保留） */}
              <DualSketchWatermark />

              {/* 顶部勋章标题栏（全局常驻：手动翻页与自动连播都保留） */}
              <MedalHeaderBar
                selectedDay={selectedDay}
                currentSlideIndex={currentSlideIndex}
                slidesLength={slidesLength}
                stageName={currentDeck.meta.stageName}
                output={currentDeck.meta.output}
              />

              {/* Slide 渲染引擎：镜头切换走交叉淡入 + 轻微缩放转场 */}
              <div className="relative flex-1 min-h-0 overflow-hidden">
                <AnimatePresence mode="wait" initial={false}>
                  <motion.div
                    key={currentSlideIndex}
                    className="h-full"
                    initial={{ opacity: 0, scale: 0.985 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.015 }}
                    transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <Render slideIndex={currentSlideIndex} />
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* 底部控制状态栏（全局常驻：翻页 + 进度条 + 连播控制） */}
              <ControlStatusBar
                currentSlideIndex={currentSlideIndex}
                slidesLength={slidesLength}
                onPrev={() => setCurrentSlideIndex((prev) => Math.max(0, prev - 1))}
                onNext={() =>
                  setCurrentSlideIndex((prev) => Math.min(slidesLength - 1, prev + 1))
                }
                autoPlay={autoPlay}
                onTogglePlay={() => setAutoPlay((v) => !v)}
              />
            </>
          )}
        </div>
      </div>

      {/* Speaker Notes Drawer (Instructor's View) */}
      {!autoPlay && showNotes && currentSlide.instructorNotes && (
        <div className="bg-amber-50/90 rounded-2xl p-4 border border-amber-200/80 shadow-xs space-y-2 no-print">
          <div className="flex items-center space-x-2 text-xs font-bold text-amber-900">
            <BookOpen className="h-4 w-4 text-amber-600" />
            <span>讲师教学要点与提示 (Speaker Notes)</span>
          </div>
          <p className="text-xs text-amber-800 leading-relaxed font-medium">
            {currentSlide.instructorNotes}
          </p>
        </div>
      )}

      {/* Slide Thumbnails Grid Modal (O key trigger) */}
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
              {currentDeck.meta.slides.map((s, idx) => (
                <div
                  key={s.id}
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
                  <span className="text-[10px] opacity-70 block mb-1">Slide #{idx + 1}</span>
                  <p className="text-xs truncate">{s.title}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
