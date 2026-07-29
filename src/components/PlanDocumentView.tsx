import React, { useState } from 'react';
import { 
  Printer, 
  FileText, 
  CheckCircle2, 
  ChevronRight, 
  Bookmark, 
  Calendar,
  Users,
  BadgeCheck,
  ShieldCheck,
  DollarSign,
  GraduationCap,
  Sparkles,
  Code2,
  Terminal,
  Server,
  Award,
  Layers,
  Globe,
  Zap,
  Laptop,
  Clock,
  ArrowRight,
  BookOpen,
  Compass,
  UserCheck,
  AlertTriangle,
  PhoneCall
} from 'lucide-react';
import { BootcampCohort, PlanSection } from '../types';

interface PlanDocumentViewProps {
  meta: BootcampCohort;
  planData: PlanSection[];
  onExportPDF: () => void;
}

export const PlanDocumentView: React.FC<PlanDocumentViewProps> = ({ meta, planData, onExportPDF }) => {
  const slidesCount = Math.max(0, meta.materialsCount - 2);
  const [activeSectionId, setActiveSectionId] = useState<string>('section-1');

  // Scroll active section into view or spy scroll
  const scrollToSection = (id: string) => {
    setActiveSectionId(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Direct in-page print. The @media print stylesheet (index.css) handles
  // @page, watermarks, page numbers, and resets ancestor layout so the
  // printable document fills the page — no popup window needed.
  const handlePrintPDF = () => {
    try {
      window.focus();
      window.print();
    } catch (err) {
      alert("当前浏览器拦截了自动打印。请直接按下 Ctrl + P (Mac: Cmd + P) 保存为 PDF！");
    }
    if (onExportPDF) onExportPDF();
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 print-reset">
      
      {/* Fixed Watermarks for Multi-Page PDF Printing (Faint opacity to prevent overlap) */}
      <div className="hidden print-page-watermark-top pointer-events-none select-none rotate-12">
        <img src="/school-sketch.svg" alt="软件学院 Sketch" className="w-full h-full object-contain" />
      </div>
      <div className="hidden print-page-watermark-bottom pointer-events-none select-none -rotate-12">
        <img src="/club-sketch.svg" alt="社团 Sketch" className="w-full h-full object-contain" />
      </div>

      {/* Top Action Header (hidden in print) */}
      <div className="no-print bg-white p-4 sm:p-6 rounded-2xl border border-slate-200 shadow-xs mb-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center space-x-2">
            <span className="px-2.5 py-0.5 rounded-md text-xs font-bold bg-indigo-50 text-indigo-700 border border-indigo-200">
              物料 #1 · 方案
            </span>
            <span className="text-xs text-slate-400">文件版本 v3.5 | 包含可视化组件与多页排版优化</span>
          </div>
          <h1 className="text-2xl font-extrabold text-slate-900 mt-1">
            {meta.title} · 完整方案
          </h1>
          <p className="text-xs text-slate-500 mt-0.5">
            软件学院实战型集训官方策划案 · 支持一键排版导出为高清 PDF 规范文档
          </p>
        </div>

        <div className="flex items-center space-x-3">
          <button
            type="button"
            onClick={handlePrintPDF}
            className="inline-flex items-center space-x-2 px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-800 text-white text-xs font-bold rounded-xl shadow-md transition-all active:scale-95 cursor-pointer"
          >
            <Printer className="h-4 w-4" />
            <span>导出 PDF 文档</span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 print-reset">
        
        {/* Table of Contents Sidebar (hidden in print) */}
        <div className="no-print hidden lg:block lg:col-span-1">
          <div className="sticky top-24 bg-white rounded-2xl p-4 border border-slate-200 shadow-xs space-y-3">
            <div className="flex items-center space-x-2 text-xs font-bold text-slate-900 border-b border-slate-100 pb-2">
              <Bookmark className="h-4 w-4 text-indigo-600" />
              <span>方案目录 (TOC)</span>
            </div>

            <nav className="space-y-1 max-h-[calc(100vh-220px)] overflow-y-auto pr-1">
              {planData.map((section) => (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className={`w-full text-left px-3 py-2 rounded-xl text-xs font-medium transition-all flex items-center justify-between ${
                    activeSectionId === section.id
                      ? 'bg-indigo-50 text-indigo-700 font-bold border-l-4 border-indigo-600'
                      : 'text-slate-600 hover:bg-slate-100'
                  }`}
                >
                  <span className="truncate">{section.title}</span>
                  <ChevronRight className="h-3 w-3 shrink-0 opacity-50" />
                </button>
              ))}
            </nav>

            <div className="pt-3 border-t border-slate-100 text-[11px] text-slate-400">
              提示：点击按钮即可触发浏览器打印/导出 PDF 模式。
            </div>
          </div>
        </div>

        {/* Main Document Content */}
        <div className="lg:col-span-3 print-reset">
          
          <div className="printable-document bg-white rounded-2xl p-6 sm:p-10 border border-slate-200 shadow-xs space-y-10 relative overflow-hidden">
            
            {/* Document Running Header */}
            <div className="flex items-center justify-between pb-3 border-b border-slate-200/80 text-[11px] text-slate-400 font-medium">
              <div className="flex items-center space-x-2">
                <span className="font-bold text-slate-700">软件学院 {meta.year} 年{meta.season}训练营</span>
                <span>·</span>
                <span>官方全公开方案</span>
              </div>
              <div>文号: SD-AI-{meta.year}-{meta.id.split('-')[0].slice(-2) || '01'}</div>
            </div>

            {/* Document Cover Header */}
            <div className="border-b border-slate-200 pb-8 space-y-5 text-center sm:text-left relative z-10 print-avoid-break">
              <div className="flex flex-wrap items-center justify-between gap-3">
                {/* Refined Compact Double Logo Badge */}
                <div className="flex items-center space-x-2 bg-slate-50 px-2.5 py-1 rounded-lg border border-slate-200 shadow-2xs">
                  <img src="/school-logo.svg" alt="软件学院 Logo" className="h-6 w-auto object-contain" />
                  <div className="h-4 w-px bg-slate-300" />
                  <img src="/club-logo.svg" alt="AI创新应用社 Logo" className="h-6 w-auto object-contain" />
                </div>

                <div className="inline-block px-3 py-1 rounded-md bg-indigo-50 border border-indigo-200 text-indigo-700 text-xs font-bold uppercase tracking-wider">
                  软件学院 官方授权策划案 (PDF 矢量规范)
                </div>
              </div>

              <div>
                  <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                    {meta.title} · 完整方案
                  </h1>
                  <p className="text-slate-600 text-xs sm:text-sm mt-1 max-w-2xl leading-relaxed">
                    {meta.subtitle}
                  </p>
                </div>

                {/* Executive Highlight Callout Box */}
                <div className="p-3.5 rounded-xl bg-indigo-50/80 border-l-4 border-indigo-600 text-indigo-950 text-xs font-medium leading-relaxed">
                  <span className="font-bold text-indigo-900 block mb-0.5">📌 方案摘要与核心宗旨：</span>
                  {meta.description}
                </div>

                {/* 4-Grid Executive Metadata Bar */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-2 text-xs">
                  <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 flex items-center space-x-2">
                    <Calendar className="h-4 w-4 text-indigo-600 shrink-0" />
                    <div>
                      <span className="text-[10px] text-slate-400 block">集训周期</span>
                      <span className="font-bold text-slate-800">{meta.dateRange}</span>
                    </div>
                  </div>
                  <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 flex items-center space-x-2">
                    <GraduationCap className="h-4 w-4 text-indigo-600 shrink-0" />
                    <div>
                      <span className="text-[10px] text-slate-400 block">招募对象</span>
                      <span className="font-bold text-slate-800">{meta.target || '全校低年级 / 零基础'}</span>
                    </div>
                  </div>
                  <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 flex items-center space-x-2">
                    <BadgeCheck className="h-4 w-4 text-emerald-600 shrink-0" />
                    <div>
                      <span className="text-[10px] text-slate-400 block">结营证书</span>
                      <span className="font-bold text-slate-800">软件学院官方颁发</span>
                    </div>
                  </div>
                  <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 flex items-center space-x-2">
                    <DollarSign className="h-4 w-4 text-amber-600 shrink-0" />
                    <div>
                      <span className="text-[10px] text-slate-400 block">集训费用</span>
                      <span className="font-bold text-slate-800">免费 (学院专项支持)</span>
                    </div>
                  </div>
                </div>
            </div>

            {/* Render Plan Sections */}
            {planData.map((section, sIndex) => (
              <section key={section.id} id={section.id} className="space-y-6 scroll-mt-24">
                
                {/* Section Title Header */}
                <div className="border-b border-slate-200 pb-3 flex items-center justify-between">
                  <h2 className="text-xl font-bold text-slate-900 tracking-tight flex items-center space-x-2">
                    <span className="w-2.5 h-6 bg-indigo-600 rounded-full inline-block"></span>
                    <span>{section.title}</span>
                  </h2>
                  <span className="px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-600 text-xs font-extrabold border border-slate-200">
                    章节 {sIndex + 1 < 10 ? `0${sIndex + 1}` : sIndex + 1}
                  </span>
                </div>

                {/* Main Section Content */}
                <p className="text-sm text-slate-700 leading-relaxed">
                  {section.content}
                </p>

                {/* ENRICHMENT: Tech Stack Badges Pill Cloud for Section 1 */}
                {section.id === 'section-1' && (
                  <div className="p-4 bg-slate-50/90 text-slate-800 rounded-2xl space-y-3 border border-slate-200/90 shadow-2xs print-avoid-break">
                    <div className="flex items-center justify-between text-xs font-bold text-slate-900">
                      <div className="flex items-center space-x-2">
                        <Terminal className="h-4 w-4 text-indigo-600" />
                        <span>训练营技术栈与 AI 工具链矩阵 (全流程带练)</span>
                      </div>
                      <span className="text-[10px] bg-indigo-100 text-indigo-800 px-2 py-0.5 rounded font-bold border border-indigo-200">
                        100% 全链路国产化
                      </span>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
                      <div className="p-2.5 bg-white rounded-xl border border-slate-200/90 shadow-2xs space-y-0.5">
                        <span className="text-[10px] text-slate-400 block">AI 编程 IDE</span>
                        <span className="font-bold text-indigo-700">TRAE CN + Reasonix</span>
                      </div>
                      <div className="p-2.5 bg-white rounded-xl border border-slate-200/90 shadow-2xs space-y-0.5">
                        <span className="text-[10px] text-slate-400 block">大模型 API</span>
                        <span className="font-bold text-emerald-700">豆包 / DeepSeek V3</span>
                      </div>
                      <div className="p-2.5 bg-white rounded-xl border border-slate-200/90 shadow-2xs space-y-0.5">
                        <span className="text-[10px] text-slate-400 block">全栈架构</span>
                        <span className="font-bold text-cyan-700">Vue 3 + Spring Boot</span>
                      </div>
                      <div className="p-2.5 bg-white rounded-xl border border-slate-200/90 shadow-2xs space-y-0.5">
                        <span className="text-[10px] text-slate-400 block">版本与云端</span>
                        <span className="font-bold text-slate-800">Gitee + 阿里云 ECS</span>
                      </div>
                    </div>
                  </div>
                )}

                {/* ENRICHMENT: Vibe Coding vs Traditional Paradigm Meter Box for Section 2 */}
                {section.id === 'section-2' && (
                  <div className="p-4 bg-indigo-50/80 rounded-2xl border border-indigo-200/90 space-y-3 print-avoid-break">
                    <div className="flex items-center justify-between text-xs font-bold text-indigo-950">
                      <div className="flex items-center space-x-2">
                        <Zap className="h-4 w-4 text-indigo-600" />
                        <span>Vibe Coding 新范式 vs 传统模式核心突破对比</span>
                      </div>
                      <span className="text-[10px] bg-indigo-600 text-white px-2 py-0.5 rounded font-bold">
                        效率提升 300%+
                      </span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                      <div className="p-3 bg-white rounded-xl border border-indigo-100 shadow-2xs space-y-1">
                        <div className="text-indigo-600 font-extrabold text-sm">语法门槛降低 80%</div>
                        <p className="text-[11px] text-slate-500">无需背诵繁琐语法与配置，自然语言提问即生成精准组件与接口代码。</p>
                      </div>
                      <div className="p-3 bg-white rounded-xl border border-indigo-100 shadow-2xs space-y-1">
                        <div className="text-emerald-600 font-extrabold text-sm">项目上线率 98%+</div>
                        <p className="text-[11px] text-slate-500">从本地 Run 到阿里云 HTTP 公网上线全全带练，告别卡在本地报错的困境。</p>
                      </div>
                      <div className="p-3 bg-white rounded-xl border border-indigo-100 shadow-2xs space-y-1">
                        <div className="text-amber-600 font-extrabold text-sm">工程思维建立</div>
                        <p className="text-[11px] text-slate-500">掌握提示词工程、模块分解、Git 提交与规范化云端集成真实研发流程。</p>
                      </div>
                    </div>
                  </div>
                )}

                {/* Subsections if any */}
                {section.subsections && section.subsections.map((sub, idx) => (
                  <div key={idx} className="bg-slate-50/70 rounded-xl p-5 border border-slate-200/80 space-y-4 print-avoid-break">
                    <h3 className="text-base font-bold text-slate-800 flex items-center justify-between">
                      <span>{sub.title}</span>
                    </h3>

                    {sub.content && (
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        {sub.content}
                      </p>
                    )}

                    {/* Render Structured Table */}
                    {sub.table && (
                      <div className="overflow-x-auto rounded-lg border border-slate-200 bg-white print-avoid-break">
                        <table className="w-full text-left text-xs sm:text-sm">
                          <thead className="bg-slate-100 text-slate-700 font-semibold border-b border-slate-200">
                            <tr>
                              {sub.table.headers.map((h, i) => (
                                <th key={i} className="px-4 py-2.5">
                                  {h}
                                </th>
                              ))}
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-slate-200 text-slate-600">
                            {sub.table.rows.map((row, rIdx) => (
                              <tr key={rIdx} className={rIdx % 2 === 0 ? 'bg-white' : 'bg-slate-50/50'}>
                                {row.map((cell, cIdx) => (
                                  <td key={cIdx} className="px-4 py-2.5 font-medium">
                                    {cell}
                                  </td>
                                ))}
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    )}

                    {/* Render Bullet Points */}
                    {sub.bullets && (
                      <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                        {sub.bullets.map((b, bIdx) => (
                          <li key={bIdx} className="flex items-start space-x-2">
                            <span className="h-1.5 w-1.5 rounded-full bg-indigo-600 mt-2 shrink-0"></span>
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>
                    )}

                  </div>
                ))}

                {/* ENRICHMENT: Visual Roadmap Timeline inside Section 3 (课程安排) */}
                {section.id === 'section-3' && (
                  <div className="space-y-3 pt-2 print-avoid-break">
                    <div className="text-xs font-bold text-slate-800 flex items-center space-x-2">
                      <Clock className="h-4 w-4 text-indigo-600" />
                      <span>{slidesCount} 天集训阶段 Milestone 进阶图解</span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div className="p-3.5 bg-indigo-50/70 rounded-xl border border-indigo-200 space-y-1.5">
                        <div className="flex items-center justify-between text-xs font-extrabold text-indigo-950">
                          <span>阶段一 · 工具筑基 (Day 1 - 3)</span>
                          <span className="bg-indigo-600 text-white px-1.5 py-0.5 rounded text-[10px]">入门</span>
                        </div>
                        <p className="text-xs text-slate-600">
                          环境准备、TRAE IDE 配置、与 AI 模型深度对话、独立生成第一个前端响应式页面。
                        </p>
                      </div>

                      <div className="p-3.5 bg-emerald-50/70 rounded-xl border border-emerald-200 space-y-1.5">
                        <div className="flex items-center justify-between text-xs font-extrabold text-emerald-950">
                          <span>阶段二 · 个人作品集 (Day 4 - 7)</span>
                          <span className="bg-emerald-600 text-white px-1.5 py-0.5 rounded text-[10px]">项目 1</span>
                        </div>
                        <p className="text-xs text-slate-600">
                          设计《个人简历与作品集网站》，实现交互动画、自定义样式与 Gitee Pages 托管。
                        </p>
                      </div>

                      <div className="p-3.5 bg-purple-50/70 rounded-xl border border-purple-200 space-y-1.5">
                        <div className="flex items-center justify-between text-xs font-extrabold text-purple-950">
                          <span>阶段三 · 「此刻」社区 (Day 8 - 12)</span>
                          <span className="bg-purple-600 text-white px-1.5 py-0.5 rounded text-[10px]">项目 2</span>
                        </div>
                        <p className="text-xs text-slate-600">
                          开发全栈兴趣社区，打通 Spring Boot API，接入 AI 自动生成帖子摘要与分类功能。
                        </p>
                      </div>

                      <div className="p-3.5 bg-amber-50/70 rounded-xl border border-amber-200 space-y-1.5">
                        <div className="flex items-center justify-between text-xs font-extrabold text-amber-950">
                          <span>阶段四 · 部署与路演 (Day 13 - 14)</span>
                          <span className="bg-amber-600 text-white px-1.5 py-0.5 rounded text-[10px]">冲刺</span>
                        </div>
                        <p className="text-xs text-slate-600">
                          阿里云云主机部署、公网域名绑定、线上作品展览与软件学院官方结营颁奖。
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {/* ENRICHMENT: Student Deliverables Checklist Matrix for Section 4 (评估与激励) */}
                {section.id === 'section-4' && (
                  <div className="p-4 bg-indigo-50/90 text-indigo-950 rounded-2xl space-y-3 border border-indigo-200/90 shadow-2xs print-avoid-break">
                    <div className="flex items-center justify-between text-xs font-bold text-indigo-900">
                      <div className="flex items-center space-x-2">
                        <Award className="h-4 w-4 text-indigo-600" />
                        <span>结营考核与学员最终成果产出清单 (100% 验收)</span>
                      </div>
                      <span className="text-[10px] bg-amber-100 text-amber-800 border border-amber-300 px-2 py-0.5 rounded font-bold">
                        官方发证
                      </span>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs">
                      <div className="p-2.5 bg-white rounded-xl border border-indigo-100 flex items-center space-x-2 shadow-2xs">
                        <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                        <span className="font-medium text-slate-800">个人全栈作品集网站</span>
                      </div>
                      <div className="p-2.5 bg-white rounded-xl border border-indigo-100 flex items-center space-x-2 shadow-2xs">
                        <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                        <span className="font-medium text-slate-800">「此刻」社区全栈源码</span>
                      </div>
                      <div className="p-2.5 bg-white rounded-xl border border-indigo-100 flex items-center space-x-2 shadow-2xs">
                        <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                        <span className="font-medium text-slate-800">公网 HTTP 独立部署域名</span>
                      </div>
                      <div className="p-2.5 bg-white rounded-xl border border-indigo-100 flex items-center space-x-2 shadow-2xs">
                        <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                        <span className="font-medium text-slate-800">Gitee 规范代码提交记录</span>
                      </div>
                      <div className="p-2.5 bg-white rounded-xl border border-indigo-100 flex items-center space-x-2 shadow-2xs">
                        <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                        <span className="font-medium text-slate-800">AI 提示词案例与提问集</span>
                      </div>
                      <div className="p-2.5 bg-white rounded-xl border border-indigo-100 flex items-center space-x-2 shadow-2xs">
                        <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                        <span className="font-medium text-slate-800">软件学院官方结营证明</span>
                      </div>
                    </div>
                  </div>
                )}

                {/* ENRICHMENT: Mentor Team Cards for Section 5 (组织与保障) */}
                {section.id === 'section-5' && (
                  <div className="space-y-3 pt-2 print-avoid-break">
                    <div className="text-xs font-bold text-slate-800 flex items-center space-x-2">
                      <UserCheck className="h-4 w-4 text-indigo-600" />
                      <span>教学与服务保障团队分工</span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-xs space-y-1">
                        <div className="font-extrabold text-slate-900 flex items-center justify-between">
                          <span>乔林 营长 / 导师</span>
                          <span className="text-[10px] bg-indigo-100 text-indigo-700 px-1.5 py-0.2 rounded font-bold">指导老师</span>
                        </div>
                        <p className="text-[11px] text-slate-500">软件学院指导老师，负责课程顶层架构设计与大模型应用技术把关。</p>
                      </div>

                      <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-xs space-y-1">
                        <div className="font-extrabold text-slate-900 flex items-center justify-between">
                          <span>AI 创新应用社讲师团</span>
                          <span className="text-[10px] bg-emerald-100 text-emerald-700 px-1.5 py-0.2 rounded font-bold">主讲授课</span>
                        </div>
                        <p className="text-[11px] text-slate-500">社团资深开发者，每晚 19:00 企业微信直播实操演示，零保留传授。</p>
                      </div>

                      <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-xs space-y-1">
                        <div className="font-extrabold text-slate-900 flex items-center justify-between">
                          <span>高年级助教团队</span>
                          <span className="text-[10px] bg-amber-100 text-amber-800 px-1.5 py-0.2 rounded font-bold">1v1 答疑</span>
                        </div>
                        <p className="text-[11px] text-slate-500">软件学院学长学姐全天社群答疑、环境报错排查，确保人人不掉队。</p>
                      </div>
                    </div>
                  </div>
                )}

                {/* ENRICHMENT: Target Audience Personas for Section 6 */}
                {section.id === 'section-6' && (
                  <div className="space-y-3 pt-2 print-avoid-break">
                    <div className="text-xs font-bold text-slate-800 flex items-center space-x-2">
                      <Users className="h-4 w-4 text-indigo-600" />
                      <span>全校面向招募学员画像 (零基础无门槛)</span>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 text-xs">
                      <div className="p-2.5 bg-slate-50 rounded-xl border border-slate-200 space-y-1">
                        <span className="font-extrabold text-slate-800 block">🌱 低年级大一新生</span>
                        <p className="text-[10px] text-slate-500">提前建立全栈工程认知，掌握现代化 AI 工具。</p>
                      </div>
                      <div className="p-2.5 bg-slate-50 rounded-xl border border-slate-200 space-y-1">
                        <span className="font-extrabold text-slate-800 block">💡 跨专业/非计类</span>
                        <p className="text-[10px] text-slate-500">无编程经验，想快速做出个人专属网站/小应用。</p>
                      </div>
                      <div className="p-2.5 bg-slate-50 rounded-xl border border-slate-200 space-y-1">
                        <span className="font-extrabold text-slate-800 block">🚀 竞赛与创新项目</span>
                        <p className="text-[10px] text-slate-500">为大创、互联网+等竞赛储备实战原型开发能力。</p>
                      </div>
                      <div className="p-2.5 bg-slate-50 rounded-xl border border-slate-200 space-y-1">
                        <span className="font-extrabold text-slate-800 block">🎨 兴趣与极客玩家</span>
                        <p className="text-[10px] text-slate-500">探索最新 AI Agent、云端部署与现代前端范式。</p>
                      </div>
                    </div>
                  </div>
                )}

                {/* ENRICHMENT: Infrastructure & Software Support for Section 7 */}
                {section.id === 'section-7' && (
                  <div className="p-3.5 bg-slate-50/90 rounded-2xl border border-slate-200 space-y-2 text-xs print-avoid-break">
                    <div className="font-bold text-slate-800 flex items-center space-x-2">
                      <ShieldCheck className="h-4 w-4 text-indigo-600" />
                      <span>全方位学习保障与软件支持承诺</span>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                      <div className="p-2 bg-white rounded-lg border border-slate-200/80">
                        <span className="font-bold text-indigo-700 block mb-0.5">📹 课程全程高清录播</span>
                        <p className="text-[10px] text-slate-500">方便错过的同学随时补课，视频保留至结营后 30 天。</p>
                      </div>
                      <div className="p-2 bg-white rounded-lg border border-slate-200/80">
                        <span className="font-bold text-emerald-700 block mb-0.5">📦 开箱即用代码包</span>
                        <p className="text-[10px] text-slate-500">每堂课提供完整阶段代码分支，卡壳时可直接一键同步。</p>
                      </div>
                      <div className="p-2 bg-white rounded-lg border border-slate-200/80">
                        <span className="font-bold text-amber-700 block mb-0.5">💬 官方交流群全天候</span>
                        <p className="text-[10px] text-slate-500">企业微信专属群，助教 30 分钟内快速响应，环境报错远程排查。</p>
                      </div>
                    </div>
                  </div>
                )}

                {/* ENRICHMENT: FAQ Highlight Cards for Section 8 */}
                {section.id === 'section-8' && (
                  <div className="space-y-3 pt-2 print-avoid-break">
                    <div className="text-xs font-bold text-slate-800 flex items-center space-x-2">
                      <BookOpen className="h-4 w-4 text-indigo-600" />
                      <span>高频疑问解答 (FAQ)</span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                      <div className="p-3 bg-indigo-50/50 rounded-xl border border-indigo-100 space-y-1">
                        <div className="font-bold text-indigo-950">Q: 没有任何编程基础能跟上吗？</div>
                        <p className="text-[11px] text-slate-600">A: 完全可以！课程全程以 AI 对话带练为主，重点在于学会表达需求与调优，助教全程 1v1 指导环境配置。</p>
                      </div>
                      <div className="p-3 bg-indigo-50/50 rounded-xl border border-indigo-100 space-y-1">
                        <div className="font-bold text-indigo-950">Q: 集训需要自备什么设备与环境？</div>
                        <p className="text-[11px] text-slate-600">A: 只需要一台能上网的普通 Windows/Mac 电脑，安装 TRAE CN 软件与 Chrome 浏览器即可，模型 Token 全免费。</p>
                      </div>
                    </div>
                  </div>
                )}

                {/* ENRICHMENT: Contingency & Assistance Flow for Section 9 */}
                {section.id === 'section-9' && (
                  <div className="p-3.5 bg-amber-50/60 rounded-2xl border border-amber-200/80 space-y-2 text-xs print-avoid-break">
                    <div className="font-bold text-amber-950 flex items-center space-x-2">
                      <AlertTriangle className="h-4 w-4 text-amber-600" />
                      <span>落后学员一对一帮扶与应急响应机制</span>
                    </div>
                    <p className="text-[11px] text-slate-600 leading-relaxed">
                      每 3 天设置 Checkpoint 节点对学员打卡与代码同步情况进行统计。对于存在落后风险的学员，助教将主动发起企业微信单聊，提供语音或 Todesk 远程协助排查环境报错，确保零掉队。
                    </p>
                  </div>
                )}

                {/* ENRICHMENT: Enrollment & Contact Box for Section 10 */}
                {section.id === 'section-10' && (
                  <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 space-y-3 print-avoid-break">
                    <div className="flex items-center justify-between text-xs font-bold text-slate-800">
                      <div className="flex items-center space-x-2">
                        <PhoneCall className="h-4 w-4 text-indigo-600" />
                        <span>官方招募通道与咨询联系</span>
                      </div>
                      <span className="text-[10px] bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded font-bold border border-emerald-200">
                        正在热招中
                      </span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                      <div className="p-3 bg-white rounded-xl border border-slate-200/80 space-y-1">
                        <span className="font-bold text-slate-800 block">📍 报名入群方式</span>
                        <p className="text-[11px] text-slate-500">扫码关注软件学院官方年级群招募通知，扫码填写企业微信报名表即可一键入群。</p>
                      </div>
                      <div className="p-3 bg-white rounded-xl border border-slate-200/80 space-y-1">
                        <span className="font-bold text-slate-800 block">📞 官方指导老师</span>
                        <p className="text-[11px] text-slate-500">软件学院 乔林老师 (电话/企微: 19537178744) | AI 创新应用社讲师团</p>
                      </div>
                    </div>
                  </div>
                )}

              </section>
            ))}

            {/* Final Document Sign-off & Footer */}
            <div className="pt-8 border-t border-slate-200 space-y-4 relative z-10 print-avoid-break">
              <div className="flex flex-wrap items-center justify-between text-xs text-slate-500 gap-2">
                <div>
                  <span className="font-bold text-slate-800">策划编制单位：</span> 软件学院 · AI 创新应用社
                </div>
                <div>
                  <span className="font-bold text-slate-800">官方发布日期：</span> {meta.dateRange.split(' ')[0].replace(/\./g, ' 年 ').slice(0, -1)} 月 1 日起
                </div>
              </div>

              <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-center text-xs text-slate-500 space-y-1">
                <p className="font-bold text-slate-700">{meta.title} · 官方策划方案</p>
                <p className="text-[11px] text-slate-400">文件版本: v{meta.year}.1 (包含矢量徽标与双水印规范) | 适用周期: {meta.year}年{meta.season}全校招募</p>
              </div>

              <div className="text-center text-[10px] text-slate-400 font-mono pt-1">
                —— 方案完结 · 软件学院 AI 创新应用社 官方发布 ——
              </div>
            </div>

          </div>

        </div>

      </div>

    </div>
  );
};

