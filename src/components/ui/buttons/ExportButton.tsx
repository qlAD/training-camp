'use client';

import React from 'react';
import { Download, Loader2 } from 'lucide-react';

/** 标准导出按钮（PNG / PDF 通用，保持视觉一致） */
export interface ExportButtonProps {
  /** 显示的文案，如：导出海报 PNG / 导出方案 PDF */
  label: string;
  /** 是否正在导出（loading 态，禁止点击） */
  loading?: boolean;
  /** 点击回调 */
  onClick: () => void;
  /** 语义色调（默认主色调 indigo） */
  tone?: 'indigo' | 'sky' | 'slate' | 'pink';
  /** 附加 className（外层容器） */
  className?: string;
  /** 禁用态（loading=true 时会自动禁用） */
  disabled?: boolean;
}

const TONE_CLASSES: Record<NonNullable<ExportButtonProps['tone']>, string> = {
  indigo:
    'bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-800 text-white shadow-indigo-200',
  sky:
    'bg-sky-600 hover:bg-sky-700 active:bg-sky-800 text-white shadow-sky-200',
  slate:
    'bg-slate-800 hover:bg-slate-900 active:bg-slate-950 text-white shadow-slate-300',
  pink:
    'bg-pink-600 hover:bg-pink-700 active:bg-pink-800 text-white shadow-pink-200',
};

export const ExportButton: React.FC<ExportButtonProps> = ({
  label,
  loading,
  onClick,
  tone = 'indigo',
  className = '',
  disabled,
}) => {
  const isDisabled = disabled || loading;
  return (
    <button
      type="button"
      disabled={isDisabled}
      onClick={onClick}
      className={`inline-flex items-center space-x-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all shadow-sm disabled:opacity-60 disabled:cursor-not-allowed ${TONE_CLASSES[tone]} ${className}`}
    >
      {loading ? (
        <Loader2 className="h-4 w-4 animate-spin" />
      ) : (
        <Download className="h-4 w-4" />
      )}
      <span>{loading ? `${label}中…` : label}</span>
    </button>
  );
};

export default ExportButton;
