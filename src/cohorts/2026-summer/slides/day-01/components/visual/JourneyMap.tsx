'use client';

import React from 'react';
import { motion } from 'motion/react';
import { useScene } from '../scene/SceneSlide';
import { COLORS, EASE } from '../scene/theme';

interface JourneyMapProps {
  at?: number;
  className?: string;
}

const phases = [
  { label: '打地基', days: 'Day 1–3', gradient: [COLORS.indigo, COLORS.cyan], accent: COLORS.indigo },
  { label: '起高楼', days: 'Day 4–10', gradient: [COLORS.cyan, COLORS.magenta], accent: COLORS.cyan },
  { label: '封顶交付', days: 'Day 11–14', gradient: [COLORS.magenta, COLORS.amber], accent: COLORS.magenta },
];

export const JourneyMap: React.FC<JourneyMapProps> = ({ at = 0, className = '' }) => {
  const { active } = useScene();
  const step = Math.max(0, active - at);

  return (
    <div className={`w-full ${className}`}>
      <div className="relative">
        <div className="relative flex items-center justify-between">
          {phases.map((p, i) => {
            const lit = step >= i + 1;
            const pct = Math.min(100, Math.max(0, (step - i) * 33.33));
            return (
              <div key={i} className="relative flex-1 px-1">
                <div className="relative h-14">
                  <div
                    className="absolute top-[20px] left-0 right-0 h-2 rounded-full"
                    style={{ backgroundColor: 'rgba(148,163,184,0.2)' }}
                  />
                  <motion.div
                    className="absolute top-[20px] left-0 h-2 rounded-full"
                    style={{
                      background: `linear-gradient(90deg, ${p.gradient[0]}, ${p.gradient[1]})`,
                      boxShadow: lit ? `0 0 14px ${p.accent}88` : 'none',
                    }}
                    animate={{ width: lit ? '100%' : `${pct}%` }}
                    transition={{ duration: 0.6, ease: EASE }}
                  />
                  <motion.div
                    className="absolute top-[14px] left-0 flex h-[14px] w-[14px] items-center justify-center rounded-full border-2"
                    style={{
                      borderColor: lit ? p.accent : 'rgba(148,163,184,0.4)',
                      backgroundColor: lit ? p.accent : 'rgba(15,23,42,0.8)',
                      boxShadow: lit ? `0 0 12px ${p.accent}88` : 'none',
                    }}
                    animate={{ left: lit ? 'calc(100% - 14px)' : '0%' }}
                    transition={{ duration: 0.6, ease: EASE, delay: 0.1 }}
                  />
                  <motion.div
                    className="absolute -top-1 left-0 right-0 text-center"
                    animate={{ opacity: lit ? 1 : 0.5 }}
                    transition={{ duration: 0.4 }}
                  >
                    <span
                      className="text-[10px] font-bold"
                      style={{ color: lit ? p.accent : 'rgba(148,163,184,0.6)' }}
                    >
                      {p.days}
                    </span>
                  </motion.div>
                </div>
                <motion.div
                  className="mt-4 rounded-xl border px-3 py-2 text-center"
                  style={{
                    borderColor: lit ? `${p.accent}77` : 'rgba(148,163,184,0.22)',
                    backgroundColor: lit ? `${p.accent}15` : 'rgba(15,23,42,0.5)',
                    boxShadow: lit ? `0 0 18px ${p.accent}33` : 'none',
                  }}
                  animate={{ y: lit ? 0 : 4 }}
                  transition={{ duration: 0.4, ease: EASE }}
                >
                  <p
                    className="text-sm font-black"
                    style={{ color: lit ? '#F1F5F9' : 'rgba(148,163,184,0.7)' }}
                  >
                    {p.label}
                  </p>
                </motion.div>
                {i < phases.length - 1 && (
                  <div className="absolute -right-2 top-[26px] z-10 h-2 w-2 rotate-45"
                    style={{ backgroundColor: 'rgba(100,116,139,0.3)' }}
                  />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};