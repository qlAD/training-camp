'use client';

import React from 'react';
import { motion } from 'motion/react';
import { useScene } from '../scene/SceneSlide';
import { COLORS, EASE } from '../scene/theme';
import { Compass } from 'lucide-react';

export interface RoleCard {
  icon: React.ReactNode;
  title: string;
  desc: string;
}

interface QuadrantCardsProps {
  roles: RoleCard[];
  /* 起始场景序号：step 1 中心方向盘，step 2..5 四卡依次点亮 */
  at?: number;
  className?: string;
}

/* 中心隐喻图标 + 四卡环绕依次点亮（镜头 7） */
export const QuadrantCards: React.FC<QuadrantCardsProps> = ({ roles, at = 0, className = '' }) => {
  const { active } = useScene();
  const step = Math.max(0, active - at);

  return (
    <div className={`grid grid-cols-2 gap-3 ${className}`}>
      {roles.map((r, i) => {
        const lit = step >= i + 2;
        const accents = [COLORS.indigo, COLORS.cyan, COLORS.magenta, COLORS.green];
        const accent = accents[i % accents.length];
        return (
          <motion.div
            key={i}
            className="rounded-2xl border px-4 py-3"
            style={{
              borderColor: lit ? `${accent}66` : 'rgba(148,163,184,0.22)',
              backgroundColor: lit ? `${accent}12` : 'rgba(15,23,42,0.5)',
              boxShadow: lit ? `0 0 18px ${accent}33` : 'none',
            }}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: EASE, delay: i * 0.05 }}
          >
            <div className="flex items-center gap-2">
              <span style={{ color: lit ? accent : 'rgba(148,163,184,0.5)' }}>{r.icon}</span>
              <p className="text-sm font-black" style={{ color: lit ? '#F1F5F9' : 'rgba(148,163,184,0.7)' }}>
                {r.title}
              </p>
            </div>
            <p className="mt-1 text-[11px] leading-relaxed" style={{ color: lit ? 'rgba(226,232,240,0.75)' : 'rgba(148,163,184,0.5)' }}>
              {r.desc}
            </p>
          </motion.div>
        );
      })}

      {/* 中心方向盘 */}
      <motion.div
        className="col-span-2 flex items-center justify-center gap-2 pt-1"
        animate={{ opacity: step >= 1 ? 1 : 0, scale: step >= 1 ? 1 : 0.9 }}
        transition={{ duration: 0.5, ease: EASE }}
      >
        <Compass className="h-4 w-4" style={{ color: COLORS.amber }} />
        <span
          className="text-xs font-bold"
          style={{ color: step >= 1 ? COLORS.amber : 'rgba(148,163,184,0.4)' }}
        >
          方向盘，在你手里
        </span>
      </motion.div>
    </div>
  );
};
