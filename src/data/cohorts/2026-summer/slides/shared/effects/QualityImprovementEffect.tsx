import React from 'react';
import { TrendingUp, ArrowUp } from 'lucide-react';

interface ScoreSide {
  score: number;
  label?: string;
  issues?: number;
}

interface QualityImprovementEffectProps {
  before: ScoreSide;
  after: ScoreSide;
  title?: string;
}

const scoreColor = (score: number) => {
  if (score >= 90) return { stroke: '#10b981', text: 'text-emerald-400' };
  if (score >= 70) return { stroke: '#6366f1', text: 'text-indigo-400' };
  if (score >= 50) return { stroke: '#f59e0b', text: 'text-amber-400' };
  return { stroke: '#f43f5e', text: 'text-rose-400' };
};

const Ring = ({ score, label, issues }: { score: number; label?: string; issues?: number }) => {
  const c = scoreColor(score);
  const radius = 52;
  const circ = 2 * Math.PI * radius;
  const offset = circ - (Math.min(Math.max(score, 0), 100) / 100) * circ;
  return (
    <div className="flex flex-col items-center">
      <div className="relative h-32 w-32">
        <svg className="h-32 w-32 -rotate-90" viewBox="0 0 120 120">
          <circle cx="60" cy="60" r={radius} fill="none" stroke="rgba(51,65,85,0.6)" strokeWidth="8" />
          <circle
            cx="60" cy="60" r={radius} fill="none" stroke={c.stroke} strokeWidth="8"
            strokeLinecap="round"
            strokeDasharray={circ}
            strokeDashoffset={offset}
            style={{ transition: 'stroke-dashoffset 1s ease-out' }}
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className={`text-3xl font-black ${c.text}`}>{score}</span>
          <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">/ 100</span>
        </div>
      </div>
      {label && <div className="mt-2 text-xs font-bold text-slate-300">{label}</div>}
      {issues !== undefined && (
        <div className="mt-1 text-[10px] text-slate-500">问题数：{issues}</div>
      )}
    </div>
  );
};

// 代码质量提升：前后分数对比 + 进度环 + 差值箭头
export const QualityImprovementEffect: React.FC<QualityImprovementEffectProps> = ({ before, after, title }) => {
  const diff = after.score - before.score;
  const issuesDiff = before.issues !== undefined && after.issues !== undefined ? after.issues - before.issues : null;

  return (
    <div className="space-y-4">
      <style>{`
        @keyframes quality-improve-rise {
          0% { transform: translateY(8px); opacity: 0; }
          100% { transform: translateY(0); opacity: 1; }
        }
      `}</style>
      {title && (
        <div className="flex items-center space-x-2">
          <TrendingUp className="h-4 w-4 text-emerald-400" />
          <h3 className="text-sm font-bold text-white">{title}</h3>
        </div>
      )}
      <div className="rounded-2xl bg-slate-800/50 border border-slate-700/80 p-6">
        <div className="flex flex-col md:flex-row items-center justify-around gap-4">
          <Ring score={before.score} label={before.label || '改进前'} issues={before.issues} />

          <div className="flex flex-col items-center" style={{ animation: 'quality-improve-rise 0.6s ease-out 0.3s both' }}>
            <div className="flex items-center justify-center h-12 w-12 rounded-full bg-emerald-500/15 border border-emerald-500/40">
              <ArrowUp className="h-6 w-6 text-emerald-400" />
            </div>
            <div className="mt-2 text-center">
              <div className={`text-2xl font-black ${diff >= 0 ? 'text-emerald-400' : 'text-rose-400'}`}>
                {diff >= 0 ? '+' : ''}{diff}
              </div>
              <div className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">分数变化</div>
            </div>
            {issuesDiff !== null && (
              <div className={`mt-1 text-[10px] font-mono ${issuesDiff <= 0 ? 'text-emerald-400' : 'text-rose-400'}`}>
                问题 {issuesDiff >= 0 ? '+' : ''}{issuesDiff}
              </div>
            )}
          </div>

          <Ring score={after.score} label={after.label || '改进后'} issues={after.issues} />
        </div>
      </div>
    </div>
  );
};
