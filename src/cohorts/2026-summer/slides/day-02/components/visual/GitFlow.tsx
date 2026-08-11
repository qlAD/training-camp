'use client';

import React from 'react';
import {
  GitBranch,
  GitCommit,
  Hash,
  CloudUpload,
  CloudDownload,
  Cloud,
  GitPullRequest,
} from 'lucide-react';
import { motion } from 'motion/react';
import { useTimeline } from '../scene/TimelineScene';
import { COLORS, EASE } from '../scene/theme';

interface GitFlowProps {
  at?: number;
  className?: string;
  showPull?: boolean;
}

const STEPS = [
  { icon: GitBranch, label: 'init', desc: '初始化仓库', color: COLORS.sky },
  { icon: GitCommit, label: 'add', desc: '暂存文件', color: COLORS.teal },
  { icon: Hash, label: 'commit', desc: '提交快照', color: COLORS.lime },
  { icon: CloudUpload, label: 'push', desc: '推上云端', color: COLORS.amber },
  { icon: CloudDownload, label: 'pull', desc: '拉取协作', color: COLORS.sky },
];

export const GitFlow: React.FC<GitFlowProps> = ({ at = 0, className = '', showPull = true }) => {
  const { active } = useTimeline();
  const s = (i: number) => active >= at + i;
  const steps = showPull ? STEPS : STEPS.slice(0, 4);

  return (
    <div className={`w-full ${className}`}>
      <div className="flex items-stretch gap-2">
        {steps.map((step, i) => {
          const Icon = step.icon;
          const lit = s(i);
          return (
            <React.Fragment key={step.label}>
              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: lit ? 1 : 0, y: lit ? 0 : 14 }}
                transition={{ duration: 0.45, ease: EASE }}
                className="flex min-w-0 flex-1 flex-col items-center gap-1.5 rounded-2xl border border-white/10 bg-slate-950/50 px-2 py-3"
                style={{
                  boxShadow: lit ? `0 0 18px ${step.color}55` : 'none',
                  borderColor: lit ? `${step.color}66` : 'rgba(255,255,255,0.1)',
                  backgroundColor: lit ? `${step.color}14` : 'rgba(15,23,42,0.5)',
                }}
              >
                <div
                  className="flex h-9 w-9 items-center justify-center rounded-full"
                  style={{
                    backgroundColor: lit ? `${step.color}33` : 'rgba(148,163,184,0.1)',
                    boxShadow: lit ? `0 0 12px ${step.color}66` : 'none',
                  }}
                >
                  <Icon
                    className="h-5 w-5 transition-colors duration-300"
                    style={{ color: lit ? step.color : '#64748b' }}
                  />
                </div>
                <span
                  className={`font-mono text-xs font-bold transition-colors duration-300 ${
                    lit ? 'text-slate-100' : 'text-slate-500'
                  }`}
                >
                  git {step.label}
                </span>
                <span className="text-[10px] text-slate-500">{step.desc}</span>
              </motion.div>

              {i < steps.length - 1 && (
                <motion.span
                  initial={{ opacity: 0, scaleX: 0 }}
                  animate={{ opacity: s(i + 1) ? 1 : 0, scaleX: s(i + 1) ? 1 : 0 }}
                  transition={{ duration: 0.35, ease: EASE }}
                  className="flex items-center justify-center text-sky-400/70"
                >
                  ▶
                </motion.span>
              )}
            </React.Fragment>
          );
        })}
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: s(5) ? 1 : 0, scale: s(5) ? 1 : 0.85 }}
        transition={{ type: 'spring', stiffness: 280, damping: 20 }}
        className="mx-auto mt-4 flex w-full max-w-md items-center gap-3 rounded-2xl border border-teal-400/40 bg-teal-400/10 px-5 py-3"
      >
        <Cloud className="h-6 w-6 shrink-0 text-teal-300" />
        <div className="flex min-w-0 items-center gap-2 text-left">
          <GitPullRequest className="h-4 w-4 shrink-0 text-teal-300/80" />
          <div className="min-w-0">
            <p className="truncate font-mono text-sm font-bold text-teal-100">
              gitee.com / you / project
            </p>
            <p className="text-[11px] text-teal-200/70">
              {showPull ? '五步走，代码安全躺在云端协作仓库' : '四步走，代码存好准备上云'}
            </p>
          </div>
        </div>
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: s(6) ? 1 : 0 }}
        transition={{ duration: 0.5, ease: EASE }}
        className="mt-3 text-center text-sm text-slate-300"
      >
        {showPull ? 'Git 管版本 · Gitee 托代码 · 五步走完整托管流程' : 'Git 管版本 · 四步走打好基础'}
      </motion.p>
    </div>
  );
};
