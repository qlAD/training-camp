'use client';

import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

interface AccordionItem {
  question: string;
  answer: React.ReactNode;
  icon?: React.ComponentType<{ className?: string }>;
  defaultOpen?: boolean;
}

interface AccordionPanelProps {
  title?: string;
  items: AccordionItem[];
  /** 是否允许同时展开多个，默认 true */
  allowMultiple?: boolean;
}

// 折叠面板：点击展开/折叠，箭头图标旋转动画；allowMultiple 控制是否互斥
export const AccordionPanel: React.FC<AccordionPanelProps> = ({ title, items, allowMultiple = true }) => {
  const [openSet, setOpenSet] = useState<Set<number>>(() => {
    const s = new Set<number>();
    items.forEach((it, i) => {
      if (it.defaultOpen) s.add(i);
    });
    return s;
  });
  const [single, setSingle] = useState<number | null>(() => {
    const first = items.findIndex((it) => it.defaultOpen);
    return first >= 0 ? first : null;
  });

  const toggle = (i: number) => {
    if (allowMultiple) {
      setOpenSet((prev) => {
        const next = new Set(prev);
        if (next.has(i)) next.delete(i);
        else next.add(i);
        return next;
      });
    } else {
      setSingle((cur) => (cur === i ? null : i));
    }
  };

  const isOpen = (i: number) => (allowMultiple ? openSet.has(i) : single === i);

  return (
    <div className="space-y-3 max-w-3xl">
      {title && (
        <div className="text-sm font-bold text-white flex items-center space-x-2">
          <HelpCircle className="h-4 w-4 text-indigo-400" />
          <span>{title}</span>
        </div>
      )}
      <div className="space-y-2">
        {items.map((it, i) => {
          const open = isOpen(i);
          const Icon = it.icon || HelpCircle;
          return (
            <div
              key={i}
              className={`rounded-xl border overflow-hidden transition-colors ${
                open ? 'border-indigo-500/50 bg-indigo-950/30' : 'border-slate-700/80 bg-slate-800/80'
              }`}
            >
              <button
                onClick={() => toggle(i)}
                className="cursor-pointer w-full flex items-center space-x-3 px-4 py-3 text-left hover:bg-slate-700/30 transition-colors"
              >
                <Icon className={`h-4 w-4 shrink-0 ${open ? 'text-indigo-300' : 'text-slate-400'}`} />
                <span className="flex-1 text-sm font-bold text-white">{it.question}</span>
                <ChevronDown
                  className={`h-4 w-4 text-slate-400 transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
                />
              </button>
              <div
                className="grid transition-all duration-300 ease-in-out"
                style={{ gridTemplateRows: open ? '1fr' : '0fr' }}
              >
                <div className="overflow-hidden">
                  <div className="px-4 pb-4 pl-11 text-xs text-slate-300 leading-relaxed">{it.answer}</div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
