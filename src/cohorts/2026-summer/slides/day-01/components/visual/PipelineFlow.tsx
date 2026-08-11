'use client';

import React from 'react';
import { motion } from 'motion/react';
import { useScene } from '../scene/SceneSlide';
import { COLORS, EASE } from '../scene/theme';

export interface PipelineStage {
  label: string;
  sub: string;
  icon: React.ReactNode;
}

interface PipelineFlowProps {
  stages: PipelineStage[];
  /* 起始场景序号：step k 点亮第 k 段（k=1..6） */
  at?: number;
  className?: string;
}

/* 流水线流光：分段从左到右依次点亮推进 + 进度条（镜头 14） */
export const PipelineFlow: React.FC<PipelineFlowProps> = ({ stages, at = 0, className = '' }) => {
  const { active } = useScene();
  const step = Math.max(0, active - at);
  const total = stages.length;

  return (
    <div className={`w-full ${className}`}>
      <div className="flex items-stretch gap-1.5">
        {stages.map((s, i) => {
          const lit = step >= i + 1;
          return (
            <React.Fragment key={i}>
              <motion.div
                className="flex-1 min-w-0 rounded-2xl border px-2 py-3 text-center"
                style={{
                  borderColor: lit ? 'rgba(34,211,238,0.55)' : 'rgba(148,163,184,0.25)',
                  backgroundColor: lit ? 'rgba(34,211,238,0.12)' : 'rgba(15,23,42,0.55)',
                  boxShadow: lit ? `0 0 20px ${COLORS.cyan}44` : 'none',
                }}
                initial={{ opacity: 0, y: 14, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.45, ease: EASE }}
              >
                <div
                  className="mx-auto mb-1.5 flex h-8 w-8 items-center justify-center"
                  style={{ color: lit ? '#7DF3FF' : 'rgba(148,163,184,0.55)' }}
                >
                  {s.icon}
                </div>
                <p className="truncate text-[11px] font-bold" style={{ color: lit ? '#E2F9FF' : 'rgba(148,163,184,0.7)' }}>
                  {s.label}
                </p>
                <p className="truncate text-[9px] text-slate-500">{s.sub}</p>
              </motion.div>
              {i < total - 1 && (
                <motion.div
                  className="flex items-center"
                  animate={{ opacity: lit ? 1 : 0.25 }}
                  transition={{ duration: 0.4 }}
                  style={{ color: lit ? COLORS.cyan : 'rgba(148,163,184,0.4)' }}
                >
                  <svg width="12" height="10" viewBox="0 0 12 10" fill="none">
                    <path d="M0 5 H10 M6 1 L11 5 L6 9" stroke="currentColor" strokeWidth="1.4" />
                  </svg>
                </motion.div>
              )}
            </React.Fragment>
          );
        })}
      </div>
      {/* 底部进度条 */}
      <div className="mt-3 h-1.5 rounded-full bg-slate-800/70 overflow-hidden">
        <motion.div
          className="h-full rounded-full"
          style={{ background: `linear-gradient(90deg, ${COLORS.indigo}, ${COLORS.cyan})` }}
          animate={{ width: `${Math.min(100, (step / total) * 100)}%` }}
          transition={{ duration: 0.5, ease: EASE }}
        />
      </div>
    </div>
  );
};
