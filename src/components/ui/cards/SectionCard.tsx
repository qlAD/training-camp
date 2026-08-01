'use client';

import React from 'react';
import { ChevronRight } from 'lucide-react';

/** 方案文档 section 卡片容器（标准渐变边框 + 阴影 + 圆角） */
export interface SectionCardProps {
  id?: string;
  /** 序号，如 01 / 02 … */
  index: string | number;
  /** section 标题 */
  title: string;
  /** section 副标题（可选） */
  subtitle?: string;
  /** 图标（lucide-react 图标组件） */
  icon?: React.ComponentType<{ className?: string }>;
  /** 主色调（影响 index 徽章 / 边框） */
  tone?: 'indigo' | 'sky' | 'slate' | 'pink' | 'emerald';
  className?: string;
  children?: React.ReactNode;
  /** 右上角附加操作区（例如导出按钮） */
  actions?: React.ReactNode;
  /** 是否展开（预留，未来可折叠） */
  defaultOpen?: boolean;
}

const TONE_INDEX: Record<NonNullable<SectionCardProps['tone']>, string> = {
  indigo: 'bg-indigo-600 text-white',
  sky: 'bg-sky-600 text-white',
  slate: 'bg-slate-800 text-white',
  pink: 'bg-pink-600 text-white',
  emerald: 'bg-emerald-600 text-white',
};

const TONE_BORDER: Record<NonNullable<SectionCardProps['tone']>, string> = {
  indigo: 'group-hover:border-indigo-200 before:bg-gradient-to-br before:from-indigo-500/10 before:to-violet-500/10',
  sky: 'group-hover:border-sky-200 before:bg-gradient-to-br before:from-sky-500/10 before:to-cyan-500/10',
  slate: 'group-hover:border-slate-300 before:bg-gradient-to-br before:from-slate-500/10 before:to-zinc-500/10',
  pink: 'group-hover:border-pink-200 before:bg-gradient-to-br before:from-pink-500/10 before:to-rose-500/10',
  emerald: 'group-hover:border-emerald-200 before:bg-gradient-to-br before:from-emerald-500/10 before:to-teal-500/10',
};

export const SectionCard: React.FC<SectionCardProps> = ({
  id,
  index,
  title,
  subtitle,
  icon: Icon,
  tone = 'indigo',
  className = '',
  children,
  actions,
}) => {
  return (
    <section
      id={id}
      className={`group relative overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xs transition-all hover:shadow-sm ${TONE_BORDER[tone]} ${className}`}
    >
      {/* 背景渐变装饰（绝对定位，在最底层） */}
      <div className="pointer-events-none absolute inset-0 before:absolute before:inset-0 before:opacity-0 group-hover:before:opacity-100 before:transition-opacity" />
      <div className="relative z-10 p-5 sm:p-7">
        <header className="flex items-start justify-between gap-4 mb-5">
          <div className="flex items-start gap-4">
            {/* 序号徽章 */}
            <div
              className={`shrink-0 w-11 h-11 rounded-xl flex items-center justify-center font-black text-[15px] shadow-xs ${TONE_INDEX[tone]}`}
            >
              {String(index).padStart(2, '0')}
            </div>
            <div className="min-w-0">
              <div className="flex items-center gap-2 flex-wrap">
                {Icon ? (
                  <Icon className={`h-4 w-4 ${tone === 'indigo' ? 'text-indigo-500' : tone === 'sky' ? 'text-sky-500' : tone === 'pink' ? 'text-pink-500' : tone === 'emerald' ? 'text-emerald-500' : 'text-slate-500'}`} />
                ) : null}
                <h2 className="text-lg sm:text-xl font-black text-slate-800 tracking-tight">
                  {title}
                </h2>
              </div>
              {subtitle ? (
                <p className="text-sm text-slate-500 mt-1 leading-relaxed">
                  {subtitle}
                </p>
              ) : null}
            </div>
          </div>
          {actions ? <div className="shrink-0">{actions}</div> : null}
        </header>
        <div className="text-slate-700 leading-relaxed text-sm">{children}</div>
      </div>
    </section>
  );
};

export default SectionCard;
