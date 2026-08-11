'use client';

import React from 'react';
import { motion } from 'motion/react';
import { useScene } from '../scene/SceneSlide';
import { COLORS, EASE } from '../scene/theme';
import { ShieldAlert, Eye, Puzzle } from 'lucide-react';

interface AIRolesProps {
  /* 起始场景序号：step 1..3 三卡依次点亮 */
  at?: number;
  className?: string;
}

/* AI 不会替你做的三件事 —— 三卡依次点亮（镜头 8） */
export const AIRoles: React.FC<AIRolesProps> = ({ at = 0, className = '' }) => {
  const { active } = useScene();
  const step = Math.max(0, active - at);

  const cards = [
    {
      icon: <ShieldAlert className="h-5 w-5" />,
      accent: COLORS.indigo,
      title: '判断需求合理性',
      desc: 'AI 你让它写它就写，但有没有用得你来定',
    },
    {
      icon: <Eye className="h-5 w-5" />,
      accent: COLORS.cyan,
      title: '看懂它写的代码',
      desc: '看不懂就没法改，没法改就永远停在"能跑就行"',
    },
    {
      icon: <Puzzle className="h-5 w-5" />,
      accent: COLORS.magenta,
      title: '把片段拼成系统',
      desc: 'AI 擅长写片段，不擅长统筹',
    },
  ];

  return (
    <div className={`flex flex-col gap-3 ${className}`}>
      {cards.map((c, i) => {
        const lit = step >= i + 1;
        return (
          <motion.div
            key={i}
            className="rounded-2xl border px-5 py-4"
            style={{
              borderColor: lit ? `${c.accent}66` : 'rgba(148,163,184,0.22)',
              backgroundColor: lit ? `${c.accent}12` : 'rgba(15,23,42,0.5)',
              boxShadow: lit ? `0 0 18px ${c.accent}33` : 'none',
            }}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: lit ? 1 : 0.4, x: lit ? 0 : -10 }}
            transition={{ duration: 0.55, ease: EASE, delay: i * 0.08 }}
          >
            <div className="flex items-center gap-3">
              <span
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl"
                style={{
                  backgroundColor: lit ? `${c.accent}33` : 'rgba(148,163,184,0.12)',
                  color: lit ? c.accent : 'rgba(148,163,184,0.55)',
                }}
              >
                {c.icon}
              </span>
              <div className="flex-1">
                <p className="text-base font-black" style={{ color: lit ? '#F1F5F9' : 'rgba(148,163,184,0.7)' }}>
                  {c.title}
                </p>
                <p className="mt-1 text-[12px] leading-relaxed" style={{ color: lit ? 'rgba(226,232,240,0.8)' : 'rgba(148,163,184,0.5)' }}>
                  {c.desc}
                </p>
              </div>
              {lit && (
                <motion.span
                  className="rounded-full px-2 py-0.5 text-[10px] font-black"
                  style={{ backgroundColor: `${c.accent}33`, color: c.accent }}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, ...EASE }}
                >
                  #{i + 1}
                </motion.span>
              )}
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};