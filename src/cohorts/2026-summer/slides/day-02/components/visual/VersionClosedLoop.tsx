'use client';

import React from 'react';
import { motion } from 'motion/react';
import {
  GitBranch,
  GitCommit,
  CloudUpload,
  CloudDownload,
  GitPullRequest,
  AlertTriangle,
  CheckCircle2,
} from 'lucide-react';
import { useTimeline } from '../scene/TimelineScene';
import { COLORS, EASE, SPRING } from '../scene/theme';

interface VersionClosedLoopProps {
  at: number;
  className?: string;
}

const MAIN_STEPS = [
  { icon: GitBranch, label: 'init', color: COLORS.sky },
  { icon: GitCommit, label: 'add', color: COLORS.teal },
  { icon: GitCommit, label: 'commit', color: COLORS.lime },
];

export const VersionClosedLoop: React.FC<VersionClosedLoopProps> = ({ at, className = '' }) => {
  const { active } = useTimeline();
  const s = (i: number) => active >= at + i;

  return (
    <div className={`w-full ${className}`}>
      <div className="flex items-stretch gap-2">
        {MAIN_STEPS.map((step, i) => {
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
                  borderColor: lit ? `${step.color}66` : 'rgba(255,255,255,0.1)',
                  backgroundColor: lit ? `${step.color}14` : 'rgba(15,23,42,0.5)',
                  boxShadow: lit ? `0 0 18px ${step.color}55` : 'none',
                }}
              >
                <div
                  className="flex h-9 w-9 items-center justify-center rounded-full"
                  style={{
                    backgroundColor: lit ? `${step.color}33` : 'rgba(148,163,184,0.1)',
                    boxShadow: lit ? `0 0 12px ${step.color}66` : 'none',
                  }}
                >
                  <Icon className="h-5 w-5" style={{ color: lit ? step.color : '#64748b' }} />
                </div>
                <span
                  className={`font-mono text-xs font-bold ${lit ? 'text-slate-100' : 'text-slate-500'}`}
                >
                  git {step.label}
                </span>
              </motion.div>
              {i < MAIN_STEPS.length - 1 && (
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

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: s(3) ? 1 : 0, scale: s(3) ? 1 : 0.8 }}
          transition={{ ...SPRING, duration: 0.5 }}
          className="flex flex-col items-center justify-center rounded-2xl border-2 px-3 py-3"
          style={{
            borderColor: s(3) ? COLORS.amber : 'rgba(148,163,184,0.15)',
            borderStyle: 'dashed',
            backgroundColor: s(3) ? `${COLORS.amber}10` : 'rgba(15,23,42,0.3)',
          }}
        >
          <CloudDownload
            className="h-6 w-6"
            style={{ color: s(3) ? COLORS.amber : '#64748b' }}
          />
          <span
            className="mt-1 font-mono text-xs font-bold"
            style={{ color: s(3) ? COLORS.amber : 'rgba(148,163,184,0.6)' }}
          >
            pull
          </span>
          <span className="text-[9px] text-amber-300/80">先拉</span>
        </motion.div>

        <motion.span
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: s(4) ? 1 : 0, scaleX: s(4) ? 1 : 0 }}
          transition={{ duration: 0.35, ease: EASE }}
          className="flex items-center justify-center text-amber-400/70"
        >
          ▶
        </motion.span>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: s(4) ? 1 : 0, scale: s(4) ? 1 : 0.8 }}
          transition={{ ...SPRING, duration: 0.5 }}
          className="flex flex-col items-center justify-center rounded-2xl border-2 px-3 py-3"
          style={{
            borderColor: s(4) ? COLORS.amber : 'rgba(148,163,184,0.15)',
            borderStyle: 'dashed',
            backgroundColor: s(4) ? `${COLORS.amber}10` : 'rgba(15,23,42,0.3)',
          }}
        >
          <CloudUpload
            className="h-6 w-6"
            style={{ color: s(4) ? COLORS.amber : '#64748b' }}
          />
          <span
            className="mt-1 font-mono text-xs font-bold"
            style={{ color: s(4) ? COLORS.amber : 'rgba(148,163,184,0.6)' }}
          >
            push
          </span>
          <span className="text-[9px] text-amber-300/80">后推</span>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: s(5) ? 1 : 0, y: s(5) ? 0 : 14 }}
        transition={{ duration: 0.5, ease: EASE }}
        className="mt-4 grid grid-cols-2 gap-3"
      >
        <div className="rounded-2xl border border-amber-400/30 bg-amber-400/10 p-3">
          <div className="flex items-center gap-2 mb-1">
            <CheckCircle2 className="h-4 w-4 text-amber-300" />
            <span className="text-xs font-bold text-amber-200">先 pull 后 push</span>
          </div>
          <p className="text-[10px] text-amber-200/70">
            养成肌肉记忆，避免远程冲突
          </p>
        </div>
        <div className="rounded-2xl border border-rose-400/30 bg-rose-400/10 p-3">
          <div className="flex items-center gap-2 mb-1">
            <AlertTriangle className="h-4 w-4 text-rose-300" />
            <span className="text-xs font-bold text-rose-200">跳过 pull 直接 push</span>
          </div>
          <p className="text-[10px] text-rose-200/70">
            远程有更新 → 冲突报错 → 浪费时间
          </p>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: s(6) ? 1 : 0, scale: s(6) ? 1 : 0.9 }}
        transition={{ ...SPRING, duration: 0.5 }}
        className="mx-auto mt-3 flex w-full max-w-md items-center gap-3 rounded-2xl border border-teal-400/40 bg-teal-400/10 px-5 py-3"
      >
        <GitPullRequest className="h-5 w-5 shrink-0 text-teal-300" />
        <div>
          <p className="text-sm font-bold text-teal-100">
            代码版本托管全流程
          </p>
          <p className="text-[11px] text-teal-200/70">
            先拉后推是关键习惯，省掉无数麻烦
          </p>
        </div>
      </motion.div>
    </div>
  );
};
