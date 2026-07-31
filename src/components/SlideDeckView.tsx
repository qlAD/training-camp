'use client';

import React, { useState, useEffect, useRef } from 'react';
import {
  ChevronLeft,
  ChevronRight,
  Maximize2,
  Minimize2,
  BookOpen,
  Grid,
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
            ? 'fixed inset-0 z-50 bg-slate-950 p-6 rounded-none border-none shadow-none overflow-hidden flex items-center justify-center'
            : ''
        }`}
      >
        <div
          className={`stage-scroll-scope w-full aspect-video ${
            isFullscreen ? 'h-full max-h-full max-w-[calc(100vh*16/9)]' : 'max-h-[720px]'
          } bg-slate-900 text-white rounded-3xl shadow-2xl border border-slate-800 overflow-clip flex flex-col justify-between relative ${
            isFullscreen ? 'rounded-none border-none shadow-none' : ''
          }`}
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

              {/* 顶部勋章标题栏（保留） */}
              <MedalHeaderBar
                selectedDay={selectedDay}
                currentSlideIndex={currentSlideIndex}
                slidesLength={slidesLength}
                stageName={currentDeck.meta.stageName}
                output={currentDeck.meta.output}
              />

              {/* Slide 渲染引擎：分发到 day-XX.tsx 的自定义 slide 组件 */}
              <div className="p-6 sm:p-10 flex-1 min-h-0 overflow-y-auto relative z-10">
                <Render slideIndex={currentSlideIndex} />
              </div>

              {/* 底部控制状态栏（保留） */}
              <ControlStatusBar
                currentSlideIndex={currentSlideIndex}
                slidesLength={slidesLength}
                onPrev={() => setCurrentSlideIndex((prev) => Math.max(0, prev - 1))}
                onNext={() =>
                  setCurrentSlideIndex((prev) => Math.min(slidesLength - 1, prev + 1))
                }
              />
            </>
          )}
        </div>
      </div>

      {/* Speaker Notes Drawer (Instructor's View) */}
      {showNotes && currentSlide.instructorNotes && (
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
