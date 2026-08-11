'use client';

import React from 'react';
import { motion } from 'motion/react';
import { UserPlus, Cloud, KeyRound, Shield, ArrowRight } from 'lucide-react';
import { useTimeline } from '../scene/TimelineScene';
import { COLORS, EASE } from '../scene/theme';

interface GiteeSetupProps {
  at: number;
  className?: string;
}

const STEPS = [
  { icon: UserPlus, label: '注册账号', color: COLORS.sky },
  { icon: Cloud, label: '新建仓库', color: COLORS.teal },
  { icon: KeyRound, label: '生成令牌', color: COLORS.amber },
  { icon: Shield, label: '关联远程', color: COLORS.lime },
];

const easeOut = { duration: 0.45, ease: EASE };

export const GiteeSetup: React.FC<GiteeSetupProps> = ({ at, className = '' }) => {
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
        className="mt-3 rounded-xl border border-amber-400/30 bg-amber-400/10 px-4 py-2"
      >
        <p className="text-center text-xs font-bold text-amber-200">
          权限认证：令牌 / SSH 密钥 · 推送前必须配置
        </p>
      </motion.div>
    </div>
  );
};
