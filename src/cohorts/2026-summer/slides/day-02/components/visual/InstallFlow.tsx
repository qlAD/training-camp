'use client';

import React from 'react';
import { motion } from 'motion/react';
import {
  Package,
  PackageOpen,
  ClipboardList,
  MemoryStick,
  Cpu,
  Play,
  ArrowRight,
  AlertTriangle,
} from 'lucide-react';
import { useTimeline } from '../scene/TimelineScene';
import { COLORS, EASE, SPRING } from '../scene/theme';

interface InstallFlowProps {
  at?: number;
  className?: string;
}

const INSTALL_STEPS = [
  { icon: <Package className="h-5 w-5" />, label: '下载安装包' },
  { icon: <PackageOpen className="h-5 w-5" />, label: '解压复制到系统' },
  { icon: <ClipboardList className="h-5 w-5" />, label: '注册登记信息' },
];

const RUN_STEPS = [
  { icon: <MemoryStick className="h-5 w-5" />, label: '加载到内存' },
  { icon: <Cpu className="h-5 w-5" />, label: '分配 CPU 资源' },
  { icon: <Play className="h-5 w-5" />, label: '开始运行' },
];

export const InstallFlow: React.FC<InstallFlowProps> = ({ at = 0, className = '' }) => {
  const { active } = useTimeline();
  const s = (i: number) => active >= at + i;

  const Step = ({
    step,
    index,
    color,
    stepIndex,
  }: {
    step: { icon: React.ReactNode; label: string };
    index: number;
    color: string;
    stepIndex: number;
  }) => {
    const lit = s(stepIndex);
    return (
      <React.Fragment>
        <motion.div
          initial={{ opacity: 0, y: 14, scale: 0.85 }}
          animate={lit ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 14, scale: 0.85 }}
          transition={SPRING}
          className="flex flex-col items-center gap-1.5 rounded-xl border px-3 py-2 min-w-[80px]"
          style={{
            borderColor: lit ? `${color}77` : 'rgba(148,163,184,0.2)',
            backgroundColor: lit ? `${color}18` : 'rgba(15,23,42,0.5)',
            boxShadow: lit ? `0 0 16px ${color}33` : 'none',
          }}
        >
          <span style={{ color: lit ? color : 'rgba(148,163,184,0.5)' }}>
            {step.icon}
          </span>
          <span
            className="text-[10px] font-bold text-center"
            style={{ color: lit ? '#F1F5F9' : 'rgba(148,163,184,0.6)' }}
          >
            {step.label}
          </span>
        </motion.div>
        {index < INSTALL_STEPS.length - 1 && (
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={lit && s(stepIndex + 1) ? { opacity: 1, scaleX: 1 } : { opacity: 0, scaleX: 0 }}
            transition={{ duration: 0.4, ease: EASE }}
          >
            <motion.div
              initial={{ x: 0 }}
              animate={{ x: s(stepIndex + 1) ? 0 : 0 }}
              transition={{ duration: 0.3, ease: EASE }}
              className="flex flex-col items-center"
            >
              <ArrowRight className="h-4 w-4" style={{ color: s(stepIndex + 1) ? COLORS.sky : 'rgba(148,163,184,0.3)' }} />
            </motion.div>
          </motion.div>
        )}
      </React.Fragment>
    );
  };

  return (
    <div className={`w-full ${className}`}>
      <div className="grid grid-cols-2 gap-4">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={s(0) ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }}
          transition={{ duration: 0.5, ease: EASE }}
          className="rounded-2xl border border-sky-400/30 bg-sky-400/10 p-4"
        >
          <div className="mb-3 flex items-center gap-2">
            <Package className="h-5 w-5 text-sky-300" />
            <span className="text-sm font-black text-sky-200">① 安装阶段</span>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-1">
            {INSTALL_STEPS.map((step, i) => (
              <Step
                key={i}
                step={step}
                index={i}
                color={COLORS.sky}
                stepIndex={i}
              />
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={s(3) ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }}
          transition={{ duration: 0.5, ease: EASE }}
          className="rounded-2xl border border-teal-400/30 bg-teal-400/10 p-4"
        >
          <div className="mb-3 flex items-center gap-2">
            <Play className="h-5 w-5 text-teal-300" />
            <span className="text-sm font-black text-teal-200">② 运行阶段</span>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-1">
            {RUN_STEPS.map((step, i) => (
              <Step
                key={i}
                step={step}
                index={i}
                color={COLORS.teal}
                stepIndex={i + 3}
              />
            ))}
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={s(6) ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
        transition={{ duration: 0.5, ease: EASE }}
        className="mt-4 flex items-center justify-center gap-2"
      >
        <AlertTriangle className="h-4 w-4 text-amber-400" />
        <span
          className="rounded-full px-3 py-1 text-[11px] font-bold"
          style={{
            backgroundColor: 'rgba(251,191,36,0.14)',
            color: COLORS.amber,
            border: `1px solid ${COLORS.amber}66`,
          }}
        >
          装好了 ≠ 能运行 — 安装完成只是复制+注册，运行还需要加载内存和分配资源
        </span>
      </motion.div>
    </div>
  );
};