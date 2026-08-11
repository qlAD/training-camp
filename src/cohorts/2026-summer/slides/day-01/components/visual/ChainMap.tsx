'use client';

import React from 'react';
import { motion } from 'motion/react';
import { useScene } from '../scene/SceneSlide';
import { COLORS, EASE } from '../scene/theme';

export interface ChainSegment {
  label: string;
  icon: React.ReactNode;
  desc: string;
}

interface ChainMapProps {
  segments: ChainSegment[];
  /* 起始场景序号：step k 展开第 k 段（k=1..3） */
  at?: number;
  className?: string;
}

/* 链路地图：「生成—托管—部署」三段逐段展开（镜头 8） */
export const ChainMap: React.FC<ChainMapProps> = ({ segments, at = 0, className = '' }) => {
  const { active } = useScene();
  const step = Math.max(0, active - at);
  const accents = [COLORS.indigo, COLORS.magenta, COLORS.green];

  return (
    <div className={`w-full ${className}`}>
      <div className="flex items-stretch gap-1.5">
        {segments.map((s, i) => {
          const lit = step >= i + 1;
          const accent = accents[i % accents.length];
          return (
            <React.Fragment key={i}>
              <motion.div
                className="flex-1 min-w-0 rounded-2xl border px-3 py-3"
                style={{
                  borderColor: lit ? `${accent}77` : 'rgba(148,163,184,0.22)',
                  backgroundColor: lit ? `${accent}12` : 'rgba(15,23,42,0.5)',
                  boxShadow: lit ? `0 0 20px ${accent}44` : 'none',
                }}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: EASE }}
              >
                <div className="mb-1.5 flex items-center gap-2">
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg" style={{ backgroundColor: `${accent}1f`, color: lit ? accent : 'rgba(148,163,184,0.5)' }}>
                    {s.icon}
                  </span>
                  <div className="min-w-0">
                    <p className="text-xs font-black" style={{ color: lit ? '#F1F5F9' : 'rgba(148,163,184,0.65)' }}>
                      {s.label}
                    </p>
                    <p className="truncate text-[9px]" style={{ color: lit ? 'rgba(226,232,240,0.6)' : 'rgba(148,163,184,0.4)' }}>
                      {s.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
              {i < segments.length - 1 && (
                <motion.div
                  className="flex items-center"
                  animate={{ opacity: lit ? 1 : 0.25 }}
                  style={{ color: lit ? accent : 'rgba(148,163,184,0.4)' }}
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
      {/* 段落标注 */}
      <motion.div
        className="mt-3 flex justify-center"
        animate={{ opacity: step >= segments.length ? 1 : 0 }}
        transition={{ duration: 0.5 }}
      >
        <p className="text-[11px] text-slate-500">
          从一段话，到一个能访问的网站 —— 全链路国产
        </p>
      </motion.div>
    </div>
  );
};
