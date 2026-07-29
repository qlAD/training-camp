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

interface NavbarProps {
  currentView: 'overview' | 'plan' | 'poster' | 'slides';
  setCurrentView: (view: 'overview' | 'plan' | 'poster' | 'slides') => void;
  selectedDay: number;
  setSelectedDay: (day: number) => void;
  onExportPDF?: () => void;
  onExportPNG?: () => void;
  onBackToPortal?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentView,
  setCurrentView,
  selectedDay,
  setSelectedDay,
  onExportPDF,
  onExportPNG,
  onBackToPortal,
}) => {
  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur border-b border-slate-200 shadow-xs no-print">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo & Brand */}
          <div className="flex items-center space-x-3">
            {onBackToPortal && (
              <button
                onClick={onBackToPortal}
                className="inline-flex items-center space-x-1.5 px-2.5 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold rounded-lg transition-all border border-slate-200"
                title="返回训练营门户"
              >
                <ArrowLeft className="h-3.5 w-3.5" />
                <span className="hidden sm:inline">返回门户</span>
              </button>
            )}

            <div className="flex items-center space-x-3 cursor-pointer group" onClick={() => setCurrentView('overview')}>
              <div className="flex items-center space-x-2 px-2.5 py-1.5 bg-slate-100/90 hover:bg-white border border-slate-200/90 rounded-xl shrink-0 shadow-2xs transition-all group-hover:border-indigo-300">
                <img 
                  src="/school-logo.svg" 
                  alt="软件学院 Logo" 
                  className="h-7 w-auto object-contain" 
                  onError={(e) => {
                    (e.target as HTMLElement).setAttribute('src', '/school-sketch.svg');
                  }}
                />
                <div className="h-4.5 w-px bg-slate-300/80" />
                <img 
                  src="/club-logo.svg" 
                  alt="AI 创新应用社 Logo" 
                  className="h-7 w-auto object-contain" 
                  onError={(e) => {
                    (e.target as HTMLElement).setAttribute('src', '/club-sketch.svg');
                  }}
                />
              </div>

              <div>
                <div className="flex items-center space-x-2">
                  <span className="font-bold text-slate-900 text-sm tracking-tight group-hover:text-indigo-600 transition-colors">软件学院 AI 创新应用社</span>
                  <span className="inline-flex items-center px-1.5 py-0.5 rounded-md text-[10px] font-bold bg-indigo-50 text-indigo-700 border border-indigo-100/80">
                    16 项交付物
                  </span>
                </div>
                <p className="text-[11px] text-slate-500 font-medium hidden md:block">集训营标准化体系全景门户</p>
              </div>
            </div>
          </div>

          {/* Navigation Tabs */}
          <nav className="hidden md:flex items-center space-x-1 bg-slate-100/80 p-1 rounded-xl border border-slate-200/60">
            <button
              onClick={() => setCurrentView('overview')}
              className={`flex items-center space-x-2 px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
                currentView === 'overview'
                  ? 'bg-white text-indigo-600 shadow-xs font-semibold'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/50'
              }`}
            >
              <LayoutGrid className="h-4 w-4" />
              <span>物料大厅 (16)</span>
            </button>

            <button
              onClick={() => setCurrentView('plan')}
              className={`flex items-center space-x-2 px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
                currentView === 'plan'
                  ? 'bg-white text-indigo-600 shadow-xs font-semibold'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/50'
              }`}
            >
              <FileText className="h-4 w-4" />
              <span>1. 训练营方案 (PDF)</span>
            </button>

            <button
              onClick={() => setCurrentView('poster')}
              className={`flex items-center space-x-2 px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
                currentView === 'poster'
                  ? 'bg-white text-indigo-600 shadow-xs font-semibold'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/50'
              }`}
            >
              <ImageIcon className="h-4 w-4" />
              <span>2. 宣传海报 (PNG)</span>
            </button>

            <button
              onClick={() => setCurrentView('slides')}
              className={`flex items-center space-x-2 px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
                currentView === 'slides'
                  ? 'bg-white text-indigo-600 shadow-xs font-semibold'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/50'
              }`}
            >
              <Presentation className="h-4 w-4" />
              <span>3. 课程幻灯片 (14 课)</span>
            </button>
          </nav>

        </div>
      </div>

      {/* Mobile Sub-navigation */}
      <div className="md:hidden border-t border-slate-200 bg-slate-50/80 px-4 py-2 flex items-center justify-between overflow-x-auto space-x-2">
        <button
          onClick={() => setCurrentView('overview')}
          className={`whitespace-nowrap px-3 py-1 rounded-md text-xs font-medium ${
            currentView === 'overview' ? 'bg-indigo-600 text-white' : 'text-slate-600 bg-white border border-slate-200'
          }`}
        >
          物料大厅 (16)
        </button>
        <button
          onClick={() => setCurrentView('plan')}
          className={`whitespace-nowrap px-3 py-1 rounded-md text-xs font-medium ${
            currentView === 'plan' ? 'bg-indigo-600 text-white' : 'text-slate-600 bg-white border border-slate-200'
          }`}
        >
          完整方案 (PDF)
        </button>
        <button
          onClick={() => setCurrentView('poster')}
          className={`whitespace-nowrap px-3 py-1 rounded-md text-xs font-medium ${
            currentView === 'poster' ? 'bg-indigo-600 text-white' : 'text-slate-600 bg-white border border-slate-200'
          }`}
        >
          宣传海报 (PNG)
        </button>
        <button
          onClick={() => setCurrentView('slides')}
          className={`whitespace-nowrap px-3 py-1 rounded-md text-xs font-medium ${
            currentView === 'slides' ? 'bg-indigo-600 text-white' : 'text-slate-600 bg-white border border-slate-200'
          }`}
        >
          14课时幻灯片
        </button>
      </div>
    </header>
  );
};
