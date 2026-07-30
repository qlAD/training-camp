'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Navbar } from './Navbar';
import { MaterialOverview } from './MaterialOverview';
import { PlanDocumentView } from './PlanDocumentView';
import { PosterGeneratorView } from './PosterGeneratorView';
import { SlideDeckView } from './SlideDeckView';
import { ArrowLeft } from 'lucide-react';
import { CohortMaterials } from '../types';

interface CohortWorkshopProps {
  materials: CohortMaterials;
}

export default function CohortWorkshop({ materials }: CohortWorkshopProps) {
  const router = useRouter();
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
        onBackToPortal={() => router.push('/')}
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
              onClick={() => router.push('/')}
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
