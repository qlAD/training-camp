import React, { useState } from 'react';
import { 
  FileText, 
  Image as ImageIcon, 
  Presentation, 
  Search, 
  Download, 
  Printer, 
  Play, 
  Sparkles, 
  CheckCircle2, 
  Layers, 
  Calendar, 
  ArrowRight,
  ShieldCheck,
  Code2,
  BookOpen
} from 'lucide-react';
import { BootcampCohort, DayCourseDeck } from '../types';

interface MaterialOverviewProps {
  meta: BootcampCohort;
  decks: DayCourseDeck[];
  onSelectPlan: () => void;
  onSelectPoster: () => void;
  onSelectSlideDay: (day: number) => void;
}

export const MaterialOverview: React.FC<MaterialOverviewProps> = ({
  meta,
  decks,
  onSelectPlan,
  onSelectPoster,
  onSelectSlideDay,
}) => {
  const materialsCount = meta.materialsCount;
  const slidesCount = decks.length;
  const [activeFilter, setActiveFilter] = useState<'all' | 'plan' | 'poster' | 'slides'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Filter slide decks
  const filteredDecks = decks.filter((deck) => {
    const query = searchQuery.toLowerCase();
    return (
      deck.title.toLowerCase().includes(query) ||
      deck.subtitle.toLowerCase().includes(query) ||
      deck.stageName.toLowerCase().includes(query) ||
      deck.output.toLowerCase().includes(query)
    );
  });

  const showPlan = activeFilter === 'all' || activeFilter === 'plan';
  const showPoster = activeFilter === 'all' || activeFilter === 'poster';
  const showSlides = activeFilter === 'all' || activeFilter === 'slides';

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      
      {/* Hero Welcome Banner */}
      <div className="relative overflow-hidden rounded-3xl bg-slate-900 text-white p-8 sm:p-10 shadow-xl border border-slate-800">
        <div className="absolute top-0 right-0 -mr-16 -mt-16 w-80 h-80 rounded-full bg-indigo-500/20 blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-1/3 -mb-16 w-80 h-80 rounded-full bg-violet-500/20 blur-3xl pointer-events-none"></div>

        <div className="relative z-10 max-w-3xl space-y-4">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-400/20 text-indigo-300 text-xs font-semibold">
            <Sparkles className="h-3.5 w-3.5" />
            <span>训练营物料工坊 · {materialsCount} 大项目交付物全景矩阵</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
            {meta.title} · 物料库
          </h1>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            {meta.description} 包含 1 份可导出 PDF 的完整方案、1 张可导出 PNG 的招募宣传海报，以及 {slidesCount} 课时全套交互式教学演示幻灯片。
          </p>

          {/* Quick Metrics */}
          <div className="pt-4 grid grid-cols-2 sm:grid-cols-4 gap-4 border-t border-slate-800 text-slate-300 text-xs">
            <div className="flex items-center space-x-2">
              <CheckCircle2 className="h-4 w-4 text-emerald-400" />
              <span>物料总数：<strong className="text-white font-semibold">{materialsCount} 个</strong></span>
            </div>
            <div className="flex items-center space-x-2">
              <FileText className="h-4 w-4 text-indigo-400" />
              <span>训练营方案：<strong className="text-white font-semibold">1 份 (支持 PDF)</strong></span>
            </div>
            <div className="flex items-center space-x-2">
              <ImageIcon className="h-4 w-4 text-pink-400" />
              <span>宣传海报：<strong className="text-white font-semibold">1 张 (支持 PNG)</strong></span>
            </div>
            <div className="flex items-center space-x-2">
              <Presentation className="h-4 w-4 text-amber-400" />
              <span>演示幻灯片：<strong className="text-white font-semibold">{slidesCount} 课时全套</strong></span>
            </div>
          </div>
        </div>
      </div>

      {/* Filter & Search Bar */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 bg-white p-4 rounded-2xl border border-slate-200/80 shadow-xs">
        {/* Category Pills */}
        <div className="flex items-center space-x-1 overflow-x-auto pb-1 sm:pb-0">
          <button
            onClick={() => setActiveFilter('all')}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all ${
              activeFilter === 'all'
                ? 'bg-indigo-600 text-white shadow-xs'
                : 'text-slate-600 hover:bg-slate-100'
            }`}
          >
            全部物料 ({materialsCount})
          </button>
          <button
            onClick={() => setActiveFilter('plan')}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all ${
              activeFilter === 'plan'
                ? 'bg-indigo-600 text-white shadow-xs'
                : 'text-slate-600 hover:bg-slate-100'
            }`}
          >
            完整方案 (1)
          </button>
          <button
            onClick={() => setActiveFilter('poster')}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all ${
              activeFilter === 'poster'
                ? 'bg-indigo-600 text-white shadow-xs'
                : 'text-slate-600 hover:bg-slate-100'
            }`}
          >
            宣传海报 (1)
          </button>
          <button
            onClick={() => setActiveFilter('slides')}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all ${
              activeFilter === 'slides'
                ? 'bg-indigo-600 text-white shadow-xs'
                : 'text-slate-600 hover:bg-slate-100'
            }`}
          >
            课程幻灯片 ({slidesCount})
          </button>
        </div>

        {/* Search Input */}
        <div className="relative w-full sm:w-72">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
          <input
            type="text"
            placeholder="搜索关键词 (如 Vue, MySQL, 方案...)"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-4 py-1.5 bg-slate-50 border border-slate-200 text-xs rounded-xl focus:bg-white focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all"
          />
        </div>
      </div>

      {/* Bento Grid Deliverables Section */}
      <div className="space-y-8">
        
        {/* Section 1: Major Assets (Plan & Poster) */}
        {(showPlan || showPoster) && (!searchQuery || '方案 海报 训练营 宣传'.includes(searchQuery)) && (
          <div>
            <h2 className="text-base font-bold text-slate-900 mb-4 flex items-center space-x-2">
              <Layers className="h-4 w-4 text-indigo-600" />
              <span>核心招募与管理物料 (2 项)</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* Asset 1: Plan Document */}
              {showPlan && (
                <div className="group relative bg-gradient-to-br from-indigo-50/70 via-white to-slate-50 rounded-2xl p-6 border border-indigo-100 shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold bg-indigo-100 text-indigo-800">
                        物料 #1 · 方案
                      </span>
                      <span className="inline-flex items-center space-x-1 text-xs text-indigo-600 font-medium">
                        <Printer className="h-3.5 w-3.5" />
                        <span>PDF 打印导出</span>
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">
                      {meta.title} · 完整方案
                    </h3>
                    <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                      涵盖训练营概述、招生信息、阶段课程体系、核心项目架构、师资考核、后勤与应急预案等完整策划板块。
                    </p>

                    <div className="mt-4 flex flex-wrap gap-2 text-[11px] text-slate-500">
                      <span className="px-2 py-0.5 bg-white border border-slate-200 rounded-md">10 大章节</span>
                      <span className="px-2 py-0.5 bg-white border border-slate-200 rounded-md">详细表格与预算</span>
                      <span className="px-2 py-0.5 bg-white border border-slate-200 rounded-md">毕业设计拟选题</span>
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-indigo-100/60 flex items-center justify-between">
                    <span className="text-xs font-medium text-slate-500">支持 PDF 标准排版导出</span>
                    <button
                      onClick={onSelectPlan}
                      className="inline-flex items-center space-x-1.5 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-medium rounded-xl shadow-xs transition-all"
                    >
                      <span>进入查看与导出</span>
                      <ArrowRight className="h-3.5 w-3.5" />
                    </button>
                  </div>
                </div>
              )}

              {/* Asset 2: Promotional Poster */}
              {showPoster && (
                <div className="group relative bg-gradient-to-br from-violet-50/70 via-white to-slate-50 rounded-2xl p-6 border border-violet-100 shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold bg-pink-100 text-pink-800">
                        物料 #2 · 宣传海报
                      </span>
                      <span className="inline-flex items-center space-x-1 text-xs text-pink-600 font-medium">
                        <Download className="h-3.5 w-3.5" />
                        <span>PNG 图片导出</span>
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-slate-900 group-hover:text-violet-600 transition-colors">
                      {meta.title} · 宣传招募海报
                    </h3>
                    <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                      高清重磅视觉海报，集成核心 Slogan、招生条件、特色亮点、全景课表、免费说明与报名联系方式。支持多种视觉主题风格与一键另存为 PNG。
                    </p>

                    <div className="mt-4 flex flex-wrap gap-2 text-[11px] text-slate-500">
                      <span className="px-2 py-0.5 bg-white border border-slate-200 rounded-md">极光黑金 / 学院蓝 / 极简白</span>
                      <span className="px-2 py-0.5 bg-white border border-slate-200 rounded-md">适配 9:16 / 朋友圈海报</span>
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-violet-100/60 flex items-center justify-between">
                    <span className="text-xs font-medium text-slate-500">支持一键生成高清 PNG</span>
                    <button
                      onClick={onSelectPoster}
                      className="inline-flex items-center space-x-1.5 px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white text-xs font-medium rounded-xl shadow-xs transition-all"
                    >
                      <span>自定义与导出 PNG</span>
                      <ArrowRight className="h-3.5 w-3.5" />
                    </button>
                  </div>
                </div>
              )}

            </div>
          </div>
        )}

        {/* Section 2: 14 Course Slide Decks */}
        {showSlides && (
          <div>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-base font-bold text-slate-900 flex items-center space-x-2">
                <Presentation className="h-4 w-4 text-amber-500" />
                <span>课程演示幻灯片全套 (物料 #3 - #{materialsCount} · 共 {slidesCount} 课时)</span>
              </h2>
              <span className="text-xs text-slate-500">点击任意课时卡片直接进入全屏演示模式</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {filteredDecks.map((deck) => (
                <div
                  key={deck.day}
                  onClick={() => onSelectSlideDay(deck.day)}
                  className="group bg-white rounded-2xl p-4 border border-slate-200 hover:border-indigo-400 shadow-xs hover:shadow-md transition-all cursor-pointer flex flex-col justify-between"
                >
                  <div className="space-y-2.5">
                    {/* Header Badge */}
                    <div className="flex items-center justify-between">
                      <span className="inline-flex items-center px-2 py-0.5 rounded-md text-[11px] font-bold bg-amber-50 text-amber-700 border border-amber-200/60">
                        物料 #{decks.findIndex(d => d.day === deck.day) + 3} · Day {deck.day}
                      </span>
                      <span className="text-[10px] text-slate-400 font-medium">
                        {deck.duration} · {deck.slides.length} 页 Slide
                      </span>
                    </div>

                    {/* Stage Name */}
                    <span className="block text-[10px] font-semibold tracking-wider text-indigo-600 uppercase">
                      {deck.stageName}
                    </span>

                    {/* Course Title */}
                    <h3 className="text-sm font-bold text-slate-900 group-hover:text-indigo-600 transition-colors line-clamp-2">
                      {deck.title.split('—')[1] || deck.title}
                    </h3>

                    {/* Subtitle */}
                    <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed">
                      {deck.subtitle}
                    </p>

                    {/* Deliverable Tag */}
                    <div className="pt-2 border-t border-slate-100 flex items-center space-x-1.5 text-[11px] text-slate-600">
                      <CheckCircle2 className="h-3 w-3 text-emerald-500 shrink-0" />
                      <span className="truncate">产出: {deck.output}</span>
                    </div>
                  </div>

                  {/* Footer Action */}
                  <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-indigo-600 group-hover:text-indigo-700">
                    <span className="flex items-center space-x-1 text-[11px] text-slate-400 font-normal">
                      <BookOpen className="h-3.5 w-3.5" />
                      <span>含 Prompts & Code</span>
                    </span>
                    <span className="flex items-center space-x-1">
                      <span>播放课件</span>
                      <Play className="h-3.5 w-3.5 fill-current" />
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {filteredDecks.length === 0 && (
              <div className="text-center py-12 bg-white rounded-2xl border border-slate-200 text-slate-500">
                <Search className="h-8 w-8 text-slate-300 mx-auto mb-2" />
                <p className="text-sm">未搜索到匹配的幻灯片课时，请尝试其他关键词。</p>
              </div>
            )}
          </div>
        )}

      </div>

    </div>
  );
};
