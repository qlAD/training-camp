import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { BootcampPortal } from './components/BootcampPortal';
import { MaterialOverview } from './components/MaterialOverview';
import { PlanDocumentView } from './components/PlanDocumentView';
import { PosterGeneratorView } from './components/PosterGeneratorView';
import { SlideDeckView } from './components/SlideDeckView';
import { Sparkles, ArrowLeft } from 'lucide-react';
import { COHORTS_LIST, getCohortMaterials } from './data/cohortsRegistry';

export default function App() {
  const [activeCohortId, setActiveCohortId] = useState<string | null>(null);
  const [currentView, setCurrentView] = useState<'overview' | 'plan' | 'poster' | 'slides'>('overview');
  const [selectedDay, setSelectedDay] = useState<number>(1);

  // PDF 导出实际打印由 PlanDocumentView.handlePrintPDF 内部完成，
  // 此回调仅作埋点/通知用途，避免重复触发 window.print()。
  const handleExportPDF = () => {
    // no-op: 打印对话框已由子组件触发
  };

  // Trigger Poster PNG download handler
  const handleExportPNG = () => {
    if (currentView !== 'poster') {
      setCurrentView('poster');
    }
  };

  // If user has not selected a cohort yet, render the Bootcamp Portal Landing Page
  if (!activeCohortId) {
    return (
      <div className="min-h-screen flex flex-col bg-slate-50 text-slate-800 antialiased font-sans print-reset">
        {/* Minimal Portal Header with Integrated Official Double Logos */}
        <header className="no-print bg-slate-900 border-b border-slate-800 text-white py-3 px-4 sm:px-8 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            {/* Double Logo Pill - Dark Header Adapted */}
            <div className="flex items-center space-x-2 px-2.5 py-1.5 bg-slate-800/90 border border-slate-700/80 rounded-xl shadow-2xs">
              <img 
                src="/school-logo.svg" 
                alt="软件学院 Logo" 
                className="h-7 w-auto object-contain" 
                onError={(e) => {
                  (e.target as HTMLElement).setAttribute('src', '/school-sketch.svg');
                }}
              />
              <div className="h-4.5 w-px bg-slate-600" />
              <img 
                src="/club-logo.svg" 
                alt="AI 创新应用社 Logo" 
                className="h-7 w-auto object-contain" 
                onError={(e) => {
                  (e.target as HTMLElement).setAttribute('src', '/club-sketch.svg');
                }}
              />
            </div>

            {/* Two-line Title Text */}
            <div className="flex flex-col justify-center">
              <span className="font-bold text-sm tracking-tight text-white leading-tight">软件学院 AI 创新应用社</span>
              <span className="text-[11px] text-slate-400 font-medium leading-tight mt-0.5">集训营标准化体系全景门户</span>
            </div>
          </div>
          <div className="text-xs text-slate-400 font-medium hidden md:block">
            历届与规划集训期数 · 物料全景库
          </div>
        </header>

        {/* Portal Landing Content */}
        <main className="flex-1">
          <BootcampPortal
            cohorts={COHORTS_LIST}
            onSelectCohort={(cohortId) => {
              setActiveCohortId(cohortId);
              setCurrentView('overview');
            }}
          />
        </main>

        {/* Minimal Portal Footer with Logo Integration */}
        <footer className="no-print border-t border-slate-200 bg-white py-6 text-center text-xs text-slate-500">
          <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-3">
            <div className="flex items-center space-x-2.5">
              <div className="flex items-center space-x-1.5 px-2 py-1 bg-slate-100 rounded-lg border border-slate-200">
                <img src="/school-logo.svg" alt="软件学院" className="h-5 w-auto object-contain" />
                <div className="h-3 w-px bg-slate-300" />
                <img src="/club-logo.svg" alt="AI创新应用社" className="h-5 w-auto object-contain" />
              </div>
              <span className="font-semibold text-slate-700">软件学院 AI 创新应用社 · 集训营标准化体系全景门户</span>
            </div>
            <div className="text-slate-400 font-medium">软件学院 AI 创新应用社 · 历届集训</div>
          </div>
        </footer>
      </div>
    );
  }

  // Workshop view for the active cohort
  const materials = activeCohortId ? getCohortMaterials(activeCohortId) : null;
  if (!materials) {
    return null;
  }

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-800 antialiased font-sans print-reset">

      {/* Universal Top Navigation Header */}
      <Navbar
        currentView={currentView}
        setCurrentView={setCurrentView}
        selectedDay={selectedDay}
        setSelectedDay={setSelectedDay}
        onExportPDF={handleExportPDF}
        onExportPNG={handleExportPNG}
        onBackToPortal={() => setActiveCohortId(null)}
        meta={materials.meta}
        slidesCount={materials.slidesData.length}
      />

      {/* Main Content Area */}
      <main className="flex-1">
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

        {currentView === 'plan' && (
          <PlanDocumentView meta={materials.meta} planData={materials.planData} onExportPDF={handleExportPDF} />
        )}

        {currentView === 'poster' && (
          <PosterGeneratorView meta={materials.meta} initialConfig={materials.posterConfig} />
        )}

        {currentView === 'slides' && (
          <SlideDeckView
            meta={materials.meta}
            decks={materials.slidesData}
            selectedDay={selectedDay}
            setSelectedDay={setSelectedDay}
          />
        )}
      </main>

      {/* Footer (hidden in print) */}
      <footer className="no-print border-t border-slate-200 bg-white py-6 mt-12 text-center text-xs text-slate-500">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center space-x-3">
            <div className="flex items-center space-x-1.5 px-2 py-1 bg-slate-100 rounded-lg border border-slate-200 shadow-2xs">
              <img src="/school-logo.svg" alt="软件学院" className="h-5 w-auto object-contain" />
              <div className="h-3 w-px bg-slate-300" />
              <img src="/club-logo.svg" alt="AI创新应用社" className="h-5 w-auto object-contain" />
            </div>

            <button
              onClick={() => setActiveCohortId(null)}
              className="font-semibold text-indigo-600 hover:text-indigo-800 hover:underline flex items-center space-x-1"
            >
              <ArrowLeft className="h-3 w-3" />
              <span>返回训练营门户</span>
            </button>
            <span className="text-slate-300">|</span>
            <span className="font-semibold text-slate-700">{materials.meta.title} · {materials.meta.materialsCount} 项交付物在线物料库</span>
          </div>

          <div className="flex items-center space-x-4 text-slate-400 font-medium">
            <span>软件学院 · AI 创新应用社</span>
            <span>·</span>
            <span>{materials.meta.year} {materials.meta.season}</span>
          </div>
        </div>
      </footer>

    </div>
  );
}
