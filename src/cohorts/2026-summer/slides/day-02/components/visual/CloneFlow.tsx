'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Search, Link2, Download, FolderOpen, ArrowRight } from 'lucide-react';
import { useTimeline } from '../scene/TimelineScene';
import { COLORS, EASE } from '../scene/theme';

interface CloneFlowProps {
  at: number;
  className?: string;
}

const STEPS = [
  { icon: Search, label: '找项目', color: COLORS.sky },
  { icon: Link2, label: '复制URL', color: COLORS.teal },
  { icon: Download, label: 'git clone', color: COLORS.amber },
  { icon: FolderOpen, label: 'IDE打开', color: COLORS.lime },
];

const easeOut = { duration: 0.45, ease: EASE };

export const CloneFlow: React.FC<CloneFlowProps> = ({ at, className = '' }) => {
  const { active } = useTimeline();
  const s = (i: number) => active >= at + i;

  return (
    <div className={`w-full ${className}`}>
      <div className="flex items-center justify-center gap-0">
        {STEPS.map((step, i) => {
          const Icon = step.icon;
          const lit = s(i);
          return (
            <React.Fragment key={step.label}>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: lit ? 1 : 0 }}
                transition={easeOut}
                className="flex items-center gap-2 rounded-xl border px-3 py-2"
                style={{
                  borderColor: lit ? `${step.color}66` : 'rgba(148,163,184,0.15)',
                  backgroundColor: lit ? `${step.color}12` : 'rgba(15,23,42,0.5)',
                }}
              >
                <div
                  className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg"
                  style={{
                    backgroundColor: lit ? `${step.color}33` : 'rgba(148,163,184,0.1)',
                  }}
                >
                  <Icon className="h-4 w-4" style={{ color: lit ? step.color : '#64748b' }} />
                </div>
                <span className="text-xs font-bold" style={{ color: lit ? '#F1F5F9' : 'rgba(148,163,184,0.7)' }}>
                  {step.label}
                </span>
              </motion.div>
              {i < STEPS.length - 1 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: s(i + 1) ? 1 : 0.2 }}
                  transition={easeOut}
                  className="flex items-center px-1"
                >
                  <ArrowRight className="h-4 w-4" style={{ color: s(i + 1) ? COLORS.sky : 'rgba(148,163,184,0.3)' }} />
                </motion.div>
              )}
            </React.Fragment>
          );
        })}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: s(4) ? 1 : 0 }}
        transition={easeOut}
        className="mt-3 rounded-xl border border-lime-400/30 bg-lime-400/10 px-4 py-2"
      >
        <p className="text-center text-xs font-bold text-lime-200">
          git clone https://gitee.com/you/project.git → 正式开发第一步
        </p>
      </motion.div>
    </div>
  );
};
