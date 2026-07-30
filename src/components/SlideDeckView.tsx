'use client';

import React, { useState, useEffect } from 'react';
import { 
  ChevronLeft, 
  ChevronRight, 
  Maximize2, 
  Minimize2, 
  BookOpen, 
  Copy, 
  Check, 
  Presentation, 
  Layers, 
  Clock, 
  CheckCircle2, 
  HelpCircle,
  Grid,
  Sparkles,
  Printer,
  FileCode,
  Terminal,
  ArrowRight
} from 'lucide-react';
import { BootcampCohort, DayCourseDeck, SlideContent } from '../types';

interface SlideDeckViewProps {
  meta: BootcampCohort;
  decks: DayCourseDeck[];
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
  const maxDay = slidesCount > 0 ? Math.max(...decks.map(d => d.day)) : 1;
  const currentDeck: DayCourseDeck = decks.find((d) => d.day === selectedDay) || decks[0];
  const currentDeckIdx = currentDeck ? decks.findIndex(d => d.day === currentDeck.day) : 0;
  const materialNo = currentDeckIdx >= 0 ? currentDeckIdx + 3 : 3; // 方案#1、海报#2 → slides 从 #3 起
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [prevSelectedDay, setPrevSelectedDay] = useState(selectedDay);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showNotes, setShowNotes] = useState(true);
  const [showGridModal, setShowGridModal] = useState(false);
  const [isBlackout, setIsBlackout] = useState(false);
  const [copiedText, setCopiedText] = useState<string | null>(null);

  // Reset slide index on day change (adjust state during render instead of effect)
  if (prevSelectedDay !== selectedDay) {
    setPrevSelectedDay(selectedDay);
    setCurrentSlideIndex(0);
  }

  const currentSlide: SlideContent = currentDeck?.slides[currentSlideIndex] || currentDeck?.slides[0];

  const toggleFullscreen = () => {
    setIsFullscreen((prev) => !prev);
  };

  // Keyboard Navigation Controls
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (showGridModal) return;

      if (e.key === 'ArrowRight' || e.key === 'Space') {
        e.preventDefault();
        if (currentSlideIndex < currentDeck.slides.length - 1) {
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
      } else if (e.key === 'Escape') {
        if (isFullscreen) {
          setIsFullscreen(false);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentSlideIndex, currentDeck.slides.length, isFullscreen, showGridModal]);

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedText(label);
    setTimeout(() => setCopiedText(null), 2000);
  };

  return (
    <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6 ${
      isFullscreen ? 'fixed inset-0 z-50 bg-slate-950 p-6 overflow-hidden max-w-none flex flex-col justify-between' : ''
    }`}>
      
      {/* Top Header Bar & Day Switcher (hidden in full screen unless hovered) */}
      <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-xs flex flex-col md:flex-row items-start md:items-center justify-between gap-4 no-print">
        <div>
          <div className="flex items-center space-x-2">
            <span className="px-2.5 py-0.5 rounded-md text-xs font-bold bg-amber-50 text-amber-700 border border-amber-200">
              物料 #{materialNo} · Day {selectedDay} / {maxDay} 演示幻灯片
            </span>
            <span className="text-xs text-indigo-600 font-semibold">{currentDeck.stageName}</span>
          </div>
          <h1 className="text-xl font-extrabold text-slate-900 mt-1">
            {currentDeck.title}
          </h1>
          <p className="text-xs text-slate-500 mt-0.5">
            {currentDeck.subtitle}
          </p>
        </div>

        {/* Day Stepper & Presentation Mode Controls */}
        <div className="flex flex-wrap items-center gap-2">
          {/* Day Previous / Next Stepper */}
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

          {/* Grid Overview Button */}
          <button
            onClick={() => setShowGridModal(true)}
            className="p-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl text-xs font-medium transition-all"
            title="查看所有 Slide 缩略图 (快捷键 O)"
          >
            <Grid className="h-4 w-4" />
          </button>

          {/* Instructor Notes Toggle */}
          <button
            onClick={() => setShowNotes(!showNotes)}
            className={`p-2 rounded-xl text-xs font-medium transition-all ${
              showNotes ? 'bg-indigo-50 text-indigo-700 border border-indigo-200' : 'bg-slate-100 text-slate-700'
            }`}
            title="显示/隐藏 讲师备注 (Speaker Notes)"
          >
            <BookOpen className="h-4 w-4" />
          </button>

          {/* Fullscreen Button */}
          <button
            onClick={toggleFullscreen}
            className="inline-flex items-center space-x-1.5 px-3.5 py-2 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold rounded-xl shadow-xs transition-all"
          >
            {isFullscreen ? <Minimize2 className="h-4 w-4" /> : <Maximize2 className="h-4 w-4" />}
            <span>{isFullscreen ? '退出全屏' : '全屏演示 (F)'}</span>
          </button>
        </div>
      </div>

      {/* Main Slide Deck Canvas Stage Frame */}
      <div className="relative">
        
        {/* Blackout Screen state */}
        {isBlackout ? (
          <div
            onClick={() => setIsBlackout(false)}
            className="w-full aspect-video bg-black rounded-3xl flex items-center justify-center text-slate-600 text-sm cursor-pointer select-none"
          >
            屏幕暂停中 (按 B 键恢复)
          </div>
        ) : (
          <div className="w-full aspect-video max-h-[720px] bg-slate-900 text-white rounded-3xl shadow-2xl border border-slate-800 overflow-hidden flex flex-col justify-between relative">
            
            {/* Background Architectural Sketch Line-art Watermarks for Slide Stage */}
            <div className="absolute -top-10 -right-10 w-80 h-80 opacity-20 invert pointer-events-none select-none transform rotate-12">
              <img src="/school-sketch.svg" alt="软件学院 Sketch 课件水印" className="w-full h-full object-contain brightness-125" />
            </div>
            <div className="absolute -bottom-10 -left-10 w-72 h-72 opacity-25 invert pointer-events-none select-none transform -rotate-12">
              <img src="/club-sketch.svg" alt="社团 Sketch 课件水印" className="w-full h-full object-contain brightness-125" />
            </div>

            {/* Slide Header Info */}
            <div className="p-6 sm:p-8 flex items-center justify-between border-b border-slate-800/80 relative z-10">
              <div className="flex items-center space-x-3">
                <div className="flex items-center space-x-2 bg-slate-800/90 border border-slate-700/80 px-2.5 py-1 rounded-xl shrink-0 shadow-xs">
                  <img src="/school-logo.svg" alt="软件学院" className="h-5 w-auto object-contain" />
                  <div className="h-3.5 w-px bg-slate-600" />
                  <img src="/club-logo.svg" alt="AI创新应用社" className="h-5 w-auto object-contain" />
                </div>
                <span className="px-2.5 py-1 rounded-md text-xs font-extrabold bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                  Day {selectedDay} · Slide {currentSlideIndex + 1}/{currentDeck.slides.length}
                </span>
                <span className="text-xs text-slate-400 font-medium hidden sm:inline">
                  {currentDeck.stageName}
                </span>
              </div>

              <div className="flex items-center space-x-2 text-xs text-slate-400">
                <Clock className="h-3.5 w-3.5" />
                <span>课时产出: {currentDeck.output}</span>
              </div>
            </div>

            {/* Slide Layout Render Engine */}
            <div className="p-6 sm:p-10 flex-1 overflow-y-auto space-y-6 relative z-10">
              
              {/* Layout 1: Cover (Clean single header) */}
              {currentSlide.layout === 'cover' && (
                <div className="h-full flex flex-col justify-center space-y-5 max-w-3xl relative">
                  <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-indigo-500/20 border border-indigo-400/30 text-indigo-300 text-xs font-bold w-fit">
                    <Sparkles className="h-3.5 w-3.5" />
                    <span>{currentDeck.stageName} · 课程讲义</span>
                  </div>

                  <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
                    {currentSlide.title}
                  </h2>
                  
                  {currentSlide.subtitle && (
                    <p className="text-lg text-indigo-200 font-medium leading-relaxed">
                      {currentSlide.subtitle}
                    </p>
                  )}

                  {currentSlide.bullets && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                      {currentSlide.bullets.map((b, i) => (
                        <div key={i} className="p-3 rounded-xl bg-white/5 border border-white/10 text-xs text-slate-200 font-medium flex items-center space-x-2">
                          <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
                          <span>{b}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}

              {/* Layout 2: Concept Bullet Points */}
              {currentSlide.layout === 'concept' && (
                <div className="space-y-6 max-w-4xl">
                  <div>
                    <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                      {currentSlide.title}
                    </h2>
                    {currentSlide.subtitle && (
                      <p className="text-xs sm:text-sm text-indigo-300 mt-1">{currentSlide.subtitle}</p>
                    )}
                  </div>

                  {currentSlide.bullets && (
                    <div className="space-y-3">
                      {currentSlide.bullets.map((bullet, idx) => (
                        <div key={idx} className="p-4 rounded-2xl bg-slate-800/80 border border-slate-700/80 text-sm text-slate-200 font-medium leading-relaxed flex items-start space-x-3">
                          <div className="h-6 w-6 rounded-full bg-indigo-600/30 text-indigo-400 font-extrabold text-xs flex items-center justify-center shrink-0 mt-0.5">
                            {idx + 1}
                          </div>
                          <span>{bullet}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}

              {/* Layout 3: Split Code View */}
              {currentSlide.layout === 'split_code' && currentSlide.codeBlock && (
                <div className="space-y-4">
                  <div>
                    <h2 className="text-2xl font-bold text-white">{currentSlide.title}</h2>
                    {currentSlide.subtitle && <p className="text-xs text-indigo-300 mt-1">{currentSlide.subtitle}</p>}
                  </div>

                  <div className="rounded-2xl border border-slate-800 bg-slate-950 overflow-hidden text-xs">
                    <div className="px-4 py-2 bg-slate-900 border-b border-slate-800 flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <FileCode className="h-4 w-4 text-indigo-400" />
                        <span className="font-mono text-slate-300 font-bold">{currentSlide.codeBlock.filename || 'Code Snippet'}</span>
                      </div>
                      <button
                        onClick={() => copyToClipboard(currentSlide.codeBlock!.code, 'code')}
                        className="flex items-center space-x-1 px-2.5 py-1 rounded bg-slate-800 hover:bg-slate-700 text-slate-300 text-[11px]"
                      >
                        {copiedText === 'code' ? <Check className="h-3.5 w-3.5 text-emerald-400" /> : <Copy className="h-3.5 w-3.5" />}
                        <span>{copiedText === 'code' ? '已复制' : '复制代码'}</span>
                      </button>
                    </div>

                    <pre className="p-4 overflow-x-auto text-emerald-300 font-mono text-xs leading-relaxed">
                      <code>{currentSlide.codeBlock.code}</code>
                    </pre>
                  </div>

                  {currentSlide.keyTakeaway && (
                    <div className="p-3 rounded-xl bg-indigo-950/60 border border-indigo-800/60 text-xs text-indigo-200 flex items-center space-x-2">
                      <Sparkles className="h-4 w-4 text-indigo-400 shrink-0" />
                      <span><strong>关键结论：</strong> {currentSlide.keyTakeaway}</span>
                    </div>
                  )}
                </div>
              )}

              {/* Layout 4: Comparison Left vs Right */}
              {currentSlide.layout === 'comparison' && currentSlide.comparison && (
                <div className="space-y-6">
                  <div>
                    <h2 className="text-2xl font-bold text-white">{currentSlide.title}</h2>
                    {currentSlide.subtitle && <p className="text-xs text-indigo-300 mt-1">{currentSlide.subtitle}</p>}
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Left Column */}
                    <div className="p-5 rounded-2xl bg-slate-800/50 border border-slate-700/80 space-y-3">
                      <h3 className="text-sm font-bold text-slate-300 pb-2 border-b border-slate-700">
                        {currentSlide.comparison.leftTitle}
                      </h3>
                      <ul className="space-y-2 text-xs text-slate-400">
                        {currentSlide.comparison.leftItems.map((item, i) => (
                          <li key={i} className="flex items-start space-x-2">
                            <span className="h-1.5 w-1.5 rounded-full bg-slate-500 mt-1.5 shrink-0"></span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Right Column (Highlighted) */}
                    <div className="p-5 rounded-2xl bg-indigo-950/50 border border-indigo-500/40 space-y-3">
                      <h3 className="text-sm font-bold text-indigo-300 pb-2 border-b border-indigo-800">
                        {currentSlide.comparison.rightTitle}
                      </h3>
                      <ul className="space-y-2 text-xs text-indigo-100">
                        {currentSlide.comparison.rightItems.map((item, i) => (
                          <li key={i} className="flex items-start space-x-2">
                            <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              )}

              {/* Layout 5: Steps Process */}
              {currentSlide.layout === 'steps' && currentSlide.steps && (
                <div className="space-y-6">
                  <div>
                    <h2 className="text-2xl font-bold text-white">{currentSlide.title}</h2>
                    {currentSlide.subtitle && <p className="text-xs text-indigo-300 mt-1">{currentSlide.subtitle}</p>}
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
                    {currentSlide.steps.map((st) => (
                      <div key={st.stepNumber} className="p-4 rounded-2xl bg-slate-800/80 border border-slate-700/80 space-y-2 flex flex-col justify-between">
                        <div>
                          <div className="h-7 w-7 rounded-lg bg-indigo-600 text-white font-extrabold text-xs flex items-center justify-center mb-2">
                            {st.stepNumber}
                          </div>
                          <h4 className="font-bold text-xs text-white">{st.title}</h4>
                          <p className="text-[11px] text-slate-400 mt-1 leading-snug">{st.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Layout 6: Prompt Template */}
              {currentSlide.layout === 'prompt_template' && currentSlide.promptBox && (
                <div className="space-y-4">
                  <div>
                    <h2 className="text-2xl font-bold text-white">{currentSlide.title}</h2>
                    {currentSlide.subtitle && <p className="text-xs text-indigo-300 mt-1">{currentSlide.subtitle}</p>}
                  </div>

                  <div className="rounded-2xl border border-amber-500/40 bg-slate-950 overflow-hidden text-xs">
                    <div className="px-4 py-2.5 bg-amber-500/10 border-b border-amber-500/30 flex items-center justify-between">
                      <div className="flex items-center space-x-2 text-amber-300 font-bold">
                        <Terminal className="h-4 w-4" />
                        <span>AI 万能结构化提示词 (Prompt Template)</span>
                      </div>
                      <button
                        onClick={() => copyToClipboard(currentSlide.promptBox!.template, 'prompt')}
                        className="flex items-center space-x-1 px-3 py-1 rounded-lg bg-amber-500 text-slate-950 font-bold text-[11px]"
                      >
                        {copiedText === 'prompt' ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
                        <span>{copiedText === 'prompt' ? '提示词已复制' : '一键复制 Prompt'}</span>
                      </button>
                    </div>

                    <div className="p-4 space-y-3">
                      <div className="grid grid-cols-3 gap-2 text-[11px] text-slate-400 pb-2 border-b border-slate-800">
                        <div><strong>角色：</strong> {currentSlide.promptBox.role}</div>
                        <div><strong>任务：</strong> {currentSlide.promptBox.task}</div>
                        <div><strong>技术栈：</strong> {currentSlide.promptBox.stack}</div>
                      </div>
                      
                      <pre className="p-3 rounded-xl bg-slate-900 text-slate-200 font-mono text-xs whitespace-pre-wrap leading-relaxed border border-slate-800">
                        {currentSlide.promptBox.template}
                      </pre>
                    </div>
                  </div>
                </div>
              )}

              {/* Layout 7: Exercise Task Box */}
              {currentSlide.layout === 'exercise' && (
                <div className="space-y-6 max-w-3xl">
                  <div>
                    <h2 className="text-2xl font-bold text-white">{currentSlide.title}</h2>
                    {currentSlide.subtitle && <p className="text-xs text-emerald-400 font-semibold mt-1">{currentSlide.subtitle}</p>}
                  </div>

                  {currentSlide.bullets && (
                    <div className="p-6 rounded-2xl bg-emerald-950/40 border border-emerald-500/40 space-y-3">
                      <h3 className="text-xs font-bold uppercase tracking-wider text-emerald-300 flex items-center space-x-2">
                        <CheckCircle2 className="h-4 w-4" />
                        <span>实操跟练步骤清单</span>
                      </h3>

                      <div className="space-y-2">
                        {currentSlide.bullets.map((b, i) => (
                          <div key={i} className="p-3 rounded-xl bg-black/20 text-xs text-emerald-100 font-medium flex items-start space-x-2">
                            <span className="px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-bold text-[10px] shrink-0">
                              Task {i + 1}
                            </span>
                            <span>{b}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}

            </div>

            {/* Slide Footer Navigation Controls */}
            <div className="p-4 bg-slate-950 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => setCurrentSlideIndex((prev) => Math.max(0, prev - 1))}
                  disabled={currentSlideIndex === 0}
                  className="px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 disabled:opacity-30 text-white font-medium flex items-center space-x-1"
                >
                  <ChevronLeft className="h-4 w-4" />
                  <span>上一页</span>
                </button>

                <span className="text-slate-500">
                  {currentSlideIndex + 1} / {currentDeck.slides.length}
                </span>

                <button
                  onClick={() => setCurrentSlideIndex((prev) => Math.min(currentDeck.slides.length - 1, prev + 1))}
                  disabled={currentSlideIndex === currentDeck.slides.length - 1}
                  className="px-3 py-1.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 disabled:opacity-30 text-white font-medium flex items-center space-x-1"
                >
                  <span>下一页</span>
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>

              <div className="hidden sm:flex items-center space-x-4 text-[11px] text-slate-500">
                <span>快捷键: ⬅️ ➡️ 翻页 | F 全屏 | B 黑屏 | O 缩略图</span>
              </div>
            </div>

          </div>
        )}

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
              {currentDeck.slides.map((s, idx) => (
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
