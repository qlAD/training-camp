import React, { useState, useEffect } from 'react';
import { 
  Sparkles, 
  Calendar, 
  FolderCheck, 
  Clock, 
  ArrowRight, 
  CheckCircle2, 
  Lock, 
  BookOpen, 
  Search, 
  Bell, 
  AlertCircle,
  X,
  Users,
  Zap,
  ChevronLeft,
  ChevronRight,
  Play,
  Pause,
  Compass,
  GraduationCap,
  Layers,
  ArrowDown
} from 'lucide-react';
import { BootcampCohort } from '../types';

interface BootcampPortalProps {
  onSelectCohort: (cohortId: string) => void;
}

export const COHORTS_DATA: BootcampCohort[] = [
  {
    id: '2026-summer',
    year: '2026',
    season: '暑期',
    title: '2026 暑期全栈 AI 交付集训营',
    subtitle: '《AI 赋能下的全栈开发》14 天高强度攻坚',
    status: 'active',
    statusText: '资料全量开放 · 16 项交付物',
    dateRange: '2026.07.01 - 2026.07.14',
    materialsCount: 16,
    tags: ['AI 全栈', 'Agent 导学', '14天实战', '完整课件'],
    description: '软件学院核心集训营。配套完整训练营策划案 (PDF)、高清宣发海报 (PNG) 及 14 课时交互式教学 Slide。',
    highlights: ['包含 1 个完整 PDF 策划案', '1 个 4K 宣传海报生成器', '14 天全套 16:9 课程幻灯片'],
    bgGradient: 'from-indigo-600 via-indigo-700 to-violet-800',
    accentColor: 'indigo',
  },
  {
    id: '2026-winter',
    year: '2026',
    season: '寒假',
    title: '2026 寒假 AI Agent 专修营',
    subtitle: '自主智能体架构与 Multi-Agent 协作实践',
    status: 'upcoming',
    statusText: '筹备中 · 预计 2026.12 开启',
    dateRange: '2026.12.20 - 2027.01.05',
    materialsCount: 0,
    tags: ['Multi-Agent', 'LangGraph', 'RAG 深度检索'],
    description: '聚焦于多智能体协同、LangChain/LangGraph 编排与大模型微调工程，目前大纲策划中。',
    highlights: ['Multi-Agent 复杂系统设计', '向量数据库与混合检索', 'AI 驱动自动化测试'],
    bgGradient: 'from-blue-600 to-cyan-700',
    accentColor: 'blue',
  },
  {
    id: '2025-summer',
    year: '2025',
    season: '暑期',
    title: '2025 暑期 Web 全栈工程基础营',
    subtitle: 'TypeScript + React 现代前端实战',
    status: 'archived',
    statusText: '往期回顾 · 沉淀归档',
    dateRange: '2025.07.05 - 2025.07.18',
    materialsCount: 12,
    tags: ['React 18', 'TypeScript', 'Node.js API'],
    description: '前 AI 时代的传统 Web2 全栈实战课程归档，现已完成体系升级并迁移至 2026 暑期体系。',
    highlights: ['组件化架构演进', 'RESTful API 设计', '响应式布局工程'],
    bgGradient: 'from-slate-700 to-slate-900',
    accentColor: 'slate',
  },
  {
    id: '2027-winter',
    year: '2027',
    season: '寒假',
    title: '2027 寒假 具身智能与大模型前沿营',
    subtitle: '端侧 AI 模型部署与硬件交互',
    status: 'planning',
    statusText: '远期规划 · 需求调研中',
    dateRange: '2027.01 待定',
    materialsCount: 0,
    tags: ['端侧 AI', 'WebGPU', 'ONNX Runtime'],
    description: '规划探索浏览器端 Local AI 运行与端侧推理优化，打造下一代边缘 AI 应用。',
    highlights: ['WebGPU 浏览器加速', '量化与小模型剪枝', '实时语音交互'],
    bgGradient: 'from-emerald-700 to-teal-900',
    accentColor: 'emerald',
  },
];

