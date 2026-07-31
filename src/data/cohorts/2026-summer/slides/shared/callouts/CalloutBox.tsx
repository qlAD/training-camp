import React from 'react';
import { AlertTriangle, CheckCircle2, Info, Lightbulb } from 'lucide-react';

type CalloutTone = 'info' | 'warning' | 'success' | 'tip';

interface CalloutBoxProps {
  tone: CalloutTone;
  title?: string;
  children: React.ReactNode;
  /** 自定义图标，未传时按 tone 使用默认图标 */
  icon?: React.ComponentType<{ className?: string }>;
}

type IconComp = React.ComponentType<{ className?: string }>;

const toneConfig: Record<CalloutTone, { bg: string; accent: string; icon: IconComp; iconColor: string; titleColor: string }> = {
  info: { bg: 'bg-indigo-500/10', accent: 'border-l-indigo-400', icon: Info, iconColor: 'text-indigo-400', titleColor: 'text-indigo-200' },
  warning: { bg: 'bg-amber-500/10', accent: 'border-l-amber-400', icon: AlertTriangle, iconColor: 'text-amber-400', titleColor: 'text-amber-200' },
  success: { bg: 'bg-emerald-500/10', accent: 'border-l-emerald-400', icon: CheckCircle2, iconColor: 'text-emerald-400', titleColor: 'text-emerald-200' },
  tip: { bg: 'bg-violet-500/10', accent: 'border-l-violet-400', icon: Lightbulb, iconColor: 'text-violet-400', titleColor: 'text-violet-200' },
};

// 提示框四态：info=indigo / warning=amber / success=emerald / tip=violet
export const CalloutBox: React.FC<CalloutBoxProps> = ({ tone, title, children, icon }) => {
  const cfg = toneConfig[tone];
  const Icon = icon || cfg.icon;
  return (
    <div className={`rounded-2xl border border-slate-700/60 ${cfg.bg} border-l-4 ${cfg.accent} p-4 flex items-start space-x-3`}>
      <Icon className={`h-5 w-5 ${cfg.iconColor} shrink-0 mt-0.5`} />
      <div className="flex-1 min-w-0">
        {title && <div className={`text-sm font-bold ${cfg.titleColor} mb-1`}>{title}</div>}
        <div className="text-xs sm:text-sm text-slate-200 leading-relaxed">{children}</div>
      </div>
    </div>
  );
};
