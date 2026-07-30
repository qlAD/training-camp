'use client';

import { BootcampPortal } from '@/components/BootcampPortal';
import { COHORTS_LIST } from '@/data/cohortsRegistry';

export default function Home() {
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
        <BootcampPortal cohorts={COHORTS_LIST} />
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
