'use client';

import React from 'react';
import {
  Calendar,
  GraduationCap,
  BadgeCheck,
  DollarSign,
  CheckCircle2,
  Zap,
  Clock,
  Award,
  UserCheck,
  Users,
  ShieldCheck,
  BookOpen,
  AlertTriangle,
  PhoneCall,
  Terminal,
} from 'lucide-react';
import type {
  BootcampCohortCore,
  PlanSection,
} from '@/lib';
import type { SummerPlanEnrichment, SummerMetaExtra } from '../types';

/* ======================= 2026-summer 专属：10 种 enrichment 可视化区块 =======================
 * 因为是期数专属文件，直接内联在这里集中维护。新增类型时只改这个文件，不触碰共享层。
 */
const renderTechStackMatrix = (enc: Extract<SummerPlanEnrichment, { type: 'techStackMatrix' }>) => {
  const toneMap: Record<string, string> = {
    indigo: 'font-bold text-indigo-700',
    emerald: 'font-bold text-emerald-700',
    cyan: 'font-bold text-cyan-700',
    slate: 'font-bold text-slate-800',
  };
  return (
    <div className="p-4 bg-slate-50/90 text-slate-800 rounded-2xl space-y-3 border border-slate-200/90 shadow-2xs print-avoid-break">
      <div className="flex items-center justify-between text-xs font-bold text-slate-900">
        <div className="flex items-center space-x-2">
          <Terminal className="h-4 w-4 text-indigo-600" />
          <span>训练营技术栈与 AI 工具链矩阵 (全流程带练)</span>
        </div>
        {enc.tag && (
          <span className="text-[10px] bg-indigo-100 text-indigo-800 px-2 py-0.5 rounded font-bold border border-indigo-200">
            {enc.tag}
          </span>
        )}
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
        {enc.items.map((it, i) => (
          <div
            key={i}
            className="p-2.5 bg-white rounded-xl border border-slate-200/90 shadow-2xs space-y-0.5"
          >
            <span className="text-[10px] text-slate-400 block">{it.label}</span>
            <span className={toneMap[it.tone || 'slate'] || 'font-bold text-slate-800'}>
              {it.value}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

const renderParadigmCompare = (enc: Extract<SummerPlanEnrichment, { type: 'paradigmCompare' }>) => {
  const toneMap: Record<string, string> = {
    indigo: 'text-indigo-600',
    emerald: 'text-emerald-600',
    amber: 'text-amber-600',
  };
  return (
    <div className="p-4 bg-indigo-50/80 rounded-2xl border border-indigo-200/90 space-y-3 print-avoid-break">
      <div className="flex items-center justify-between text-xs font-bold text-indigo-950">
        <div className="flex items-center space-x-2">
          <Zap className="h-4 w-4 text-indigo-600" />
          <span>Vibe Coding 新范式 vs 传统模式核心突破对比</span>
        </div>
        {enc.tag && (
          <span className="text-[10px] bg-indigo-600 text-white px-2 py-0.5 rounded font-bold">
            {enc.tag}
          </span>
        )}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
        {enc.items.map((it, i) => (
          <div
            key={i}
            className="p-3 bg-white rounded-xl border border-indigo-100 shadow-2xs space-y-1"
          >
            <div className={`font-extrabold text-sm ${toneMap[it.tone || 'indigo'] || 'text-indigo-600'}`}>
              {it.kpi}
            </div>
            <p className="text-[11px] text-slate-500">{it.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const renderMilestoneGrid = (enc: Extract<SummerPlanEnrichment, { type: 'milestoneGrid' }>) => {
  const toneMapBg: Record<string, string> = {
    indigo: 'bg-indigo-50/70 border-indigo-200',
    emerald: 'bg-emerald-50/70 border-emerald-200',
    purple: 'bg-purple-50/70 border-purple-200',
    amber: 'bg-amber-50/70 border-amber-200',
  };
  const toneMapTag: Record<string, string> = {
    indigo: 'bg-indigo-600 text-white',
    emerald: 'bg-emerald-600 text-white',
    purple: 'bg-purple-600 text-white',
    amber: 'bg-amber-600 text-white',
  };
  const toneMapTitle: Record<string, string> = {
    indigo: 'text-indigo-950',
    emerald: 'text-emerald-950',
    purple: 'text-purple-950',
    amber: 'text-amber-950',
  };
  return (
    <div className="space-y-3 pt-2 print-avoid-break">
      <div className="text-xs font-bold text-slate-800 flex items-center space-x-2">
        <Clock className="h-4 w-4 text-indigo-600" />
        <span>集训阶段 Milestone 进阶图解</span>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {enc.items.map((it, i) => (
          <div
            key={i}
            className={`p-3.5 rounded-xl border space-y-1.5 ${toneMapBg[it.tone || 'indigo'] || toneMapBg.indigo}`}
          >
            <div className="flex items-center justify-between text-xs font-extrabold">
              <span className={toneMapTitle[it.tone || 'indigo'] || toneMapTitle.indigo}>
                {it.phase}
              </span>
              <span
                className={`px-1.5 py-0.5 rounded text-[10px] ${toneMapTag[it.tone || 'indigo'] || toneMapTag.indigo}`}
              >
                {it.tag}
              </span>
            </div>
            <p className="text-xs text-slate-600">{it.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const renderDeliverablesChecklist = (enc: Extract<SummerPlanEnrichment, { type: 'deliverablesChecklist' }>) => {
  return (
    <div className="p-4 bg-indigo-50/90 text-indigo-950 rounded-2xl space-y-3 border border-indigo-200/90 shadow-2xs print-avoid-break">
      <div className="flex items-center justify-between text-xs font-bold text-indigo-900">
        <div className="flex items-center space-x-2">
          <Award className="h-4 w-4 text-indigo-600" />
          <span>结营考核与学员最终成果产出清单 (100% 验收)</span>
        </div>
        {enc.tag && (
          <span className="text-[10px] bg-amber-100 text-amber-800 border border-amber-300 px-2 py-0.5 rounded font-bold">
            {enc.tag}
          </span>
        )}
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs">
        {enc.items.map((it, i) => (
          <div
            key={i}
            className="p-2.5 bg-white rounded-xl border border-indigo-100 flex items-center space-x-2 shadow-2xs"
          >
            <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
            <span className="font-medium text-slate-800">{it}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

const renderTeamCards = (enc: Extract<SummerPlanEnrichment, { type: 'teamCards' }>) => {
  const toneMapRole: Record<string, string> = {
    indigo: 'bg-indigo-100 text-indigo-700',
    emerald: 'bg-emerald-100 text-emerald-700',
    amber: 'bg-amber-100 text-amber-800',
  };
  return (
    <div className="space-y-3 pt-2 print-avoid-break">
      <div className="text-xs font-bold text-slate-800 flex items-center space-x-2">
        <UserCheck className="h-4 w-4 text-indigo-600" />
        <span>教学与服务保障团队分工</span>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        {enc.items.map((it, i) => (
          <div
            key={i}
            className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-xs space-y-1"
          >
            <div className="font-extrabold text-slate-900 flex items-center justify-between">
              <span>{it.name}</span>
              <span
                className={`text-[10px] px-1.5 py-0.2 rounded font-bold ${toneMapRole[it.tone || 'indigo'] || toneMapRole.indigo}`}
              >
                {it.role}
              </span>
            </div>
            <p className="text-[11px] text-slate-500">{it.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const renderPersonaGrid = (enc: Extract<SummerPlanEnrichment, { type: 'personaGrid' }>) => {
  return (
    <div className="space-y-3 pt-2 print-avoid-break">
      <div className="text-xs font-bold text-slate-800 flex items-center space-x-2">
        <Users className="h-4 w-4 text-indigo-600" />
        <span>全校面向招募学员画像 (零基础无门槛)</span>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 text-xs">
        {enc.items.map((it, i) => (
          <div
            key={i}
            className="p-2.5 bg-slate-50 rounded-xl border border-slate-200 space-y-1"
          >
            <span className="font-extrabold text-slate-800 block">{it.title}</span>
            <p className="text-[10px] text-slate-500">{it.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const renderSupportCards = (enc: Extract<SummerPlanEnrichment, { type: 'supportCards' }>) => {
  const toneMapTitle: Record<string, string> = {
    indigo: 'text-indigo-700',
    emerald: 'text-emerald-700',
    amber: 'text-amber-700',
  };
  return (
    <div className="p-3.5 bg-slate-50/90 rounded-2xl border border-slate-200 space-y-2 text-xs print-avoid-break">
      <div className="font-bold text-slate-800 flex items-center space-x-2">
        <ShieldCheck className="h-4 w-4 text-indigo-600" />
        <span>全方位学习保障与软件支持承诺</span>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
        {enc.items.map((it, i) => (
          <div
            key={i}
            className="p-2 bg-white rounded-lg border border-slate-200/80"
          >
            <span className={`font-bold block mb-0.5 ${toneMapTitle[it.tone || 'indigo'] || toneMapTitle.indigo}`}>
              {it.title}
            </span>
            <p className="text-[10px] text-slate-500">{it.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const renderFaqList = (enc: Extract<SummerPlanEnrichment, { type: 'faqList' }>) => {
  return (
    <div className="space-y-3 pt-2 print-avoid-break">
      <div className="text-xs font-bold text-slate-800 flex items-center space-x-2">
        <BookOpen className="h-4 w-4 text-indigo-600" />
        <span>高频疑问解答 (FAQ)</span>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
        {enc.items.map((it, i) => (
          <div
            key={i}
            className="p-3 bg-indigo-50/50 rounded-xl border border-indigo-100 space-y-1"
          >
            <div className="font-bold text-indigo-950">{it.q}</div>
            <p className="text-[11px] text-slate-600">{it.a}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const renderAssistanceFlow = (enc: Extract<SummerPlanEnrichment, { type: 'assistanceFlow' }>) => {
  return (
    <div className="p-3.5 bg-amber-50/60 rounded-2xl border border-amber-200/80 space-y-2 text-xs print-avoid-break">
      <div className="font-bold text-amber-950 flex items-center space-x-2">
        <AlertTriangle className="h-4 w-4 text-amber-600" />
        <span>落后学员一对一帮扶与应急响应机制</span>
      </div>
      <p className="text-[11px] text-slate-600 leading-relaxed">{enc.desc}</p>
    </div>
  );
};

const renderEnrollmentBox = (enc: Extract<SummerPlanEnrichment, { type: 'enrollmentBox' }>) => {
  return (
    <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 space-y-3 print-avoid-break">
      <div className="flex items-center justify-between text-xs font-bold text-slate-800">
        <div className="flex items-center space-x-2">
          <PhoneCall className="h-4 w-4 text-indigo-600" />
          <span>官方招募通道与咨询联系</span>
        </div>
        {enc.tag && (
          <span className="text-[10px] bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded font-bold border border-emerald-200">
            {enc.tag}
          </span>
        )}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
        {enc.items.map((it, i) => (
          <div
            key={i}
            className="p-3 bg-white rounded-xl border border-slate-200/80 space-y-1"
          >
            <span className="font-bold text-slate-800 block">{it.title}</span>
            <p className="text-[11px] text-slate-500">{it.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

/* 2026-summer 专属 enrichment 查表（合并，不再对外单独导出） */
const renderEnrichment = (enc: SummerPlanEnrichment, eIdx: number) => {
  switch (enc.type) {
    case 'techStackMatrix':
      return <React.Fragment key={eIdx}>{renderTechStackMatrix(enc)}</React.Fragment>;
    case 'paradigmCompare':
      return <React.Fragment key={eIdx}>{renderParadigmCompare(enc)}</React.Fragment>;
    case 'milestoneGrid':
      return <React.Fragment key={eIdx}>{renderMilestoneGrid(enc)}</React.Fragment>;
    case 'deliverablesChecklist':
      return <React.Fragment key={eIdx}>{renderDeliverablesChecklist(enc)}</React.Fragment>;
    case 'teamCards':
      return <React.Fragment key={eIdx}>{renderTeamCards(enc)}</React.Fragment>;
    case 'personaGrid':
      return <React.Fragment key={eIdx}>{renderPersonaGrid(enc)}</React.Fragment>;
    case 'supportCards':
      return <React.Fragment key={eIdx}>{renderSupportCards(enc)}</React.Fragment>;
    case 'faqList':
      return <React.Fragment key={eIdx}>{renderFaqList(enc)}</React.Fragment>;
    case 'assistanceFlow':
      return <React.Fragment key={eIdx}>{renderAssistanceFlow(enc)}</React.Fragment>;
    case 'enrollmentBox':
      return <React.Fragment key={eIdx}>{renderEnrollmentBox(enc)}</React.Fragment>;
    default:
      return null;
  }
};

/* ======================= 2026-summer 专属方案渲染布局 =======================
 * 职责：只负责把 meta + planData 画成可打印的方案文档内容。
 *       不包含 TOC 导航、导出按钮等 workshop 交互（那些由 shells/workshop 层提供）。
 */
export interface SummerPlanLayoutProps {
  meta: BootcampCohortCore<SummerMetaExtra>;
  planData: PlanSection<SummerPlanEnrichment>[];
  printViewId?: string;
  printViewRef?: React.RefObject<HTMLDivElement | null>;
}

export const SummerPlanLayout: React.FC<SummerPlanLayoutProps> = ({
  meta,
  planData,
  printViewId = 'printable-plan-document',
  printViewRef,
}) => {
  return (
    <div
      id={printViewId}
      ref={printViewRef as any}
      className="printable-document bg-white rounded-2xl p-6 sm:p-10 border border-slate-200 shadow-xs space-y-10 relative overflow-hidden"
    >
      {/* 文档页头 */}
      <div className="flex items-center justify-between pb-3 border-b border-slate-200/80 text-[11px] text-slate-400 font-medium">
        <div className="flex items-center space-x-2">
          <span className="font-bold text-slate-700">软件学院 {meta.year} 年{meta.season}训练营</span>
          <span>·</span>
          <span>官方全公开方案</span>
        </div>
        <div>文号: SD-AI-{meta.year}-{meta.id.split('-')[0].slice(-2) || '01'}</div>
      </div>

      {/* 封面标题 */}
      <div className="border-b border-slate-200 pb-8 space-y-5 text-center sm:text-left relative z-10 print-avoid-break">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center space-x-2 bg-slate-50 px-2.5 h-9 rounded-lg border border-slate-200 shadow-2xs">
            <img src="/school-logo.svg" alt="软件学院 Logo" className="h-6 w-auto object-contain" />
            <div className="h-4 w-px bg-slate-300" />
            <img src="/club-logo.svg" alt="AI创新应用社 Logo" className="h-6 w-auto object-contain" />
          </div>
          <div className="flex items-center justify-center px-3 h-9 rounded-md bg-indigo-50 border border-indigo-200 text-indigo-700 text-xs font-bold uppercase tracking-wider">
            AI 创新应用社 官方策划案
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

        {/* 方案摘要 */}
        <div className="p-3.5 rounded-xl bg-indigo-50/80 border-l-4 border-indigo-600 text-indigo-950 text-xs font-medium leading-relaxed">
          <span className="font-bold text-indigo-900 block mb-0.5">📌 方案摘要与核心宗旨：</span>
          {meta.description}
        </div>

        {/* 4 格摘要栏 */}
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
              <span className="font-bold text-slate-800">{meta.target}</span>
            </div>
          </div>
          <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 flex items-center space-x-2">
            <BadgeCheck className="h-4 w-4 text-emerald-600 shrink-0" />
            <div>
              <span className="text-[10px] text-slate-400 block">结营证书</span>
              <span className="font-bold text-slate-800">官方/社团颁发</span>
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

      {/* 方案章节 */}
      {planData.map((section, sIndex) => (
        <section key={section.id} id={`plan-section-${section.id}`} className="space-y-6 scroll-mt-24">
          <div className="border-b border-slate-200 pb-3 flex items-center justify-between">
            <h2 className="text-xl font-bold text-slate-900 tracking-tight flex items-center space-x-2">
              <span className="w-2.5 h-6 bg-indigo-600 rounded-full inline-block"></span>
              <span>{section.title}</span>
            </h2>
            <span className="px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-600 text-xs font-extrabold border border-slate-200">
              章节 {sIndex + 1 < 10 ? `0${sIndex + 1}` : sIndex + 1}
            </span>
          </div>

          <p className="text-sm text-slate-700 leading-relaxed">
            {section.content}
          </p>

          {/* 子章节 */}
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

          {/* 2026-summer 专属 10 种 enrichment 可视化块，直接查表渲染 */}
          {section.enrichments && section.enrichments.length > 0 && (
            <div className="space-y-4">
              {section.enrichments.map((enc, eIdx) => renderEnrichment(enc, eIdx))}
            </div>
          )}
        </section>
      ))}

      {/* 文档尾 + 签署栏 */}
      <div className="pt-8 border-t border-slate-200 space-y-4 relative z-10 print-avoid-break">
        <div className="flex flex-wrap items-center justify-between text-xs text-slate-500 gap-2">
          <div>
            <span className="font-bold text-slate-800">策划编制单位：</span> 软件学院 · AI 创新应用社
          </div>
          <div>
            <span className="font-bold text-slate-800">官方发布日期：</span>
            {meta.officialPublishDate || '待定'}
          </div>
        </div>

        <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-center text-xs text-slate-500 space-y-1">
          <p className="font-bold text-slate-700">{meta.title} · 官方策划方案</p>
          <p className="text-[11px] text-slate-400">
            文件版本: v{meta.year}.1 (包含矢量徽标与双水印规范) | 适用周期: {meta.year}年{meta.season}全校招募
          </p>
        </div>

        <div className="text-center text-[10px] text-slate-400 font-mono pt-1">
          —— 方案完结 · 软件学院 AI 创新应用社 官方发布 ——
        </div>
      </div>
    </div>
  );
};
