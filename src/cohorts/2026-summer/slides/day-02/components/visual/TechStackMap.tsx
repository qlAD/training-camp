'use client';

import React from 'react';
import { Code, Layers, Server, Terminal, Database, HardDrive, TrendingUp, GraduationCap, Building2 } from 'lucide-react';
import { motion } from 'motion/react';
import { useTimeline } from '../scene/TimelineScene';
import { COLORS, EASE } from '../scene/theme';

interface TechStackMapProps {
  at: number;
  className?: string;
}

interface TechBadge {
  label: string;
  icon: React.ReactNode;
  highlight?: boolean;
}

const LAYERS: { name: string; color: string; techs: TechBadge[] }[] = [
  {
    name: '前端',
    color: COLORS.sky,
    techs: [
      { label: 'HTML/CSS/JS', icon: <Code className="h-4 w-4" /> },
      { label: 'Vue3', icon: <Layers className="h-4 w-4" />, highlight: true },
      { label: 'React', icon: <Layers className="h-4 w-4" /> },
    ],
  },
  {
    name: '后端',
    color: COLORS.teal,
    techs: [
      { label: 'SpringBoot', icon: <Server className="h-4 w-4" />, highlight: true },
      { label: 'Node.js', icon: <Terminal className="h-4 w-4" /> },
    ],
  },
  {
    name: '数据库',
    color: COLORS.lime,
    techs: [
      { label: 'MySQL', icon: <Database className="h-4 w-4" />, highlight: true },
      { label: 'Redis', icon: <HardDrive className="h-4 w-4" /> },
    ],
  },
];

