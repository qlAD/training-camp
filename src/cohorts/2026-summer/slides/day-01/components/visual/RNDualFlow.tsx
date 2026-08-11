'use client';

import React from 'react';
import { motion } from 'motion/react';
import { useScene } from '../scene/SceneSlide';
import { COLORS, EASE } from '../scene/theme';
import { Lightbulb, PenTool, Code2, Rocket } from 'lucide-react';

interface RNDualFlowProps {
  at?: number;
  className?: string;
}

const stages = [
  { label: '需求', sub: 'Requirements', role: '产品经理', icon: Lightbulb, color: COLORS.amber },
  { label: '设计', sub: 'Design', role: '设计师', icon: PenTool, color: COLORS.indigo },
  { label: '开发', sub: 'Development', role: '工程师', icon: Code2, color: COLORS.cyan },
  { label: '测试上线', sub: 'Test & Deploy', role: '测试运维', icon: Rocket, color: COLORS.magenta },
];

export const RNDualFlow: React.FC<RNDualFlowProps> = ({ at = 0, className = '' }) => {
  const { active } = useScene();
  const step = Math.max(0, active - at);

  return (
    <div className={`w-full ${className}`}>
      <div className="relative flex items-start justify-between">
        <div className="absolute top-[22px] left-[8%] right-[8%] h-[2px] rounded-full bg-slate-800/70" />
        <motion.div
          className="absolute top-[22px] left-[8%] h-[2px] rounded-full"
          style={{
            background: `linear-gradient(90deg, ${COLORS.amber}, ${COLORS.indigo}, ${COLORS.cyan}, ${COLORS.magenta})`,
            boxShadow: `0 0 12px ${COLORS.cyan}66`,
          }}
          animate={{
            width: step >= 4 ? '84%' : step >= 3 ? '60%' : step >= 2 ? '36%' : step >= 1 ? '12%' : '0%',
          }}
          transition={{ duration: 0.55, ease: EASE }}
        />

        {stages.map((s, i) => {
          const lit = step >= i + 1;
          const Icon = s.icon;
          return (
            <div key={i} className="relative z-10 flex w-1/4 flex-col items-center px-1">
              <motion.div
                className="flex h-11 w-11 items-center justify-center rounded-xl border-2"
                style={{
                  borderColor: lit ? `${s.color}AA` : 'rgba(148,163,184,0.3)',
                  backgroundColor: lit ? `${s.color}22` : 'rgba(15,23,42,0.85)',
                  boxShadow: lit ? `0 0 20px ${s.color}66` : 'none',
                }}
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.45, ease: EASE, delay: i * 0.06 }}
              >
                <Icon className="h-5 w-5" style={{ color: lit ? s.color : 'rgba(148,163,184,0.5)' }} />
              </motion.div>

              <motion.div
                className="mt-2 text-center"
                animate={{ y: lit ? 0 : 2 }}
                transition={{ duration: 0.4, ease: EASE }}
              >
                <motion.p
                  className="text-xs font-black"
                  animate={{ color: lit ? '#F1F5F9' : 'rgba(148,163,184,0.65)' }}
                  transition={{ duration: 0.4 }}
                >
                  {s.label}
                </motion.p>
                <motion.p
                  className="text-[9px] font-medium"
                  animate={{ color: lit ? `${s.color}BB` : 'rgba(148,163,184,0.4)' }}
                  transition={{ duration: 0.4 }}
                >
                  {s.sub}
                </motion.p>
              </motion.div>

              <motion.div
                className="mt-3 rounded-lg border px-2.5 py-1.5 text-center"
                style={{
                  borderColor: lit ? `${s.color}55` : 'rgba(148,163,184,0.18)',
                  backgroundColor: lit ? `${s.color}12` : 'rgba(15,23,42,0.5)',
                  boxShadow: lit ? `0 0 12px ${s.color}22` : 'none',
                }}
                animate={{ opacity: lit ? 1 : 0.55, y: lit ? 0 : 3 }}
                transition={{ duration: 0.45, ease: EASE }}
              >
                <span
                  className="text-[10px] font-bold"
                  style={{ color: lit ? s.color : 'rgba(148,163,184,0.55)' }}
                >
                  {s.role}
                </span>
              </motion.div>

              {i < stages.length - 1 && (
                <motion.div
                  className="absolute top-[18px] -right-[12%] z-20"
                  animate={{ opacity: step >= i + 2 ? 1 : 0.25, x: step >= i + 2 ? [0, 3, 0] : 0 }}
                  transition={{
                    opacity: { duration: 0.4 },
                    x: { duration: 1.4, repeat: step >= i + 2 ? Infinity : 0, ease: 'easeInOut' },
                  }}
                >
                  <svg width="18" height="14" viewBox="0 0 18 14" fill="none">
                    <path
                      d="M2 7 L16 7 M12 3 L16 7 L12 11"
                      stroke={step >= i + 2 ? COLORS.cyan : 'rgba(148,163,184,0.3)'}
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </motion.div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};