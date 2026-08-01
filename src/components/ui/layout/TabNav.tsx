'use client';

import React from 'react';
import {
  LayoutGrid,
  FileText,
  Image as ImageIcon,
  Presentation,
} from 'lucide-react';

/** 标准 Tab 导航（当前用在工坊 shell，视觉风格与门户保持一致） */
export type WorkshopView = 'overview' | 'plan' | 'poster' | 'slides';

export interface TabNavProps {
  currentView: WorkshopView;
  setCurrentView: (view: WorkshopView) => void;
  /** 物料总数（overview 徽章） */
  materialsCount: number;
  /** 幻灯片总课数（slides 徽章） */
  slidesCount?: number;
  className?: string;
}

interface TabItem {
  id: WorkshopView;
  label: string;
  sub?: string;
  badge?: number | string;
  Icon: React.ComponentType<{ className?: string }>;
}

export const TabNav: React.FC<TabNavProps> = ({
  currentView,
  setCurrentView,
  materialsCount,
  slidesCount = 0,
  className = '',
}) => {
  const tabs: TabItem[] = [
    {
      id: 'overview',
      label: '物料大厅',
      badge: `${materialsCount}`,
      Icon: LayoutGrid,
    },
    {
      id: 'plan',
      label: '1. 训练营方案',
      sub: 'PDF',
      Icon: FileText,
    },
    {
      id: 'poster',
      label: '2. 宣传海报',
      sub: 'PNG',
      Icon: ImageIcon,
    },
    {
      id: 'slides',
      label: '3. 课程幻灯片',
      sub: slidesCount > 0 ? `${slidesCount} 课` : undefined,
      Icon: Presentation,
    },
  ];

  return (
    <nav
      className={`hidden md:flex items-center space-x-1 bg-slate-100/80 p-1 rounded-xl border border-slate-200/60 ${className}`}
    >
      {tabs.map((t) => {
        const active = currentView === t.id;
        const { Icon } = t;
        return (
          <button
            key={t.id}
            onClick={() => setCurrentView(t.id)}
            className={`flex items-center space-x-2 px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
              active
                ? 'bg-white text-indigo-600 shadow-xs font-semibold'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/50'
            }`}
          >
            <Icon className="h-4 w-4 shrink-0" />
            <span>
              {t.label}
              {t.sub ? (
                <span className="ml-1 text-slate-400 font-medium">
                  ({t.sub})
                </span>
              ) : null}
            </span>
            {t.badge ? (
              <span className="ml-1 inline-flex items-center px-1.5 py-0.5 rounded-md text-[10px] font-bold bg-indigo-50 text-indigo-700 border border-indigo-100/80">
                {t.badge}
              </span>
            ) : null}
          </button>
        );
      })}
    </nav>
  );
};

export default TabNav;