export const TechStackMap: React.FC<TechStackMapProps> = ({ at, className = '' }) => {
  const { active } = useTimeline();
  const s = (i: number) => active >= at + i;

  return (
    <div className={`w-full ${className}`}>
      <div className="flex flex-col gap-3">
        {LAYERS.map((layer, li) => {
          const layerStep = li * 2;
          const lit = s(layerStep);
          const isLast = li === LAYERS.length - 1;
          return (
            <React.Fragment key={layer.name}>
              <motion.div
                className="relative rounded-2xl border bg-slate-950/50 p-3"
                style={{
                  borderColor: lit ? `${layer.color}55` : 'rgba(148,163,184,0.18)',
                  backgroundColor: lit ? `${layer.color}08` : 'rgba(15,23,42,0.55)',
                  boxShadow: lit ? `0 0 24px ${layer.color}22` : 'none',
                }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: lit ? 1 : 0, y: lit ? 0 : 20 }}
                transition={{ duration: 0.5, ease: EASE }}
              >
                <div className="mb-2 flex items-center gap-2">
                  <div
                    className="h-2 w-2 rounded-full"
                    style={{
                      backgroundColor: lit ? layer.color : 'rgba(148,163,184,0.3)',
                      boxShadow: lit ? `0 0 8px ${layer.color}` : 'none',
                    }}
                  />
                  <span
                    className="text-xs font-black uppercase tracking-wider"
                    style={{ color: lit ? layer.color : 'rgba(148,163,184,0.6)' }}
                  >
                    {layer.name}
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {layer.techs.map((tech, ti) => {
                    const techLit = s(layerStep + 1 + ti);
                    const isHighlight = tech.highlight;
                    return (
                      <motion.div
                        key={tech.label}
                        className="flex items-center gap-1.5 rounded-full border px-3 py-1.5"
                        style={{
                          borderColor: techLit
                            ? isHighlight
                              ? `${COLORS.amber}99`
                              : `${layer.color}66`
                            : 'rgba(148,163,184,0.2)',
                          backgroundColor: techLit
                            ? isHighlight
                              ? `${COLORS.amber}18`
                              : `${layer.color}15`
                            : 'rgba(15,23,42,0.5)',
                          boxShadow: techLit
                            ? isHighlight
                              ? `0 0 16px ${COLORS.amber}44`
                              : `0 0 12px ${layer.color}33`
                            : 'none',
                        }}
                        initial={{ opacity: 0, scale: 0.85 }}
                        animate={{ opacity: techLit ? 1 : 0, scale: techLit ? 1 : 0.85 }}
                        transition={{ duration: 0.4, ease: EASE }}
                      >
                        <span
                          style={{
                            color: techLit
                              ? isHighlight
                                ? COLORS.amber
                                : layer.color
                              : 'rgba(148,163,184,0.5)',
                          }}
                        >
                          {tech.icon}
                        </span>
                        <span
                          className="text-[11px] font-bold"
                          style={{
                            color: techLit
                              ? isHighlight
                                ? '#FEF3C7'
                                : '#F1F5F9'
                              : 'rgba(148,163,184,0.6)',
                          }}
                        >
                          {tech.label}
                        </span>
                        {isHighlight && techLit && (
                          <motion.span
                            className="ml-0.5 font-mono text-[9px]"
                            style={{ color: COLORS.amber }}
                            animate={{ opacity: [0.5, 1, 0.5] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                          >
                            ★
                          </motion.span>
                        )}
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>

              {!isLast && (
                <motion.div
                  className="flex justify-center"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: s(layerStep + 2) ? 1 : 0 }}
                  transition={{ duration: 0.4 }}
                >
                  <div className="flex flex-col items-center gap-0.5">
                    <motion.div
                      className="h-3 w-[2px] rounded-full"
                      style={{ backgroundColor: COLORS.sky }}
                      animate={{ scaleY: [0.3, 1, 0.3] }}
                      transition={{ duration: 1.2, repeat: Infinity, ease: 'easeInOut' }}
                    />
                    <span className="font-mono text-[10px]" style={{ color: COLORS.sky }}>
                      ▼
                    </span>
                    <motion.div
                      className="h-3 w-[2px] rounded-full"
                      style={{ backgroundColor: COLORS.teal }}
                      animate={{ scaleY: [0.3, 1, 0.3] }}
                      transition={{ duration: 1.2, repeat: Infinity, ease: 'easeInOut', delay: 0.2 }}
                    />
                  </div>
                </motion.div>
              )}
            </React.Fragment>
          );
        })}

        <motion.div
          className="mt-1 rounded-xl border border-amber-400/30 bg-amber-400/10 px-3 py-2"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: s(6) ? 1 : 0, y: s(6) ? 0 : 10 }}
          transition={{ duration: 0.5, ease: EASE }}
        >
          <p className="text-center text-xs font-bold" style={{ color: COLORS.amber }}>
            ⭐ 国内企业最常见组合：Vue3 + SpringBoot + MySQL
          </p>
        </motion.div>

        <motion.div
          className="mt-3 rounded-xl border border-sky-400/20 bg-sky-400/5 p-3"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: s(7) ? 1 : 0, y: s(7) ? 0 : 10 }}
          transition={{ duration: 0.5, ease: EASE }}
        >
          <div className="flex items-center gap-2 mb-2">
            <TrendingUp className="h-4 w-4" style={{ color: COLORS.sky }} />
            <span className="text-xs font-bold" style={{ color: COLORS.sky }}>全栈成长路线图</span>
          </div>
          <div className="flex items-center gap-1">
            {['静态页', 'Vue/React', '后端框架', '数据库', '联调', '部署'].map((step, i) => (
              <React.Fragment key={step}>
                <span className="rounded bg-slate-800 px-1.5 py-0.5 text-[10px] text-slate-300">
                  {step}
                </span>
                {i < 5 && <span className="text-[10px]" style={{ color: COLORS.sky }}>→</span>}
              </React.Fragment>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="mt-2 grid grid-cols-2 gap-2"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: s(8) ? 1 : 0, y: s(8) ? 0 : 10 }}
          transition={{ duration: 0.5, ease: EASE }}
        >
          <div className="rounded-xl border border-indigo-400/20 bg-indigo-400/5 p-2">
            <div className="flex items-center gap-1.5 mb-1">
              <GraduationCap className="h-3 w-3 text-indigo-300" />
              <span className="text-[10px] font-bold text-indigo-300">高校</span>
            </div>
            <p className="text-[9px] text-slate-400">重原理 · 内功心法</p>
          </div>
          <div className="rounded-xl border border-rose-400/20 bg-rose-400/5 p-2">
            <div className="flex items-center gap-1.5 mb-1">
              <Building2 className="h-3 w-3 text-rose-300" />
              <span className="text-[10px] font-bold text-rose-300">企业</span>
            </div>
            <p className="text-[9px] text-slate-400">重工程 · 招式交付</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