export const BootcampPortal: React.FC<BootcampPortalProps> = ({ onSelectCohort }) => {
  // Spotlight index inside the right card widget
  const [spotlightIndex, setSpotlightIndex] = useState<number>(0);
  const [isAutoPlay, setIsAutoPlay] = useState<boolean>(true);

  // Filters
  const [filterStatus, setFilterStatus] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [modalCohort, setModalCohort] = useState<BootcampCohort | null>(null);
  const [subscribed, setSubscribed] = useState<boolean>(false);

  // Auto-play Spotlight widget
  useEffect(() => {
    if (!isAutoPlay) return;
    const interval = setInterval(() => {
      setSpotlightIndex((prev) => (prev + 1) % COHORTS_DATA.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlay]);

  const handleNextSpotlight = () => {
    setSpotlightIndex((prev) => (prev + 1) % COHORTS_DATA.length);
  };

  const handlePrevSpotlight = () => {
    setSpotlightIndex((prev) => (prev - 1 + COHORTS_DATA.length) % COHORTS_DATA.length);
  };

  const filteredCohorts = COHORTS_DATA.filter((cohort) => {
    const matchesStatus = filterStatus === 'all' || cohort.status === filterStatus;
    const matchesSearch = 
      cohort.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      cohort.subtitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
      cohort.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase())) ||
      cohort.year.includes(searchQuery);
    return matchesStatus && matchesSearch;
  });

  const handleCardClick = (cohort: BootcampCohort) => {
    if (cohort.status === 'active') {
      onSelectCohort(cohort.id);
    } else {
      setModalCohort(cohort);
      setSubscribed(false);
    }
  };

  const activeSpotlightCohort = COHORTS_DATA[spotlightIndex];

  return (
    <div className="min-h-screen bg-slate-50 pb-20">
      
      {/* FIXED TOP HERO BANNER: AI 创新应用社 · 集训营标准化体系 (固定主 Banner) */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 text-white border-b border-slate-800">
        
        {/* Decorative Background Elements with Sketch SVGs */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-500/20 via-transparent to-transparent pointer-events-none" />
        
        {/* Brightened Architectural Sketch SVG Watermarks */}
        <div className="absolute -top-10 -left-10 w-80 h-80 opacity-20 invert pointer-events-none select-none transform -rotate-12">
          <img src="/school-sketch.svg" alt="软件学院线稿水印" className="w-full h-full object-contain brightness-125" />
        </div>
        <div className="absolute top-1/4 -right-16 w-96 h-96 opacity-25 invert pointer-events-none select-none transform rotate-12">
          <img src="/club-sketch.svg" alt="社团线稿水印" className="w-full h-full object-contain brightness-125" />
        </div>

        <div className="absolute -top-32 -left-32 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-1/2 -right-32 w-96 h-96 bg-violet-600/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-10 pb-12">
          
          {/* Top Tag Header - Single Sparkles Badge */}
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <div className="px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-400/30 text-indigo-300 text-xs font-semibold flex items-center space-x-1.5 backdrop-blur">
              <Sparkles className="h-3.5 w-3.5 text-indigo-400" />
              <span>集训营标准化体系全景门户</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Column: Fixed Banner Main Title & Info */}
            <div className="lg:col-span-7 space-y-5">
              <div>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
                  AI 创新应用社
                  <span className="block mt-1.5 bg-gradient-to-r from-indigo-300 via-violet-200 to-white bg-clip-text text-transparent">
                    集训营标准化体系全景门户
                  </span>
                </h1>
                <p className="mt-4 text-sm sm:text-base text-slate-300 leading-relaxed font-normal max-w-2xl">
                  以 <strong className="text-indigo-200 font-semibold">Vibe Coding</strong> 与 <strong className="text-indigo-200 font-semibold">Agent 辅助导学</strong> 为核心的现代软件全栈教学体系。收录历届集训统一配套策划案 (PDF)、宣传海报 (PNG) 及 14 课时 16:9 交互式 Slide 演示文稿。
                </p>
              </div>

              {/* Fixed Platform Metrics */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                <div className="bg-slate-900/60 backdrop-blur rounded-xl p-3 border border-slate-800">
                  <div className="flex items-center space-x-1.5 text-indigo-400 text-[11px] mb-1">
                    <FolderCheck className="h-3.5 w-3.5" />
                    <span>方案库</span>
                  </div>
                  <div className="text-xl font-bold text-white">4 <span className="text-xs font-normal text-slate-400">期全景</span></div>
                </div>

                <div className="bg-slate-900/60 backdrop-blur rounded-xl p-3 border border-slate-800">
                  <div className="flex items-center space-x-1.5 text-emerald-400 text-[11px] mb-1">
                    <Zap className="h-3.5 w-3.5" />
                    <span>当期在线物料</span>
                  </div>
                  <div className="text-xl font-bold text-white">16 <span className="text-xs font-normal text-slate-400">项完备</span></div>
                </div>

                <div className="bg-slate-900/60 backdrop-blur rounded-xl p-3 border border-slate-800">
                  <div className="flex items-center space-x-1.5 text-violet-400 text-[11px] mb-1">
                    <BookOpen className="h-3.5 w-3.5" />
                    <span>配套讲义 Slide</span>
                  </div>
                  <div className="text-xl font-bold text-white">14 <span className="text-xs font-normal text-slate-400">课时全套</span></div>
                </div>

                <div className="bg-slate-900/60 backdrop-blur rounded-xl p-3 border border-slate-800">
                  <div className="flex items-center space-x-1.5 text-amber-400 text-[11px] mb-1">
                    <Users className="h-3.5 w-3.5" />
                    <span>累计覆盖</span>
                  </div>
                  <div className="text-xl font-bold text-white">120+ <span className="text-xs font-normal text-slate-400">学员</span></div>
                </div>
              </div>

              {/* Banner Action */}
              <div className="pt-2 flex items-center space-x-4">
                <button
                  onClick={() => document.getElementById('cohorts-section')?.scrollIntoView({ behavior: 'smooth' })}
                  className="inline-flex items-center space-x-2 px-5 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-xs rounded-xl shadow-lg shadow-indigo-600/30 transition-all cursor-pointer"
                >
                  <span>向下浏览全部期数</span>
                  <ArrowDown className="h-3.5 w-3.5" />
                </button>
                <span className="text-xs text-slate-400 hidden sm:inline">
                  右侧小窗口可实时预览/切换各期焦点卡片 →
                </span>
              </div>
            </div>

            {/* Right Column: SPOTLIGHT CAROUSEL WIDGET (集训精选快览 小小轮播窗口) */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <div className="w-full max-w-md rounded-2xl bg-slate-900/90 border border-slate-700/80 shadow-2xl backdrop-blur p-5 relative overflow-hidden flex flex-col justify-between">
                
                {/* Spotlight Header Bar */}
                <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-3">
                  <div className="flex items-center space-x-2">
                    <div className="h-2 w-2 rounded-full bg-amber-400 animate-ping" />
                    <span className="text-xs font-bold text-indigo-300 tracking-wide uppercase flex items-center space-x-1">
                      <Zap className="h-3.5 w-3.5 text-amber-400" />
                      <span>集训精选快览</span>
                    </span>
                  </div>

                  {/* Spotlight Carousel Switch Controls */}
                  <div className="flex items-center space-x-2 bg-slate-950 px-2.5 py-1 rounded-lg border border-slate-800 text-xs">
                    <button
                      onClick={() => setIsAutoPlay(!isAutoPlay)}
                      className="text-slate-400 hover:text-white transition-colors cursor-pointer mr-1"
                      title={isAutoPlay ? '暂停自动轮播' : '开启自动轮播'}
                    >
                      {isAutoPlay ? <Pause className="h-3 w-3" /> : <Play className="h-3 w-3" />}
                    </button>
                    
                    <span className="text-[11px] text-slate-400 font-mono">
                      {spotlightIndex + 1}/{COHORTS_DATA.length}
                    </span>

                    <div className="flex items-center space-x-0.5 ml-1">
                      <button
                        onClick={handlePrevSpotlight}
                        className="p-1 text-slate-400 hover:text-white hover:bg-slate-800 rounded transition-colors cursor-pointer"
                        title="上一期"
                      >
                        <ChevronLeft className="h-3.5 w-3.5" />
                      </button>
                      <button
                        onClick={handleNextSpotlight}
                        className="p-1 text-slate-400 hover:text-white hover:bg-slate-800 rounded transition-colors cursor-pointer"
                        title="下一期"
                      >
                        <ChevronRight className="h-3.5 w-3.5" />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Spotlight Active Cohort Card Content */}
                <div className="space-y-3 my-1 animate-in fade-in duration-300 key={activeSpotlightCohort.id}">
                  
                  {/* Status & Season Badges */}
                  <div className="flex items-center justify-between">
                    <span className="px-2.5 py-0.5 rounded-md text-[11px] font-bold bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                      {activeSpotlightCohort.year} {activeSpotlightCohort.season}
                    </span>

                    {activeSpotlightCohort.status === 'active' ? (
                      <span className="inline-flex items-center space-x-1 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-emerald-400/20 text-emerald-300 border border-emerald-400/30">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        <span>🔥 {activeSpotlightCohort.statusText}</span>
                      </span>
                    ) : (
                      <span className="inline-flex items-center space-x-1 px-2.5 py-0.5 rounded-full text-[11px] font-medium bg-slate-800 text-slate-300 border border-slate-700">
                        <Clock className="h-3 w-3" />
                        <span>{activeSpotlightCohort.statusText}</span>
                      </span>
                    )}
                  </div>

                  {/* Title & Subtitle */}
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-indigo-300 transition-colors">
                      {activeSpotlightCohort.title}
                    </h3>
                    <p className="text-xs text-indigo-200/80 font-medium mt-0.5">
                      {activeSpotlightCohort.subtitle}
                    </p>
                  </div>

                  {/* Date range & short highlights */}
                  <div className="bg-slate-950/70 rounded-xl p-3 border border-slate-800/80 space-y-1.5 text-xs">
                    <div className="flex items-center justify-between text-[11px] text-slate-400">
                      <span className="flex items-center space-x-1">
                        <Calendar className="h-3 w-3 text-indigo-400" />
                        <span>周期: {activeSpotlightCohort.dateRange}</span>
                      </span>
                      <span>{activeSpotlightCohort.materialsCount > 0 ? `${activeSpotlightCohort.materialsCount} 项已开源` : '筹备中'}</span>
                    </div>

                    <div className="pt-1 space-y-1">
                      {activeSpotlightCohort.highlights.slice(0, 2).map((item, idx) => (
                        <div key={idx} className="flex items-center space-x-1.5 text-[11px] text-slate-300">
                          <CheckCircle2 className="h-3 w-3 text-indigo-400 shrink-0" />
                          <span className="truncate">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Spotlight Widget Bottom CTA & Quick Dots Indicator */}
                <div className="pt-3 border-t border-slate-800 flex items-center justify-between">
                  {/* Indicators */}
                  <div className="flex items-center space-x-1.5">
                    {COHORTS_DATA.map((c, idx) => (
                      <button
                        key={c.id}
                        onClick={() => setSpotlightIndex(idx)}
                        className={`h-1.5 rounded-full transition-all cursor-pointer ${
                          spotlightIndex === idx ? 'w-5 bg-indigo-400' : 'w-1.5 bg-slate-700 hover:bg-slate-500'
                        }`}
                        title={c.title}
                      />
                    ))}
                  </div>

                  {/* Action button */}
                  <button
                    onClick={() => handleCardClick(activeSpotlightCohort)}
                    className={`inline-flex items-center space-x-1.5 px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                      activeSpotlightCohort.status === 'active'
                        ? 'bg-indigo-600 hover:bg-indigo-500 text-white shadow-sm'
                        : 'bg-slate-800 hover:bg-slate-700 text-slate-200'
                    }`}
                  >
                    <span>{activeSpotlightCohort.status === 'active' ? '直接调阅物料' : '查看期数规划'}</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </button>
                </div>

              </div>
            </div>

          </div>

        </div>
      </section>

      {/* LOWER SECTION: ALL BOOTCAMP COHORTS GRID (下半部分 全部集训期数) */}
      <section id="cohorts-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
        
        {/* Section Title & Description */}
        <div className="mb-6 flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-slate-200 pb-5">
          <div>
            <div className="flex items-center space-x-2">
              <Layers className="h-5 w-5 text-indigo-600" />
              <h2 className="text-2xl font-extrabold text-slate-900 tracking-tight">全部集训期数名录</h2>
              <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-indigo-100 text-indigo-700">
                共 {COHORTS_DATA.length} 期方案
              </span>
            </div>
            <p className="mt-1.5 text-xs sm:text-sm text-slate-600">
              浏览软件学院历届与未来规划集训。点击“2026 暑期”卡片可直接调阅并编辑全量 16 项在线交付物。
            </p>
          </div>

          {/* Key Quick Stats */}
          <div className="flex items-center space-x-3 text-xs shrink-0">
            <span className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-xl bg-emerald-50 text-emerald-700 border border-emerald-200 font-medium">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>1 期资料完备</span>
            </span>
            <span className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-xl bg-blue-50 text-blue-700 border border-blue-200 font-medium">
              <Clock className="h-3.5 w-3.5" />
              <span>3 期持续筹备/沉淀</span>
            </span>
          </div>
        </div>

        {/* Filter & Search Bar */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-4 flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          {/* Status Tabs */}
          <div className="flex items-center space-x-1.5 overflow-x-auto pb-1 md:pb-0">
            {[
              { id: 'all', label: `全部期数 (${COHORTS_DATA.length})` },
              { id: 'active', label: '🔥 进行中/已上线 (1)' },
              { id: 'upcoming', label: '⏳ 筹备中 (1)' },
              { id: 'archived', label: '📂 往期归档 (1)' },
              { id: 'planning', label: '💡 远期规划 (1)' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setFilterStatus(tab.id)}
                className={`whitespace-nowrap px-3.5 py-1.5 rounded-xl text-xs font-medium transition-all cursor-pointer ${
                  filterStatus === tab.id
                    ? 'bg-indigo-600 text-white shadow-sm'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200/70 hover:text-slate-900'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative min-w-[260px]">
            <Search className="absolute left-3 top-2.5 h-4 w-4 text-slate-400" />
            <input
              type="text"
              placeholder="搜索训练营年份、主题、关键词..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-slate-50 border border-slate-200 pl-9 pr-3 py-1.5 rounded-xl text-xs text-slate-800 focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-2.5 top-2.5 text-slate-400 hover:text-slate-600 cursor-pointer"
              >
                <X className="h-3.5 w-3.5" />
              </button>
            )}
          </div>
        </div>

        {/* Cohort Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredCohorts.map((cohort) => {
            const isActive = cohort.status === 'active';

            return (
              <div
                key={cohort.id}
                onClick={() => handleCardClick(cohort)}
                className={`group relative rounded-2xl border transition-all duration-300 flex flex-col justify-between overflow-hidden cursor-pointer ${
                  isActive
                    ? 'bg-white border-indigo-200 shadow-md hover:shadow-xl hover:border-indigo-400 ring-2 ring-indigo-500/10'
                    : 'bg-white/80 border-slate-200 shadow-xs hover:shadow-md hover:border-slate-300 opacity-95'
                }`}
              >
                {/* Top Banner Header of Card */}
                <div className={`p-6 bg-gradient-to-r ${cohort.bgGradient} text-white relative`}>
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="flex items-center space-x-2">
                        <span className="px-2.5 py-0.5 rounded-md text-[11px] font-bold bg-white/20 backdrop-blur tracking-wider uppercase">
                          {cohort.year} {cohort.season}
                        </span>
                        {isActive ? (
                          <span className="inline-flex items-center space-x-1 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-emerald-400/20 text-emerald-200 border border-emerald-400/30">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                            <span>🔥 {cohort.statusText}</span>
                          </span>
                        ) : (
                          <span className="inline-flex items-center space-x-1 px-2.5 py-0.5 rounded-full text-[11px] font-medium bg-white/10 text-slate-200 border border-white/10">
                            <Clock className="h-3 w-3" />
                            <span>{cohort.statusText}</span>
                          </span>
                        )}
                      </div>
                      <h3 className="text-xl font-bold mt-3 text-white group-hover:text-indigo-100 transition-colors">
                        {cohort.title}
                      </h3>
                      <p className="text-xs text-slate-200/90 mt-1 font-medium">
                        {cohort.subtitle}
                      </p>
                    </div>

                    <div className="shrink-0 ml-4">
                      {isActive ? (
                        <div className="h-10 w-10 rounded-xl bg-white/20 backdrop-blur flex items-center justify-center text-white shadow-inner group-hover:scale-110 transition-transform">
                          <Zap className="h-5 w-5 text-amber-300 fill-amber-300" />
                        </div>
                      ) : (
                        <div className="h-10 w-10 rounded-xl bg-white/10 backdrop-blur flex items-center justify-center text-slate-300">
                          <Lock className="h-4 w-4" />
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Dates */}
                  <div className="mt-4 flex items-center space-x-2 text-xs text-slate-300/80">
                    <Calendar className="h-3.5 w-3.5" />
                    <span>集训周期: {cohort.dateRange}</span>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {cohort.description}
                    </p>

                    {/* Highlights */}
                    <div className="mt-4 space-y-2">
                      <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block">
                        {isActive ? '包含物料亮点:' : '预期特色规划:'}
                      </span>
                      <ul className="space-y-1.5">
                        {cohort.highlights.map((item, idx) => (
                          <li key={idx} className="flex items-center space-x-2 text-xs text-slate-700">
                            <CheckCircle2 className={`h-3.5 w-3.5 shrink-0 ${isActive ? 'text-indigo-500' : 'text-slate-400'}`} />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Tags */}
                    <div className="mt-5 flex flex-wrap gap-1.5">
                      {cohort.tags.map((tag, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-0.5 rounded-md bg-slate-100 text-slate-600 text-[11px] font-medium border border-slate-200/60"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Card Bottom CTA */}
                  <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                    <div className="text-xs">
                      {isActive ? (
                        <span className="font-semibold text-indigo-600 flex items-center space-x-1">
                          <FolderCheck className="h-4 w-4" />
                          <span>16 项完整物料工坊</span>
                        </span>
                      ) : (
                        <span className="text-slate-400 flex items-center space-x-1">
                          <Clock className="h-3.5 w-3.5" />
                          <span>预定排期中</span>
                        </span>
                      )}
                    </div>

                    {isActive ? (
                      <button className="inline-flex items-center space-x-1.5 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-semibold rounded-xl shadow-sm group-hover:bg-indigo-700 transition-all transform group-hover:translate-x-0.5 cursor-pointer">
                        <span>进入物料工坊</span>
                        <ArrowRight className="h-3.5 w-3.5" />
                      </button>
                    ) : (
                      <button className="inline-flex items-center space-x-1.5 px-3.5 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-medium rounded-xl transition-all cursor-pointer">
                        <span>查看筹备规划</span>
                        <ArrowRight className="h-3 w-3 text-slate-400" />
                      </button>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Interactive Placeholder Modal for Non-Active Cohorts */}
      {modalCohort && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 backdrop-blur-xs p-4 animate-in fade-in duration-200">
          <div className="bg-white rounded-2xl shadow-2xl max-w-lg w-full overflow-hidden border border-slate-200">
            {/* Modal Header */}
            <div className={`p-6 bg-gradient-to-r ${modalCohort.bgGradient} text-white relative`}>
              <button
                onClick={() => setModalCohort(null)}
                className="absolute top-4 right-4 text-white/80 hover:text-white bg-black/20 hover:bg-black/30 p-1.5 rounded-full transition-colors cursor-pointer"
              >
                <X className="h-4 w-4" />
              </button>
              <div className="inline-flex items-center space-x-1 px-2.5 py-0.5 rounded-full bg-white/20 text-white text-[11px] font-medium mb-2">
                <Clock className="h-3 w-3" />
                <span>{modalCohort.statusText}</span>
              </div>
              <h3 className="text-xl font-bold">{modalCohort.title}</h3>
              <p className="text-xs text-slate-200 mt-1">{modalCohort.subtitle}</p>
            </div>

            {/* Modal Body */}
            <div className="p-6 space-y-4">
              <div className="bg-amber-50 border border-amber-200 rounded-xl p-3.5 flex items-start space-x-3 text-amber-900 text-xs">
                <AlertCircle className="h-4 w-4 text-amber-600 shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold">暂未开放在线物料编辑</p>
                  <p className="mt-0.5 text-amber-800">
                    该期集训目前处于筹备或沉淀阶段。平台目前已全量上线 <strong className="font-bold underline">2026 暑期集训（《AI 赋能下的全栈开发》）</strong> 的 16 项套件物料。
                  </p>
                </div>
              </div>

              <div>
                <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2">
                  大纲与规划路线
                </h4>
                <ul className="space-y-2">
                  {modalCohort.highlights.map((h, i) => (
                    <li key={i} className="flex items-center space-x-2 text-xs text-slate-700 bg-slate-50 p-2.5 rounded-lg border border-slate-100">
                      <span className="h-5 w-5 rounded-full bg-indigo-100 text-indigo-700 font-bold text-[10px] flex items-center justify-center shrink-0">
                        {i + 1}
                      </span>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Notice subscription block */}
              <div className="pt-2">
                {subscribed ? (
                  <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 p-3 rounded-xl text-xs flex items-center space-x-2">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                    <span>预约成功！当 {modalCohort.title} 资料上线时将优先通知您。</span>
                  </div>
                ) : (
                  <button
                    onClick={() => setSubscribed(true)}
                    className="w-full py-2.5 px-4 bg-indigo-600 hover:bg-indigo-700 text-white font-medium text-xs rounded-xl shadow-sm flex items-center justify-center space-x-2 transition-all cursor-pointer"
                  >
                    <Bell className="h-3.5 w-3.5" />
                    <span>预约开营通知 / 提交课程需求</span>
                  </button>
                )}
              </div>
            </div>

            {/* Modal Footer */}
            <div className="bg-slate-50 px-6 py-4 border-t border-slate-100 flex items-center justify-between">
              <span className="text-xs text-slate-500">
                试阅完备物料？
              </span>
              <button
                onClick={() => {
                  setModalCohort(null);
                  onSelectCohort('2026-summer');
                }}
                className="px-3.5 py-1.5 bg-slate-900 hover:bg-slate-800 text-white text-xs font-medium rounded-lg transition-all cursor-pointer"
              >
                前往 2026 暑期物料工坊 →
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
