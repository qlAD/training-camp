'use client';

import React from 'react';
import { 
  Sparkles, 
  FileText, 
  Image as ImageIcon, 
  Presentation, 
  LayoutGrid, 
  Download, 
  Printer, 
  ChevronRight,
  Home,
  ArrowLeft
} from 'lucide-react';
import type { BootcampCohort } from '@/lib';

interface NavbarProps {
  meta: BootcampCohort;
  slidesCount: number;
  currentView: 'overview' | 'plan' | 'poster' | 'slides';
  setCurrentView: (view: 'overview' | 'plan' | 'poster' | 'slides') => void;
  selectedDay: number;
  setSelectedDay: (day: number) => void;
  onExportPDF?: () => void;
  onExportPNG?: () => void;
  onBackToPortal?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  meta,
  slidesCount,
  currentView,
  setCurrentView,
  selectedDay,
  setSelectedDay,
  onExportPDF,
  onExportPNG,
  onBackToPortal,
}) => {
  const materialsCount = meta.materialsCount;
  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur border-b border-slate-200 shadow-xs no-print">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo & Brand */}
          <div className="flex items-center space-x-2.5 md:space-x-2 lg:space-x-3 min-w-0">
            {onBackToPortal && (
              <button
                onClick={onBackToPortal}
                className="inline-flex items-center justify-center space-x-1.5 px-2.5 md:px-2 h-9 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold rounded-xl transition-all border border-slate-200 shrink-0"
                title="返回训练营门户"
              >
                <ArrowLeft className="h-3.5 w-3.5 md:h-3 md:w-3 shrink-0" />
                <span className="hidden lg:inline">返回门户</span>
              </button>
            )}

            <div className="flex items-center space-x-2 md:space-x-1.5 lg:space-x-2 cursor-pointer group min-w-0" onClick={() => setCurrentView('overview')}>
              <div className="flex items-center justify-center space-x-2 md:space-x-1 px-2.5 md:px-1 h-9 bg-slate-100/90 hover:bg-white border border-slate-200/90 rounded-xl shrink-0 shadow-2xs transition-all group-hover:border-indigo-300">
                <img 
                  src="/school-logo.svg" 
                  alt="软件学院 Logo" 
                  className="h-7 md:h-5 w-auto object-contain shrink-0" 
                  onError={(e) => {
                    (e.target as HTMLElement).setAttribute('src', '/school-sketch.svg');
                  }}
                />
                <img 
                  src="/club-logo.svg" 
                  alt="AI 创新应用社 Logo" 
                  className="h-7 md:h-5 w-auto object-contain shrink-0" 
                  onError={(e) => {
                    (e.target as HTMLElement).setAttribute('src', '/club-sketch.svg');
                  }}
                />
              </div>

              <div className="min-w-0">
                <div className="flex items-center space-x-2 md:space-x-1.5">
                  <span className="font-bold text-slate-900 text-sm md:text-[12px] lg:text-sm tracking-tight group-hover:text-indigo-600 transition-colors whitespace-nowrap">软件学院 AI 创新应用社</span>
                  <span className="hidden xl:inline-flex items-center px-1.5 py-0.5 rounded-md text-[10px] font-bold bg-indigo-50 text-indigo-700 border border-indigo-100/80 shrink-0">
                    {materialsCount} 项交付物
                  </span>
                </div>
                <p className="text-[11px] text-slate-500 font-medium hidden lg:block whitespace-nowrap leading-tight">集训营标准化体系全景门户</p>
              </div>
            </div>
          </div>

          {/* Navigation Tabs：显式 h-9 与左侧按钮/Logo 灰盒高度对齐，内部按钮 h-full 铺满 */}
          <nav className="hidden md:flex items-center space-x-0.5 lg:space-x-1 bg-slate-100/80 p-0.5 h-9 rounded-xl border border-slate-200/60 shrink-0">
            <button
              onClick={() => setCurrentView('overview')}
              className={`h-full flex items-center space-x-1.5 lg:space-x-2 px-2 md:px-1.5 lg:px-3.5 rounded-lg text-xs md:text-[11px] font-medium transition-all whitespace-nowrap ${
                currentView === 'overview'
                  ? 'bg-white text-indigo-600 shadow-xs font-semibold'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/50'
              }`}
            >
              <LayoutGrid className="h-4 w-4 md:h-3.5 md:w-3.5 shrink-0" />
              <span className="hidden lg:inline">物料大厅 ({materialsCount})</span>
              <span className="lg:hidden">物料大厅</span>
            </button>

            <button
              onClick={() => setCurrentView('plan')}
              className={`h-full flex items-center space-x-1.5 lg:space-x-2 px-2 md:px-1.5 lg:px-3.5 rounded-lg text-xs md:text-[11px] font-medium transition-all whitespace-nowrap ${
                currentView === 'plan'
                  ? 'bg-white text-indigo-600 shadow-xs font-semibold'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/50'
              }`}
            >
              <FileText className="h-4 w-4 md:h-3.5 md:w-3.5 shrink-0" />
              <span className="hidden lg:inline">1. 训练营方案 (PDF)</span>
              <span className="lg:hidden">1. 方案</span>
            </button>

            <button
              onClick={() => setCurrentView('poster')}
              className={`h-full flex items-center space-x-1.5 lg:space-x-2 px-2 md:px-1.5 lg:px-3.5 rounded-lg text-xs md:text-[11px] font-medium transition-all whitespace-nowrap ${
                currentView === 'poster'
                  ? 'bg-white text-indigo-600 shadow-xs font-semibold'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/50'
              }`}
            >
              <ImageIcon className="h-4 w-4 md:h-3.5 md:w-3.5 shrink-0" />
              <span className="hidden lg:inline">2. 宣传海报 (PNG)</span>
              <span className="lg:hidden">2. 海报</span>
            </button>

            <button
              onClick={() => setCurrentView('slides')}
              className={`h-full flex items-center space-x-1.5 lg:space-x-2 px-2 md:px-1.5 lg:px-3.5 rounded-lg text-xs md:text-[11px] font-medium transition-all whitespace-nowrap ${
                currentView === 'slides'
                  ? 'bg-white text-indigo-600 shadow-xs font-semibold'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/50'
              }`}
            >
              <Presentation className="h-4 w-4 md:h-3.5 md:w-3.5 shrink-0" />
              <span className="hidden lg:inline">3. 课程幻灯片 ({slidesCount} 课)</span>
              <span className="lg:hidden">3. 幻灯片</span>
            </button>
          </nav>

        </div>
      </div>
    </header>
  );
};
