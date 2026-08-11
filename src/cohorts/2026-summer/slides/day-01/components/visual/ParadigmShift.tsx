'use client';

import React from 'react';
import { motion } from 'motion/react';
import { useScene } from '../scene/SceneSlide';
import { COLORS, EASE } from '../scene/theme';
import { BookOpen, Layers, Rocket, MessageSquare, Sparkles, Wrench, CheckCircle, Zap } from 'lucide-react';

interface ParadigmShiftProps {
  /* 起始场景序号：step1 传统路径点亮、step2 压缩箭头、step3 Vibe路径点亮、step4 洞察文字 */
  at?: number;
  className?: string;
}

export const ParadigmShift: React.FC<ParadigmShiftProps> = ({ at = 0, className = '' }) => {
  const { active } = useScene();
  const step = Math.max(0, active - at);

  const traditionalStages = [
    { label: '学语法', icon: <BookOpen className="h-3 w-3" />, sub: '3+ 个月' },
    { label: '学框架', icon: <Layers className="h-3 w-3" />, sub: '2+ 个月' },
    { label: '做项目', icon: <Rocket className="h-3 w-3" />, sub: '1+ 个月' },
  ];

  const vibeStages = [
    { label: '描述需求', icon: <MessageSquare className="h-3 w-3" />, sub: '分钟' },
    { label: 'AI 生成', icon: <Sparkles className="h-3 w-3" />, sub: '秒' },
    { label: '理解调整', icon: <Wrench className="h-3 w-3" />, sub: '小时' },
    { label: '验证', icon: <CheckCircle className="h-3 w-3" />, sub: '天' },
  ];

  const traditionalAccent = COLORS.amber;
  const vibeAccent = COLORS.cyan;

  const pipelineRow = (
    stages: { label: string; icon: React.ReactNode; sub: string }[],
    lit: boolean,
    accent: string,
    label: string,
    duration: string,
  ) => (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <span
          className="text-[11px] font-bold"
          style={{ color: lit ? accent : 'rgba(148,163,184,0.5)' }}
        >
          {label}
        </span>
        <span
          className="text-[10px] font-mono rounded-full border px-2 py-0.5"
          style={{
            borderColor: lit ? `${accent}55` : 'rgba(148,163,184,0.2)',
            backgroundColor: lit ? `${accent}15` : 'rgba(148,163,184,0.05)',
            color: lit ? accent : 'rgba(148,163,184,0.45)',
          }}
        >
          {duration}
        </span>
      </div>
      <div className="flex items-stretch gap-1">
        {stages.map((s, i) => {
          const stageLit = lit;
          return (
            <React.Fragment key={i}>
              <motion.div
                className="flex-1 min-w-0 rounded-xl border px-2 py-2 text-center"
                style={{
                  borderColor: stageLit ? `${accent}55` : 'rgba(148,163,184,0.2)',
                  backgroundColor: stageLit ? `${accent}12` : 'rgba(15,23,42,0.5)',
                  boxShadow: stageLit ? `0 0 14px ${accent}30` : 'none',
                }}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, ease: EASE, delay: i * 0.08 }}
              >
                <div
                  className="mx-auto mb-1 flex h-6 w-6 items-center justify-center"
                  style={{ color: stageLit ? accent : 'rgba(148,163,184,0.5)' }}
                >
                  {s.icon}
                </div>
                <p
                  className="truncate text-[10px] font-bold"
                  style={{ color: stageLit ? '#F1F5F9' : 'rgba(148,163,184,0.65)' }}
                >
                  {s.label}
                </p>
                <p
                  className="truncate text-[8px]"
                  style={{ color: stageLit ? 'rgba(226,232,240,0.6)' : 'rgba(148,163,184,0.4)' }}
                >
                  {s.sub}
                </p>
              </motion.div>
              {i < stages.length - 1 && (
                <motion.div
                  className="flex items-center"
                  animate={{ opacity: stageLit ? 1 : 0.2 }}
                  transition={{ duration: 0.3 }}
                  style={{ color: stageLit ? accent : 'rgba(148,163,184,0.3)' }}
                >
                  <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                    <path d="M0 4 H8 M5 1 L9 4 L5 7" stroke="currentColor" strokeWidth="1.2" />
                  </svg>
                </motion.div>
              )}
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );

  return (
    <div className={`w-full ${className}`}>
      <div className="space-y-3">
        {pipelineRow(
          traditionalStages,
          step >= 1,
          traditionalAccent,
          '传统路径',
          '6+ 个月',
        )}

        {/* 中间压缩箭头 */}
        <motion.div
          className="flex items-center justify-center gap-2 py-1"
          animate={{ opacity: step >= 2 ? 1 : 0.2 }}
          transition={{ duration: 0.4 }}
        >
          <motion.div
            className="flex items-center gap-1 rounded-full border px-3 py-1"
            style={{
              borderColor: step >= 2 ? `${COLORS.cyan}66` : 'rgba(148,163,184,0.2)',
              backgroundColor: step >= 2 ? 'rgba(34,211,238,0.1)' : 'rgba(15,23,42,0.5)',
            }}
            animate={{
              scale: step >= 2 ? [1, 1.04, 1] : 1,
            }}
            transition={{ duration: 1.2, repeat: step >= 2 ? Infinity : 0, ease: 'easeInOut' }}
          >
            <Zap
              className="h-3.5 w-3.5"
              style={{ color: step >= 2 ? COLORS.cyan : 'rgba(148,163,184,0.4)' }}
            />
            <span
              className="text-[11px] font-black"
              style={{ color: step >= 2 ? COLORS.cyan : 'rgba(148,163,184,0.5)' }}
            >
              压缩
            </span>
            <motion.svg
              width="20"
              height="14"
              viewBox="0 0 20 14"
              fill="none"
              animate={{ y: step >= 2 ? [0, 3, 0] : 0 }}
              transition={{ duration: 1.2, repeat: step >= 2 ? Infinity : 0, ease: 'easeInOut' }}
            >
              <path
                d="M2 3 L14 3 M10 1 L16 3 L10 5"
                stroke={step >= 2 ? COLORS.cyan : 'rgba(148,163,184,0.4)'}
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M2 11 L14 11 M10 9 L16 11 L10 13"
                stroke={step >= 2 ? COLORS.magenta : 'rgba(148,163,184,0.3)'}
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeDasharray="2 2"
              />
            </motion.svg>
          </motion.div>
        </motion.div>

        {pipelineRow(
          vibeStages,
          step >= 3,
          vibeAccent,
          'Vibe Coding 路径',
          '数天',
        )}

        {/* 核心洞察 */}
        <motion.div
          className="rounded-2xl border px-4 py-3 text-center"
          style={{
            borderColor: step >= 4 ? `${COLORS.magenta}66` : 'rgba(148,163,184,0.2)',
            backgroundColor: step >= 4 ? 'rgba(232,121,249,0.1)' : 'rgba(15,23,42,0.5)',
            boxShadow: step >= 4 ? `0 0 20px ${COLORS.magenta}33` : 'none',
          }}
          animate={{
            opacity: step >= 4 ? 1 : 0.3,
            scale: step >= 4 ? 1 : 0.96,
          }}
          transition={{ duration: 0.5, ease: EASE }}
        >
          <p
            className="text-[11px] leading-relaxed"
            style={{ color: step >= 4 ? 'rgba(226,232,240,0.85)' : 'rgba(148,163,184,0.5)' }}
          >
            学习从「<span
              className="font-black"
              style={{ color: step >= 4 ? COLORS.cyan : 'rgba(148,163,184,0.5)' }}
            >描述需求</span>」开始，
            而非「<span
              className="font-black line-through"
              style={{ color: step >= 4 ? COLORS.amber : 'rgba(148,163,184,0.5)' }}
            >死记语法</span>」
          </p>
          <motion.p
            className="mt-1 text-[10px] font-mono"
            style={{ color: step >= 4 ? COLORS.magenta : 'rgba(148,163,184,0.4)' }}
            animate={{ opacity: step >= 4 ? [0.6, 1, 0.6] : 0.4 }}
            transition={{ duration: 2, repeat: step >= 4 ? Infinity : 0 }}
          >
            范式转移 · Paradigm Shift
          </motion.p>
        </motion.div>
      </div>
    </div>
  );
};